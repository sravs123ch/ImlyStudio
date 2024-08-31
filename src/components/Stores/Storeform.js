// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';

// export default function Storeform() {

// // // const location = useLocation();
// // const [formData, setFormData] = useState(location.state?.userDetails || {});
// const navigate = useNavigate();
// const [formData, setFormData] = useState({
//   TenantID: 1,
//   FirstName: "",
//   LastName: "",
//   Email: "",
//   Password: "", 
//   PhoneNumber: "", 
//   Gender: "",
// });

// // // Handle form changes
// const handleFormChange = (e) => {
//   const { name, value } = e.target;
//   setFormData({
//     ...formData,
//     [name]: value,
//   });
// };

// const handleFormSubmit = async (event) => {
//   event.preventDefault();
//   let valid = true;
//   let newErrors = {};
//   if (valid) {
//     try {
//       console.log("Registered details:", formData);
//       const response = await axios.post(
//         "https://imlystudios-backend-mqg4.onrender.com/api/stores/createStore ",
//         {
//           TenantID: 1,
    
//         StoreName:formData.StoreName,
//           Email: formData.Email,
//           Password: formData.Password,
//           PhoneNumber: formData.PhoneNumber,
//           CreatedBy: "admin",
//           UpdatedBy: "admin",
//         }
//       );
//       console.log("Registration successful:", response.data);
//       navigate("/stores"); // Navigate to the "Users" page after successful submission
//     } catch (error) {
//       console.error("Registration failed:", error);
//     }
//   } else {
//     console.log("Form validation failed");
//   }
// };
// // Handle cancel button click
// const handleCancel = () => {
//   // setFormData(null);
//   navigate("/stores"); 
// };

//   return (
    
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//         <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
       
//              <h2 className="text-xl font-semibold mb-4 px-24">Stores</h2>
//           <form onSubmit={handleFormSubmit}>
//             <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 px-16 md:px-24">
//               <div className="flex flex-col">
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   value={formData?.name || ""}
//                   onChange={handleFormChange}
//                   className="mt-1 p-2 border border-gray-400 rounded-md"
//                   required
//                 />
//               </div>

//                {/* Address Line 1 */}
//                <div>
//               <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700">
//                 Address Line 1
//               </label>
//               <input
//                 type="text"
//                 name="addressLine1"
//                 value={formData?.addressLine1 || ""}
//                 onChange={handleFormChange}
//                 required
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4"
//               />
//             </div>
//               <div className="flex flex-col">
//                 <label htmlFor="Email" className="text-sm font-medium">Email:</label>
//                 <input
//                   id="Email"
//                   name="Email"
//                   type="Email"
//                   value={formData?.Email || ""}
//                   onChange={handleFormChange}
//                   className="mt-1 p-2 border border-gray-400 rounded-md"
//                   required
//                 />
//               </div>

//                 {/* Address Line 2 */}
//              <div>
//               <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700">
//                 Address Line 2
//               </label>
//               <input
//                 type="text"
//                 name="addressLine2"
//                 value={formData?.addressLine2 || ""}
//                 onChange={handleFormChange}
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4"
//               />
//             </div>
//               <div className="flex flex-col">
//                 <label htmlFor="phone" className="text-sm font-medium">Phone:</label>
//                 <input
//                   id="phone"
//                   name="role"
//                   type="text"
//                   value={formData?.role || ""}
//                   onChange={handleFormChange}
//                   className="mt-1 p-2 border border-gray-400 rounded-md"
//                   required
//                 />
//               </div>
//                {/* City */}
//             <div>
//               <label htmlFor="city" className="block text-sm font-medium text-gray-700">
//                 City
//               </label>
//               <input
//                 type="text"
//                 name="city"
//                 value={formData?.city || ""}
//                 onChange={handleFormChange}
//                 required
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4"
//               />
//             </div>

//             <div>
//   <label htmlFor="storeName" className="block text-sm font-medium">
//     Stores
//   </label>
//   <select
//     name="StoreName"
//     value={formData.StoreName}
//     onChange={handleFormChange}
//     required
//     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4"
//   >
//     <option value="">Select Store Name</option>
//     <option
//       value="ABC Mart"
//       // className="bg-blue-100 text-blue-800 shadow-sm"
//     >
//       ABC Mart
//     </option>
//     <option
//       value="XYZ Store"
//       // className="bg-yellow-100 text-yellow-800 shadow-sm"
//     >
//       XYZ Store
//     </option>
//     <option
//       value="MegaShop"
//       // className="bg-red-100 text-red-800 shadow-sm"
//     >
//       MegaShop
//     </option>
//     <option
//       value="SuperMart"
//       // className="bg-purple-100 text-purple-800 shadow-sm"
//     >
//       SuperMart
//     </option>
//     <option
//       value="ElectroWorld"
//       // className="bg-green-100 text-green-800 shadow-sm"
//     >
//       ElectroWorld
//     </option>
//   </select>
// </div>
 

//              {/* State */}
//              <div>
//               <label htmlFor="state" className="block text-sm font-medium text-gray-700">
//                 State
//               </label>
//               <input
//                 type="text"
//                 name="state"
//                 value={formData?.state || ""}
//                 onChange={handleFormChange}
//                 required
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4"
//               />
//             </div>
//             <div></div>
          
//   <div>
//     <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
//       Zip Code
//     </label>
//     <input
//       type="text"
//       name="zipCode"
//       value={formData?.zipCode || ""}
//       onChange={handleFormChange}
//       required
//       pattern="\d{5,6}"
//       title="Zip Code should be 5 or 6 digits."
//       className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4"
//     />
//   </div>


//             </div>
//             <div className="mt-6 flex justify-end gap-4">
//     <button
//       type="submit"
//       className="inline-flex justify-center rounded-md border border-transparent bg-custom-darkblue py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-custom-lightblue"
//     >
//       Save
//     </button>
//     <button
//       type="button"
//       onClick={handleCancel}
//       className="inline-flex justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-red-200"
//     >
//       Cancel
//     </button>
//   </div>
//           </form>
//         </div>

//     </div>
//   );
// }


import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { StoreContext } from '../../Context/storeContext';

function Storeform() {
  const navigate = useNavigate();
  const location = useLocation();
  const { storeDetails } = useContext(StoreContext);

  // Determine if in edit mode (only if store data exists)
  const isEditMode = Boolean(location.state?.storeDetails?.store || storeDetails?.store);

  const [formData, setFormData] = useState(location.state?.storeDetails || {
    TenantID: 1,   // Set default value for TenantID
    StoreID: null, // Set StoreID as null initially
    StoreName: "",
    Email: "",
    Password: "",  // Added Password field to formData
    Phone: "",
    Address: "",   // Include Address field
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (isEditMode) {
      const store = location.state?.storeDetails?.store || storeDetails?.store;
      setFormData({
        TenantID: store.TenantID || 1,
        StoreID: store.StoreID || null,
        StoreName: store.StoreName || "",
        Email: store.Email || "",
        Phone: store.Phone || "",
        Password: "",  // Clear password if in edit mode
        Address: store.Address || "",
      });
    }
  }, [isEditMode, location.state?.storeDetails?.store, storeDetails?.store]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("Submitted details:", formData);

      const response = await axios.post(
        "https://imlystudios-backend-mqg4.onrender.com/api/stores/createStore",
        formData
      );
      console.log("Submission successful:", response.data);
      navigate("/Stores");
    } catch (error) {
      console.error("Submission failed:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
        setError("Failed to create store: " + error.response.data.message);
      } else if (error.request) {
        console.error("No response received:", error.request);
        setError("No response received from server.");
      } else {
        console.error("Error in setting up request:", error.message);
        setError("Error: " + error.message);
      }
    }
  };

  const handleUpdateSubmit = async (event) => {
    event.preventDefault();
    try {
      const storeId = formData.StoreID;
  
      // Log formData to ensure StoreID is present
      console.log("FormData before submission:", formData);
  
      if (!storeId) {
        console.error("Store ID is missing in formData");
        setError("Store ID is missing.");
        return;
      }
  
      console.log("Submitted details for update:", formData);
  
      const response = await axios.put(
        `https://imlystudios-backend-mqg4.onrender.com/api/stores/updateStore/${storeId}`,
        formData
      );
      console.log("Update successful:", response.data);
  
      navigate("/Stores");
    } catch (error) {
      console.error("Update failed:", error);
      if (error.response) {
        console.error("Update failed with response error:", error.response.data);
        setError("Update failed: " + error.response.data.message);
      } else if (error.request) {
        console.error("Update failed with no response received:", error.request);
        setError("No response received from server.");
      } else {
        console.error("Update failed with error:", error.message);
        setError("Error: " + error.message);
      }
    }
  };

  const handleCancel = () => {
    navigate("/Stores");
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={isEditMode ? handleUpdateSubmit : handleFormSubmit}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold mb-4 px-24">Stores</h2>
          </div>
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 px-16 md:px-24">
            {/* Store Name */}
            <div className="flex items-center">
              <div className="w-full">
                <label htmlFor="StoreName" className="block text-sm font-medium text-gray-700">
                  Store Name
                </label>
                <input
                  type="text"
                  id="StoreName"
                  name="StoreName"
                  value={formData.StoreName || ""}
                  onChange={handleFormChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="Email"
                name="Email"
                value={formData.Email || ""}
                onChange={handleFormChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="Password"
                name="Password"
                type="password"
                value={formData.Password || ""}
                onChange={handleFormChange}
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="Phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                id="Phone"
                name="Phone"
                value={formData.Phone || ""}
                onChange={handleFormChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* Address */}
            <div>
              <label htmlFor="Address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                id="Address"
                name="Address"
                value={formData.Address || ""}
                onChange={handleFormChange}
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-end gap-4">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-custom-darkblue py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-custom-lightblue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="inline-flex justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-red-200"
            >
              Cancel
            </button>
          </div>

          {/* Error Message */}
          {error && <p className="mt-4 text-red-600">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Storeform;
