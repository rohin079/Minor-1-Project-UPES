// ---------------------------Importing Files--------------------------------------------

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const BearerStrategy = require("passport-azure-ad").BearerStrategy;

// ---------------------------Creating Express App ----------------------------------------

const app = express();

//--------------------------Allowing CORS---------------------------------------------------

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//--------------------------------msal config----------------------------------------------

const msal = require("@azure/msal-node");

const config = {
  auth: {
    clientId: "afebdae5-b211-4db7-895a-5dbc3e21b206",
    authority:
      "https://login.microsoftonline.com/91cc1fb6-1275-4acf-b3ea-c213ec16257b",
    clientSecret: "Xri8Q~HUJHWxgjtThUIh6YWdN09uKUmQcQBgRb~P",
  },
};

const pca = new msal.ConfidentialClientApplication(config);

const authCodeUrlParameters = {
  scopes: ["user.read"], // Adjust the scope based on your requirements
  redirectUri: "http://localhost:3000/", // Update this with your React app's redirect URI
};

app.get("/", (req, res) => {
  // Redirect the user to the Azure AD login page
  const authUrl = pca.getAuthCodeUrl(authCodeUrlParameters);
  res.redirect(authUrl);
});

app.get("/auth-callback", async (req, res) => {
  try {
    const response = await pca.acquireTokenByCode(tokenRequest);
    console.log("Token acquired:", response.accessToken);
    // Save the token or perform further actions here
    res.redirect("/home"); // Redirect to the homepage after successful login
  } catch (error) {
    console.log("Error during token acquisition:", error);
    res.status(500).send("Error during token acquisition.");
  }
});

// ---------------------------Connecting With MongoDB--------------------------------------

const MONGODB_URI = process.env.MONGO_URI;
const MAX_RETRY_ATTEMPTS = 5;
const RETRY_INTERVAL_MS = 5000;

const connectWithRetry = (retryCount) => {
  if (!retryCount) retryCount = 0;

  if (retryCount >= MAX_RETRY_ATTEMPTS) {
    console.error("MongoDB connection failed after maximum retry attempts.");
    process.exit(1);
  }

  console.log("Attempting to connect to MongoDB...");
  mongoose
    .connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
      console.log(
        `Retrying MongoDB connection in ${RETRY_INTERVAL_MS / 1000} seconds...`
      );

      setTimeout(() => {
        connectWithRetry(retryCount + 1);
      }, RETRY_INTERVAL_MS);
    });
};

if (!MONGODB_URI) {
  console.error("MongoDB connection URI not found in the environment.");
  process.exit(1);
}

connectWithRetry();

//-----------------------------Feedback Page End Point-----------------------------------------

app.use("/feedback", require("./Routes/Feedback"));

//----------------------------------msal passport config ----------------------------------

const options = {
  identityMetadata: `https://login.microsoftonline.com/${"91cc1fb6-1275-4acf-b3ea-c213ec16257b"}/v2.0/.well-known/openid-configuration`,
  clientID: "api://afebdae5-b211-4db7-895a-5dbc3e21b206",
  audience: "api://afebdae5-b211-4db7-895a-5dbc3e21b206",
  validateIssuer: true,
  passReqToCallback: false,
};

const bearerStrategy = new BearerStrategy(options, (token, done) => {
  // You can add additional token validation logic here if needed
  done(null, token, token);
});

passport.use(bearerStrategy);

// Add passport middleware
app.use(passport.initialize());

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  // Add other fields as needed for your user data
});
const User = mongoose.model("User", userSchema);

// Implement authentication middleware to protect the /api/user/:id endpoint
app.use(
  "/api/user/:id",
  passport.authenticate("oauth-bearer", { session: false })
);

app.get("/api/user/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    // Fetch the user's details from the database based on the user ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return the user's details as a JSON response
    res.json({
      name: user.name,
      email: user.email /* Add other user details as needed */,
    });
  } catch (error) {
    console.error("Error fetching user details:", error);
    res.sendStatus(500);
  }
});

// ------------------------------Run-Server--------------------------------------------

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

//----------------------------------------------------------------------------------------------
