
// import React, { useState } from 'react';
// import * as XLSX from 'xlsx';
// import { FaTable } from 'react-icons/fa';
// import { MdAddToPhotos, MdEdit, MdDelete } from 'react-icons/md';

// // const people = [
// //   { name: 'Arief', title: '208, 2nd Floor, Kedia Arcade, 92, Infantry Rd, Tasker Town, Shivaji Nagar, Bengaluru, Karnataka 560001', email: 'hello@imlystudio.com', role: '+91 9606032022' },
// //   { name: 'Ravi', title: '1145, First Floor, Club Road 22nd Cross Rd, 24th Main Rd, Sector 2, HSR Layout, Bengaluru, Karnataka 560102', email: 'hello@imlystudio.com', role: '+91 9606032023' },
// //   { name: 'Ram', title: '519, Chinmaya Mission Hospital Rd, 12th Main Road, Indiranagar, Indira Nagar 1st Stage, Indiranagar, Bengaluru, Karnataka 560038', email: 'hello@imlystudio.com', role: '+91 9606032023' },
// // ];

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

//   // const handleExportUsersData = () => {
//   //   const allData = [...people, ...storeManagers];
//   //   exportToExcel(allData, 'StoreManagers');
//   // };
//   const handleExportUsersData = () => {
//     const allData = [ ...storeManagers];
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
//     if (editIndex !== null && storeManagers[editIndex]) {
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
//     if (index >= 0 && index < storeManagers.length) {
//       setFormData(storeManagers[index]);
//       setEditIndex(index);
//       setShowForm(true);
//     } else {
//       console.error('Invalid edit index');
//     }
//   };

//   const handleDelete = (index) => {
//     if (index >= 0 && index < storeManagers.length) {
//       const updatedManagers = storeManagers.filter((_, i) => i !== index);
//       setStoreManagers(updatedManagers);
//     } else {
//       console.error('Invalid delete index');
//     }
//   };

//   // const allManagers = [...people, ...storeManagers];
//   const allManagers = [ ...storeManagers];
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
// {showForm && (
//   <div className="mt-4 p-4 bg-white shadow-md rounded-md max-w-lg mx-auto">
//     <form onSubmit={handleSubmit}>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">
//           Store Manager Name
//         </label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           className="mt-1 block w-full sm:w-80 md:w-64 lg:w-80 xl:w-96 mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
//           placeholder="Enter name"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">
//           Location
//         </label>
//         <input
//           type="text"
//           name="location"
//           value={formData.location}
//           onChange={handleChange}
//           className="mt-1 block w-full sm:w-80 md:w-64 lg:w-80 xl:w-96 mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
//           placeholder="Enter location"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">
//           Email
//         </label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className="mt-1 block w-full sm:w-80 md:w-64 lg:w-80 xl:w-96 mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
//           placeholder="Enter email"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">
//           Mobile Number
//         </label>
//         <input
//           type="tel"
//           name="mobile"
//           value={formData.mobile}
//           onChange={handleChange}
//           className="mt-1 block w-full sm:w-80 md:w-64 lg:w-80 xl:w-96 mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
//           placeholder="Enter mobile number"
//         />
//       </div>

//       <button
//         type="submit"
//         className="items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 mx-auto block"
//       >
//         {editIndex !== null ? 'Update Manager' : 'Add Manager'}
//       </button>
//     </form>
//   </div>
// )}


//       <div className="mt-8 flow-root">
//         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//             <table className="min-w-full divide-y divide-gray-300">
//               <thead>
//                 <tr>
//                   <th
//                     scope="col"
//                     className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Manager Name
//                   </th>
//                   <th
//                     scope="col"
//                     className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Location
//                   </th>
//                   <th
//                     scope="col"
//                     className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Email
//                   </th>
//                   <th
//                     scope="col"
//                     className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Mobile No
//                   </th>
//                   <th
//                     scope="col"
//                     className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Edit
//                   </th>
//                   <th
//                     scope="col"
//                     className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Delete
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {allManagers.map((manager, index) => (
//                   <tr key={index}>
//                     <td className="py-3.5 px-4 text-sm text-gray-900">
//                       {manager.name}
//                     </td>
//                     <td className="py-3.5 px-4 text-sm text-gray-900">
//                       {manager.title || manager.location}
//                     </td>
//                     <td className="py-3.5 px-4 text-sm text-gray-900">
//                       {manager.email}
//                     </td>
//                     <td className="py-3.5 px-4 text-sm text-gray-900">
//                       {manager.role || manager.mobile}
//                     </td>
//                     <td className="py-3.5 px-4 text-sm text-gray-900">
//                       <button
//                         type="button"
//                         onClick={() => handleEdit(index)}
//                         className="text-blue-500 hover:text-blue-700"
//                       >
//                         <MdEdit aria-hidden="true" className="h-5 w-5" />
//                       </button>
//                       </td>
//                       <td className="py-3.5 px-4 text-sm text-gray-900">
//                       <button
//                         type="button"
//                         onClick={() => handleDelete(index)}
//                         className="text-red-500 hover:text-red-700 ml-2"
//                       >
//                         <MdDelete aria-hidden="true" className="h-5 w-5" />
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

// import React, { useState, useEffect } from "react";
// import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import * as XLSX from 'xlsx';
// import TableFooter from '@mui/material/TableFooter';
// import TablePagination from '@mui/material/TablePagination';
// import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
// import { FaTable, FaPlus } from 'react-icons/fa';
// import { IoIosSearch } from "react-icons/io";
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
// import PropTypes from 'prop-types'; // For prop types validation

// import LastPageIcon from '@mui/icons-material/LastPage';
// import FirstPageIcon from '@mui/icons-material/FirstPage';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';

 
// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: '#003375', // Dark blue color
//     color: theme.palette.common.white,
//     fontWeight: 'bold',
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));
 
// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: theme.palette.action.hover,
//   },
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));
 
// const initialPeople = [
//   // {
//   //   name: "Jane Smith",
//   //   title: "Chennai",
//   //   email: "jane.smith@example.com",
//   //   role: "7702253548",
//   //   gender: "Female",
//   //   addressLine1: "123 Main St",
//   //   addressLine2: "Apt 4B",
//   //   city: "Chennai",
//   //   state: "Tamil Nadu",
//   //   country: "India",
//   // },
//   // {
//   //   name: "Alice Johnson",
//   //   title: "Hyderabad",
//   //   email: "alice.johnson@example.com",
//   //   role: "7702253549",
//   //   gender: "Female",
//   //   addressLine1: "456 Oak St",
//   //   addressLine2: "Suite 12",
//   //   city: "Hyderabad",
//   //   state: "Telangana",
//   //   country: "India",
//   // },
//   // {
//   //   name: "Robert Brown",
//   //   title: "Mumbai",
//   //   email: "robert.brown@example.com",
//   //   role: "7702253550",
//   //   gender: "Male",
//   //   addressLine1: "789 Pine St",
//   //   addressLine2: "",
//   //   city: "Mumbai",
//   //   state: "Maharashtra",
//   //   country: "India",
//   // },
//   // {
//   //   name: "Michael Davis",
//   //   title: "Delhi",
//   //   email: "michael.davis@example.com",
//   //   role: "7702253551",
//   //   gender: "Male",
//   //   addressLine1: "101 Maple St",
//   //   addressLine2: "Apt 3C",
//   //   city: "Delhi",
//   //   state: "Delhi",
//   //   country: "India",
//   // },

//   {
//     name: "ImlyStudio-Jakkur",
//     title: "Bengaluru",
//     email: "jakkur@imlystudio.com",
//     role: "7702253548",
//     gender: "Female",
//     addressLine1: "123 Main St",
//     addressLine2: "Apt 4B",
//     city: "Bengaluru",
//     state: "Karnataka",
//     country: "India",
//   },
//   {
//     name: "ImlyStudio-InfantryRoad",
//     title: "Bengaluru",
//     email: "infantryroad@imlystudio.com",
//     role: "7702253549",
//     gender: "Female",
//     addressLine1: "456 Oak St",
//     addressLine2: "Suite 12",
//     city: "Bengaluru",
//     state: "Karnataka",
//     country: "India",
//   },
//   {
//     name: "ImlyStudio-HSRLayout",
//     title: "Bengaluru",
//     email: "hsrlayout@imlystudio.com",
//     role: "7702253550",
//     gender: "Male",
//     addressLine1: "789 Pine St",
//     addressLine2: "",
//     city: "Bengaluru",
//     state: "Karnataka",
//     country: "India",
//   },
//   {
//     name: "ImlyStudio-Indiranagar",
//     title: "Bengaluru",
//     email: "indiranagar@imlystudio.com",
//     role: "7702253551",
//     gender: "Male",
//     addressLine1: "101 Maple St",
//     addressLine2: "Apt 3C",
//     city: "Bengaluru",
//     state: "Karnataka",
//     country: "India",
//   },

// ];

// function TablePaginationActions(props) {
//   const { count, page, rowsPerPage, onPageChange } = props;
//   const theme = useTheme();

//   const handleFirstPageButtonClick = (event) => {
//     onPageChange(event, 0);
//   };

//   const handleBackButtonClick = (event) => {
//     onPageChange(event, page - 1);
//   };

//   const handleNextButtonClick = (event) => {
//     onPageChange(event, page + 1);
//   };

//   const handleLastPageButtonClick = (event) => {
//     onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
//   };

//   return (
//     <Box sx={{ flexShrink: 0, ml: 2.5 }}>
//       <IconButton
//         onClick={handleFirstPageButtonClick}
//         disabled={page === 0}
//         aria-label="first page"
//       >
//         {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
       
//       </IconButton>
//         <IconButton
//         onClick={handleBackButtonClick}
//         disabled={page === 0}
//         aria-label="previous page"
//       >
//         {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//       </IconButton>
//       <IconButton
//         onClick={handleNextButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="next page"
//       >
//         {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//       </IconButton>
//       <IconButton
//         onClick={handleLastPageButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="last page"
//       >
//         {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
//       </IconButton>
//     </Box>
//   );
// }

// TablePaginationActions.propTypes = {
//   count: PropTypes.number.isRequired,
//   onPageChange: PropTypes.func.isRequired,
//   page: PropTypes.number.isRequired,
//   rowsPerPage: PropTypes.number.isRequired,
// };
 
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
 
//   const handleExportUsersData = () => {
//     exportToExcel(people, 'Customers');
//   };
 
  
 
 
//   const [paginatedPeople, setPaginatedPeople] = useState([]);


//   // Handle page change
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   // Handle edit button click
//   const handleEditClick = (index) => {
//     const realIndex = page * rowsPerPage + index;
//     setFormData(people[realIndex]);
//     setEditingIndex(realIndex);
//     setIsFormVisible(true);
//   };

//   // Handle delete button click
//   const handleDeleteClick = (index) => {
//     const realIndex = page * rowsPerPage + index;
//     const updatedPeople = people.filter((_, i) => i !== realIndex);
//     setPeople(updatedPeople);

//     // Adjust the page if necessary
//     if (updatedPeople.length <= page * rowsPerPage && page > 0) {
//       setPage(page - 1);
//     }
//   };

//   // Handle rows per page change
//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };
//   useEffect(() => {
//     setPaginatedPeople(
//       people.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//     );
//   }, [people, page, rowsPerPage]);
  


//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - people.length) : 0;
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [selectedRole, setSelectedRole] = useState('');
//     const [status, setStatus] = useState('');
  
//     const toggleDropdown = () => {
//       setIsDropdownOpen(!isDropdownOpen);
//     };
  
//     const handleRoleSelect = (role) => {
//       setSelectedRole(role);
//       setIsDropdownOpen(false);
//     };
 
//     const [formDataitems, setFormDataitems] = useState({
//       storeName: [], 
//     });
  
//     const handleFormChangeitems = (e) => {
//       const { name, options } = e.target;
//       const selectedValues = Array.from(options)
//         .filter(option => option.selected)
//         .map(option => option.value);
//     }

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       {/* Conditional Rendering */}
//       {!isFormVisible ? (
//         <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//           <div className="flex justify-between items-center">
//             <h2 className="text-xl font-semibold">Stores</h2>
            
//             <div className="flex items-center space-x-4">
//           <div className="relative flex flex-col w-[20rem] -ml-4">
//               <label htmlFor="searchName" className="text-sm font-medium"></label>
//               <input
//                 id="searchName"
//                 type="text"
//                 placeholder="Search by Name or Email or Mobile"
//                 value={searchName}
//                 onChange={(e) => setSearchName(e.target.value)}
//                 className="mt-1 p-2 pr-10 border border-gray-300 rounded-md"
//               />
//               <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
//               <IoIosSearch />
//               </div>
//             </div>
//             </div>
            
//             <ul className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex gap-2 list-none">
//               <li>
//                 <button
//                   type="button"
//                   className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
//                   onClick={handleAddUserClick}
//                 >
//                   <FaPlus aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//                   Add Stores
//                 </button>
//               </li>
//               <li>
//                 <button
//                   type="button"
//                   className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700"
//                   onClick={handleExportUsersData}
//                 >
//                   <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//                   Export Stores
//                 </button>
//               </li>
//             </ul>
//           </div>
 
//           <div className="mt-4">
//             <div className="flex items-center space-x-8">
             
//             </div>
 
//             <TableContainer component={Paper} className="mt-4">
//               <Table>
//                 <TableHead>
//                   <TableRow>
//                     <StyledTableCell>Name</StyledTableCell>
//                     <StyledTableCell>Email</StyledTableCell>
//                     <StyledTableCell>Phone</StyledTableCell>
//                     <StyledTableCell>Location</StyledTableCell>
//                     {/* <StyledTableCell>Gender</StyledTableCell> */}
//                     <StyledTableCell>Actions</StyledTableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {paginatedPeople.map((person, index) => (
//                     <StyledTableRow key={index}>
//                       <StyledTableCell>{person.name}</StyledTableCell>
//                       <StyledTableCell>{person.email}</StyledTableCell>
//                       <StyledTableCell>{person.role}</StyledTableCell>
//                       {/* <StyledTableCell>{person.title}</StyledTableCell> */}
//                       {/* <StyledTableCell>{person.gender}</StyledTableCell> */}
//                       <StyledTableCell>
//                         {person.addressLine1}
//                         {person.addressLine2 && `, ${person.addressLine2}`}
//                         <br />
//                         {person.city}, {person.state}, {person.zipCode}
//                       </StyledTableCell>
//                       <StyledTableCell>
//                         <button
//                           type="button"
//                           onClick={() => handleEditClick(index)}
//                           className="inline-flex items-center gap-x-1 rounded-md bg-blue-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-blue-500"
//                         >
//                           <AiOutlineEdit aria-hidden="true" className="h-4 w-4" />
//                           Edit
//                         </button>
//                         <button
//                           type="button"
//                           onClick={() => handleDeleteClick(index)}
//                           className="inline-flex items-center gap-x-1 ml-2 rounded-md bg-red-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-red-500"
//                         >
//                           <AiOutlineDelete aria-hidden="true" className="h-4 w-4" />
//                           Delete
//                         </button>
//                       </StyledTableCell>
//                     </StyledTableRow>
//                   ))}
//                   {emptyRows > 0 && (
//                     <TableRow style={{ height: 53 * emptyRows }}>
//                       <TableCell colSpan={7} />
//                     </TableRow>
//                   )}
//                 </TableBody>
//                 <TableFooter>
//                     <TableRow>
//                     <TablePagination
//                       rowsPerPageOptions={[5, 10, 25]}
//                       colSpan={6}
//                       count={people.length}
//                       rowsPerPage={rowsPerPage}
//                       page={page}
//                       SelectProps={{
//                         inputProps: {
//                           "aria-label": "rows per page",
//                         },
//                         native: true,
//                       }}
//                       onPageChange={handleChangePage}
//                       onRowsPerPageChange={handleChangeRowsPerPage}
//                       ActionsComponent={TablePaginationActions}
//                     />
//                   </TableRow>
//                 </TableFooter>
//               </Table>
//             </TableContainer>
//           </div>
//         </div>
//       ) : (
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
//                 <label htmlFor="email" className="text-sm font-medium">Email:</label>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={formData?.email || ""}
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
//     name="storeName"
//     value={formData.storeName}
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
//  {/* <div>
//       <label htmlFor="storeName" className="block text-sm font-medium">
//         Stores
//       </label>
//       <select
//         name="storeName"
//         value={formDataitems.storeName} // Ensure this is an array
//         onChange={handleFormChangeitems}
//         required
//         multiple // Allow multiple selections
//         className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4"
//       >
//         <option value="ABC Mart">ABC Mart</option>
//         <option value="XYZ Store">XYZ Store</option>
//         <option value="MegaShop">MegaShop</option>
//         <option value="SuperMart">SuperMart</option>
//         <option value="ElectroWorld">ElectroWorld</option>
//       </select>
//     </div> */}

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
//       )}
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import * as XLSX from 'xlsx';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { FaTable, FaPlus } from 'react-icons/fa';
import { IoIosSearch } from "react-icons/io";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types'; // For prop types validation
import LastPageIcon from '@mui/icons-material/LastPage';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
 
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#003375', // Dark blue color
    color: theme.palette.common.white,
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
 
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));


function TablePaginationActions(props) {
  const { count, page, rowsPerPage, onPageChange } = props;
  const theme = useTheme();

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
       
      </IconButton>
        <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};
 
export default function Stores() {
  
const [editingIndex, setEditingIndex] = useState(null);
const [page, setPage] = useState(0);
const [rowsPerPage, setRowsPerPage] = useState(5);
const [searchName, setSearchName] = useState("");
const [searchEmail, setSearchEmail] = useState("");

const [stores, setStores] = useState([]);


const navigate = useNavigate();

// Handle form changes
const handleFormChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};


const [formData, setFormData] = useState({
  TenantID: 1,
  StoreName:"",
  Email: "",
  Password: "", 
  PhoneNumber: "", 
  Gender:"",
});

// Fetch all stores
const getAllStores = async () => {
  try {
    const response = await axios.get(
      "https://imlystudios-backend-mqg4.onrender.com/api/stores/getAllStores"
    );
    console.log("Stores retrieved successfully:", response.data);
    return response.data.Stores;
  } catch (error) {
    console.error("Error fetching stores:", error);
    throw error;
  }
};

useEffect(() => {
  const fetchStores = async () => {
    try {
      const storesData = await getAllStores();
      setStores(storesData);
    } catch (error) {
      console.error("Failed to fetch stores", error);
    }
  };
  fetchStores();
}, []);

// Handle pagination
const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(parseInt(event.target.value, 10));
  setPage(0);
};


const paginatedStores = stores.slice(
  page * rowsPerPage,
  page * rowsPerPage + rowsPerPage
);
const emptyRows = rowsPerPage - paginatedStores.length;
// Get store by ID
const getStoreById = async (storeId) => {
  try {
    const response = await axios.get(
      `https://imlystudios-backend-mqg4.onrender.com/api/stores/getStoreById/${storeId}`
    );
    console.log("Store retrieved successfully:", response.data);
    return response.data.Stores || [];
    return response.data;
  } catch (error) {
    console.error("Error fetching store:", error);
    throw error;
  }
};

// Delete store by ID
const deleteStoreById = async (storeId) => {
  try {
    const response = await axios.delete(
      `https://imlystudios-backend-mqg4.onrender.com/api/stores/updateStore/${storeId}`
    );
    console.log("Store deleted successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error deleting store:", error);
    throw error;
  }
};

// Update store by ID
const updateStoreById = async (storeId, updatedData) => {
  try {
    const response = await axios.put(
      `https://imlystudios-backend-mqg4.onrender.com/api/stores/updateStore/${storeId}`,
      updatedData
    );
    console.log("Store updated successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating store:", error);
    throw error;
  }
};

// Handle edit button click
const handleEditClick = async (index) => {
  const realIndex = page * rowsPerPage + index;
  const storeId = stores[realIndex].StoreID;

  try {
    const storeDetails = await getStoreById(storeId);
    setFormData(storeDetails);
    setEditingIndex(realIndex);
    navigate('/Storeform');
  } catch (error) {
    console.error("Error fetching store details:", error);
  }
};

// Handle save or update action in your form
const handleSaveChanges = async (updatedData) => {
  const storeId = stores[editingIndex].StoreID;

  try {
    await updateStoreById(storeId, updatedData);

    // Update the store in the local state
    const updatedStores = stores.map((store, index) =>
      index === editingIndex ? { ...store, ...updatedData } : store
    );
    setStores(updatedStores);
  } catch (error) {
    console.error("Error updating store:", error);
  }
};

// Handle delete button click
const handleDeleteClick = async (index) => {
  const realIndex = page * rowsPerPage + index;
  const storeId = stores[realIndex].StoreID;

  try {
    await deleteStoreById(storeId);

    // Remove the store from the local state
    const updatedStores = stores.filter((_, i) => i !== realIndex);
    setStores(updatedStores);

    // Adjust the page if necessary
    if (updatedStores.length <= page * rowsPerPage && page > 0) {
      setPage(page - 1);
    }
  } catch (error) {
    console.error("Error deleting store:", error);
  }
};
// useEffect(() => {
//   const fetchStores = async () => {
//     try {
//       const storesData = await getAllStores();
//       setStores(Array.isArray(storesData) ? storesData : []); // Ensure it's an array
//     } catch (error) {
//       console.error("Failed to fetch stores", error);
//       setStores([]); // Fallback to an empty array in case of error
//     }
//   };
//   fetchStores();
// }, []);
// Fetch users on component mount
useEffect(() => {
  const fetchStores = async () => {
    try {
      const storeList = await getAllStores();
      setStores(storeList);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  fetchStores();
}, []);


// Handle cancel button click
const handleCancel = () => {
  setFormData(null);
  setEditingIndex(null);
};

// Example if using useState
const [ PaginatedPeople, setPaginatedPeople] = useState([]);

// Export to Excel
const exportToExcel = (data, fileName) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  XLSX.writeFile(workbook, `${fileName}.xlsx`);
};

const handleExportUsersData = () => {
  exportToExcel("Stores");
};



useEffect(() => {
  setPaginatedPeople(
    stores.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  );
}, [stores, page, rowsPerPage]);

const handleAddUserClick = () => {
  navigate('/storeform'); // Navigate to the UserForm route
};

  return (
    
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Stores</h2>
            
            <div className="flex items-center space-x-4">
          <div className="relative flex flex-col w-[20rem] -ml-4">
              <label htmlFor="searchName" className="text-sm font-medium"></label>
              <input
                id="searchName"
                type="text"
                placeholder="Search by Name or Email or Mobile"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                className="mt-1 p-2 pr-10 border border-gray-300 rounded-md"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <IoIosSearch />
              </div>
            </div>
            </div>
            
            <ul className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex gap-2 list-none">
              <li>
                <button
                  type="button"
                  className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  onClick={handleAddUserClick}
                >
                  <FaPlus aria-hidden="true" className="-ml-0.5 h-4 w-4" />
                  Add Stores
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700"
                  onClick={handleExportUsersData}
                >
                  <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
                  Export Stores
                </button>
              </li>
            </ul>
          </div>
 
          <div className="mt-4">
            <div className="flex items-center space-x-8">
             
            </div>
 
            <TableContainer component={Paper} className="mt-4">
              <Table>
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell>Email</StyledTableCell>
                    <StyledTableCell>Phone</StyledTableCell>
                    <StyledTableCell>Location</StyledTableCell>
                    {/* <StyledTableCell>Gender</StyledTableCell> */}
                    <StyledTableCell>Actions</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedStores.map((person, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell>{person.name}</StyledTableCell>
                      <StyledTableCell>{person.Email}</StyledTableCell>
                      <StyledTableCell>{person.role}</StyledTableCell>
                      {/* <StyledTableCell>{person.title}</StyledTableCell> */}
                      {/* <StyledTableCell>{person.gender}</StyledTableCell> */}
                      <StyledTableCell>
                        {person.addressLine1}
                        {person.addressLine2 && `, ${person.addressLine2}`}
                        <br />
                        {person.city}, {person.state}, {person.zipCode}
                      </StyledTableCell>
                      <StyledTableCell>
                        <button
                          type="button"
                          onClick={() => handleEditClick(index)}
                          className="inline-flex items-center gap-x-1 rounded-md bg-blue-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-blue-500"
                        >
                          <AiOutlineEdit aria-hidden="true" className="h-4 w-4" />
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteClick(index)}
                          className="inline-flex items-center gap-x-1 ml-2 rounded-md bg-red-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-red-500"
                        >
                          <AiOutlineDelete aria-hidden="true" className="h-4 w-4" />
                          Delete
                        </button>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={7} />
                    </TableRow>
                  )}
                </TableBody>
                <TableFooter>
                <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              colSpan={6}
              count={stores.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
          
                </TableFooter>
              </Table>
            </TableContainer>
          </div>
        </div>
   
    
  );
}