import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams hook
import { useMsal } from "@azure/msal-react";

const UserPage = () => {
  const { accounts } = useMsal();
  const { id } = useParams(); // Get the user's ID from the URL

  // State to store the user's details
  const [userDetails, setUserDetails] = useState({ name: "", email: "" });

  useEffect(() => {
    // Fetch the user's details from the backend using the user's ID
    const fetchUserDetails = async () => {
      try {
        // Replace 'your_backend_endpoint' with the actual backend endpoint that fetches the user details
        const response = await fetch(`/api/user/${id}`, {
          headers: {
            Authorization: `Bearer ${accounts[0].idToken.rawIdToken}`, // Pass the access token as a bearer token in the request header
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user details.');
        }

        const data = await response.json();
        // Update the state with the user's details
        setUserDetails({
          name: data.name,
          email: data.email,
          // Add other user details as needed
        });
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    if (id && accounts.length > 0) {
      // Fetch the user's details if the user ID is available and the user is logged in
      fetchUserDetails();
    }
  }, [id, accounts]);

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {userDetails.name}</p>
      <p>Email: {userDetails.email}</p>
      {/* Add other user details as needed */}
    </div>
  );
};

export default UserPage;