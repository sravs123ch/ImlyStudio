// import React from 'react';
// // import ProductPage from './components/ProductsPage/ProductPage';
// import Navigation from './components/Navigation/Navigation';
// import Layout from './components/Layout/Layout';
// import AddProduct from './components/Addproduct/AddProduct';
// import './index.css';
// import {Routes, Route} from 'react-router-dom'

// function App() {
//   return (
//     <div className="App">
//       <Navigation/>
//       {/* <ProductPage /> */}
//       <Layout>
//         <AddProduct/>
//       </Layout>
//     </div>
//   );
// }

// export default App;



// import React from 'react';
// import {  Routes, Route } from 'react-router-dom';
// import Navigation from './components/Navigation/Navigation';
// import AddProduct from './components/Addproduct/AddProduct';
// import ProductPage from './components/ProductsPage/ProductPage';
// import './index.css';
// import Overview from './components/Overview/Overview';

// function App() {
//   return (
//     <div className="App">
//         <Navigation />
//           <Routes>
//             <Route path="/product" element={<ProductPage />} />
//             <Route path="/" element={<AddProduct />} />
//             <Route path="/overview" element={<Overview />} />

//             {/* Add more routes as needed */}
//           </Routes>
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Navigation from './components/Navigation/Navigation';
// import AddProduct from './components/Addproduct/AddProduct';
// import ProductPage from './components/ProductsPage/ProductPage';
// import './index.css';
// import Overview from './components/Overview/Overview';
// import User from './components/User/User';
// import Dashboard from './components/Dashboard/Dashboard';
// import Login from './components/Login/Login';

// function App() {
//   return (
//     <>    <Routes>
//     <Route path="/" element={<Login/>} />
//     </Routes>
//     <div className="App flex flex-col min-h-screen">
       

//       <Navigation />
//       <main className="flex-grow p-4">
//         <Routes>
//           <Route path="/product" element={<ProductPage />} />
//           <Route path="/products" element={<AddProduct />} />
//           <Route path="/overview" element={<Overview />} />
//           <Route path="/user" element={<User />} />
//           <Route path="/dashboard" element={<Dashboard />} />



//         </Routes>
//       </main>
//     </div>
//     </>

//   );
// }

// export default App;


import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import AddProduct from './components/Addproduct/AddProduct';
import ProductPage from './components/ProductsPage/ProductPage';
import './index.css';
import User from './components/User/User';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import AddEditProduct from './components/AddEditProduct/AddEditProduct';
import Orders from './components/Orders/Orders';
import AddOrders from './components/Orders/AddOrders';
import Stores from './components/Stores/Stores'
import Reports from './components/Reports/Reports';
import Payments from './components/Payments/Payments';
import Customer from './components/Customer/Customer';
import UserRole from './components/User/UserRole';
import Userform from './components/User/Userform';
import Storeform from './components/Stores/Storeform';
import { UserProvider } from './Context/userContext';
import {StoreProvider} from './Context/storeContext';

function App() {
  const location = useLocation();
  const showNavigation = location.pathname !== '/';

  return (
    <div className="App flex flex-col min-h-screen">
      {showNavigation && <Navigation />}
      <main className="flex-grow p-0gi bg-gray-100">
        <UserProvider>
          <StoreProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/products" element={<AddProduct />} />

          {/* <Route path="/user" element={  <UserProvider> <User /> </UserProvider>} /> */}

          <Route path="/user" element={  <User />} />
          <Route path="/Customer" element={<Customer />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-product" element={<AddEditProduct />} />
          <Route path="/AddOrders" element={<AddOrders />} />
          <Route path="/Stores" element={<Stores/>} />
          <Route path="/Reports" element={<Reports/>} />
          <Route path="/Payments" element={<Payments/>} />
          <Route path="/User-roleform" element={<UserRole/>} />

          <Route path="/Userform" element={<Userform/>} />
          <Route path="/Storeform" element={<Storeform/>} />
        </Routes>
        </StoreProvider>
          </UserProvider>
      </main>
    </div>
  );
}

export default App;



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate, useLocation } from "react-router-dom";

// function Userform() {
//   const location = useLocation();
//   const navigate = useNavigate();

  // Initialize form data with default values or from location state
  // const [formData, setFormData] = useState(location.state?.userDetails || {
  //   TenantID: 1,
  //   FirstName: "",
  //   LastName: "",
  //   Email: "",
  //   Password: "",
  //   PhoneNumber: "",
  //   Gender: "",
  //   addressLine1: "",
  //   addressLine2: "",
  //   city: "",
  //   state: "",
  //   zipCode: "",
  //   roleId: "",
  //   profileImg: "",
  //   comments: "",
  // });

//   const { userDetails } = location.state || {}; // Extract userDetails from the state

//   const [formData, setFormData] = useState({
//     TenantID: userDetails?.TenantID || 1,
//     FirstName: userDetails?.FirstName || "",
//     LastName: userDetails?.LastName || "",
//     Email: userDetails?.Email || "",
//     Password: "", // keep empty for security reasons
//     PhoneNumber: userDetails?.PhoneNumber || "",
//     Gender: userDetails?.Gender || "",
//   });

//   // Populate formData with userDetails if available
//   useEffect(() => {
//     if (location.state?.userDetails) {
//       setFormData(location.state.userDetails);
//     }
//   }, [location.state?.userDetails]);

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle image upload
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setFormData({
//           ...formData,
//           profileImg: reader.result,
//         });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       console.log("Submitted details:", formData);

//       // Use correct endpoint and payload based on your API
//       const response = await axios.post(
//         "https://imlystudios-backend-mqg4.onrender.com/api/users/createUser",
//         formData
//       );
//       console.log("Submission successful:", response.data);
//       navigate("/user"); // Navigate to the "Users" page after successful submission
//     } catch (error) {
//       console.error("Submission failed:", error);
//     }
//   };

//   const handleCancel = () => {
//     navigate("/user"); // Navigate to the "Users" page on cancel
//   };
//   // const { userDetails } = location.state || {};
//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//         <form onSubmit={handleFormSubmit}>
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-xl font-semibold mb-4 px-24">Users</h2>
//           </div>
//           <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 px-16 md:px-24">
//             {/* First Name */}
//             <div className="flex items-center">
//               <div className="w-full">
//                 <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
//                   First Name
//                 </label>
//                 <input
//                   type="text"
//                   name="FirstName"
//                   value={formData.FirstName || ""}
//                   onChange={handleFormChange}
//                   required
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//             </div>  
            
//             {/* Address Line 1 */}
//             <div className="flex items-center">
//               <div className="w-full">
//                 <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700">
//                   Address Line 1
//                 </label>
//                 <input
//                   type="text"
//                   name="addressLine1"
//                   value={formData.addressLine1 || ""}
//                   onChange={handleFormChange}
//                   required
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//             </div>

//             {/* Last Name */}
//             <div>
//               <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 name="LastName"
//                 value={formData.LastName || ""}
//                 onChange={handleFormChange}
//                 required
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>

//             {/* Address Line 2 */}
//             <div>
//               <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700">
//                 Address Line 2
//               </label>
//               <input
//                 type="text"
//                 name="addressLine2"
//                 value={formData.addressLine2 || ""}
//                 onChange={handleFormChange}
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="Email"
//                 value={formData.Email || ""}
//                 onChange={handleFormChange}
//                 required
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <input
//                 id="Password"
//                 name="Password"
//                 type="password"
//                 value={formData.Password || ""}
//                 onChange={handleFormChange}
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>

//             {/* City */}
//             <div>
//               <label htmlFor="city" className="block text-sm font-medium text-gray-700">
//                 City
//               </label>
//               <input
//                 type="text"
//                 name="city"
//                 value={formData.city || ""}
//                 onChange={handleFormChange}
//                 required
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>

//             {/* Phone Number */}
//             <div>
//               <label htmlFor="PhoneNumber" className="block text-sm font-medium text-gray-700">
//                 Phone Number
//               </label>
//               <input
//                 type="text"
//                 name="PhoneNumber"
//                 value={formData.PhoneNumber || ""}
//                 onChange={handleFormChange}
//                 required
//                 pattern="\d{10}"
//                 title="Phone Number should be 10 digits."
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>

//             {/* State */}
//             <div>
//               <label htmlFor="state" className="block text-sm font-medium text-gray-700">
//                 State
//               </label>
//               <input
//                 type="text"
//                 name="state"
//                 value={formData.state || ""}
//                 onChange={handleFormChange}
//                 required
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>

//             {/* Gender */}
//             <div>
//               <label htmlFor="Gender" className="block text-sm font-medium text-gray-700">
//                 Gender
//               </label>
//               <select
//                 name="Gender"
//                 value={formData.Gender || ""}
//                 onChange={handleFormChange}
//                 required
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 sm:text-sm"
//               >
//                 <option value="">Select Gender</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//               </select>
//             </div>

//             {/* Zip Code */}
//             <div>
//               <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
//                 Zip Code
//               </label>
//               <input
//                 type="text"
//                 name="zipCode"
//                 value={formData.zipCode || ""}
//                 onChange={handleFormChange}
//                 required
//                 pattern="\d{5}"
//                 title="Zip Code should be 5 digits."
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>

//             {/* Role ID */}
//             <div>
//               <label htmlFor="roleId" className="block text-sm font-medium text-gray-700">
//                 Role ID
//               </label>
//               <input
//                 type="text"
//                 name="roleId"
//                 value={formData.roleId || ""}
//                 onChange={handleFormChange}
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>

//             {/* Profile Image */}
//             <div>
//               <label htmlFor="profileImg" className="block text-sm font-medium text-gray-700">
//                 Profile Image
//               </label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageChange}
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm"
//               />
//               {formData.profileImg && (
//                 <img
//                   src={formData.profileImg}
//                   alt="Profile Preview"
//                   className="mt-4 w-32 h-32 object-cover rounded-md"
//                 />
//               )}
//             </div>

//             {/* Comments */}
//             <div>
//               <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
//                 Comments
//               </label>
//               <textarea
//                 name="comments"
//                 value={formData.comments || ""}
//                 onChange={handleFormChange}
//                 rows="3"
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>
//           </div>

//           <div className="flex justify-end mt-6">
//             <button
//               type="button"
//               onClick={handleCancel}
//               className="inline-flex items-center px-4 py-2 bg-gray-300 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="ml-3 inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Userform;
