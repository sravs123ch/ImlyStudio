
// import React, { useState } from "react";
// import * as XLSX from "xlsx";
// import { FaTable, FaEdit, FaTrash } from "react-icons/fa";
// import { FaPlus } from "react-icons/fa";
// import p1 from "../../assests/profile/p1.jpeg";
// import p2 from "../../assests/profile/p2.jpeg";
// import p3 from "../../assests/profile/p3.jpeg";
// import profile from "../../assests/profile/profile.jpeg";

// const initialPeople = [
//   {
//     name: "Jane Smith",
//     title: "Chennai",
//     email: "jane.smith@example.com",
//     role: "7702253548",
//     gender: "Male",
//     profileImg: p1,
//     addressLine1: "123 Main St",
//     addressLine2: "Apt 4B",
//     city: "Chennai",
//     state: "Tamil Nadu",
//     country: "India",
//   },
//   {
//     name: "Alice Johnson",
//     title: "Hyderabad",
//     email: "alice.johnson@example.com",
//     role: "7702253549",
//     gender: "Female",
//     profileImg: p2,
//     addressLine1: "456 Oak St",
//     addressLine2: "Suite 12",
//     city: "Hyderabad",
//     state: "Telangana",
//     country: "India",
//   },
//   {
//     name: "Robert Brown",
//     title: "Mumbai",
//     email: "robert.brown@example.com",
//     role: "7702253550",
//     gender: "Female",
//     profileImg: p3,
//     addressLine1: "789 Pine St",
//     addressLine2: "",
//     city: "Mumbai",
//     state: "Maharashtra",
//     country: "India",
//   },
//   {
//     name: "Michael Davis",
//     title: "Delhi",
//     email: "michael.davis@example.com",
//     role: "7702253551",
//     gender: "Male",
//     addressLine1: "101 Maple St",
//     addressLine2: "Apt 3C",
//     city: "Delhi",
//     state: "Delhi",
//     country: "India",
//   },
// ];

// export default function User() {
//   const [people, setPeople] = useState(initialPeople);
//   const [formData, setFormData] = useState({
//     name: "",
//     title: "",
//     email: "",
//     role: "",
//     gender: "",
//     profileImg: "",
//   });
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterGender, setFilterGender] = useState("");


//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };
  
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

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (editingIndex !== null) {
//       const updatedPeople = [...people];
//       updatedPeople[editingIndex] = formData;
//       setPeople(updatedPeople);
//       setEditingIndex(null);
//     } else {
//       setPeople([...people, formData]);
//     }
//     setFormData({
//       name: "",
//       title: "",
//       email: "",
//       role: "",
//       gender: "",
//       profileImg: "",
//     });
//     setIsFormVisible(false); // Hide the form after submission
//   };



//   const handleCancel = () => {
//     setFormData({
//       name: "",
//       title: "",
//       email: "",
//       role: "",
//       gender: "",
//       profileImg: "",
//     });
//     setEditingIndex(null);
//     setIsFormVisible(false); // Hide the form on cancel
//   };

//   const filteredPeople = people.filter(
//     (person) =>
//       person.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//       person.email.toLowerCase().includes(searchTerm.toLowerCase()) &&
//       (filterGender ? person.gender === filterGender : true)
//   );

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       {/* Only show the form if isFormVisible is true */}
//       <div>
//         {isFormVisible ? (
          
//           <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//             <form onSubmit={handleFormSubmit}>
//               <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleFormChange}
//                     required
//                     pattern="[A-Za-z\s]+"
//                     title="Name should only contain letters and spaces."
//                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleFormChange}
//                     required
//                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="role"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Mobile No
//                   </label>
//                   <input
//                     type="text"
//                     name="role"
//                     value={formData.role}
//                     onChange={handleFormChange}
//                     required
//                     pattern="[0-9]{10}"
//                     title="Mobile number should be 10 digits."
//                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="addressLine1"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Address Line 1
//                   </label>
//                   <input
//                     type="text"
//                     name="addressLine1"
//                     value={formData.addressLine1}
//                     onChange={handleFormChange}
//                     required
//                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="addressLine2"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Address Line 2
//                   </label>
//                   <input
//                     type="text"
//                     name="addressLine2"
//                     value={formData.addressLine2}
//                     onChange={handleFormChange}
//                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="city"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     City
//                   </label>
//                   <input
//                     type="text"
//                     name="city"
//                     value={formData.city}
//                     onChange={handleFormChange}
//                     required
//                     pattern="[A-Za-z\s]+"
//                     title="City should only contain letters and spaces."
//                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="state"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     State
//                   </label>
//                   <input
//                     type="text"
//                     name="state"
//                     value={formData.state}
//                     onChange={handleFormChange}
//                     required
//                     pattern="[A-Za-z\s]+"
//                     title="State should only contain letters and spaces."
//                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="country"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Country
//                   </label>
//                   <input
//                     type="text"
//                     name="country"
//                     value={formData.country}
//                     onChange={handleFormChange}
//                     required
//                     pattern="[A-Za-z\s]+"
//                     title="Country should only contain letters and spaces."
//                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="gender" className="block text-sm font-medium">
//                     Gender
//                   </label>
//                   <select
//                     name="gender"
//                     value={formData.gender}
//                     onChange={handleFormChange}
//                     required
//                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 sm:text-sm"
//                   >
//                     <option value="">Select Gender</option>
//                     <option
//                       value="Male"
//                       className="bg-green-100 text-green-800 shadow-sm"
//                     >
//                       Male
//                     </option>
//                     <option
//                       value="Female"
//                       className="bg-pink-100 text-pink-800 shadow-sm"
//                     >
//                       Female
//                     </option>
//                   </select>
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="profileImg"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Profile Image
//                   </label>
//                   <input
//                     type="file"
//                     name="profileImg"
//                     accept="image/*"
//                     onChange={handleImageChange}
//                     className="mt-1 block w-full text-sm text-gray-500"
//                   />
//                   {formData.profileImg && (
//                     <img
//                       src={formData.profileImg}
//                       alt="Profile Preview"
//                       className="mt-2 h-16 w-16 rounded-full"
//                     />
//                   )}
//                 </div>
//               </div>

//               <div className="mt-6 flex justify-end gap-2">
//                 <button
//                   type="submit"
//                   className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                 >
//                   {editingIndex !== null ? "Update" : "Add"} Customer
//                 </button>
//                 <button
//                   type="button"
//                   className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                   onClick={handleCancel}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         ) : (
//           // Only show the table if isFormVisible is false
//           <div className="mt-6">
       
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";

// const initialPeople = [
//   {
//     name: "Jane Smith",
//     title: "Chennai",
//     email: "jane.smith@example.com",
//     role: "7702253548",
//     gender: "Male",
//     profileImg: "",
//     addressLine1: "123 Main St",
//     addressLine2: "Apt 4B",
//     city: "Chennai",
//     state: "Tamil Nadu",
//     country: "India",
//   },
//   // Add other initial people here if needed
// ];

// export default function User() {
//   const [people, setPeople] = useState(initialPeople);
//   const [formData, setFormData] = useState({
//     name: "",
//     title: "",
//     email: "",
//     role: "",
//     gender: "",
//     profileImg: "",
//     addressLine1: "",
//     addressLine2: "",
//     city: "",
//     state: "",
//     country: "",
//   });
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const [editingIndex, setEditingIndex] = useState(null);

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

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

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (editingIndex !== null) {
//       const updatedPeople = [...people];
//       updatedPeople[editingIndex] = formData;
//       setPeople(updatedPeople);
//       setEditingIndex(null);
//     } else {
//       setPeople([...people, formData]);
//     }
//     setFormData({
//       name: "",
//       title: "",
//       email: "",
//       role: "",
//       gender: "",
//       profileImg: "",
//       addressLine1: "",
//       addressLine2: "",
//       city: "",
//       state: "",
//       country: "",
//     });
//     setIsFormVisible(false); // Hide the form after submission
//   };

//   const handleCancel = () => {
//     setFormData({
//       name: "",
//       title: "",
//       email: "",
//       role: "",
//       gender: "",
//       profileImg: "",
//       addressLine1: "",
//       addressLine2: "",
//       city: "",
//       state: "",
//       country: "",
//     });
//     setEditingIndex(null);
//     setIsFormVisible(false); // Hide the form on cancel
//   };

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       {/* Only show the form if isFormVisible is true */}
//       <div>
//         {isFormVisible && (
//           <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//             <form onSubmit={handleFormSubmit}>
//               <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
//                 {/* Form Fields */}
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleFormChange}
//                     required
//                     pattern="[A-Za-z\s]+"
//                     title="Name should only contain letters and spaces."
//                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleFormChange}
//                     required
//                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="role"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Mobile No
//                   </label>
//                   <input
//                     type="text"
//                     name="role"
//                     value={formData.role}
//                     onChange={handleFormChange}
//                     required
//                     pattern="[0-9]{10}"
//                     title="Mobile number should be 10 digits."
//                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="addressLine1"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Address Line 1
//                   </label>
//                   <input
//                     type="text"
//                     name="addressLine1"
//                     value={formData.addressLine1}
//                     onChange={handleFormChange}
//                     required
//                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="addressLine2"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Address Line 2
//                   </label>
//                   <input
//                     type="text"
//                     name="addressLine2"
//                     value={formData.addressLine2}
//                     onChange={handleFormChange}
//                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="city"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     City
//                   </label>
//                   <input
//                     type="text"
//                     name="city"
//                     value={formData.city}
//                     onChange={handleFormChange}
//                     required
//                     pattern="[A-Za-z\s]+"
//                     title="City should only contain letters and spaces."
//                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="state"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     State
//                   </label>
//                   <input
//                     type="text"
//                     name="state"
//                     value={formData.state}
//                     onChange={handleFormChange}
//                     required
//                     pattern="[A-Za-z\s]+"
//                     title="State should only contain letters and spaces."
//                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="country"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Country
//                   </label>
//                   <input
//                     type="text"
//                     name="country"
//                     value={formData.country}
//                     onChange={handleFormChange}
//                     required
//                     pattern="[A-Za-z\s]+"
//                     title="Country should only contain letters and spaces."
//                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="gender" className="block text-sm font-medium">
//                     Gender
//                   </label>
//                   <select
//                     name="gender"
//                     value={formData.gender}
//                     onChange={handleFormChange}
//                     required
//                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 sm:text-sm"
//                   >
//                     <option value="">Select Gender</option>
//                     <option value="Male" className="bg-green-100 text-green-800">
//                       Male
//                     </option>
//                     <option value="Female" className="bg-pink-100 text-pink-800">
//                       Female
//                     </option>
//                   </select>
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="profileImg"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Profile Image
//                   </label>
//                   <input
//                     type="file"
//                     name="profileImg"
//                     accept="image/*"
//                     onChange={handleImageChange}
//                     className="mt-1 block w-full text-sm text-gray-500"
//                   />
//                   {formData.profileImg && (
//                     <img
//                       src={formData.profileImg}
//                       alt="Profile Preview"
//                       className="mt-2 h-16 w-16 object-cover"
//                     />
//                   )}
//                 </div>
//               </div>
//               <div className="mt-6 flex gap-x-4">
//                 <button
//                   type="submit"
//                   className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                 >
//                   {editingIndex !== null ? "Update" : "Add"}
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleCancel}
//                   className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         )}
//         <button
//           onClick={() => setIsFormVisible(!isFormVisible)}
//           className="mt-4 inline-flex justify-center rounded-md border border-transparent bg-green-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
//         >
//           {isFormVisible ? "Hide Form" : "Show Form"}
//         </button>
//       </div>
//     </div>
//   );
// }


// import React, { useState } from "react";

// const initialPeople = [
//   {
//     name: "Jane Smith",
//     title: "Chennai",
//     email: "jane.smith@example.com",
//     role: "7702253548",
//     gender: "Male",
//     profileImg: "",
//     addressLine1: "123 Main St",
//     addressLine2: "Apt 4B",
//     city: "Chennai",
//     state: "Tamil Nadu",
//     country: "India",
//   },
//   // Add other initial people here if needed
// ];

// export default function User() {
//   const [people, setPeople] = useState(initialPeople);
//   const [formData, setFormData] = useState({
//     name: "",
//     title: "",
//     email: "",
//     role: "",
//     gender: "",
//     profileImg: "",
//     addressLine1: "",
//     addressLine2: "",
//     city: "",
//     state: "",
//     country: "",
//   });
//   const [isFormVisible, setIsFormVisible] = useState(true); // Set form to always be visible
//   const [editingIndex, setEditingIndex] = useState(null);

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

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

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (editingIndex !== null) {
//       const updatedPeople = [...people];
//       updatedPeople[editingIndex] = formData;
//       setPeople(updatedPeople);
//       setEditingIndex(null);
//     } else {
//       setPeople([...people, formData]);
//     }
//     setFormData({
//       name: "",
//       title: "",
//       email: "",
//       role: "",
//       gender: "",
//       profileImg: "",
//       addressLine1: "",
//       addressLine2: "",
//       city: "",
//       state: "",
//       country: "",
//     });
//     setIsFormVisible(false); // Optionally hide the form after submission
//   };

//   const handleCancel = () => {
//     setFormData({
//       name: "",
//       title: "",
//       email: "",
//       role: "",
//       gender: "",
//       profileImg: "",
//       addressLine1: "",
//       addressLine2: "",
//       city: "",
//       state: "",
//       country: "",
//     });
//     setEditingIndex(null);
//     setIsFormVisible(false); // Optionally hide the form on cancel
//   };

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       {/* Form is always visible */}
//       {isFormVisible && (
//         <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//           <form onSubmit={handleFormSubmit}>
//             <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
//               {/* Form Fields */}
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleFormChange}
//                   required
//                   pattern="[A-Za-z\s]+"
//                   title="Name should only contain letters and spaces."
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleFormChange}
//                   required
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="role"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Mobile No
//                 </label>
//                 <input
//                   type="text"
//                   name="role"
//                   value={formData.role}
//                   onChange={handleFormChange}
//                   required
//                   pattern="[0-9]{10}"
//                   title="Mobile number should be 10 digits."
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="addressLine1"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Address Line 1
//                 </label>
//                 <input
//                   type="text"
//                   name="addressLine1"
//                   value={formData.addressLine1}
//                   onChange={handleFormChange}
//                   required
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="addressLine2"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Address Line 2
//                 </label>
//                 <input
//                   type="text"
//                   name="addressLine2"
//                   value={formData.addressLine2}
//                   onChange={handleFormChange}
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="city"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   City
//                 </label>
//                 <input
//                   type="text"
//                   name="city"
//                   value={formData.city}
//                   onChange={handleFormChange}
//                   required
//                   pattern="[A-Za-z\s]+"
//                   title="City should only contain letters and spaces."
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="state"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   State
//                 </label>
//                 <input
//                   type="text"
//                   name="state"
//                   value={formData.state}
//                   onChange={handleFormChange}
//                   required
//                   pattern="[A-Za-z\s]+"
//                   title="State should only contain letters and spaces."
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="country"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Country
//                 </label>
//                 <input
//                   type="text"
//                   name="country"
//                   value={formData.country}
//                   onChange={handleFormChange}
//                   required
//                   pattern="[A-Za-z\s]+"
//                   title="Country should only contain letters and spaces."
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="gender" className="block text-sm font-medium">
//                   Gender
//                 </label>
//                 <select
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleFormChange}
//                   required
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 sm:text-sm"
//                 >
//                   <option value="">Select Gender</option>
//                   <option value="Male" className="bg-green-100 text-green-800">
//                     Male
//                   </option>
//                   <option value="Female" className="bg-pink-100 text-pink-800">
//                     Female
//                   </option>
//                 </select>
//               </div>
//               <div>
//                 <label
//                   htmlFor="profileImg"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Profile Image
//                 </label>
//                 <input
//                   type="file"
//                   name="profileImg"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                   className="mt-1 block w-full text-sm text-gray-500"
//                 />
//               </div>
//             </div>
//             <div className="mt-6 flex justify-end space-x-4">
//               <button
//                 type="submit"
//                 className="inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//               >
//                 {editingIndex !== null ? "Update" : "Add"}
//               </button>
//               <button
//                 type="button"
//                 onClick={handleCancel}
//                 className="inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }


// import React, { useState } from "react";

// const initialPeople = [
//   {
//     name: "Jane Smith",
//     title: "Chennai",
//     email: "jane.smith@example.com",
//     role: "7702253548",
//     gender: "Male",
//     profileImg: "",
//     addressLine1: "123 Main St",
//     addressLine2: "Apt 4B",
//     city: "Chennai",
//     state: "Tamil Nadu",
//     country: "India",
//   },
//   // Add other initial people here if needed
// ];

// export default function User() {
//   const [people, setPeople] = useState(initialPeople);
//   const [formData, setFormData] = useState({
//     name: "",
//     title: "",
//     email: "",
//     role: "",
//     gender: "",
//     profileImg: "",
//     addressLine1: "",
//     addressLine2: "",
//     city: "",
//     state: "",
//     country: "",
//   });
//   const [isFormVisible, setIsFormVisible] = useState(true); // Set form to always be visible
//   const [editingIndex, setEditingIndex] = useState(null);

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

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

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (editingIndex !== null) {
//       const updatedPeople = [...people];
//       updatedPeople[editingIndex] = formData;
//       setPeople(updatedPeople);
//       setEditingIndex(null);
//     } else {
//       setPeople([...people, formData]);
//     }
//     // Clear form data and hide the form
//     setFormData({
//       name: "",
//       title: "",
//       email: "",
//       role: "",
//       gender: "",
//       profileImg: "",
//       addressLine1: "",
//       addressLine2: "",
//       city: "",
//       state: "",
//       country: "",
//     });
//     setIsFormVisible(false); // Hide the form after submission
//   };

//   const handleCancel = () => {
//     setFormData({
//       name: "",
//       title: "",
//       email: "",
//       role: "",
//       gender: "",
//       profileImg: "",
//       addressLine1: "",
//       addressLine2: "",
//       city: "",
//       state: "",
//       country: "",
//     });
//     setEditingIndex(null);
//     setIsFormVisible(false); // Hide the form on cancel
//   };

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       {/* Form is always visible */}
//       {isFormVisible && (
//         <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//           <form onSubmit={handleFormSubmit}>
//             <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
//               {/* Form Fields */}
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleFormChange}
//                   required
//                   pattern="[A-Za-z\s]+"
//                   title="Name should only contain letters and spaces."
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleFormChange}
//                   required
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="role"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Mobile No
//                 </label>
//                 <input
//                   type="text"
//                   name="role"
//                   value={formData.role}
//                   onChange={handleFormChange}
//                   required
//                   pattern="[0-9]{10}"
//                   title="Mobile number should be 10 digits."
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="addressLine1"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Address Line 1
//                 </label>
//                 <input
//                   type="text"
//                   name="addressLine1"
//                   value={formData.addressLine1}
//                   onChange={handleFormChange}
//                   required
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="addressLine2"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Address Line 2
//                 </label>
//                 <input
//                   type="text"
//                   name="addressLine2"
//                   value={formData.addressLine2}
//                   onChange={handleFormChange}
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="city"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   City
//                 </label>
//                 <input
//                   type="text"
//                   name="city"
//                   value={formData.city}
//                   onChange={handleFormChange}
//                   required
//                   pattern="[A-Za-z\s]+"
//                   title="City should only contain letters and spaces."
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="state"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   State
//                 </label>
//                 <input
//                   type="text"
//                   name="state"
//                   value={formData.state}
//                   onChange={handleFormChange}
//                   required
//                   pattern="[A-Za-z\s]+"
//                   title="State should only contain letters and spaces."
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="country"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Country
//                 </label>
//                 <input
//                   type="text"
//                   name="country"
//                   value={formData.country}
//                   onChange={handleFormChange}
//                   required
//                   pattern="[A-Za-z\s]+"
//                   title="Country should only contain letters and spaces."
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="gender" className="block text-sm font-medium">
//                   Gender
//                 </label>
//                 <select
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleFormChange}
//                   required
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 sm:text-sm"
//                 >
//                   <option value="">Select Gender</option>
//                   <option value="Male" className="bg-green-100 text-green-800">
//                     Male
//                   </option>
//                   <option value="Female" className="bg-pink-100 text-pink-800">
//                     Female
//                   </option>
//                 </select>
//               </div>
//               <div>
//                 <label
//                   htmlFor="profileImg"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Profile Image
//                 </label>
//                 <input
//                   type="file"
//                   name="profileImg"
//                   onChange={handleImageChange}
//                   className="mt-1 block w-full text-sm"
//                 />
//                 {formData.profileImg && (
//                   <img
//                     src={formData.profileImg}
//                     alt="Profile Preview"
//                     className="mt-2 h-20 w-20 rounded-full object-cover"
//                   />
//                 )}
//               </div>
//             </div>
//             <div className="mt-6 flex justify-end">
//               <button
//                 type="submit"
//                 className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//               >
//                 {editingIndex !== null ? "Update" : "Add"}
//               </button>
//               <button
//                 type="button"
//                 onClick={handleCancel}
//                 className="ml-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       )}

//       {/* Table */}
//       {/* <div className="mt-8">
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Name
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Email
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Mobile No
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Address Line 1
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Address Line 2
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   City
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   State
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Country
//                 </th>
//                 <th
//                   scope="col"
//                   className="relative px-6 py-3"
//                 >
//                   <span className="sr-only">Edit</span>
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {people.map((person, index) => (
//                 <tr key={index}>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                     {person.name}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     {person.email}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     {person.role}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     {person.addressLine1}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     {person.addressLine2}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     {person.city}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     {person.state}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     {person.country}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                     <button
//                       onClick={() => {
//                         setFormData(person);
//                         setEditingIndex(index);
//                         setIsFormVisible(true);
//                       }}
//                       className="text-indigo-600 hover:text-indigo-900"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => {
//                         const updatedPeople = people.filter(
//                           (_, i) => i !== index
//                         );
//                         setPeople(updatedPeople);
//                       }}
//                       className="text-red-600 hover:text-red-900 ml-4"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div> */}
//     </div>
//   );
// }


// export default function User(props) {
//     const [people, setPeople] = useState(initialPeople);
//     const [formData, setFormData] = useState(null);
//     const [editingIndex, setEditingIndex] = useState(null);
//     const [isFormVisible, setIsFormVisible] = useState(false);
//     const [page, setPage] = useState(0);
//     const [rowsPerPage, setRowsPerPage] = useState(5);
//     const [searchName, setSearchName] = useState('');
//   const [searchEmail, setSearchEmail] = useState('');
  
  
//     // Handle form changes
//     const handleFormChange = (e) => {
//       const { name, value } = e.target;
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     };
//     const exportToExcel = (data, fileName) => {
//       const worksheet = XLSX.utils.json_to_sheet(data);
//       const workbook = XLSX.utils.book_new();
//       XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
//       XLSX.writeFile(workbook, `${fileName}.xlsx`);
//     };
//      const handleExportUsersData = () => {
//           exportToExcel(people, 'Customers');
//         };
//     // Handle image upload
//     const handleImageChange = (e) => {
//       const file = e.target.files[0];
//       if (file) {
//         const reader = new FileReader();
//         reader.onloadend = () => {
//           setFormData({
//             ...formData,
//             profileImg: reader.result,
//           });
//         };
//         reader.readAsDataURL(file);
//       }
//     };
  
//     // Handle form submission
//     const handleFormSubmit = (e) => {
//       e.preventDefault();
//       if (editingIndex !== null) {
//         const updatedPeople = [...people];
//         updatedPeople[editingIndex] = formData;
//         setPeople(updatedPeople);
//         setEditingIndex(null);
//       } else {
//         setPeople([...people, formData]);
//       }
//       setFormData(null);
//       setIsFormVisible(false);
//     };
  
//     // Handle cancel button click
//     const handleCancel = () => {
//       setFormData(null);
//       setEditingIndex(null);
//       setIsFormVisible(false);
//     };
  
    
  
//     // Handle add user button click
//     const handleAddUserClick = () => {
//       setFormData({
//         name: "",
//         title: "",
//         email: "",
//         role: "",
//         gender: "",
//         profileImg: "",
//         addressLine1: "",
//         addressLine2: "",
//         city: "",
//         state: "",
//         country: "",
//       });
//       setEditingIndex(null);
//       setIsFormVisible(true);
//     };
  
//     // Handle edit button click
//     const handleEditClick = (index) => {
//       setFormData(people[index]);
//       setEditingIndex(index);
//       setIsFormVisible(true);
//     };
  
//     // Handle delete button click
//     const handleDeleteClick = (index) => {
//       const updatedPeople = people.filter((_, i) => i !== index);
//       setPeople(updatedPeople);
//     };
  
//     // Handle page change
//     const handleChangePage = (event, newPage) => {
//       setPage(newPage);
//     };
  
//     // Handle rows per page change
//     const handleChangeRowsPerPage = (event) => {
//       setRowsPerPage(parseInt(event.target.value, 10));
//       setPage(0);
//     };
  
//     // const filteredPeople = people.filter(person =>
//     //   person.name.toLowerCase().includes(searchName.toLowerCase()) &&
//     //   person.email.toLowerCase().includes(searchEmail.toLowerCase())
//     // );
    
//     // const paginatedPeople = filteredPeople.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
//     const [paginatedPeople, setPaginatedPeople] = useState([]);
  
//   // useEffect(() => {
//   //   const filteredPeople = people.filter(person =>
//   //     person.name.toLowerCase().includes(searchName.toLowerCase()) &&
//   //     person.email.toLowerCase().includes(searchEmail.toLowerCase())
//   //   );
  
//   //   const paginatedResults = rowsPerPage > 0
//   //     ? filteredPeople.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//   //     : filteredPeople;
  
//   //   setPaginatedPeople(paginatedResults);
//   // }, [people, searchName, searchEmail, page, rowsPerPage]);
//   useEffect(() => {
//     const filteredPeople = people.filter(person =>
//       person.name.toLowerCase().includes(searchName.toLowerCase()) &&
//       person.email.toLowerCase().includes(searchEmail.toLowerCase())
//     );
  
//     const paginatedResults = rowsPerPage > 0
//       ? filteredPeople.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//       : filteredPeople;
  
//     setPaginatedPeople(paginatedResults);
  
//     // Calculate empty rows for pagination
//     const emptyRowsCalculation = page > 0 
//       ? Math.max(0, (1 + page) * rowsPerPage - filteredPeople.length) 
//       : 0;
  
//     setEmptyRows(emptyRowsCalculation);
//   }, [people, searchName, searchEmail, page, rowsPerPage]);
  
//   const [emptyRows, setEmptyRows] = useState(0);
  
  
//     const handleSearch = () => {
//       const filteredPeople = people.filter(person =>
//         person.name.toLowerCase().includes(searchName.toLowerCase()) &&
//         person.email.toLowerCase().includes(searchEmail.toLowerCase())
//       );
//       setPaginatedPeople(filteredPeople.slice(0, rowsPerPage));
//     };
    
  
//     // // Pagination calculations
//     // const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - people.length) : 0;
//     // const paginatedPeople = rowsPerPage > 0
//     //   ? people.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//     //   : people;
    
  
//     return (
//       <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//         {/* Conditional Rendering */}
//         {!isFormVisible ? (
//           <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//             <div className="flex justify-between items-center">
//               <h2 className="text-xl font-semibold">User List</h2>
//               <ul className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex gap-2 list-none">
//                 <li>
//                   <button
//                     type="button"
//                     className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
//                     onClick={handleAddUserClick}
//                   >
//                     <FaPlus aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//                     Add Users
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     type="button"
//                     className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700"
//                     onClick={handleExportUsersData}
//                   >
//                     <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//                     Export Users
//                   </button>
//                 </li>
//               </ul>
//             </div>
//                 {/* <div className="mt-4">
//           <div className="flex items-center space-x-8">
//             <div className="flex flex-col w-[35rem]">
//               <label
//                 htmlFor="searchName"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Search Customer Name
//               </label>
//               <input
//                 id="searchName"
//                 type="text"
//                 placeholder="Search by name"
//                 value={searchName}
//                 onChange={(e) => setSearchName(e.target.value)}
//                 className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//             </div>
//             <div className="flex flex-col w-[25rem]">
//               <label
//                 htmlFor="searchEmail"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Search by Email
//               </label>
//               <input
//                 id="searchEmail"
//                 type="text"
//                 placeholder="Search by email"
//                 value={searchEmail}
//                 onChange={(e) => setSearchEmail(e.target.value)}
//                 className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//             </div>
//             <div className="flex-shrink-0">
//               <button
//                 type="button"
//                 className="px-6 py-3 flex items-center space-x-2 rounded-md bg-indigo-600 text-white text-sm font-medium"
//                 onClick={handleSearch}
//               >
//                 <FaFilter className="h-3 w-3" />
//                 <span>Filter</span>
//               </button>
//             </div>
//           </div>
//         </div> */}
//         <div className="mt-4">
//     <div className="flex items-center space-x-8">
//       <div className="flex flex-col w-[35rem]">
//         <label
//           htmlFor="searchName"
//           className="block text-sm font-medium text-gray-700 mb-1"
//         >
//           Search Customer Name
//         </label>
//         <input
//           id="searchName"
//           type="text"
//           placeholder="Search by name"
//           value={searchName}
//           onChange={(e) => setSearchName(e.target.value)}
//           className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//         />
//       </div>
//       <div className="flex flex-col w-[25rem]">
//         <label
//           htmlFor="searchEmail"
//           className="block text-sm font-medium text-gray-700 mb-1"
//         >
//           Search by Email
//         </label>
//         <input
//           id="searchEmail"
//           type="text"
//           placeholder="Search by email"
//           value={searchEmail}
//           onChange={(e) => setSearchEmail(e.target.value)}
//           className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//         />
//       </div>
//       <div className="flex-shrink-0">
//         <button
//           type="button"
//           className="px-6 py-3 flex items-center space-x-2 rounded-md bg-indigo-600 text-white text-sm font-medium"
//           onClick={handleSearch}
//         >
//           <FaFilter className="h-3 w-3" />
//           <span>Filter</span>
//         </button>
//       </div>
//     </div>
//   </div>
  
//             <TableContainer component={Paper} className="mt-4">
//               <Table>
//                 <TableHead>
//                   <TableRow>
//                     <StyledTableCell>Name</StyledTableCell>
//                     <StyledTableCell>Email</StyledTableCell>
//                     <StyledTableCell>Mobile No</StyledTableCell>
//                     <StyledTableCell>Address</StyledTableCell>
//                     <StyledTableCell>Gender</StyledTableCell>
//                     <StyledTableCell>Edit</StyledTableCell>
//                     <StyledTableCell>Delete</StyledTableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {paginatedPeople.map((person, index) => (
//                     <StyledTableRow key={index}>
//                       <StyledTableCell>
//                         <div className="flex items-center space-x-4">
//                           <Avatar src={person.profileImg} />
//                           <span>{person.name}</span>
//                         </div>
//                       </StyledTableCell>
//                       <StyledTableCell>{person.email}</StyledTableCell>
//                       <StyledTableCell>{person.role}</StyledTableCell>
//                       <StyledTableCell>
//                         {person.addressLine1}
//                         {person.addressLine2 && `, ${person.addressLine2}`}
//                         <br />
//                         {person.city}, {person.state}, {person.country}
//                       </StyledTableCell>
//                       <StyledTableCell>{person.gender}</StyledTableCell>
//                       <StyledTableCell>
//                         <Tooltip title="Edit">
//                           <IconButton onClick={() => handleEditClick(index)}>
//                             <EditIcon />
//                           </IconButton>
//                         </Tooltip>
//                       </StyledTableCell>
//                       <StyledTableCell>
//                         <Tooltip title="Delete">
//                           <IconButton onClick={() => handleDeleteClick(index)}>
//                             <DeleteIcon />
//                           </IconButton>
//                         </Tooltip>
//                       </StyledTableCell>
//                     </StyledTableRow>
//                   ))}
//                   {emptyRows > 0 && (
//                     <StyledTableRow style={{ height: 53 * emptyRows }}>
//                       <StyledTableCell colSpan={6} />
//                     </StyledTableRow>
//                   )}
//                 </TableBody>
//                 <TableFooter>
//                   <TableRow>
//                     <TablePagination
//                       rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
//                       colSpan={3}
//                       count={people.length}
//                       rowsPerPage={rowsPerPage}
//                       page={page}
//                       onPageChange={handleChangePage}
//                       onRowsPerPageChange={handleChangeRowsPerPage}
//                       // ActionsComponent={TablePaginationActions}
//                     />
//                   </TableRow>
//                 </TableFooter>
//               </Table>
//             </TableContainer>
  
//   {/* <TableContainer component={Paper} className="mt-4">
//     <Table>
//       <TableHead>
//       <TableRow>
//                     <StyledTableCell>Name</StyledTableCell>
//                     <StyledTableCell>Email</StyledTableCell>
//                     <StyledTableCell>Mobile No</StyledTableCell>
//                     <StyledTableCell>Address</StyledTableCell>
//                     <StyledTableCell>Gender</StyledTableCell>
//                     <StyledTableCell>Edit</StyledTableCell>
//                     <StyledTableCell>Delete</StyledTableCell>
//                   </TableRow>
//       </TableHead>
//        <TableBody>
//                   {paginatedPeople.map((person, index) => (
//                     <StyledTableRow key={index}>
//                       <StyledTableCell>
//                         <div className="flex items-center space-x-4">
//                           <Avatar src={person.profileImg} />
//                           <span>{person.name}</span>
//                         </div>
//                       </StyledTableCell>
//                       <StyledTableCell>{person.email}</StyledTableCell>
//                       <StyledTableCell>{person.role}</StyledTableCell>
//                       <StyledTableCell>
//                         {person.addressLine1}
//                         {person.addressLine2 && `, ${person.addressLine2}`}
//                         <br />
//                         {person.city}, {person.state}, {person.country}
//                       </StyledTableCell>
//                       <StyledTableCell>{person.gender}</StyledTableCell>
//                       <StyledTableCell>
//                         <Tooltip title="Edit">
//                           <IconButton onClick={() => handleEditClick(index)}>
//                             <EditIcon />
//                           </IconButton>
//                         </Tooltip>
//                       </StyledTableCell>
//                       <StyledTableCell>
//                         <Tooltip title="Delete">
//                           <IconButton onClick={() => handleDeleteClick(index)}>
//                             <DeleteIcon />
//                           </IconButton>
//                         </Tooltip>
//                       </StyledTableCell>
//                     </StyledTableRow>
//                   ))}
//                   {emptyRows > 0 && (
//                     <StyledTableRow style={{ height: 53 * emptyRows }}>
//                       <StyledTableCell colSpan={6} />
//                     </StyledTableRow>
//                   )}
//                 </TableBody>
//       <TableFooter>
//         <TableRow>
//           <TablePagination
//             rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
//             colSpan={3}
//             // count={filteredPeople.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onPageChange={handleChangePage}
//             onRowsPerPageChange={handleChangeRowsPerPage}
//           />
//         </TableRow>
//       </TableFooter>
//     </Table>
//   </TableContainer> */}
  
//           </div>     
//         ) : (
//           <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//             <form onSubmit={handleFormSubmit}>
//               <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
//                 {/* Form Fields */}
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData?.name || ""}
//                     onChange={handleFormChange}
//                     required
//                     pattern="[A-Za-z\s]+"
//                     title="Name should only contain letters and spaces."
//                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData?.email || ""}
//                     onChange={handleFormChange}
//                     required
//                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="role"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Mobile No
//                   </label>
//                   <input
//                     type="text"
//                     name="role"
//                     value={formData?.role || ""}
//                     onChange={handleFormChange}
//                     required
//                     pattern="\d{10}"
//                     title="Mobile No should be 10 digits."
//                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   />
//                 </div>
  
//                                <div>
//                      <label htmlFor="gender" className="block text-sm font-medium">
//                        Gender
//                      </label>
//                      <select
//                       name="gender"
//                       value={formData.gender}
//                       onChange={handleFormChange}
//                       required
//                       className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 sm:text-sm"
//                     >
//                       <option value="">Select Gender</option>
//                       <option
//                         value="Male"
//                         className="bg-green-100 text-green-800 shadow-sm"
//                       >
//                         Male
//                       </option>
//                       <option
//                         value="Female"
//                         className="bg-pink-100 text-pink-800 shadow-sm"
//                       >
//                         Female
//                       </option>
//                     </select>
//                   </div>
               
//                 {/* Additional fields for address */}
//                 <div>
//                   <label
//                     htmlFor="addressLine1"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Address Line 1
//                   </label>
//                   <input
//                     type="text"
//                     name="addressLine1"
//                     value={formData?.addressLine1 || ""}
//                     onChange={handleFormChange}
//                     required
//                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="addressLine2"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Address Line 2
//                   </label>
//                   <input
//                     type="text"
//                     name="addressLine2"
//                     value={formData?.addressLine2 || ""}
//                     onChange={handleFormChange}
//                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="city"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     City
//                   </label>
//                   <input
//                     type="text"
//                     name="city"
//                     value={formData?.city || ""}
//                     onChange={handleFormChange}
//                     required
//                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="state"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     State
//                   </label>
//                   <input
//                     type="text"
//                     name="state"
//                     value={formData?.state || ""}
//                     onChange={handleFormChange}
//                     required
//                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="country"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Country
//                   </label>
//                   <input
//                     type="text"
//                     name="country"
//                     value={formData?.country || ""}
//                     onChange={handleFormChange}
//                     required
//                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="profileImg"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Profile Image
//                   </label>
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageChange}
//                     className="mt-1 block w-full text-sm text-gray-500"
//                   />
//                   {formData?.profileImg && (
//                     <img
//                       src={formData.profileImg}
//                       alt="Profile"
//                       className="mt-2 w-24 h-24 object-cover rounded-md"
//                     />
//                   )}
//                 </div>
//               </div>
//               <div className="mt-6 flex justify-end gap-4">
//                 <button
//                   type="submit"
//                   className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 >
                
//                   Save
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleCancel}
//                   className="inline-flex justify-center rounded-md border border-transparent bg-gray-300 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         )}
//       </div>
//     );
//   }
  


// // export default function User() {
// //     const [people, setPeople] = useState(initialPeople);
// //     const [formData, setFormData] = useState(null);
// //     const [editingIndex, setEditingIndex] = useState(null);
// //     const [isFormVisible, setIsFormVisible] = useState(false);
  
// //     const handleFormChange = (e) => {
// //       const { name, value } = e.target;
// //       setFormData({
// //         ...formData,
// //         [name]: value,
// //       });
// //     };
  
// //     const handleImageChange = (e) => {
// //       const file = e.target.files[0];
// //       if (file) {
// //         const reader = new FileReader();
// //         reader.onloadend = () => {
// //           setFormData({
// //             ...formData,
// //             profileImg: reader.result,
// //           });
// //         };
// //         reader.readAsDataURL(file);
// //       }
// //     };
  
// //     const handleFormSubmit = (e) => {
// //       e.preventDefault();
// //       if (editingIndex !== null) {
// //         const updatedPeople = [...people];
// //         updatedPeople[editingIndex] = formData;
// //         setPeople(updatedPeople);
// //         setEditingIndex(null);
// //       } else {
// //         setPeople([...people, formData]);
// //       }
// //       setFormData(null);
// //       setIsFormVisible(false);
// //     };
  
// //     const handleCancel = () => {
// //       setFormData(null);
// //       setEditingIndex(null);
// //       setIsFormVisible(false);
// //     };
  
// //     const handleAddUserClick = () => {
// //       setFormData({
// //         name: "",
// //         title: "",
// //         email: "",
// //         role: "",
// //         gender: "",
// //         profileImg: "",
// //         addressLine1: "",
// //         addressLine2: "",
// //         city: "",
// //         state: "",
// //         country: "",
// //       });
// //       setEditingIndex(null);
// //       setIsFormVisible(true);
// //     };
  
// //     const handleEditClick = (index) => {
// //       setFormData(people[index]);
// //       setEditingIndex(index);
// //       setIsFormVisible(true);
// //     };
  
// //     const handleDeleteClick = (index) => {
// //       const updatedPeople = people.filter((_, i) => i !== index);
// //       setPeople(updatedPeople);
// //     };
  
// //     return (
// //       <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
// //         {/* Conditional Rendering */}
// //         {!isFormVisible ? (
// //           <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
// //             <div className="flex justify-between items-center">
// //               <h2 className="text-xl font-semibold">User List</h2>
// //               <Tooltip title="Add User">
// //                 <IconButton onClick={handleAddUserClick}>
// //                   <AddIcon />
// //                 </IconButton>
// //               </Tooltip>
// //             </div>
// //             <TableContainer component={Paper} className="mt-4">
// //               <Table>
// //                 <TableHead>
// //                   <TableRow>
// //                     <StyledTableCell>Name</StyledTableCell>
// //                     <StyledTableCell>Email</StyledTableCell>
// //                     <StyledTableCell>Mobile No</StyledTableCell>
// //                     <StyledTableCell>Gender</StyledTableCell>
// //                     <StyledTableCell>Address</StyledTableCell>
// //                     <StyledTableCell>Actions</StyledTableCell>
// //                   </TableRow>
// //                 </TableHead>
// //                 <TableBody>
// //                   {people.map((person, index) => (
// //                     <StyledTableRow key={index}>
// //                       <StyledTableCell>
// //                         <div className="flex items-center space-x-4">
// //                           <Avatar src={person.profileImg} />
// //                           <span>{person.name}</span>
// //                         </div>
// //                       </StyledTableCell>
// //                       <StyledTableCell>{person.email}</StyledTableCell>
// //                       <StyledTableCell>{person.role}</StyledTableCell>
// //                       <StyledTableCell>
// //                         <span
// //                           className={`inline-block px-3 py-2 text-xs font-semibold rounded-full ${
// //                             person.gender === "Male"
// //                               ? "bg-green-100 text-green-800 shadow-md"
// //                               : person.gender === "Female"
// //                               ? "bg-pink-100 text-pink-800 shadow-md"
// //                               : "bg-gray-100 text-gray-800 shadow-md"
// //                           }`}
// //                         >
// //                           {person.gender}
// //                         </span>
// //                       </StyledTableCell>
// //                       <StyledTableCell>
// //                         {person.addressLine1}
// //                         {person.addressLine2 && `, ${person.addressLine2}`}
// //                         <br />
// //                         {person.city}, {person.state}, {person.country}
// //                       </StyledTableCell>
// //                       <StyledTableCell>
// //                         <div className="flex space-x-2">
// //                           <div
// //                             className="inline-flex items-center justify-center w-14 h-8 cursor-pointer rounded-lg bg-blue-100 text-blue-800 shadow-md"
// //                             onClick={() => handleEditClick(index)}
// //                           >
// //                             <FaEdit className="w-4 h-4" />
// //                           </div>
// //                           <div
// //                             className="inline-flex items-center justify-center w-14 h-8 cursor-pointer rounded-lg bg-pink-100 text-red-500 shadow-md"
// //                             onClick={() => handleDeleteClick(index)}
// //                           >
// //                             <FaTrash className="w-4 h-4" />
// //                           </div>
// //                         </div>
// //                       </StyledTableCell>
// //                     </StyledTableRow>
// //                   ))}
// //                 </TableBody>
// //               </Table>
// //             </TableContainer>
// //           </div>
// //         ) : (
// //           <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
// //             <form onSubmit={handleFormSubmit}>
// //               <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
// //                 {/* Form Fields */}
// //                 <div>
// //                   <label
// //                     htmlFor="name"
// //                     className="block text-sm font-medium text-gray-700"
// //                   >
// //                     Name
// //                   </label>
// //                   <input
// //                     type="text"
// //                     name="name"
// //                     value={formData?.name || ""}
// //                     onChange={handleFormChange}
// //                     required
// //                     pattern="[A-Za-z\s]+"
// //                     title="Name should only contain letters and spaces."
// //                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// //                   />
// //                 </div>
// //                 <div>
// //                   <label
// //                     htmlFor="email"
// //                     className="block text-sm font-medium text-gray-700"
// //                   >
// //                     Email
// //                   </label>
// //                   <input
// //                     type="email"
// //                     name="email"
// //                     value={formData?.email || ""}
// //                     onChange={handleFormChange}
// //                     required
// //                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// //                   />
// //                 </div>
// //                 <div>
// //                   <label
// //                     htmlFor="role"
// //                     className="block text-sm font-medium text-gray-700"
// //                   >
// //                     Mobile No
// //                   </label>
// //                   <input
// //                     type="text"
// //                     name="role"
// //                     value={formData?.role || ""}
// //                     onChange={handleFormChange}
// //                     required
// //                     pattern="\d{10}"
// //                     title="Mobile No should be 10 digits."
// //                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// //                   />
// //                 </div>
// //                 <div>
// //                   <label
// //                     htmlFor="profileImg"
// //                     className="block text-sm font-medium text-gray-700"
// //                   >
// //                     Profile Image
// //                   </label>
// //                   <input
// //                     type="file"
// //                     accept="image/*"
// //                     onChange={handleImageChange}
// //                     className="mt-1 block w-full text-sm text-gray-500"
// //                   />
// //                   {formData?.profileImg && (
// //                     <img
// //                       src={formData.profileImg}
// //                       alt="Profile"
// //                       className="mt-2 w-24 h-24 object-cover rounded-md"
// //                     />
// //                   )}
// //                 </div>
// //                 {/* Additional fields for address */}
// //                 <div>
// //                   <label
// //                     htmlFor="addressLine1"
// //                     className="block text-sm font-medium text-gray-700"
// //                   >
// //                     Address Line 1
// //                   </label>
// //                   <input
// //                     type="text"
// //                     name="addressLine1"
// //                     value={formData?.addressLine1 || ""}
// //                     onChange={handleFormChange}
// //                     required
// //                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// //                   />
// //                 </div>
// //                 <div>
// //                   <label
// //                     htmlFor="addressLine2"
// //                     className="block text-sm font-medium text-gray-700"
// //                   >
// //                     Address Line 2
// //                   </label>
// //                   <input
// //                     type="text"
// //                     name="addressLine2"
// //                     value={formData?.addressLine2 || ""}
// //                     onChange={handleFormChange}
// //                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// //                   />
// //                 </div>
// //                 <div>
// //                   <label
// //                     htmlFor="city"
// //                     className="block text-sm font-medium text-gray-700"
// //                   >
// //                     City
// //                   </label>
// //                   <input
// //                     type="text"
// //                     name="city"
// //                     value={formData?.city || ""}
// //                     onChange={handleFormChange}
// //                     required
// //                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// //                   />
// //                 </div>
// //                 <div>
// //                   <label
// //                     htmlFor="state"
// //                     className="block text-sm font-medium text-gray-700"
// //                   >
// //                     State
// //                   </label>
// //                   <input
// //                     type="text"
// //                     name="state"
// //                     value={formData?.state || ""}
// //                     onChange={handleFormChange}
// //                     required
// //                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// //                   />
// //                 </div>
// //                 <div>
// //                   <label
// //                     htmlFor="country"
// //                     className="block text-sm font-medium text-gray-700"
// //                   >
// //                     Country
// //                   </label>
// //                   <input
// //                     type="text"
// //                     name="country"
// //                     value={formData?.country || ""}
// //                     onChange={handleFormChange}
// //                     required
// //                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// //                   />
// //                 </div>
// //                 <div>
// //                   <label
// //                     htmlFor="gender"
// //                     className="block text-sm font-medium text-gray-700"
// //                   >
// //                     Gender
// //                   </label>
// //                   <select
// //                     name="gender"
// //                     value={formData?.gender || ""}
// //                     onChange={handleFormChange}
// //                     required
// //                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// //                   >
// //                     <option value="">Select Gender</option>
// //                     <option value="Male">Male</option>
// //                     <option value="Female">Female</option>
// //                     <option value="Other">Other</option>
// //                   </select>
// //                 </div>
// //               </div>
// //               <div className="flex justify-end gap-4 mt-6">
// //                 <button
// //                   type="button"
// //                   onClick={handleCancel}
// //                   className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
// //                 >
// //                   Cancel
// //                 </button>
// //                 <button
// //                   type="submit"
// //                   className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
// //                 >
// //                   Save
// //                 </button>
// //               </div>
// //             </form>
// //           </div>
// //         )}
// //       </div>
// //     );
// //   }
  
// //   // const StyledTableCell = (props) => (
// //   //   <TableCell {...props} className="px-6 py-4 text-sm font-medium text-gray-900" />
// //   // );
  
// //   // const StyledTableRow = (props) => (
// //   //   <TableRow {...props} className="bg-white border-b hover:bg-gray-50" />
// //   // );


// import React, { useEffect } from 'react';
// import { useUserContext } from './UserContext';

// const UserForm = () => {
//   const { formData, setFormData, editingIndex, setEditingIndex, isFormVisible, setIsFormVisible, people, setPeople } = useUserContext();

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (editingIndex !== null) {
//       const updatedPeople = [...people];
//       updatedPeople[editingIndex] = formData;
//       setPeople(updatedPeople);
//       setEditingIndex(null);
//     } else {
//       setPeople((prev) => [...prev, formData]);
//     }
//     setFormData(null);
//     setIsFormVisible(false);
//   };

//   return isFormVisible ? (
//     <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//       <h2 className="text-xl font-semibold">{editingIndex !== null ? "Edit Customer" : "Add Customer"}</h2>
//       <form onSubmit={handleFormSubmit} className="mt-4">
//         <input type="text" name="name" placeholder="Name" value={formData?.name || ''} onChange={handleFormChange} className="input-field" required />
//         <input type="email" name="email" placeholder="Email" value={formData?.email || ''} onChange={handleFormChange} className="input-field" required />
//         <input type="text" name="role" placeholder="Mobile No" value={formData?.role || ''} onChange={handleFormChange} className="input-field" required />
//         <input type="text" name="addressLine1" placeholder="Address Line 1" value={formData?.addressLine1 || ''} onChange={handleFormChange} className="input-field" required />
//         <input type="text" name="addressLine2" placeholder="Address Line 2" value={formData?.addressLine2 || ''} onChange={handleFormChange} className="input-field" />
//         <input type="text" name="city" placeholder="City" value={formData?.city || ''} onChange={handleFormChange} className="input-field" required />
//         <input type="text" name="state" placeholder="State" value={formData?.state || ''} onChange={handleFormChange} className="input-field" required />
//         <input type="text" name="country" placeholder="Country" value={formData?.country || ''} onChange={handleFormChange} className="input-field" required />
//         <select name="gender" value={formData?.gender || ''} onChange={handleFormChange} className="input-field" required>
//           <option value="" disabled>Select Gender</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//           <option value="Other">Other</option>
//         </select>
//         <button type="submit" className="btn-primary mt-4">{editingIndex !== null ? "Update" : "Add"} Customer</button>
//         <button type="button" onClick={() => setIsFormVisible(false)} className="btn-secondary mt-4">Cancel</button>
//       </form>
//     </div>
//   ) : null;
// };

// export default UserForm;


// import React, { useState,useEffect } from "react";
// import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Avatar from "@mui/material/Avatar";
// import p1 from "../../assests/profile/p1.jpeg";
// import p2 from "../../assests/profile/p2.jpeg";
// import p3 from "../../assests/profile/p3.jpeg";
// import { FaTable, FaEdit, FaTrash } from "react-icons/fa";
// import { FaPlus } from "react-icons/fa";
// import * as XLSX from 'xlsx';
// import TableFooter from '@mui/material/TableFooter';
// import TablePagination from '@mui/material/TablePagination';
// import { FaFilter } from 'react-icons/fa';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     // backgroundColor: theme.palette.action.hover,
//     // color: theme.palette.common.black,
    
//       // backgroundColor: theme.palette.action.focus, 
//       // color: theme.palette.common.black,
    
//       backgroundColor: theme.palette.grey[400], 
//       color: theme.palette.common.black,
    
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(even)": {
//     backgroundColor: theme.palette.action.hover,
//   },
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));
// const initialPeople = [
//   {
//     name: "Jane Smith",
//     title: "Chennai",
//     email: "jane.smith@example.com",
//     role: "7702253548",
//     gender: "Male",
//     profileImg: p1,
//     addressLine1: "123 Main St",
//     addressLine2: "Apt 4B",
//     city: "Chennai",
//     state: "Tamil Nadu",
//     country: "India",
//   },
//   {
//     name: "Alice Johnson",
//     title: "Hyderabad",
//     email: "alice.johnson@example.com",
//     role: "7702253549",
//     gender: "Female",
//     profileImg: p2,
//     addressLine1: "456 Oak St",
//     addressLine2: "Suite 12",
//     city: "Hyderabad",
//     state: "Telangana",
//     country: "India",
//   },
//   {
//     name: "Robert Brown",
//     title: "Mumbai",
//     email: "robert.brown@example.com",
//     role: "7702253550",
//     gender: "Female",
//     profileImg: p3,
//     addressLine1: "789 Pine St",
//     addressLine2: "",
//     city: "Mumbai",
//     state: "Maharashtra",
//     country: "India",
//   },
//   {
//     name: "Michael Davis",
//     title: "Delhi",
//     email: "michael.davis@example.com",
//     role: "7702253551",
//     gender: "Male",
//     addressLine1: "101 Maple St",
//     addressLine2: "Apt 3C",
//     city: "Delhi",
//     state: "Delhi",
//     country: "India",
//   },
// ];

// export default function User(props) {
//   const [people, setPeople] = useState(initialPeople);
//   const [formData, setFormData] = useState(null);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [searchName, setSearchName] = useState('');
//   const [searchEmail, setSearchEmail] = useState('');
  

//   // Handle form changes
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

//   // Handle form submission
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (editingIndex !== null) {
//       const updatedPeople = [...people];
//       updatedPeople[editingIndex] = formData;
//       setPeople(updatedPeople);
//       setEditingIndex(null);
//     } else {
//       setPeople([...people, formData]);
//     }
//     setFormData(null);
//     setIsFormVisible(false);
//   };

//   // Handle cancel button click
//   const handleCancel = () => {
//     setFormData(null);
//     setEditingIndex(null);
//     setIsFormVisible(false);
//   };

//   // Handle add user button click
//   const handleAddUserClick = () => {
//     setFormData({
//       name: "",
//       title: "",
//       email: "",
//       role: "",
//       gender: "",
//       profileImg: "",
//       addressLine1: "",
//       addressLine2: "",
//       city: "",
//       state: "",
//       country: "",
//     });
//     setEditingIndex(null);
//     setIsFormVisible(true);
//   };
//   const exportToExcel = (data, fileName) => {
//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
//     XLSX.writeFile(workbook, `${fileName}.xlsx`);
//   };
//    const handleExportUsersData = () => {
//         exportToExcel(people, 'Customers');
//       };
      
//   // Handle edit button click
//   const handleEditClick = (index) => {
//     setFormData(people[index]);
//     setEditingIndex(index);
//     setIsFormVisible(true);
//   };

//   // Handle delete button click
//   const handleDeleteClick = (index) => {
//     const updatedPeople = people.filter((_, i) => i !== index);
//     setPeople(updatedPeople);
//   };

//   // Handle page change
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   // Handle rows per page change
//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

// //   // Example if using useState
// const [paginatedPeople, setPaginatedPeople] = useState([]);

// // Pagination calculations
// const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - people.length) : 0;

// // Handle search functionality
// const handleSearch = () => {
//   const filteredPeople = people.filter(person =>
//     person.name.toLowerCase().includes(searchName.toLowerCase()) &&
//     person.email.toLowerCase().includes(searchEmail.toLowerCase())
//   );
//   setPaginatedPeople(filteredPeople.slice(0, rowsPerPage));
// };


// // Initial pagination setup or when data changes
// useEffect(() => {
//   setPaginatedPeople(
//     people.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//   );
// }, [people, page, rowsPerPage]);

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       {/* Conditional Rendering */}
//       {!isFormVisible ? (
//         <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//           <div className="flex justify-between items-center">
//             <h2 className="text-xl font-semibold">User List</h2>
//             <ul className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex gap-2 list-none">
//               <li>
//                 <button
//                   type="button"
//                   className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
//                   onClick={handleAddUserClick}
//                 >
//                   <FaPlus aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//                   Add Users
//                 </button>
//               </li>
//               <li>
//                 <button
//                   type="button"
//                   className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700"
//                   onClick={handleExportUsersData}
//                 >
//                   <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//                   Export Users
//                 </button>
//               </li>
//             </ul>
//           </div>

//           <div className="mt-4">
//     <div className="flex items-center space-x-8">
//       <div className="flex flex-col w-[35rem]">
//         <label
//           htmlFor="searchName"
//           className="block text-sm font-medium text-gray-700 mb-1"
//         >
//           Search Customer Name
//         </label>
//         <input
//           id="searchName"
//           type="text"
//           placeholder="Search by name"
//           value={searchName}
//           onChange={(e) => setSearchName(e.target.value)}
//           className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//         />
//       </div>
//       <div className="flex flex-col w-[25rem]">
//         <label
//           htmlFor="searchEmail"
//           className="block text-sm font-medium text-gray-700 mb-1"
//         >
//           Search by Email
//         </label>
//         <input
//           id="searchEmail"
//           type="text"
//           placeholder="Search by email"
//           value={searchEmail}
//           onChange={(e) => setSearchEmail(e.target.value)}
//           className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//         />
//       </div>
//       <div className="flex-shrink-0">
//         <button
//           type="button"
//           className="px-6 py-3 flex items-center space-x-2 rounded-md bg-indigo-600 text-white text-sm font-medium"
//           onClick={handleSearch}
//         >
//           <FaFilter className="h-3 w-3" />
//           <span>Filter</span>
//         </button>
//       </div>
//     </div>
//   </div>
//           <TableContainer component={Paper} className="mt-4 ">
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <StyledTableCell>Name</StyledTableCell>
//                   <StyledTableCell>Email</StyledTableCell>
//                   <StyledTableCell>Mobile No</StyledTableCell>
//                   <StyledTableCell>Address</StyledTableCell>
//                   <StyledTableCell>Gender</StyledTableCell>
//                   <StyledTableCell>Edit</StyledTableCell>
//                   <StyledTableCell>Delete</StyledTableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {paginatedPeople.map((person, index) => (
//                   <StyledTableRow key={index}>
//                     <StyledTableCell>
//                       <div className="flex items-center space-x-4">
//                         <Avatar src={person.profileImg} />
//                         <span>{person.name}</span>
//                       </div>
//                     </StyledTableCell>
//                     <StyledTableCell>{person.email}</StyledTableCell>
//                     <StyledTableCell>{person.role}</StyledTableCell>
//                     <StyledTableCell>
//                       {person.addressLine1}
//                       {person.addressLine2 && `, ${person.addressLine2}`}
//                       <br />
//                       {person.city}, {person.state}, {person.country}
//                     </StyledTableCell>
//                     {/* <StyledTableCell>{person.gender}</StyledTableCell> */}
//                     <StyledTableCell>
//                         <span
//                           className={`inline-block px-3 py-2 text-xs font-semibold rounded-full ${
//                             person.gender === "Male"
//                               ? "bg-green-100 text-green-800 shadow-md"
//                               : person.gender === "Female"
//                               ? "bg-pink-100 text-pink-800 shadow-md"
//                               : "bg-gray-100 text-gray-800 shadow-md"
//                           }`}
//                         >
//                           {person.gender}
//                         </span>
//                       </StyledTableCell>
//                     <StyledTableCell>
                    
//                       <StyledTableCell>
  
//     <div
//       className="inline-flex items-center justify-center w-14 h-7 cursor-pointer rounded-lg bg-blue-100 text-blue-800 shadow-md"
//       onClick={() => handleEditClick(index)}
//     >
//       <FaEdit className="w-4 h-4" />
//     </div>
    
// </StyledTableCell>

//                     </StyledTableCell>
//                     <StyledTableCell>
                    
//                         <div
//       className="inline-flex items-center justify-center w-14 h-7 cursor-pointer rounded-lg bg-pink-100 text-red-500 shadow-md"
//       onClick={() => handleDeleteClick(index)}
//     >
//       <FaTrash className="w-4 h-4" />
//     </div>
  
//                       {/* </Tooltip> */}
//                     </StyledTableCell>
//                   </StyledTableRow>
//                 ))}
//                 {emptyRows > 0 && (
//                   <StyledTableRow style={{ height: 53 * emptyRows }}>
//                     <StyledTableCell colSpan={6} />
//                   </StyledTableRow>
//                 )}
//               </TableBody>
//               <TableFooter>
//                 <TableRow>
//                   {/* <TablePagination */}
//                     {/* // rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
//                     // colSpan={3}
//                     // count={people.length}
//                     // rowsPerPage={rowsPerPage}
//                     // page={page}
//                     // onPageChange={handleChangePage}
//                     // onRowsPerPageChange={handleChangeRowsPerPage}
//                     // ActionsComponent={TablePaginationActions} */}
//                   {/* /> */}
//                   <TablePagination
//               rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
//               colSpan={3}
//               count={people.length}
//               rowsPerPage={rowsPerPage}
//               page={page}
//               slotProps={{
//                 select: {
//                   inputProps: {
//                     'aria-label': 'rows per page',
//                   },
//                   native: true,
//                 },
//               }}
//               onPageChange={handleChangePage}
//               onRowsPerPageChange={handleChangeRowsPerPage}
//               // ActionsComponent={TablePaginationActions}
//             />
//                 </TableRow>
//               </TableFooter>
//             </Table>
//           </TableContainer>
//         </div>
//       ) : (
    
//         <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//           <form onSubmit={handleFormSubmit}>
//             <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
//               {/* Form Fields */}
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData?.name || ""}
//                   onChange={handleFormChange}
//                   required
//                   pattern="[A-Za-z\s]+"
//                   title="Name should only contain letters and spaces."
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData?.email || ""}
//                   onChange={handleFormChange}
//                   required
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="role"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Mobile No
//                 </label>
//                 <input
//                   type="text"
//                   name="role"
//                   value={formData?.role || ""}
//                   onChange={handleFormChange}
//                   required
//                   pattern="\d{10}"
//                   title="Mobile No should be 10 digits."
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>

//                              <div>
//                    <label htmlFor="gender" className="block text-sm font-medium">
//                      Gender
//                    </label>
//                    <select
//                     name="gender"
//                     value={formData.gender}
//                     onChange={handleFormChange}
//                     required
//                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 sm:text-sm"
//                   >
//                     <option value="">Select Gender</option>
//                     <option
//                       value="Male"
//                       className="bg-green-100 text-green-800 shadow-sm"
//                     >
//                       Male
//                     </option>
//                     <option
//                       value="Female"
//                       className="bg-pink-100 text-pink-800 shadow-sm"
//                     >
//                       Female
//                     </option>
//                   </select>
//                 </div>
             
//               {/* Additional fields for address */}
//               <div>
//                 <label
//                   htmlFor="addressLine1"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Address Line 1
//                 </label>
//                 <input
//                   type="text"
//                   name="addressLine1"
//                   value={formData?.addressLine1 || ""}
//                   onChange={handleFormChange}
//                   required
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="addressLine2"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Address Line 2
//                 </label>
//                 <input
//                   type="text"
//                   name="addressLine2"
//                   value={formData?.addressLine2 || ""}
//                   onChange={handleFormChange}
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="city"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   City
//                 </label>
//                 <input
//                   type="text"
//                   name="city"
//                   value={formData?.city || ""}
//                   onChange={handleFormChange}
//                   required
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="state"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   State
//                 </label>
//                 <input
//                   type="text"
//                   name="state"
//                   value={formData?.state || ""}
//                   onChange={handleFormChange}
//                   required
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="country"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Country
//                 </label>
//                 <input
//                   type="text"
//                   name="country"
//                   value={formData?.country || ""}
//                   onChange={handleFormChange}
//                   required
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="profileImg"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Profile Image
//                 </label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                   className="mt-1 block w-full text-sm text-gray-500"
//                 />
//                 {formData?.profileImg && (
//                   <img
//                     src={formData.profileImg}
//                     alt="Profile"
//                     className="mt-2 w-24 h-24 object-cover rounded-md"
//                   />
//                 )}
//               </div>
//             </div>
//             <div className="mt-6 flex justify-end gap-4">
//               <button
//                 type="submit"
//                 className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               >
              
//                 Save
//               </button>
//               <button
//                 type="button"
//                 onClick={handleCancel}
//                 className="inline-flex justify-center rounded-md border border-transparent bg-gray-300 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useState,useEffect} from "react";
// import axios from "axios";



// function Userform() {
 
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
 

//   const [role, setRole] = useState('');
//   const [showDropdown, setShowDropdown] = useState(false);

//   const [users, setUsers] = useState([]);

//   // Handle form changes
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

// const [formData, setFormData] = useState({
//   TenantID: 1,
//   FirstName: "",
//   LastName: "",
//   Email: "",
//   Password: "", 
//   PhoneNumber: "", 
//   Gender:"",

// });

// const handleFormSubmit = async (event) => {
//   event.preventDefault();
//   let valid = true;
//   let newErrors = {};
//   if (valid) {
//     try {
//       console.log("Registered details:", formData);

//       const response = await axios.post(
//         "https://imlystudios-backend-mqg4.onrender.com/api/users/createUser",
//         {
//           TenantID: 1,
//           FirstName: formData.FirstName,
//           LastName: formData.LastName,
//           Email: formData.Email,
//           Password: formData.Password,
//           PhoneNumber: formData.PhoneNumber,
//           CreatedBy: "admin",
//           UpdatedBy: "admin",
//         }
//       );

//       console.log("Registration successful:", response.data);
//       // You can navigate the user or show a success message here
//     } catch (error) {
//       console.error("Registration failed:", error);
//       // setApiError("Registration failed. Please try again.");
//     }
//   } else {
//     console.log("Form validation failed");
//     // setErrors(newErrors);
//   }
// };



//   // Handle cancel button click
//   const handleCancel = () => {
//     setFormData(null);
   
//   };


  
//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
 
//         <div className="mt-6 bg-white p-6 rounded-lg shadow-md">

// <form onSubmit={handleFormSubmit}>
//   {/* <h2 className="text-xl font-semibold">Users</h2> */}
  
//   <div className="flex justify-between items-center mb-6">
//   <h2 className="text-xl font-semibold mb-4 px-24">Users</h2>
 
     
// </div>
  

//   <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 px-16 md:px-24">
//     {/* First Name */}
//     <div className="flex items-center">
//       <div className="w-full">
//         <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
//           First Name
//         </label>
//         <input
//           type="text"
//           name="FirstName"
//           value={formData?.FirstName || ""}
//           onChange={handleFormChange}
//           required
//           className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//         />
//       </div>
//     </div>

//     {/* Address Line 1 */}
//     <div className="flex items-center">
//       <div className="w-full">
//         <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700">
//           Address Line 1
//         </label>
//         <input
//           type="text"
//           name="addressLine1"
//           value={formData?.addressLine1 || ""}
//           onChange={handleFormChange}
//           required
//           className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//         />
//       </div>
//     </div>

//     {/* Last Name */}
//     <div>
//       <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
//         Last Name
//       </label>
//       <input
//         type="text"
//         name="LastName"
//         value={formData?.LastName || ""}
//         onChange={handleFormChange}
//         required
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//       />
//     </div>

//     {/* Address Line 2 */}
//     <div>
//       <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700">
//         Address Line 2
//       </label>
//       <input
//         type="text"
//         name="addressLine2"
//         value={formData?.addressLine2 || ""}
//         onChange={handleFormChange}
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//       />
//     </div>

//     {/* Email */}
//     <div>
//       <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
//         Email
//       </label>
//       <input
//         type="Email"
//         name="Email"
//         value={formData?.Email || ""}
//         onChange={handleFormChange}
//         required
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//       />
//     </div>
//     <div>
//       <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
//         Password
//       </label>
//                   <input
//                     id="Password"
//                     name="Password"
//                     type="password"
//                     value={formData.Password}
//                     onChange={handleFormChange}
//                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   />
//     </div>

//     {/* City */}
//     <div>
//       <label htmlFor="city" className="block text-sm font-medium text-gray-700">
//         City
//       </label>
//       <input
//         type="text"
//         name="city"
//         value={formData?.city || ""}
//         onChange={handleFormChange}
//         required
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//       />
//     </div>

//     {/* Phone Number */}
//     <div>
//       <label htmlFor="PhoneNumber" className="block text-sm font-medium text-gray-700">
//         Phone Number
//       </label>
//       <input
//         type="text"
//         name="PhoneNumber"
//         value={formData?.PhoneNumber || ""}
//         onChange={handleFormChange}
//         required
//         pattern="\d{10}"
//         title="Phone Number should be 10 digits."
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//       />
//     </div>

//     {/* State */}
//     <div>
//       <label htmlFor="state" className="block text-sm font-medium text-gray-700">
//         State
//       </label>
//       <input
//         type="text"
//         name="state"
//         value={formData?.state || ""}
//         onChange={handleFormChange}
//         required
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//       />
//     </div>

//     {/* Gender */}
//     <div>
//       <label htmlFor="Gender" className="block text-sm font-medium text-gray-700">
//         Gender
//       </label>
//       <select
//         name="Gender"
//         value={formData?.Gender || ""}
//         onChange={handleFormChange}
//         required
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 sm:text-sm"
//       >
//         <option value="">Select Gender</option>
//         <option value="Male">Male</option>
//         <option value="Female">Female</option>
//       </select>
//     </div>

//     {/* Zip Code */}
//     <div>
//       <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
//         Zip Code
//       </label>
//       <input
//         type="text"
//         name="zipCode"
//         value={formData?.zipCode || ""}
//         onChange={handleFormChange}
//         required
//         pattern="\d{5,6}"
//         title="Zip Code should be 5 or 6 digits."
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//       />
//     </div>

//     {/* Role ID */}
//     <div>
//       <label htmlFor="roleId" className="block text-sm font-medium text-gray-700">
//         Role ID
//       </label>
//       <select
//         name="roleId"
//         value={formData?.roleId || ""}
//         onChange={handleFormChange}
//         required
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//       >
//         <option value="" disabled>Select a role</option>
//         <option value="admin">Admin</option>
//         <option value="store user">Store User</option>
//         <option value="finance">Finance</option>
//         <option value="production">Production</option>
//         <option value="technical">Technical</option>
//       </select>
//     </div>

//    {/* Profile Image */}
// <div className="flex items-center">
//   <div>
//     <label htmlFor="profileImg" className="block text-sm font-medium text-gray-700">
//       Profile Image
//     </label>
//     <input
//       type="file"
//       accept="image/*"
//       onChange={handleImageChange}
//       className="mt-1 block w-auto text-sm text-gray-500"
//     />
//   </div>

//   {formData?.profileImg && (
//     <img
//       src={formData.profileImg}
//       alt="Profile"
//       className="w-20 h-20 object-cover rounded-full"
//     />
//   )}
// </div>



//     {/* Comments */}
//     <div>
//       <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
//         Comments
//       </label>
//       <textarea
//         name="comments"
//         value={formData?.comments || ""}
//         onChange={handleFormChange}
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//         rows="3"
//       />
//     </div>
//   </div>

//   <div className="mt-6 flex justify-end gap-4">
//     <button
//       type="submit"
//       className="inline-flex justify-center rounded-md border border-transparent bg-custom-darkblue py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-custom-lightblue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//     >
//       Save
//     </button>
//     <button
//                 type="button"
//                 onClick={handleCancel}
//                 className="inline-flex justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-red-200"
//               >
//                 Cancel
//               </button>
//   </div>
// </form>
//         </div>
     
//     </div>
//   );
// }
// export default Userform;


// import React, { useState ,useEffect} from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import { useLocation } from 'react-router-dom';

// function Userform() {

//   const location = useLocation();
//   const [formData, setFormData] = useState(location.state?.userDetails || {});
//   const navigate = useNavigate();
//   const [formData1, setFormData1] = useState({
//     TenantID: 1,
//     FirstName: "",
//     LastName: "",
//     Email: "",
//     Password: "", 
//     PhoneNumber: "", 
//     Gender: "",
//   });

//   // Set form data if available
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

//    // Populate formData with userDetails if available
//    useEffect(() => {
//     if (location.state?.userDetails) {
//       setFormData(location.state.userDetails);
//     }
//   }, [location.state?.userDetails]);

  
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
//     let valid = true;
//     if (valid) {
//       try {
//         console.log("Registered details:", formData);
//         const response = await axios.post(
//           "https://imlystudios-backend-mqg4.onrender.com/api/users/createUser",
//           {
//             TenantID: 1,
//             FirstName: formData.FirstName,
//             LastName: formData.LastName,
//             Email: formData.Email,
//             Password: formData.Password,
//             PhoneNumber: formData.PhoneNumber,
//             CreatedBy: "admin",
//             UpdatedBy: "admin",
//           }
//         );
//         console.log("Registration successful:", response.data);
//         navigate("/user"); // Navigate to the "Users" page after successful submission
//       } catch (error) {
//         console.error("Registration failed:", error);
//       }
//     } else {
//       console.log("Form validation failed");
//     }
//   };
//   // Handle cancel button click
//   const handleCancel = () => {
//     // setFormData(null);
//     navigate("/user"); 
//   };
//   return (
//       <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//         <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
// <form onSubmit={handleFormSubmit}>
//   <div className="flex justify-between items-center mb-6">
//   <h2 className="text-xl font-semibold mb-4 px-24">Users</h2>
// </div>
//   <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 px-16 md:px-24">
//     {/* First Name */}
//     <div className="flex items-center">
//       <div className="w-full">
//         <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
//           First Name
//         </label>
//         <input
//           type="text"
//           name="FirstName"
//           value={formData?.FirstName || ""}
//           onChange={handleFormChange}
//           required
//           className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//         />
//       </div>
//     </div>

//     {/* Address Line 1 */}
//     <div className="flex items-center">
//       <div className="w-full">
//         <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700">
//           Address Line 1
//         </label>
//         <input
//           type="text"
//           name="addressLine1"
//           value={formData?.addressLine1 || ""}
//           onChange={handleFormChange}
//           required
//           className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//         />
//       </div>
//     </div>

//     {/* Last Name */}
//     <div>
//       <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
//         Last Name
//       </label>
//       <input
//         type="text"
//         name="LastName"
//         value={formData?.LastName || ""}
//         onChange={handleFormChange}
//         required
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//       />
//     </div>

//     {/* Address Line 2 */}
//     <div>
//       <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700">
//         Address Line 2
//       </label>
//       <input
//         type="text"
//         name="addressLine2"
//         value={formData?.addressLine2 || ""}
//         onChange={handleFormChange}
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//       />
//     </div>

//     {/* Email */}
//     <div>
//       <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
//         Email
//       </label>
//       <input
//         type="Email"
//         name="Email"
//         value={formData?.Email || ""}
//         onChange={handleFormChange}
//         required
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//       />
//     </div>
//     <div>
//       <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
//         Password
//       </label>
//                   <input
//                     id="Password"
//                     name="Password"
//                     type="password"
//                     value={formData.Password}
//                     onChange={handleFormChange}
//                     className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   />
//     </div>

//     {/* City */}
//     <div>
//       <label htmlFor="city" className="block text-sm font-medium text-gray-700">
//         City
//       </label>
//       <input
//         type="text"
//         name="city"
//         value={formData?.city || ""}
//         onChange={handleFormChange}
//         required
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//       />
//     </div>

//     {/* Phone Number */}
//     <div>
//       <label htmlFor="PhoneNumber" className="block text-sm font-medium text-gray-700">
//         Phone Number
//       </label>
//       <input
//         type="text"
//         name="PhoneNumber"
//         value={formData?.PhoneNumber || ""}
//         onChange={handleFormChange}
//         required
//         pattern="\d{10}"
//         title="Phone Number should be 10 digits."
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//       />
//     </div>

//     {/* State */}
//     <div>
//       <label htmlFor="state" className="block text-sm font-medium text-gray-700">
//         State
//       </label>
//       <input
//         type="text"
//         name="state"
//         value={formData?.state || ""}
//         onChange={handleFormChange}
//         required
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//       />
//     </div>

//     {/* Gender */}
//     <div>
//       <label htmlFor="Gender" className="block text-sm font-medium text-gray-700">
//         Gender
//       </label>
//       <select
//         name="Gender"
//         value={formData?.Gender || ""}
//         onChange={handleFormChange}
//         required
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 sm:text-sm"
//       >
//         <option value="">Select Gender</option>
//         <option value="Male">Male</option>
//         <option value="Female">Female</option>
//       </select>
//     </div>

//     {/* Zip Code */}
//     <div>
//       <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
//         Zip Code
//       </label>
//       <input
//         type="text"
//         name="zipCode"
//         value={formData?.zipCode || ""}
//         onChange={handleFormChange}
//         required
//         pattern="\d{5,6}"
//         title="Zip Code should be 5 or 6 digits."
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//       />
//     </div>

//     {/* Role ID */}
//     <div>
//       <label htmlFor="roleId" className="block text-sm font-medium text-gray-700">
//         Role ID
//       </label>
//       <select
//         name="roleId"
//         value={formData?.roleId || ""}
//         onChange={handleFormChange}
//         required
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//       >
//         <option value="" disabled>Select a role</option>
//         <option value="admin">Admin</option>
//         <option value="store user">Store User</option>
//         <option value="finance">Finance</option>
//         <option value="production">Production</option>
//         <option value="technical">Technical</option>
//       </select>
//     </div>

//    {/* Profile Image */}
// <div className="flex items-center">
//   <div>
//     <label htmlFor="profileImg" className="block text-sm font-medium text-gray-700">
//       Profile Image
//     </label>
//     <input
//       type="file"
//       accept="image/*"
//       onChange={handleImageChange}
//       className="mt-1 block w-auto text-sm text-gray-500"
//     />
//   </div>

//   {formData?.profileImg && (
//     <img
//       src={formData.profileImg}
//       alt="Profile"
//       className="w-20 h-20 object-cover rounded-full"
//     />
//   )}
// </div>



//     {/* Comments */}
//     <div>
//       <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
//         Comments
//       </label>
//       <textarea
//         name="comments"
//         value={formData?.comments || ""}
//         onChange={handleFormChange}
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//         rows="3"
//       />
//     </div>
//   </div>

//   <div className="mt-6 flex justify-end gap-4">
//     <button
//       type="submit"
//       className="inline-flex justify-center rounded-md border border-transparent bg-custom-darkblue py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-custom-lightblue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//     >
//       Save
//     </button>
//     <button
//                 type="button"
//                 onClick={handleCancel}
//                 className="inline-flex justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-red-200"
//               >
//                 Cancel
//               </button>
//   </div>
// </form>
//         </div>
     
//     </div>
//   );
// }

// export default Userform;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate, useLocation } from "react-router-dom";

// function Userform() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Initialize form data with default values or from location state
//   // const [formData, setFormData] = useState(location.state?.userDetails || {
//   //   TenantID: 1,
//   //   FirstName: "",
//   //   LastName: "",
//   //   Email: "",
//   //   Password: "",
//   //   PhoneNumber: "",
//   //   Gender: "",
//   //   addressLine1: "",
//   //   addressLine2: "",
//   //   city: "",
//   //   state: "",
//   //   zipCode: "",
//   //   roleId: "",
//   //   profileImg: "",
//   //   comments: "",
//   // });

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


// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { UserContext } from '../../Context/userContext';

// function Userform() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { userDetails } = useContext(UserContext);

//   const [formData, setFormData] = useState({
//     FirstName: "",
//     LastName: "",
//     Email: "",
//     PhoneNumber: "",
//     Gender: "",
//   });

// useEffect(() => {
//   console.log("User details from context:", userDetails);

//   if (userDetails && userDetails.user && Object.keys(userDetails.user).length > 0) {
//     const { FirstName, LastName, Email, PhoneNumber } = userDetails.user;

//     console.log("First Name:", FirstName);
//     console.log("Last Name:", LastName);
//     console.log("Email:", Email);
//     console.log("Phone Number:", PhoneNumber);

//     setFormData({
//       FirstName: FirstName || "",
//       LastName: LastName || "",
//       Email: Email || "",
//       PhoneNumber: PhoneNumber || "",
//     });
//   } else {
//     console.log("userDetails is not defined, null, or empty");
//   }
// }, [userDetails]);


//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

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
//       const response = await axios.post(
//         "https://imlystudios-backend-mqg4.onrender.com/api/users/createUser",
//         formData
//       );
//       console.log("Submission successful:", response.data);
//       navigate("/user");
//     } catch (error) {
//       console.error("Submission failed:", error);
//     }
//   };

//   const handleCancel = () => {
//     navigate("/user");
//   };

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
//                   id="FirstName"
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
//                   id="addressLine1"
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
//                 id="LastName"
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
//                 id="addressLine2"
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
//                 id="Email"
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
//                 id="city"
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
//                 id="PhoneNumber"
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
//                 id="state"
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
//                 id="Gender"
//                 name="Gender"
//                 value={formData.Gender || ""}
//                 onChange={handleFormChange}
//                 required
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               >
//                 <option value="">Select Gender</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//                 <option value="Other">Other</option>
//               </select>
//             </div>

//             {/* Zip Code */}
//             <div>
//               <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
//                 Zip Code
//               </label>
//               <input
//                 type="text"
//                 id="zipCode"
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
//                 id="roleId"
//                 name="roleId"
//                 value={formData.roleId || ""}
//                 onChange={handleFormChange}
//                 required
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>

//             {/* Profile Image Upload */}
//             <div>
//               <label htmlFor="profileImg" className="block text-sm font-medium text-gray-700">
//                 Profile Image
//               </label>
//               <input
//                 type="file"
//                 id="profileImg"
//                 name="profileImg"
//                 accept="image/*"
//                 onChange={handleImageChange || ""}
//                 className="mt-1 block w-full text-sm text-gray-500"
//               />
//               {formData.profileImg && (
//                 <img
//                   src={formData.profileImg}
//                   alt="Profile"
//                   className="mt-2 h-16 w-16 rounded-full object-cover"
//                 />
//               )}
//             </div>

//             {/* Comments */}
//             <div className="col-span-1">
//               <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
//                 Comments
//               </label>
//               <textarea
//                 id="comments"
//                 name="comments"
//                 value={formData.comments || ""}
//                 onChange={handleFormChange}
//                 rows={4}
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-center space-x-4 mt-8">
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
// {/* {location.state?.userDetails ? "Update" : "Submit"} */}
// {location.state?.userDetails?.user ? "Update" : "Submit"}

//             </button>
//             <button
//               type="button"
//               onClick={handleCancel}
//               className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Userform;


// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { UserContext } from '../../Context/userContext';

// function Userform() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { userDetails } = useContext(UserContext);

//   // Determine if in edit mode (from location state or context)
//   const isEditMode = location.state?.userDetails?.user || userDetails?.user;
  
//   const [formData, setFormData] = useState({
//     FirstName: "",
//     LastName: "",
//     Email: "",
//     PhoneNumber: "",
//     Gender: "",
//     addressLine1: "",
//     addressLine2: "",
//     city: "",
//     state: "",
//     zipCode: "",
//     roleId: "",
//     profileImg: "",
//     comments: ""
//   });

//   useEffect(() => {
//     if (isEditMode) {
//       const user = location.state?.userDetails?.user || userDetails?.user;
//       setFormData({
//         FirstName: user.FirstName || "",
//         LastName: user.LastName || "",
//         Email: user.Email || "",
//         PhoneNumber: user.PhoneNumber || "",
//         Gender: user.Gender || "",
//         addressLine1: user.addressLine1 || "",
//         addressLine2: user.addressLine2 || "",
//         city: user.city || "",
//         state: user.state || "",
//         zipCode: user.zipCode || "",
//         roleId: user.roleId || "",
//         profileImg: user.profileImg || "",
//         comments: user.comments || ""
//       });
//     } else {
//       // Clear form data if in add mode
//       setFormData({
//         FirstName: "",
//         LastName: "",
//         Email: "",
//         PhoneNumber: "",
//         Gender: "",
//         addressLine1: "",
//         addressLine2: "",
//         city: "",
//         state: "",
//         zipCode: "",
//         roleId: "",
//         profileImg: "",
//         comments: ""
//       });
//     }
//   }, [isEditMode, location.state?.userDetails?.user, userDetails?.user]);

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

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
//       const url = isEditMode 
//         ? "https://imlystudios-backend-mqg4.onrender.com/api/users/updateUser" // Update URL as needed
//         : "https://imlystudios-backend-mqg4.onrender.com/api/users/createUser";
        
//       const response = await axios.post(url, formData);
//       console.log("Submission successful:", response.data);
//       navigate("/user");
//     } catch (error) {
//       console.error("Submission failed:", error);
//     }
//   };

//   const handleCancel = () => {
//     navigate("/user");
//   };
// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { UserContext } from '../../Context/userContext';

// function Userform() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { userDetails } = useContext(UserContext);

//   // Determine if in edit mode (only if user data exists)
//   const isEditMode = Boolean(location.state?.userDetails?.user || userDetails?.user);

//   const [formData, setFormData] = useState({
//     FirstName: "",
//     LastName: "",
//     Email: "",
//     PhoneNumber: "",
//     Gender: "",
//     addressLine1: "",
//     addressLine2: "",
//     city: "",
//     state: "",
//     zipCode: "",
//     roleId: "",
//     profileImg: "",
//     comments: ""
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (isEditMode) {
//       const user = location.state?.userDetails?.user || userDetails?.user;
//       setFormData({
//         FirstName: user.FirstName || "",
//         LastName: user.LastName || "",
//         Email: user.Email || "",
//         PhoneNumber: user.PhoneNumber || "",
//         Gender: user.Gender || "",
//         addressLine1: user.addressLine1 || "",
//         addressLine2: user.addressLine2 || "",
//         city: user.city || "",
//         state: user.state || "",
//         zipCode: user.zipCode || "",
//         roleId: user.roleId || "",
//         profileImg: user.profileImg || "",
//         comments: user.comments || ""
//       });
//     } else {
//       // Clear form data if in add mode
//       setFormData({
//         FirstName: "",
//         LastName: "",
//         Email: "",
//         PhoneNumber: "",
//         Gender: "",
//         addressLine1: "",
//         addressLine2: "",
//         city: "",
//         state: "",
//         zipCode: "",
//         roleId: "",
//         profileImg: "",
//         comments: ""
//       });
//     }
//   }, [isEditMode, location.state?.userDetails?.user, userDetails?.user]);

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

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
//     setLoading(true);
//     setError("");
//     try {
//       const url = isEditMode 
//         ? "https://imlystudios-backend-mqg4.onrender.com/api/users/updateUser" 
//         : "https://imlystudios-backend-mqg4.onrender.com/api/users/createUser";
        
//       const response = await axios.post(url, formData);
//       console.log("Submission successful:", response.data);
//       navigate("/user");
//     } catch (error) {
//       setError("Submission failed. Please try again.");
//       console.error("Submission failed:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCancel = () => {
//     navigate("/user");
//   };

//    return (
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
//                   id="FirstName"
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
//                   id="addressLine1"
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
//                 id="LastName"
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
//                 id="addressLine2"
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
//                 id="Email"
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
//                 id="city"
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
//                 id="PhoneNumber"
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
//                 id="state"
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
//                 id="Gender"
//                 name="Gender"
//                 value={formData.Gender || ""}
//                 onChange={handleFormChange}
//                 required
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               >
//                 <option value="">Select Gender</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//                 <option value="Other">Other</option>
//               </select>
//             </div>

//             {/* Zip Code */}
//             <div>
//               <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
//                 Zip Code
//               </label>
//               <input
//                 type="text"
//                 id="zipCode"
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
//                 id="roleId"
//                 name="roleId"
//                 value={formData.roleId || ""}
//                 onChange={handleFormChange}
//                 required
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>

//             {/* Profile Image Upload */}
//             <div>
//               <label htmlFor="profileImg" className="block text-sm font-medium text-gray-700">
//                 Profile Image
//               </label>
//               <input
//                 type="file"
//                 id="profileImg"
//                 name="profileImg"
//                 accept="image/*"
//                 onChange={handleImageChange || ""}
//                 className="mt-1 block w-full text-sm text-gray-500"
//               />
//               {formData.profileImg && (
//                 <img
//                   src={formData.profileImg}
//                   alt="Profile"
//                   className="mt-2 h-16 w-16 rounded-full object-cover"
//                 />
//               )}
//             </div>

//             {/* Comments */}
//             <div className="col-span-1">
//               <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
//                 Comments
//               </label>
//               <textarea
//                 id="comments"
//                 name="comments"
//                 value={formData.comments || ""}
//                 onChange={handleFormChange}
//                 rows={4}
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-center space-x-4 mt-8">
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
// {/* {location.state?.userDetails ? "Update" : "Submit"} */}
// {location.state?.userDetails?.user ? "Update" : "Submit"}

//             </button>
//             <button
//               type="button"
//               onClick={handleCancel}
//               className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Userform;


import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../Context/userContext';

function Userform() {
  const navigate = useNavigate();
  const location = useLocation();
  const { userDetails } = useContext(UserContext);

  // Determine if in edit mode (only if user data exists)
  const isEditMode = Boolean(location.state?.userDetails?.user || userDetails?.user);

  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNumber: "",
    Gender: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    roleId: "",
    profileImg: "",
    comments: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isEditMode) {
      // Clear form data if in edit mode
      setFormData({
        FirstName: "",
        LastName: "",
        Email: "",
        PhoneNumber: "",
        Gender: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        zipCode: "",
        roleId: "",
        profileImg: "",
        comments: ""
      });
    }
  }, [isEditMode]);

  useEffect(() => {
    if (!isEditMode) return;
    
    // If in edit mode, set form data based on user details
    const user = location.state?.userDetails?.user || userDetails?.user;
    if (user) {
      setFormData({
        FirstName: user.FirstName || "",
        LastName: user.LastName || "",
        Email: user.Email || "",
        PhoneNumber: user.PhoneNumber || "",
        Gender: user.Gender || "",
        addressLine1: user.addressLine1 || "",
        addressLine2: user.addressLine2 || "",
        city: user.city || "",
        state: user.state || "",
        zipCode: user.zipCode || "",
        roleId: user.roleId || "",
        profileImg: user.profileImg || "",
        comments: user.comments || ""
      });
    }
  }, [isEditMode, location.state?.userDetails?.user, userDetails?.user]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          profileImg: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const url = isEditMode 
        ? "https://imlystudios-backend-mqg4.onrender.com/api/users/updateUser" 
        : "https://imlystudios-backend-mqg4.onrender.com/api/users/createUser";
        
      const response = await axios.post(url, formData);
      console.log("Submission successful:", response.data);
      navigate("/user");
    } catch (error) {
      setError("Submission failed. Please try again.");
      console.error("Submission failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/user");
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleFormSubmit}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold mb-4 px-24">Users</h2>
          </div>
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 px-16 md:px-24">
            {/* First Name */}
            <div className="flex items-center">
              <div className="w-full">
                <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="FirstName"
                  name="FirstName"
                  value={formData.FirstName || ""}
                  onChange={handleFormChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Address Line 1 */}
            <div className="flex items-center">
              <div className="w-full">
                <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700">
                  Address Line 1
                </label>
                <input
                  type="text"
                  id="addressLine1"
                  name="addressLine1"
                  value={formData.addressLine1 || ""}
                  onChange={handleFormChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="LastName"
                name="LastName"
                value={formData.LastName || ""}
                onChange={handleFormChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* Address Line 2 */}
            <div>
              <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700">
                Address Line 2
              </label>
              <input
                type="text"
                id="addressLine2"
                name="addressLine2"
                value={formData.addressLine2 || ""}
                onChange={handleFormChange}
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
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

            {/* City */}
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city || ""}
                onChange={handleFormChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="PhoneNumber" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                id="PhoneNumber"
                name="PhoneNumber"
                value={formData.PhoneNumber || ""}
                onChange={handleFormChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* State */}
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state || ""}
                onChange={handleFormChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* Zip Code */}
            <div>
              <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                Zip Code
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode || ""}
                onChange={handleFormChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* Role ID */}
            <div>
              <label htmlFor="roleId" className="block text-sm font-medium text-gray-700">
                Role ID
              </label>
              <input
                type="text"
                id="roleId"
                name="roleId"
                value={formData.roleId || ""}
                onChange={handleFormChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* Profile Image */}
            <div>
              <label htmlFor="profileImg" className="block text-sm font-medium text-gray-700">
                Profile Image
              </label>
              <input
                type="file"
                id="profileImg"
                name="profileImg"
                onChange={handleImageChange}
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              {formData.profileImg && (
                <img src={formData.profileImg} alt="Profile" className="mt-2 w-24 h-24 object-cover rounded-full" />
              )}
            </div>

            {/* Comments */}
            <div>
              <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
                Comments
              </label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments || ""}
                onChange={handleFormChange}
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* Submit and Cancel buttons */}
            <div className="flex justify-between items-center mt-6">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {loading ? "Submitting..." : isEditMode ? "Update User" : "Create User"}
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
        {error && <p className="text-red-600 text-sm mt-4">{error}</p>}
      </div>
    </div>
  );
}

export default Userform;


// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { UserContext } from '../../Context/userContext';

// function Userform() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { userDetails } = useContext(UserContext);

//   const [formData, setFormData] = useState({
//     FirstName: "",
//     LastName: "",
//     Email: "",
//     PhoneNumber: "",
//     Gender: "",
//     addressLine1: "",
//     addressLine2: "",
//     city: "",
//     state: "",
//     zipCode: "",
//     roleId: "",
//     Password: "",
//     profileImg: "",
//     comments: ""
//   });

//   useEffect(() => {
//     console.log("User details from context:", userDetails);

//     if (userDetails && userDetails.user && Object.keys(userDetails.user).length > 0) {
//       const { FirstName, LastName, Email, PhoneNumber, Gender, addressLine1, addressLine2, city, state, zipCode, roleId, profileImg, comments } = userDetails.user;

//       console.log("First Name:", FirstName);
//       console.log("Last Name:", LastName);
//       console.log("Email:", Email);
//       console.log("Phone Number:", PhoneNumber);

//       setFormData({
//         FirstName: FirstName || "",
//         LastName: LastName || "",
//         Email: Email || "",
//         PhoneNumber: PhoneNumber || "",
//         Gender: Gender || "",
//         addressLine1: addressLine1 || "",
//         addressLine2: addressLine2 || "",
//         city: city || "",
//         state: state || "",
//         zipCode: zipCode || "",
//         roleId: roleId || "",
//         Password: "", // Password should be empty initially
//         profileImg: profileImg || "",
//         comments: comments || ""
//       });
//     } else {
//       console.log("userDetails is not defined, null, or empty");
//     }
//   }, [userDetails]);

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

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

//   // const handleFormSubmit = async (event) => {
//   //   event.preventDefault();
//   //   try {
//   //     console.log("Submitted details:", formData);
//   //     const endpoint = location.state?.userDetails?.user ?  "https://imlystudios-backend-mqg4.onrender.com/api/users/createUser":"https://imlystudios-backend-mqg4.onrender.com/api/users/updateUser";
//   //     const response = await axios.post(
//   //       `https://imlystudios-backend-mqg4.onrender.com${endpoint}`,
//   //       formData
//   //     );
//   //     console.log("Submission successful:", response.data);
//   //     navigate("/user");
//   //   } catch (error) {
//   //     console.error("Submission failed:", error);
//   //   }
//   // };

//   // const handleFormSubmit = async (event) => {
//   //   event.preventDefault();
  
//   //   try {
//   //     console.log("Submitted details:", formData);
  
//   //     // Determine the endpoint based on whether the userDetails exist in the state
//   //     let endpoint;
//   //     if (location.state?.userDetails?.user) {
//   //       // Extract userId from userDetails
//   //       // Construct the endpoint for updating user
//   //       endpoint = "https://imlystudios-backend-mqg4.onrender.com/api/users/createUser";
//   //     } else {
//   //       const userId = location.state.userDetails.user.userId; // Adjust the key if needed
//   //       // Construct the endpoint for creating user
//   //       endpoint = `https://imlystudios-backend-mqg4.onrender.com/api/users/updateUser/${userId}`;
//   //     }
  
//   //     // Perform the API request
//   //     const response = await axios.post(endpoint, formData);
//   //     console.log("Submission successful:", response.data);
//   //     navigate("/user");
//   //   } catch (error) {
//   //     console.error("Submission failed:", error);
//   //   }
//   // };
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
  
//     try {
//       console.log("Submitted details:", formData);
  
//       // Check if location.state is defined and contains userDetails
//       let endpoint;
//       if (location.state && location.state.userDetails && location.state.userDetails.user) {
//         // Extract userId from userDetails
//         const userId = location.state.userDetails.user.userId; // Adjust the key if needed
//         // Construct the endpoint for updating user
//         endpoint = `https://imlystudios-backend-mqg4.onrender.com/api/users/updateUser/${userId}`;
//       } else {
//         // Construct the endpoint for creating user
//         endpoint = "https://imlystudios-backend-mqg4.onrender.com/api/users/createUser";
//       }
  
//       // Perform the API request
//       const response = await axios.post(endpoint, formData);
//       console.log("Submission successful:", response.data);
//       navigate("/user");
//     } catch (error) {
//       console.error("Submission failed:", error);
//     }
//   };
  

//   const handleCancel = () => {
//     navigate("/user");
//   };

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
//                   id="FirstName"
//                   name="FirstName"
//                   value={formData.FirstName}
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
//                   id="addressLine1"
//                   name="addressLine1"
//                   value={formData.addressLine1}
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
//                 id="LastName"
//                 name="LastName"
//                 value={formData.LastName}
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
//                 id="addressLine2"
//                 name="addressLine2"
//                 value={formData.addressLine2}
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
//                 id="Email"
//                 name="Email"
//                 value={formData.Email}
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
//                 value={formData.Password}
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
//                 id="city"
//                 name="city"
//                 value={formData.city}
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
//                 id="PhoneNumber"
//                 name="PhoneNumber"
//                 value={formData.PhoneNumber}
//                 onChange={handleFormChange}
//                 required
//                 pattern="\d{10}"
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
//                 id="state"
//                 name="state"
//                 value={formData.state}
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
//                 id="Gender"
//                 name="Gender"
//                 value={formData.Gender}
//                 onChange={handleFormChange}
//                 required
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               >
//                 <option value="" disabled>Select Gender</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>

//             {/* Zip Code */}
//             <div>
//               <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
//                 Zip Code
//               </label>
//               <input
//                 type="text"
//                 id="zipCode"
//                 name="zipCode"
//                 value={formData.zipCode}
//                 onChange={handleFormChange}
//                 required
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
//                 id="roleId"
//                 name="roleId"
//                 value={formData.roleId}
//                 onChange={handleFormChange}
//                 required
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>

//             {/* Comments */}
//             <div className="sm:col-span-2">
//               <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
//                 Comments
//               </label>
//               <textarea
//                 id="comments"
//                 name="comments"
//                 value={formData.comments}
//                 onChange={handleFormChange}
//                 rows={3}
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>

//             {/* Profile Image */}
//             <div className="sm:col-span-2">
//               <label htmlFor="profileImg" className="block text-sm font-medium text-gray-700">
//                 Profile Image
//               </label>
//               <input
//                 type="file"
//                 id="profileImg"
//                 name="profileImg"
//                 accept="image/*"
//                 onChange={handleImageChange}
//                 className="mt-1 block w-full text-gray-700 bg-gray-100 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//               {formData.profileImg && (
//                 <img src={formData.profileImg} alt="Profile" className="mt-2 h-20 w-20 rounded-full object-cover" />
//               )}
//             </div>
//           </div>
//           <div className="mt-8 flex justify-center space-x-4">
//             <button
//               type="submit"
//               className="bg-blue-500 text-white py-2 px-6 rounded-md shadow hover:bg-blue-600"
//             >
//               {location.state?.userDetails?.user ? "Update" : "Submit"}
//             </button>
//             <button
//               type="button"
//               onClick={handleCancel}
//               className="bg-gray-400 text-white py-2 px-6 rounded-md shadow hover:bg-gray-500"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Userform;
