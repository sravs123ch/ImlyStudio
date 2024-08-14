// import React,{useState} from 'react';
// import * as XLSX from 'xlsx';
// import { FaTable } from 'react-icons/fa';
// import { MdAddToPhotos } from "react-icons/md";

// const people = [
//   // Example data structure
//   { name: 'Anil ', title: 'No.72 Jayanagar 6th block, 23rd Cross Rd, Yediyur, Bengaluru, Karnataka 560070', email: 'hello@imlystudio.com', role: '+91 9606032020' },
//   { name: 'Peter ', title: 'ground, 10/1, KV Jairam Rd, Jakkuru Layout, Jakkur, Bengaluru, Karnataka 560064', email: 'hello@imlystudio.com', role: '+91 9606032021' },
//   { name: 'Arief ', title: '208, 2nd Floor, Kedia Arcade, 92, Infantry Rd, Tasker Town, Shivaji Nagar, Bengaluru, Karnataka 560001', email: 'hello@imlystudio.com', role: '+91 9606032022' },
//   { name: 'Ravi ', title: '1145, First Floor, Club Road 22nd Cross Rd, 24th Main Rd, Sector 2, HSR Layout, Bengaluru, Karnataka 560102', email: 'hello@imlystudio.com', role: '+91 9606032023' },
//   { name: 'Ram', title: '519, Chinmaya Mission Hospital Rd, 12th Main Road, Indiranagar, Indira Nagar 1st Stage,Indiranagar, Bengaluru, Karnataka 560038', email: 'hello@imlystudio.com', role: '+91 9606032023' },
 
//   // Add more people as needed
// ];

// export default function Stores() {
//   const [showForm, setShowForm] = useState(false);
//   const [storeManagers, setStoreManagers] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     location: "",
//     email: "",
//     mobile: "",
//   });

//   const handleExportUsersData = () => {
//     exportToExcel(people,storeManagers, 'StoreManagers');
//   };

//   const exportToExcel = (data, fileName) => {
//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
//     XLSX.writeFile(workbook, `${fileName}.xlsx`);
//   };

//   const handleStoreManagerClick = () => {
//     setShowForm(!showForm);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setStoreManagers([...storeManagers, formData]);
//     setFormData({ name: '', location: '', email: '', mobile: '' });
//     setShowForm(false);
//   };
  
//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4  ml-10 lg:ml-72 w-auto">
//       <div className="sm:flex sm:items-center">
//         <div className="sm:flex-auto">
//           {/* <h1 className="text-base font-semibold leading-6 text-custom-heading">Users</h1> */}
//           <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-custom-heading">Stores</h2>

//           <p className="mt-2 text-sm text-gray-700">
//             A list of all the Stores in our account including their Managername, location, email, and mobileno.
//           </p>
//         </div>
//         <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
//           <button
//         type="button"
//         className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2  text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//         onClick={handleExportUsersData}
//       >
//         <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//         Export Stores Details
//       </button>
//         </div>
//       </div>
//       <div className="mt-8 flow-root">
//         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//             <table className="min-w-full divide-y divide-gray-300">
//               <thead>
//                 <tr>
//                   <th
//                     scope="col"
//                     className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
//                   >
//                   Store Manager  Name
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
// Location                  </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Email
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Mobile No
//                   </th>
//                   {/* <th
//                     scope="col"
//                     className="relative py-3.5 pl-3 pr-4 sm:pr-0"
//                   >
//                      <span className="sr-only">Edit</span> 
//                   </th> */}
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {people.map((person) => (
//                   <tr key={person.email}>
//                     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
//                       {person.name}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {person.title}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {person.email}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {person.role}
//                     </td>
//                     {/* <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
//                       <a href="#" className="text-indigo-600 hover:text-indigo-900">
//                         Edit <span className="sr-only">, {person.name}</span>
//                       </a>
//                     </td> */}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       <div className="sm:flex sm:items-center">
//         <div className="sm:flex-auto">
//           <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-custom-heading">
//             Stores
//           </h2>
//           <p className="mt-2 text-sm text-gray-700">
//             A list of all the Stores in our account including their Manager
//             name, location, email, and mobile number.
//           </p>
//         </div>
//         <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex sm:flex-row sm:space-x-4">
//         <button
//             type="button"
//             className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             onClick={handleExportUsersData}
//           >
//             <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//             Export Stores Details
//           </button>

//           <button
//             type="button"
//             className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             onClick={handleStoreManagerClick}
//           >
//             <MdAddToPhotos  aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//             Store Manager
//           </button>
//         </div>
//       </div>

//       {showForm && (
//         <div className="mt-4 p-4 bg-white shadow-md rounded-md">
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 Store Manager Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Enter name"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 Location
//               </label>
//               <input
//                 type="text"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Enter location"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Enter email"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 Mobile Number
//               </label>
//               <input
//                 type="tel"
//                 name="mobile"
//                 value={formData.mobile}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Enter mobile number"
//               />
//             </div>

//             <button
//               type="submit"
//               className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       )}

//       <div className="mt-8 flow-root">
//         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//             <table className="min-w-full divide-y divide-gray-300">
//               <thead>
//                 <tr>
//                   <th
//                     scope="col"
//                     className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
//                   >
//                     Store Manager Name
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Location
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Email
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Mobile No
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {storeManagers.map((manager, index) => (
//                   <tr key={index}>
//                     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
//                       {manager.name}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {manager.location}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {manager.email}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {manager.mobile}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       <div className="sm:flex sm:items-center">
//         <div className="sm:flex-auto">
//           <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-custom-heading">
//             Stores
//           </h2>
//           <p className="mt-2 text-sm text-gray-700">
//             A list of all the Stores in our account including their Manager
//             name, location, email, and mobile number.
//           </p>
//         </div>
//         <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex sm:flex-row sm:space-x-4">
//           <button
//             type="button"
//             className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             onClick={handleExportUsersData}
//           >
//             <span className="text-xl font-bold">+</span>
//             Export Stores Details
//           </button>

//           <button
//             type="button"
//             className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             onClick={handleStoreManagerClick}
//           >
//             <span className="text-xl font-bold">+</span>
//             Store Manager
//           </button>
//         </div>
//       </div>

//       {showForm && (
//         <div className="mt-4 p-4 bg-white shadow-md rounded-md">
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 Store Manager Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Enter name"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 Location
//               </label>
//               <input
//                 type="text"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Enter location"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Enter email"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 Mobile Number
//               </label>
//               <input
//                 type="tel"
//                 name="mobile"
//                 value={formData.mobile}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Enter mobile number"
//               />
//             </div>

//             <button
//               type="submit"
//               className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       )}

//       <div className="mt-8 flow-root">
//         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//             <table className="min-w-full divide-y divide-gray-300">
//               <thead>
//                 <tr>
//                   <th
//                     scope="col"
//                     className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
//                   >
//                     Store Manager Name
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Location
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Email
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Mobile No
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {storeManagers.map((manager, index) => (
//                   <tr key={index}>
//                     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
//                       {manager.name}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {manager.location}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {manager.email}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {manager.mobile}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// import React, { useState } from 'react';
// import * as XLSX from 'xlsx';
// import { FaTable } from 'react-icons/fa';
// import { MdAddToPhotos } from 'react-icons/md';

// const people = [
//   // { name: 'Anil', title: 'No.72 Jayanagar 6th block, 23rd Cross Rd, Yediyur, Bengaluru, Karnataka 560070', email: 'hello@imlystudio.com', role: '+91 9606032020' },
//   // { name: 'Peter', title: 'ground, 10/1, KV Jairam Rd, Jakkuru Layout, Jakkur, Bengaluru, Karnataka 560064', email: 'hello@imlystudio.com', role: '+91 9606032021' },
//   { name: 'Arief', title: '208, 2nd Floor, Kedia Arcade, 92, Infantry Rd, Tasker Town, Shivaji Nagar, Bengaluru, Karnataka 560001', email: 'hello@imlystudio.com', role: '+91 9606032022' },
//   { name: 'Ravi', title: '1145, First Floor, Club Road 22nd Cross Rd, 24th Main Rd, Sector 2, HSR Layout, Bengaluru, Karnataka 560102', email: 'hello@imlystudio.com', role: '+91 9606032023' },
//   { name: 'Ram', title: '519, Chinmaya Mission Hospital Rd, 12th Main Road, Indiranagar, Indira Nagar 1st Stage,Indiranagar, Bengaluru, Karnataka 560038', email: 'hello@imlystudio.com', role: '+91 9606032023' },
// ];

// export default function Stores() {
//   const [showForm, setShowForm] = useState(false);
//   const [storeManagers, setStoreManagers] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     location: "",
//     email: "",
//     mobile: "",
//   });

//   const handleExportUsersData = () => {
//     const allData = [...people, ...storeManagers];
//     exportToExcel(allData, 'StoreManagers');
//   };

//   const exportToExcel = (data, fileName) => {
//     const worksheet = XLSX.utils.json_to_sheet(data.map(item => ({
//       'Store Manager Name': item.name,
//       'Location': item.title || item.location,
//       'Email': item.email,
//       'Mobile No': item.role || item.mobile
//     })));
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
//     XLSX.writeFile(workbook, `${fileName}.xlsx`);
//   };

//   const handleStoreManagerClick = () => {
//     setShowForm(!showForm);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setStoreManagers([...storeManagers, formData]);
//     setFormData({ name: '', location: '', email: '', mobile: '' });
//     setShowForm(false);
//   };

//   const allManagers = [...people, ...storeManagers];

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       <div className="sm:flex sm:items-center">
//         <div className="sm:flex-auto">
//           <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-custom-heading">
//             Stores
//           </h2>
//           <p className="mt-2 text-sm text-gray-700">
//             A list of all the Stores in our account including their Manager
//             name, location, email, and mobile number.
//           </p>
//         </div>
//         <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex sm:flex-row sm:space-x-4">
//           <button
//             type="button"
//             className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             onClick={handleExportUsersData}
//           >
//             <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//             Export Stores Details
//           </button>

//           <button
//             type="button"
//             className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             onClick={handleStoreManagerClick}
//           >
//             <MdAddToPhotos aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//             Store Manager
//           </button>
//         </div>
//       </div>

//       {showForm && (
//         <div className="mt-4 p-4 bg-white shadow-md rounded-md">
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 Store Manager Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Enter name"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 Location
//               </label>
//               <input
//                 type="text"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Enter location"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Enter email"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 Mobile Number
//               </label>
//               <input
//                 type="tel"
//                 name="mobile"
//                 value={formData.mobile}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Enter mobile number"
//               />
//             </div>

//             <button
//               type="submit"
//               className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       )}

//       <div className="mt-8 flow-root">
//         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//             <table className="min-w-full divide-y divide-gray-300">
//               <thead>
//                 <tr>
//                   <th
//                     scope="col"
//                     className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
//                   >
//                     Store Manager Name
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Location
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Email
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Mobile No
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {allManagers.map((manager, index) => (
//                   <tr key={index}>
//                     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
//                       {manager.name}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {manager.title || manager.location}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {manager.email}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {manager.role || manager.mobile}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useState } from 'react';
// import * as XLSX from 'xlsx';
// import { FaTable } from 'react-icons/fa';
// import { MdAddToPhotos, MdEdit, MdDelete } from 'react-icons/md';

// const people = [
//   // Sample static data
//   { name: 'Arief', title: '208, 2nd Floor, Kedia Arcade, 92, Infantry Rd, Tasker Town, Shivaji Nagar, Bengaluru, Karnataka 560001', email: 'hello@imlystudio.com', role: '+91 9606032022' },
//   { name: 'Ravi', title: '1145, First Floor, Club Road 22nd Cross Rd, 24th Main Rd, Sector 2, HSR Layout, Bengaluru, Karnataka 560102', email: 'hello@imlystudio.com', role: '+91 9606032023' },
//   { name: 'Ram', title: '519, Chinmaya Mission Hospital Rd, 12th Main Road, Indiranagar, Indira Nagar 1st Stage, Indiranagar, Bengaluru, Karnataka 560038', email: 'hello@imlystudio.com', role: '+91 9606032023' },
// ];

// export default function Stores() {
//   const [showForm, setShowForm] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);
//   const [storeManagers, setStoreManagers] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     location: "",
//     email: "",
//     mobile: "",
//   });

//   const handleExportUsersData = () => {
//     const allData = [...people, ...storeManagers];
//     exportToExcel(allData, 'StoreManagers');
//   };

//   const exportToExcel = (data, fileName) => {
//     const worksheet = XLSX.utils.json_to_sheet(data.map(item => ({
//       'Store Manager Name': item.name,
//       'Location': item.title || item.location,
//       'Email': item.email,
//       'Mobile No': item.role || item.mobile
//     })));
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
//     XLSX.writeFile(workbook, `${fileName}.xlsx`);
//   };

//   const handleStoreManagerClick = () => {
//     setShowForm(!showForm);
//     setEditIndex(null); // Reset edit index when showing form
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (editIndex !== null) {
//       // Editing an existing store manager
//       const updatedManagers = [...storeManagers];
//       updatedManagers[editIndex] = formData;
//       setStoreManagers(updatedManagers);
//     } else {
//       // Adding a new store manager
//       setStoreManagers([...storeManagers, formData]);
//     }
//     setFormData({ name: '', location: '', email: '', mobile: '' });
//     setShowForm(false);
//   };

//   const handleEdit = (index) => {
//     setFormData(storeManagers[index]);
//     setEditIndex(index);
//     setShowForm(true);
//   };

//   const handleDelete = (index) => {
//     const updatedManagers = storeManagers.filter((_, i) => i !== index);
//     setStoreManagers(updatedManagers);
//   };

//   const allManagers = [...people, ...storeManagers];

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       <div className="sm:flex sm:items-center">
//         <div className="sm:flex-auto">
//           <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-custom-heading">
//             Stores
//           </h2>
//           <p className="mt-2 text-sm text-gray-700">
//             A list of all the Stores in our account including their Manager
//             name, location, email, and mobile number.
//           </p>
//         </div>
//         <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex sm:flex-row sm:space-x-4">
//           <button
//             type="button"
//             className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             onClick={handleExportUsersData}
//           >
//             <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//             Export Stores Details
//           </button>

//           <button
//             type="button"
//             className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             onClick={handleStoreManagerClick}
//           >
//             <MdAddToPhotos aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//             {editIndex !== null ? 'Edit Store Manager' : 'Add Store Manager'}
//           </button>
//         </div>
//       </div>

//       {showForm && (
//         <div className="mt-4 p-4 bg-white shadow-md rounded-md">
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 Store Manager Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Enter name"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 Location
//               </label>
//               <input
//                 type="text"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Enter location"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Enter email"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 Mobile Number
//               </label>
//               <input
//                 type="tel"
//                 name="mobile"
//                 value={formData.mobile}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Enter mobile number"
//               />
//             </div>

//             <button
//               type="submit"
//               className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       )}

//       <div className="mt-8 flow-root">
//         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//             <table className="min-w-full divide-y divide-gray-300">
//               <thead>
//                 <tr>
//                   <th
//                     scope="col"
//                     className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
//                   >
//                     Store Manager Name
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Location
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Email
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Mobile No
//                   </th>
//                   <th
//                     scope="col"
//                     className="relative py-3.5 pl-3 pr-4 sm:pr-0"
//                   >
//                     <span className="sr-only">Actions</span>
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {allManagers.map((person, index) => (
//                   <tr key={index}>
//                     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
//                       {person.name}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {person.title || person.location}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {person.email}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {person.role || person.mobile}
//                     </td>
//                     <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
//                       <button
//                         type="button"
//                         onClick={() => handleEdit(index)}
//                         className="text-indigo-600 hover:text-indigo-900"
//                       >
//                         <MdEdit aria-hidden="true" className="inline-block h-5 w-5" />
//                       </button>
//                       <button
//                         type="button"
//                         onClick={() => handleDelete(index)}
//                         className="text-red-500 hover:text-red-800 ml-4"
//                       >
//                         <MdDelete aria-hidden="true" className="inline-block h-5 w-5" />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import * as XLSX from 'xlsx';
// import { FaTable } from 'react-icons/fa';
// import { MdAddToPhotos, MdEdit, MdDelete } from 'react-icons/md';

// const people = [
//   // Sample static data
//   { name: 'Arief', title: '208, 2nd Floor, Kedia Arcade, 92, Infantry Rd, Tasker Town, Shivaji Nagar, Bengaluru, Karnataka 560001', email: 'hello@imlystudio.com', role: '+91 9606032022' },
//   { name: 'Ravi', title: '1145, First Floor, Club Road 22nd Cross Rd, 24th Main Rd, Sector 2, HSR Layout, Bengaluru, Karnataka 560102', email: 'hello@imlystudio.com', role: '+91 9606032023' },
//   { name: 'Ram', title: '519, Chinmaya Mission Hospital Rd, 12th Main Road, Indiranagar, Indira Nagar 1st Stage, Indiranagar, Bengaluru, Karnataka 560038', email: 'hello@imlystudio.com', role: '+91 9606032023' },
// ];

// export default function Stores() {
//   const [showForm, setShowForm] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);
//   const [storeManagers, setStoreManagers] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     location: "",
//     email: "",
//     mobile: "",
//   });

//   const handleExportUsersData = () => {
//     const allData = [...people, ...storeManagers];
//     exportToExcel(allData, 'StoreManagers');
//   };

//   const exportToExcel = (data, fileName) => {
//     const worksheet = XLSX.utils.json_to_sheet(data.map(item => ({
//       'Store Manager Name': item.name,
//       'Location': item.title || item.location,
//       'Email': item.email,
//       'Mobile No': item.role || item.mobile
//     })));
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
//     XLSX.writeFile(workbook, `${fileName}.xlsx`);
//   };

//   const handleStoreManagerClick = () => {
//     setShowForm(!showForm);
//     setEditIndex(null); // Reset edit index when showing form
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (editIndex !== null) {
//       // Editing an existing store manager
//       const updatedManagers = [...storeManagers];
//       updatedManagers[editIndex] = formData;
//       setStoreManagers(updatedManagers);
//     } else {
//       // Adding a new store manager
//       setStoreManagers([...storeManagers, formData]);
//     }
//     setFormData({ name: '', location: '', email: '', mobile: '' });
//     setShowForm(false);
//   };

//   const handleEdit = (index) => {
//     setFormData(storeManagers[index]);
//     setEditIndex(index);
//     setShowForm(true);
//   };

//   const handleDelete = (index) => {
//     const updatedManagers = storeManagers.filter((_, i) => i !== index);
//     setStoreManagers(updatedManagers);
//   };

//   const allManagers = [...people, ...storeManagers];

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       <div className="sm:flex sm:items-center">
//         <div className="sm:flex-auto">
//           <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-custom-heading">
//             Stores
//           </h2>
//           <p className="mt-2 text-sm text-gray-700">
//             A list of all the Stores in our account including their Manager
//             name, location, email, and mobile number.
//           </p>
//         </div>
//         <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex sm:flex-row sm:space-x-4">
//           <button
//             type="button"
//             className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700"
//             onClick={handleExportUsersData}
//           >
//             <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//             Export Stores Details
//           </button>

//           <button
//             type="button"
//             className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700"
//             onClick={handleStoreManagerClick}
//           >
//             <MdAddToPhotos aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//             {editIndex !== null ? 'Edit Store Manager' : 'Add Store Manager'}
//           </button>
//         </div>
//       </div>

//       {showForm && (
//         <div className="mt-4 p-4 bg-white shadow-md rounded-md">
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 Store Manager Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
//                 placeholder="Enter name"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 Location
//               </label>
//               <input
//                 type="text"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
//                 placeholder="Enter location"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
//                 placeholder="Enter email"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 Mobile Number
//               </label>
//               <input
//                 type="tel"
//                 name="mobile"
//                 value={formData.mobile}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
//                 placeholder="Enter mobile number"
//               />
//             </div>

//             <button
//               type="submit"
//               className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700"
//             >
//               Add Manager
//             </button>
//           </form>
//         </div>
//       )}

//       <div className="mt-8 flow-root">
//         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//             <table className="min-w-full divide-y divide-gray-300">
//               <thead>
//                 <tr>
//                   <th
//                     scope="col"
//                     className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
//                   >
//                     Store Manager Name
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Location
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Email
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Mobile Number
//                   </th>
//                     <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Edit
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Delete
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200 bg-white">
//                 {allManagers.map((person, index) => (
//                   <tr key={index}>
//                     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
//                       {person.name}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {person.title || person.location}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {person.email}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {person.role || person.mobile}
//                     </td>
//                     <td className="whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-0">
//                       <button
//                         onClick={() => handleEdit(index)}
//                         className="text-indigo-600 hover:text-indigo-900"
//                       >
//                         <MdEdit aria-hidden="true" />
//                       </button>
//                       </td>
//                       <td className="whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-0">
//                       <button
//                         onClick={() => handleDelete(index)}
//                         className="text-red-600 hover:text-red-900 ml-4"
//                       >
//                         <MdDelete aria-hidden="true" />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { FaTable } from 'react-icons/fa';
import { MdAddToPhotos, MdEdit, MdDelete } from 'react-icons/md';

// const people = [
//   { name: 'Arief', title: '208, 2nd Floor, Kedia Arcade, 92, Infantry Rd, Tasker Town, Shivaji Nagar, Bengaluru, Karnataka 560001', email: 'hello@imlystudio.com', role: '+91 9606032022' },
//   { name: 'Ravi', title: '1145, First Floor, Club Road 22nd Cross Rd, 24th Main Rd, Sector 2, HSR Layout, Bengaluru, Karnataka 560102', email: 'hello@imlystudio.com', role: '+91 9606032023' },
//   { name: 'Ram', title: '519, Chinmaya Mission Hospital Rd, 12th Main Road, Indiranagar, Indira Nagar 1st Stage, Indiranagar, Bengaluru, Karnataka 560038', email: 'hello@imlystudio.com', role: '+91 9606032023' },
// ];

export default function Stores() {
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [storeManagers, setStoreManagers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    email: "",
    mobile: "",
  });

  // const handleExportUsersData = () => {
  //   const allData = [...people, ...storeManagers];
  //   exportToExcel(allData, 'StoreManagers');
  // };
  const handleExportUsersData = () => {
    const allData = [ ...storeManagers];
    exportToExcel(allData, 'StoreManagers');
  };
  const exportToExcel = (data, fileName) => {
    const worksheet = XLSX.utils.json_to_sheet(data.map(item => ({
      'Store Manager Name': item.name,
      'Location': item.title || item.location,
      'Email': item.email,
      'Mobile No': item.role || item.mobile
    })));
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  const handleStoreManagerClick = () => {
    setShowForm(!showForm);
    setEditIndex(null); // Reset edit index when showing form
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null && storeManagers[editIndex]) {
      // Editing an existing store manager
      const updatedManagers = [...storeManagers];
      updatedManagers[editIndex] = formData;
      setStoreManagers(updatedManagers);
    } else {
      // Adding a new store manager
      setStoreManagers([...storeManagers, formData]);
    }
    setFormData({ name: '', location: '', email: '', mobile: '' });
    setShowForm(false);
  };

  const handleEdit = (index) => {
    if (index >= 0 && index < storeManagers.length) {
      setFormData(storeManagers[index]);
      setEditIndex(index);
      setShowForm(true);
    } else {
      console.error('Invalid edit index');
    }
  };

  const handleDelete = (index) => {
    if (index >= 0 && index < storeManagers.length) {
      const updatedManagers = storeManagers.filter((_, i) => i !== index);
      setStoreManagers(updatedManagers);
    } else {
      console.error('Invalid delete index');
    }
  };

  // const allManagers = [...people, ...storeManagers];
  const allManagers = [ ...storeManagers];
  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-custom-heading">
            Stores
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the Stores in our account including their Manager
            name, location, email, and mobile number.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex sm:flex-row sm:space-x-4">
          <button
            type="button"
            className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700"
            onClick={handleExportUsersData}
          >
            <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
            Export Stores Details
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700"
            onClick={handleStoreManagerClick}
          >
            <MdAddToPhotos aria-hidden="true" className="-ml-0.5 h-4 w-4" />
            {editIndex !== null ? 'Edit Store Manager' : 'Add Store Manager'}
          </button>
        </div>
      </div>
      {showForm && (
        <div className="mt-4 p-4 bg-white shadow-md rounded-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Store Manager Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                placeholder="Enter name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                placeholder="Enter location"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                placeholder="Enter mobile number"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700"
            >
              {editIndex !== null ? 'Update Manager' : 'Add Manager'}
            </button>
          </form>
        </div>
      )}

      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900"
                  >
                    Manager Name
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900"
                  >
                    Location
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900"
                  >
                    Mobile No
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900"
                  >
                    Edit
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900"
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {allManagers.map((manager, index) => (
                  <tr key={index}>
                    <td className="py-3.5 px-4 text-sm text-gray-900">
                      {manager.name}
                    </td>
                    <td className="py-3.5 px-4 text-sm text-gray-900">
                      {manager.title || manager.location}
                    </td>
                    <td className="py-3.5 px-4 text-sm text-gray-900">
                      {manager.email}
                    </td>
                    <td className="py-3.5 px-4 text-sm text-gray-900">
                      {manager.role || manager.mobile}
                    </td>
                    <td className="py-3.5 px-4 text-sm text-gray-900">
                      <button
                        type="button"
                        onClick={() => handleEdit(index)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <MdEdit aria-hidden="true" className="h-5 w-5" />
                      </button>
                      </td>
                      <td className="py-3.5 px-4 text-sm text-gray-900">
                      <button
                        type="button"
                        onClick={() => handleDelete(index)}
                        className="text-red-500 hover:text-red-700 ml-2"
                      >
                        <MdDelete aria-hidden="true" className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
