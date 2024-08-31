

// import React, { useState } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { tableCellClasses } from '@mui/material/TableCell';

// // Define StyledTableCell and StyledTableRow
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
//   '&:nth-of-type(even)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

// function UserRoleForm() {
//   const [role, setRole] = useState('');
//   const [status, setStatus] = useState('active');
//   const [roleData, setRoleData] = useState([
//     { id: '1', name: 'Admin', status: 'Active' },
//     { id: '2', name: 'Store User', status: 'Inactive' },
//     { id: '3', name: 'Finance', status: 'Active' },
//     { id: '4', name: 'Production', status: 'Inactive' },
//     { id: '5', name: 'Technical', status: 'Active' },
//   ]);

//   const handleRoleChange = (e) => {
//     setRole(e.target.value);
//   };

//   const handleStatusChange = (e) => {
//     setStatus(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (role && status) {
//       const roleIdMap = {
//         admin: '1',
//         'store user': '2',
//         finance: '3',
//         production: '4',
//         technical: '5',
//       };

//       const newRoleId = roleIdMap[role.toLowerCase()] || 'Unknown';
//       const newRoleName = role;
//       const newStatus = status.charAt(0).toUpperCase() + status.slice(1);

//       setRoleData([
//         ...roleData,
//         {
//           id: newRoleId,
//           name: newRoleName,
//           status: newStatus,
//         },
//       ]);

//       setRole('');
//       setStatus('active');
//     } else {
//       alert('Please fill out all fields before saving.');
//     }
//   };

//   const handleCancel = () => {
//     setRole('');
//     setStatus('active');
//   };

//   return (
//     <div className="mt-6 bg-white p-8 rounded-lg shadow-md max-w-5xl mx-auto h-auto">
//       <form onSubmit={handleSubmit}>
//         <div className="mb-6">
//           <h2 className="text-xl font-semibold mb-4 px-2">User Role</h2>
//           <select
//             id="role"
//             name="role"
//             value={role}
//             onChange={handleRoleChange}
//             required
//             className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-3 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//           >
//             <option value="" disabled>Select a role</option>
//             <option value="admin">Admin</option>
//             <option value="store user">Store User</option>
//             <option value="finance">Finance</option>
//             <option value="production">Production</option>
//             <option value="technical">Technical</option>
//           </select>
//         </div>

//         <div className="mb-6">
//           <label className="block text-sm font-medium text-gray-700">
//             Status
//           </label>
//           <div className="flex items-center mt-2">
//             <label className="inline-flex items-center">
//               <input
//                 type="radio"
//                 name="status"
//                 value="active"
//                 checked={status === 'active'}
//                 onChange={handleStatusChange}
//                 className="form-radio"
//               />
//               <span className="ml-2">Active</span>
//             </label>
//             <label className="inline-flex items-center ml-6">
//               <input
//                 type="radio"
//                 name="status"
//                 value="inactive"
//                 checked={status === 'inactive'}
//                 onChange={handleStatusChange}
//                 className="form-radio"
//               />
//               <span className="ml-2">Inactive</span>
//             </label>
//           </div>
//         </div>

//         <div className="mt-8 flex justify-end gap-4">
//           <button
//             type="submit"
//             className="inline-flex justify-center rounded-md border border-transparent bg-custom-darkblue py-3 px-8 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-custom-lightblue"
//           >
//             Save
//           </button>
//           <button
//             type="button"
//             onClick={handleCancel}
//             className="inline-flex justify-center rounded-md border border-transparent bg-red-500 py-3 px-8 text-sm font-medium text-white shadow-sm hover:text-black hover:bg-red-200"
//           >
//             Cancel
//           </button>
//         </div>
//       </form>

//       {/* Display the role data in a table below the form */}
//       <TableContainer component={Paper} className="mt-4">
//         <Table>
//           <TableHead>
//             <TableRow>
//               <StyledTableCell>Role ID</StyledTableCell>
//               <StyledTableCell>Role Name</StyledTableCell>
//               <StyledTableCell>Status</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {roleData.map((role, index) => (
//               <StyledTableRow key={index}>
//                 <StyledTableCell>{role.id}</StyledTableCell>
//                 <StyledTableCell>{role.name}</StyledTableCell>
//                 <StyledTableCell>{role.status}</StyledTableCell>
//               </StyledTableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// }

// export default UserRoleForm;

// import React, { useState,useEffect} from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
// import TableFooter from "@mui/material/TableFooter";
// import TablePagination from "@mui/material/TablePagination";
// import FirstPageIcon from "@mui/icons-material/FirstPage";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// import LastPageIcon from "@mui/icons-material/LastPage";
// import { useTheme } from "@mui/material/styles";
// import p1 from "../../assests/profile/p1.jpeg";
// import p2 from "../../assests/profile/p2.jpeg";
// import p3 from "../../assests/profile/p3.jpeg";
// import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
// import * as XLSX from "xlsx";
// import PropTypes from "prop-types";
// import { FaTable } from "react-icons/fa";
// import { FaFilter } from 'react-icons/fa';
// import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
// import { IoIosSearch } from "react-icons/io";
// // import UserRoleForm from "./UserRole";


// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     // backgroundColor: theme.palette.grey[200],
//     // color: theme.palette.common.black,
//     // fontWeight: 'bold',
//     [`&.${tableCellClasses.head}`]: {
//       backgroundColor: '#003375', // Dark blue color
//       color: theme.palette.common.white,
//       fontWeight: 'bold',
//     },
//     [`&.${tableCellClasses.body}`]: {
//       fontSize: 14,
//     },
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

// function UserRoleForm() {
 
//   const [formData, setFormData] = useState(null);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [searchName, setSearchName] = useState("");
//   const [searchEmail, setSearchEmail] = useState("");

//   const [showDropdown, setShowDropdown] = useState(false);

//   const handleRoleChange = (event) => {
//     setRole(event.target.value);
//   };

//   const handleStatusChange = (event) => {
//     setStatus(event.target.value);
//   };

  
//   const [role, setRole] = useState('');
//   const [status, setStatus] = useState('active');
//   const [roleData, setRoleData] = useState([
//     { id: '1', name: 'Admin', status: 'Active' },
//     { id: '2', name: 'Store User', status: 'Inactive' },
//     { id: '3', name: 'Finance', status: 'Active' },
//     { id: '4', name: 'Production', status: 'Inactive' },
//     { id: '5', name: 'Technical', status: 'Active' },
//   ]);
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

//   // const handleSearch = (event) => {
//   //   const { name, value } = event.target;
//   //   if (name === "searchName") {
//   //     setSearchName(value);
//   //   } else if (name === "searchEmail") {
//   //     setSearchEmail(value);
//   //   }
//   // };
//   //   // Example if using useState
// const [paginatedPeople, setPaginatedPeople] = useState([]);


// // Handle search functionality
// const handleSearch = () => {
//   const filteredPeople = people.filter(person =>
//     person.name.toLowerCase().includes(searchName.toLowerCase()) &&
//     person.email.toLowerCase().includes(searchEmail.toLowerCase())
//   );
//   setPaginatedPeople(filteredPeople.slice(0, rowsPerPage));
// };

  
//   const exportToExcel = (data, fileName) => {
//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
//     XLSX.writeFile(workbook, `${fileName}.xlsx`);
//   };

//   const handleExportUsersData = () => {
//     exportToExcel(people, "Customers");
//   };

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
    
  
//     // const toggleDropdown = () => {
//     //   setIsDropdownOpen(!isDropdownOpen);
//     // };
  
//     // const handleRoleSelect = (role) => {
//     //   setSelectedRole(role);
//     //   setIsDropdownOpen(false);
//     // };
//     // const [showUserRoleForm, setShowUserRoleForm] = useState(false);

//     const toggleDropdown = () => {
//       setShowUserRoleForm(!showUserRoleForm);
//     };
//     const [isRoleFormVisible, setRoleFormVisible] = useState(false);

//     // const handleAddUserRole = () => {
//     //   setRoleFormVisible(true);
//     // };
  
//     // const handleCloseForm = () => {
//     //   setRoleFormVisible(false);
//     // };
  
//     // const handleSaveRole = (role, status) => {
//     //   console.log('Role:', role);
//     //   console.log('Status:', status);
//     //   // Implement role saving logic here
//     //   setRoleFormVisible(false);
//     // };

//     if (role && status) {
//       const roleIdMap = {
//         admin: '1',
//         'store user': '2',
//         finance: '3',
//         production: '4',
//         technical: '5',
//       };

//       const newRoleId = roleIdMap[role.toLowerCase()] || 'Unknown';
//       const newRoleName = role;
//       const newStatus = status.charAt(0).toUpperCase() + status.slice(1);

//       setRoleData([
//         ...roleData,
//         {
//           id: newRoleId,
//           name: newRoleName,
//           status: newStatus,
//         },
//       ]);

//       setRole('');
//       setStatus('active');
//     } else {
//       alert('Please fill out all fields before saving.');
//     }
//     const [showUserRoleForm, setShowUserRoleForm] = useState(false);

//     const handleRoleSave = (role, status) => {
//       // Logic to save the role and status
//       console.log('Saved Role:', role);
//       console.log('Saved Status:', status);
  
//       // Close the form after saving
//       setShowUserRoleForm(false);
//     };
  
//     const handleRoleCancel = () => {
//       // Close the form without saving
//       setShowUserRoleForm(false);
//     };
//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       {!isFormVisible ? (
//         <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//           <div className="flex justify-between items-center">
//             <h2 className="text-xl font-semibold">Users</h2>

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

  

//             <TableContainer component={Paper} className="mt-4">
//               <Table>
//                 <TableHead>
//                   <TableRow>
//                   <StyledTableCell>Role ID</StyledTableCell>
//               <StyledTableCell>Role Name</StyledTableCell>
//               <StyledTableCell>Status</StyledTableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//             {roleData.map((role, index) => (
//               <StyledTableRow key={index}>
//                 <StyledTableCell>{role.id}</StyledTableCell>
//                 <StyledTableCell>{role.name}</StyledTableCell>
//                 <StyledTableCell>{role.status}</StyledTableCell>
//               </StyledTableRow>
//             ))}
         
// <StyledTableCell>
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
       
//       ) : (
//         <div className="mt-6 bg-white p-6 rounded-lg shadow-md">

// <form onSubmit={handleFormSubmit}>
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-xl font-semibold">User Role Form</h2>
//       </div>

//       <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
//         {/* Role Name */}
//         <div className="flex items-center">
//           <div className="w-full">
//             <label htmlFor="roleName" className="block text-sm font-medium text-gray-700">
//               Role Name
//             </label>
//             <input
//               type="text"
//               name="roleName"
//               value={formData?.roleName || ""}
//               onChange={handleFormChange}
//               required
//               className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//             />
//           </div>
//         </div>

//         {/* Status */}
//         <div className="flex items-center">
//           <div className="w-full">
//             <label htmlFor="status" className="block text-sm font-medium text-gray-700">
//               Status
//             </label>
//             <select
//               name="status"
//               value={formData?.status || ""}
//               onChange={handleFormChange}
//               required
//               className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//             >
//               <option value="">Select Status</option>
//               <option value="Active">Active</option>
//               <option value="Inactive">Inactive</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       <div className="mt-6 flex justify-end">
//         <button
//           type="button"
//           onClick={handleCancel}
//           className="mr-4 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
//         >
//           Cancel
//         </button>
//         <button
//           type="submit"
//           className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-500"
//         >
//           Save
//         </button>
//       </div>
//     </form>


//         </div>
//       )}
//     </div>
//   );
// }
// export default UserRoleForm;

import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { useTheme } from "@mui/material/styles";
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import * as XLSX from "xlsx";
import { IoIosSearch } from 'react-icons/io';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import axios from "axios";


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
  "&:nth-of-type(even)": {
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

// function UserRoleForm() {
//   const [formData, setFormData] = useState({ id: '', name: '', status: '' });
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [status, setStatus] = useState('');
//   const [roleData, setRoleData] = useState([
//     { id: '1', name: 'Admin', status: 'Active' },
//     { id: '2', name: 'Store User', status: 'Inactive' },
//     { id: '3', name: 'Finance', status: 'Active' },
//     { id: '4', name: 'Production', status: 'Inactive' },
//     { id: '5', name: 'Technical', status: 'Active' },
//   ]);

//   // Handle form changes
//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle cancel button click
//   const handleCancel = () => {
//     setFormData({ id: '', name: '', status: 'Active' }); // Reset form data
//     setEditingIndex(null);
//     setIsFormVisible(false);
//   };

//   // Handle form submission
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (editingIndex !== null) {
//       // Edit existing role
//       const updatedRoles = [...roleData];
//       updatedRoles[editingIndex] = { ...formData, id: updatedRoles[editingIndex].id };
//       setRoleData(updatedRoles);
//     } else {
//       // Add new role
//       setRoleData([...roleData, { ...formData, id: (roleData.length + 1).toString() }]);
//     }
//     handleCancel(); // Reuse handleCancel to reset form and hide it
//   };

//   // Handle delete button click
//   const handleDeleteClick = (index) => {
//     const realIndex = page * rowsPerPage + index;
//     const updatedRoles = roleData.filter((_, i) => i !== realIndex);
//     setRoleData(updatedRoles);
//   };

//   // Handle rows per page change
//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };
//   const handleStatusChange = (e) => {
//     setStatus(e.target.value);
//   };
//   // Handle page change
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   // Export to Excel
//   const exportToExcel = (data, fileName) => {
//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
//     XLSX.writeFile(workbook, `${fileName}.xlsx`);
//   };

//   const handleExportUsersData = () => {
//     exportToExcel(roleData, 'Roles');
//   };

//   // Handle edit button click
//   const handleEditClick = (index) => {
//     setFormData(roleData[index]);
//     setEditingIndex(index);
//     setIsFormVisible(true);
//   };

//   const emptyRows = rowsPerPage - Math.min(rowsPerPage, roleData.length - page * rowsPerPage);

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       {!isFormVisible ? (
//         <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//           <div className="flex justify-between items-center">
//             <h2 className="text-xl font-semibold">Roles</h2>
//             <div className="flex items-center space-x-4">
//               <div className="relative flex flex-col w-[20rem] -ml-4">
//                 <label htmlFor="searchName" className="text-sm font-medium"></label>
//                 <input
//                   id="searchName"
//                   type="text"
//                   placeholder="Search by Name"
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   className="mt-1 p-2 pr-10 border border-gray-300 rounded-md"
//                 />
//                 <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
//                   <IoIosSearch />
//                 </div>
//               </div>
//             </div>
//             <ul className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex gap-2 list-none">
//               <li>
//                 <button
//                   type="button"
//                   className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-hoverblue"
//                   onClick={() => setIsFormVisible(true)}
//                 >
//                   Add New Role
//                 </button>
//               </li>
//               <li>
//                 <button
//                   type="button"
//                   onClick={handleExportUsersData}
//                   className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-hoverblue"
//                 >
//                   Export
//                 </button>
//               </li>
//             </ul>
//           </div>
        

//           <br />
//           <TableContainer component={Paper}>
//             <div className="overflow-x-auto max-w-4xl mx-auto">
//               <Table aria-label="customized table">
//                 <TableHead>
//                   <TableRow>
//                     <StyledTableCell>ID</StyledTableCell>
//                     <StyledTableCell>Name</StyledTableCell>
//                     <StyledTableCell>Status</StyledTableCell>
//                     <StyledTableCell>Actions</StyledTableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {roleData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
//                     <StyledTableRow key={row.id}>
//                       <StyledTableCell>{row.id}</StyledTableCell>
//                       <StyledTableCell>{row.name}</StyledTableCell>
//                       {/* <StyledTableCell>{row.status}</StyledTableCell> */}

//                       <StyledTableCell>
//                         <span
//                           className={`inline-block px-3 py-2 text-xs font-semibold rounded-full ${
//                             row.status === "active"
//                               ? "bg-green-100 text-green-800 shadow-md"
//                               : row.status === "Inactive"
//                               ? "bg-pink-100 text-pink-800 shadow-md"
//                               : "bg-green-100 text-green-800 shadow-md"
//                           }`}
//                         >
//                           {row.status}
//                         </span>
//                       </StyledTableCell>
//                       <StyledTableCell>
//                         <button
//                           type="button"
//                           onClick={() => handleEditClick(page * rowsPerPage + index)}
//                           className="inline-flex items-center gap-x-1 rounded-md bg-blue-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-blue-500"
//                         >
//                           <AiOutlineEdit aria-hidden="true" className="h-4 w-4" />
//                           Edit
//                         </button>
//                         <button
//                           type="button"
//                           onClick={() => handleDeleteClick(page * rowsPerPage + index)}
//                           className="inline-flex items-center gap-x-1 ml-2 rounded-md bg-red-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-red-500"
//                         >
//                           <AiOutlineDelete aria-hidden="true" className="h-4 w-4" />
//                           Delete
//                         </button>
//                       </StyledTableCell>
//                     </StyledTableRow>
//                   ))}
//                   {emptyRows > 0 && (
//                     <StyledTableRow style={{ height: 53 * emptyRows }}>
//                       <StyledTableCell colSpan={4} />
//                     </StyledTableRow>
//                   )}
//                 </TableBody>
//                 <TableFooter>
//                   <TableRow>
//                     <TablePagination
//                       rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
//                       colSpan={4}
//                       count={roleData.length}
//                       rowsPerPage={rowsPerPage}
//                       page={page}
//                       SelectProps={{
//                         inputProps: { 'aria-label': 'rows per page' },
//                         native: true,
//                       }}
//                       onPageChange={handleChangePage}
//                       onRowsPerPageChange={handleChangeRowsPerPage}
//                       ActionsComponent={TablePaginationActions}
//                     />
//                   </TableRow>
//                 </TableFooter>
//               </Table>
//             </div>
//           </TableContainer>
//         </div>
//       ) : (
//         <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//           <div className="flex justify-between items-center">
//             <h2 className="text-xl font-semibold">{editingIndex !== null ? 'Edit Role' : 'Add Role'}</h2>
//           </div>
//           <form onSubmit={handleFormSubmit} className="mt-4">
//             {/* <div className="mb-4">
//               <label htmlFor="id" className="block text-sm font-medium text-gray-700">
//                 ID
//               </label>
//               <input
//                 id="id"
//                 name="id"
//                 type="text"
//                 value={formData.id}
//                 onChange={handleFormChange}
//                 disabled={editingIndex !== null}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//               />
//             </div> */}
//             {/* <div className="mb-4">
//   <label htmlFor="id" className="block text-sm font-medium text-gray-700">
//     ID
//   </label>
//   <input
//     id="id"
//     name="id"
//     type="text"
//     value={formData.id}
//     onChange={handleFormChange}
//     disabled={editingIndex !== null}
//     className="mt-1 block w-1/2 h-10 px-3 border border-gray-300 rounded-md shadow-sm"
//   />
// </div> */}

//             <div className="mb-4">
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                Role Name
//               </label>
//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 value={formData.name}
//                 onChange={handleFormChange}
//                 className="mt-1 block w-1/2 h-10 px-3 border border-gray-300 rounded-md shadow-sm"
//               />
//             </div>
//             {/* <div className="mb-4">
//               <label htmlFor="status" className="block text-sm font-medium text-gray-700">
//                 Status
//               </label>
//               <select
//                 id="status"
//                 name="status"
//                 value={formData.status}
//                 onChange={handleFormChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//               >
//                 <option value="Active">Active</option>
//                 <option value="Inactive">Inactive</option>
//               </select>
//             </div> */}
//                     <div className="mb-6">
//           <label className="block text-sm font-medium text-gray-700">
//             Status
//           </label>
//              <div className="flex items-center mt-2">
//             <label className="inline-flex items-center">
//               <input
//                 type="radio"
//                 name="status"
//                 value="active"
//                 checked={status === 'active'}
//                 onChange={handleStatusChange}
//                 className="form-radio"
//               />
//               <span className="ml-2">Active</span>
//             </label>
//             <label className="inline-flex items-center ml-6">
//               <input
//                 type="radio"
//                 name="status"
//                 value="inactive"
//                 checked={status === 'inactive'}
//                 onChange={handleStatusChange}
//                 className="form-radio"
//               />
//               <span className="ml-2">Inactive</span>
//             </label>
//           </div>
//           </div>
//             <div className="mt-6 flex justify-end gap-4">
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
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }

// export default UserRoleForm;


function UserRoleForm() {
  const [formData, setFormData] = useState({ id: '', name: '', status: '' });
  const [editingIndex, setEditingIndex] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [roleData, setRoleData] = useState([
    { id: '1', name: 'Admin', status: 'Active' },
    { id: '2', name: 'Store User', status: 'Inactive' },
    { id: '3', name: 'Finance', status: 'Active' },
    { id: '4', name: 'Production', status: 'Inactive' },
    { id: '5', name: 'Technical', status: 'Active' },
  ]);

  // Handle form changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle cancel button click
  const handleCancel = () => {
    setFormData({ id: '', name: '', status: 'Active' });
    setEditingIndex(null);
    setIsFormVisible(false);
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      // Edit existing role
      const updatedRoles = [...roleData];
      updatedRoles[editingIndex] = { ...formData, id: updatedRoles[editingIndex].id };
      setRoleData(updatedRoles);
    } else {
      // Add new role
      setRoleData([...roleData, { ...formData, id: (roleData.length + 1).toString() }]);
    }
    handleCancel();
  };

  // Handle delete button click
  const handleDeleteClick = (index) => {
    const realIndex = page * rowsPerPage + index;
    const updatedRoles = roleData.filter((_, i) => i !== realIndex);
    setRoleData(updatedRoles);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Handle status change
  const handleStatusChange = (e) => {
    setFormData({
      ...formData,
      status: e.target.value,
    });
  };

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Export to Excel
  const exportToExcel = (data, fileName) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  const handleExportUsersData = () => {
    exportToExcel(roleData, 'Roles');
  };

  // Handle edit button click
  const handleEditClick = (index) => {
    setFormData(roleData[index]);
    setEditingIndex(index);
    setIsFormVisible(true);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, roleData.length - page * rowsPerPage);

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
      {!isFormVisible ? (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Roles</h2>
            <div className="flex items-center space-x-4">
              <div className="relative flex flex-col w-[20rem] -ml-4">
                <label htmlFor="searchName" className="text-sm font-medium"></label>
                <input
                  id="searchName"
                  type="text"
                  placeholder="Search by Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                  className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-hoverblue"
                  onClick={() => setIsFormVisible(true)}
                >
                  Add New Role
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleExportUsersData}
                  className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-hoverblue"
                >
                  Export
                </button>
              </li>
            </ul>
          </div>

          <br />
          <TableContainer component={Paper}>
            <div className="overflow-x-auto max-w-4xl mx-auto">
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>ID</StyledTableCell>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell>Status</StyledTableCell>
                    <StyledTableCell>Actions</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {roleData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                    <StyledTableRow key={row.id}>
                      <StyledTableCell>{row.id}</StyledTableCell>
                      <StyledTableCell>{row.name}</StyledTableCell>
                      <StyledTableCell>
                        <span
                          className={`inline-block px-3 py-2 text-xs font-semibold rounded-full ${
                            row.status === "Active"
                              ? "bg-green-100 text-green-800 shadow-md"
                              : "bg-pink-100 text-pink-800 shadow-md"
                          }`}
                        >
                          {row.status}
                        </span>
                      </StyledTableCell>
                      <StyledTableCell>
                        <button
                          type="button"
                          onClick={() => handleEditClick(page * rowsPerPage + index)}
                          className="inline-flex items-center gap-x-1 rounded-md bg-blue-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-blue-500"
                        >
                          <AiOutlineEdit aria-hidden="true" />
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteClick(index)}
                          className="inline-flex items-center gap-x-1 rounded-md bg-red-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-red-500 ml-4"
                        >
                          <MdOutlineDeleteOutline aria-hidden="true" />
                          Delete
                        </button>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={roleData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
        </div>

        
      ) : (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md max-w-[60%] sm:ml-16 lg:ml-72">
          <h2 className="text-xl font-semibold">{editingIndex !== null ? "Edit Role" : "Add New Role"}</h2>
          <form className="mt-4" onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label htmlFor="roleName" className="block text-sm font-medium text-gray-700">
                Role Name
              </label>
              <input
                id="roleName"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleFormChange}
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <div className="mt-1 flex gap-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value="Active"
                    checked={formData.status === "Active"}
                    onChange={handleStatusChange}
                    className="form-radio"
                  />
                  <span className="ml-2">Active</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value="Inactive"
                    checked={formData.status === "Inactive"}
                    onChange={handleStatusChange}
                    className="form-radio"
                  />
                  <span className="ml-2">Inactive</span>
                </label>
              </div>
            </div>
           
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
          </form>
        </div>
      )}
    </div>
  );
}

export default UserRoleForm;


// function UserRoleForm() {
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
  

//   // Handle form changes
//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle cancel button click
//   const handleCancel = () => {
//     setFormData({ id: '', name: '', status: 'Active' });
//     setEditingIndex(null);
//     setIsFormVisible(false);
//   };

  

//   // Handle status change
//   const handleStatusChange = (e) => {
//     setFormData({
//       ...formData,
//       status: e.target.value,
//     });
//   };

//   // Handle page change
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   // Export to Excel
//   const exportToExcel = (data, fileName) => {
//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
//     XLSX.writeFile(workbook, `${fileName}.xlsx`);
//   };

//   const handleExportUsersData = () => {
//     exportToExcel('Roles');
//   };


//   const [formData, setFormData] = useState({
//     TenantID: 1,
//     FirstName: "",
//     LastName: "",
//     Email: "",
//     Password: "", 
//     PhoneNumber: "", 
//     Gender:"",
  
//   });
  
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     let valid = true;
//     let newErrors = {};
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
//         // You can navigate the user or show a success message here
//       } catch (error) {
//         console.error("Registration failed:", error);
//         // setApiError("Registration failed. Please try again.");
//       }
//     } else {
//       console.log("Form validation failed");
//       // setErrors(newErrors);
//     }
//   };
  
  
//   // Your getAllUsers function
//   const getAllUsers = async () => {
//     try {
//       const response = await axios.get(
//         "https://imlystudios-backend-mqg4.onrender.com/api/users/getAllUsers"
//       );
//       console.log("Users retrieved successfully:", response.data);
//       return response.data.users; // Return the list of users
//     } catch (error) {
//       console.error("Error fetching users:", error);
//       throw error;
//     }
//   };
  
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const usersData = await getAllUsers();
       
//       } catch (error) {
//         console.error("Failed to fetch users", error);
//       }
//     };
//     fetchUsers();
//   }, []);

  
//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };
  
//   // // Calculate pagination data
//   // const paginatedUsers = users.slice(
//   //   page * rowsPerPage,
//   //   page * rowsPerPage + rowsPerPage
//   // );
//   // const emptyRows = rowsPerPage - paginatedUsers.length;
  
//   const getUserById = async (userId) => {
//     try {
//       const response = await axios.get(
//         `https://imlystudios-backend-mqg4.onrender.com/api/users/getUserById/${userId}`
//       );
//       console.log("User retrieved successfully:", response.data);
//       return response.data;
//     } catch (error) {
//       console.error("Error fetching user:", error);
//       throw error;
//     }
//   };
  
//   // API Call for updating a user
//   const updateUserById = async (userId, updatedData) => {
//     try {
//       const response = await axios.put(
//         `https://imlystudios-backend-mqg4.onrender.com/api/users/updateUser/${userId}`,
//         updatedData
//       );
//       console.log("User updated successfully:", response.data);
//       return response.data; // Return the response data
//     } catch (error) {
//       console.error("Error updating user:", error);
//       throw error;
//     }
//   };
  
//   // API Call for deleting a user
//   const deleteUserById = async (userId) => {
//     try {
//       const response = await axios.delete(
//         `https://imlystudios-backend-mqg4.onrender.com/api/users/deleteUser/${userId}`
//       );
//       console.log("User deleted successfully:", response.data);
//       return response.data; // Return the response data
//     } catch (error) {
//       console.error("Error deleting user:", error);
//       throw error;
//     }
//   };
  
//   // Handle edit button click
//   const handleEditClick = async (index) => {
//     const realIndex = page * rowsPerPage + index;
//     const userId = users[realIndex].UserID;
  
//     try {
//       const userDetails = await getUserById(userId);
      
//       // Populate form with fetched user details
//       setFormData(userDetails);
//       setEditingIndex(realIndex);
//       setIsFormVisible(true);
      
//       // The updatedData should be obtained after the form submission
//       // await updateUserById(userId, updatedData); - This should be called after user submits the form
//     } catch (error) {
//       console.error("Error fetching user details:", error);
//     }
//   };
  
//   // Handle save or update action in your form
//   const handleSaveChanges = async (updatedData) => {
//     const userId = users[editingIndex].UserID;
  
//     try {
//       await updateUserById(userId, updatedData); // Update the user via API
      
//       // Update the user in the local state
//       const updatedUsers = users.map((user, index) =>
//         index === editingIndex ? { ...user, ...updatedData } : user
//       );
//       setUsers(updatedUsers);
//       setIsFormVisible(false); // Hide the form after saving changes
//     } catch (error) {
//       console.error("Error updating user:", error);
//     }
//   };
  
//   // Handle delete button click
//   const handleDeleteClick = async (index) => {
//     const realIndex = page * rowsPerPage + index;
//     const userId = users[realIndex].UserID;
  
//     try {
//       await deleteUserById(userId); // Delete the user via API
      
//       // Remove the user from the local state
//       const updatedUsers = users.filter((_, i) => i !== realIndex);
//       setUsers(updatedUsers);
  
//       // Adjust the page if necessary
//       if (updatedUsers.length <= page * rowsPerPage && page > 0) {
//         setPage(page - 1);
//       }
//     } catch (error) {
//       console.error("Error deleting user:", error);
//     }
//   };
  
//   // Fetch users on component mount
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const userList = await getAllUsers();
//         setUsers(userList);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };
  
//     fetchUsers();
//   }, []);
  
//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       {!isFormVisible ? (
//         <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//           <div className="flex justify-between items-center">
//             <h2 className="text-xl font-semibold">Roles</h2>
//             <div className="flex items-center space-x-4">
//               <div className="relative flex flex-col w-[20rem] -ml-4">
//                 <label htmlFor="searchName" className="text-sm font-medium"></label>
//                 <input
//                   id="searchName"
//                   type="text"
//                   placeholder="Search by Name"
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   className="mt-1 p-2 pr-10 border border-gray-300 rounded-md"
//                 />
//                 <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
//                   <IoIosSearch />
//                 </div>
//               </div>
//             </div>
//             <ul className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex gap-2 list-none">
//               <li>
//                 <button
//                   type="button"
//                   className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-hoverblue"
//                   onClick={() => setIsFormVisible(true)}
//                 >
//                   Add New Role
//                 </button>
//               </li>
//               <li>
//                 <button
//                   type="button"
//                   onClick={handleExportUsersData}
//                   className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-hoverblue"
//                 >
//                   Export
//                 </button>
//               </li>
//             </ul>
//           </div>

//           <br />
//           <TableContainer component={Paper}>
//             <div className="overflow-x-auto max-w-4xl mx-auto">
//               <Table aria-label="customized table">
//                 <TableHead>
//                   <TableRow>
//                     <StyledTableCell>ID</StyledTableCell>
//                     <StyledTableCell>Name</StyledTableCell>
//                     <StyledTableCell>Status</StyledTableCell>
//                     <StyledTableCell>Actions</StyledTableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {roleData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
//                     <StyledTableRow key={row.id}>
//                       <StyledTableCell>{row.id}</StyledTableCell>
//                       <StyledTableCell>{row.name}</StyledTableCell>
//                       <StyledTableCell>
//                         <span
//                           className={`inline-block px-3 py-2 text-xs font-semibold rounded-full ${
//                             row.status === "Active"
//                               ? "bg-green-100 text-green-800 shadow-md"
//                               : "bg-pink-100 text-pink-800 shadow-md"
//                           }`}
//                         >
//                           {row.status}
//                         </span>
//                       </StyledTableCell>
//                       <StyledTableCell>
//                         <button
//                           type="button"
//                           onClick={() => handleEditClick(page * rowsPerPage + index)}
//                           className="inline-flex items-center gap-x-1 rounded-md bg-blue-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-blue-500"
//                         >
//                           <AiOutlineEdit aria-hidden="true" />
//                           Edit
//                         </button>
//                         <button
//                           type="button"
//                           onClick={() => handleDeleteClick(index)}
//                           className="inline-flex items-center gap-x-1 rounded-md bg-red-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-red-500 ml-4"
//                         >
//                           <MdOutlineDeleteOutline aria-hidden="true" />
//                           Delete
//                         </button>
//                       </StyledTableCell>
//                     </StyledTableRow>
//                   ))}
//                   {emptyRows > 0 && (
//                     <TableRow style={{ height: 53 * emptyRows }}>
//                       <TableCell colSpan={6} />
//                     </TableRow>
//                   )}
//                 </TableBody>
//               </Table>
//             </div>
//             <TablePagination
//               rowsPerPageOptions={[5, 10, 25]}
//               component="div"
//               count={roleData.length}
//               rowsPerPage={rowsPerPage}
//               page={page}
//               onPageChange={handleChangePage}
//               onRowsPerPageChange={handleChangeRowsPerPage}
//             />
//           </TableContainer>
//         </div>
//       ) : (
//         <div className="mt-6 bg-white p-6 rounded-lg shadow-md max-w-[60%] sm:ml-16 lg:ml-72">
//           <h2 className="text-xl font-semibold">{editingIndex !== null ? "Edit Role" : "Add New Role"}</h2>
//           <form className="mt-4" onSubmit={handleFormSubmit}>
//             <div className="mb-4">
//               <label htmlFor="roleName" className="block text-sm font-medium text-gray-700">
//                 Role Name
//               </label>
//               <input
//                 id="roleName"
//                 name="name"
//                 type="text"
//                 value={formData.name}
//                 onChange={handleFormChange}
//                 required
//                 className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Status</label>
//               <div className="mt-1 flex gap-4">
//                 <label className="inline-flex items-center">
//                   <input
//                     type="radio"
//                     name="status"
//                     value="Active"
//                     checked={formData.status === "Active"}
//                     onChange={handleStatusChange}
//                     className="form-radio"
//                   />
//                   <span className="ml-2">Active</span>
//                 </label>
//                 <label className="inline-flex items-center">
//                   <input
//                     type="radio"
//                     name="status"
//                     value="Inactive"
//                     checked={formData.status === "Inactive"}
//                     onChange={handleStatusChange}
//                     className="form-radio"
//                   />
//                   <span className="ml-2">Inactive</span>
//                 </label>
//               </div>
//             </div>
           
//             <div className="mt-6 flex justify-end gap-4">
//      <button
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
//    </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }

// export default UserRoleForm;
