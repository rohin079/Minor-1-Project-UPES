// ---------------------------Importing Files--------------------------------------------
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// ---------------------------Creating Express App ----------------------------------------

const app = express();

// ---------------------------Connecting With MongoDB--------------------------------------

const MONGODB_URI = process.env.MONGO_URI;
const MAX_RETRY_ATTEMPTS = 5;
const RETRY_INTERVAL_MS = 5000;

const connectWithRetry = (retryCount) => {
  if (!retryCount) retryCount = 0;

  if (retryCount >= MAX_RETRY_ATTEMPTS) {
    console.error('MongoDB connection failed after maximum retry attempts.');
    process.exit(1);
  }

  console.log('Attempting to connect to MongoDB...');
  mongoose
    .connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.error('MongoDB connection error:', err);
      console.log(`Retrying MongoDB connection in ${RETRY_INTERVAL_MS / 1000} seconds...`);

      setTimeout(() => {
        connectWithRetry(retryCount + 1);
      }, RETRY_INTERVAL_MS);
    });
};

if (!MONGODB_URI) {
  console.error('MongoDB connection URI not found in the environment.');
  process.exit(1);
}

connectWithRetry();

// ------------------------------Run-Server--------------------------------------------

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

//------------------------------------------------------------------------------------