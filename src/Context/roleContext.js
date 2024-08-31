import React, { createContext, useState } from 'react';

// Create the context
export const RoleContext = createContext();

// Provider component
export const RoleProvider = ({ children }) => {
  const [roleDetails, setRoleDetails] = useState(null);

  // Function to fetch customer data by ID
  const getRoleById = async (roleId) => {
    try {
      const response = await fetch(`https://imlystudios-backend-mqg4.onrender.com/api/getRolebyId/${roleId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch role details');
      }
      const data = await response.json();
      setRoleDetails(data);  // Set fetched data into the context state
      return data;
    } catch (error) {
      console.error('Error fetching role details:', error);
      throw error;
    }
  };

  return (
    <RoleContext.Provider value={{ roleDetails, setRoleDetails, getRoleById }}>
      {children}
    </RoleContext.Provider>
  );
};