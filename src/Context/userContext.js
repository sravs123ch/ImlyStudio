// import { createContext, useContext, useState } from 'react';

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [formData, setFormData] = useState(null);

//   return (
//     <UserContext.Provider value={{ formData, setFormData }}>
//       {children}
//     </UserContext.Provider>
//   );
// };



import { createContext, useContext, useState } from 'react';

// Create the context
export const UseContext = createContext();

// Provider component
export const UserProvider = ({ children }) => {
  const [formData, setFormData] = useState(null);

  // Function to fetch user data by ID
  const getUserById = async (userId) => {
    try {
      const response = await fetch(`https://imlystudios-backend-mqg4.onrender.com/api/users/getUserById/${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user details');
      }
      const data = await response.json();
      setFormData(data);  // Set fetched data into the context state
      return data;
    } catch (error) {
      console.error('Error fetching user details:', error);
      throw error;
    }
  };

  return (
    <UseContext.Provider value={{ formData, setFormData, getUserById }}>
      {children}
    </UseContext.Provider>
  );
};


