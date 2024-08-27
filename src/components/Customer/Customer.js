import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import p1 from "../../assests/profile/p1.jpeg";
import p2 from "../../assests/profile/p2.jpeg";
import p3 from "../../assests/profile/p3.jpeg";
import { FaTable } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import * as XLSX from "xlsx";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";


import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

import { Combobox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { IoIosSearch } from "react-icons/io";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.black,
    // color: theme.palette.common.white,
  //   backgroundColor: theme.palette.action.hover,
  //   color: theme.palette.common.black,
  // },
  // [`&.${tableCellClasses.body}`]: {
  //   fontSize: 14,
  // },
 
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
const initialPeople = [
  {
    firstName: "Jane",
    lastName: "Smith",
    title: "Chennai",
    email: "jane.smith@example.com",
    phoneNumber: "7702253548",
    gender: "Male",
    profileImg: p1,
    addressLine1: "123 Main St",
    addressLine2: "Apt 4B",
    city: "Chennai",
    state: "Tamil Nadu",
    country: "India",
  },
  {
    firstName: "Alice",
    lastName: "Johnson",
    title: "Hyderabad",
    email: "alice.johnson@example.com",
    phoneNumber: "7702253549",
    gender: "Female",
    profileImg: p2,
    addressLine1: "456 Oak St",
    addressLine2: "Suite 12",
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
  },
  {
    firstName: "Robert",
    lastName: "Brown",
    title: "Mumbai",
    email: "robert.brown@example.com",
    phoneNumber: "7702253550",
    gender: "Female",
    profileImg: p3,
    addressLine1: "789 Pine St",
    addressLine2: "",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
  },
  {
    firstName: "Michael",
    lastName: "Davis",
    title: "Delhi",
    email: "michael.davis@example.com",
    phoneNumber: "7702253551",
    gender: "Male",
    addressLine1: "101 Maple St",
    addressLine2: "Apt 3C",
    city: "Delhi",
    state: "Delhi",
    country: "India",
  },
];

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

export default function Customer(props) {
  const [people, setPeople] = useState(initialPeople);
  const [formData, setFormData] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchName, setSearchName] = useState("");
  const [searchEmail, setSearchEmail] = useState("");

  // Handle form changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle image upload
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

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updatedPeople = [...people];
      updatedPeople[editingIndex] = formData;
      setPeople(updatedPeople);
      setEditingIndex(null);
    } else {
      setPeople([...people, formData]);
    }
    setFormData(null);
    setIsFormVisible(false);
  };

  // Handle cancel button click
  const handleCancel = () => {
    setFormData(null);
    setEditingIndex(null);
    setIsFormVisible(false);
  };

  // Handle add user button click
  const handleAddUserClick = () => {
    setFormData({
      name: "",
      title: "",
      email: "",
      role: "",
      gender: "",
      profileImg: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      country: "",
    });
    setEditingIndex(null);
    setIsFormVisible(true);
  };
  const exportToExcel = (data, fileName) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };
  const handleExportUsersData = () => {
    exportToExcel(people, "Customers");
  };


  // //   // Example if using useState
  const [paginatedPeople, setPaginatedPeople] = useState([]);

  const handleSearch = () => {
    const filteredPeople = people.filter(
      (person) =>
        person.name.toLowerCase().includes(searchName.toLowerCase()) &&
        person.email.toLowerCase().includes(searchEmail.toLowerCase())
    );
    setPaginatedPeople(filteredPeople.slice(0, rowsPerPage));
  };

  // Handle page change (e.g., when user clicks to go to the next page)
  const handlePageChange = (newPage) => {
    setPage(newPage);
    setPaginatedPeople(
      people.slice(newPage * rowsPerPage, newPage * rowsPerPage + rowsPerPage)
    );
  };

  // Handle rows per page change (if you're allowing the user to change this)
  const handleRowsPerPageChange = (newRowsPerPage) => {
    setRowsPerPage(newRowsPerPage);
    setPaginatedPeople(
      people.slice(
        page * newRowsPerPage,
        page * newRowsPerPage + newRowsPerPage
      )
    );
  };

  const categories = [
    { id: 1, name: "Walk-in", subOptions: ["Newspaper ad"] },
    {
      id: 2,
      name: "Social Media",
      subOptions: ["Google", "Facebook", "Instagram"],
    },
    {
      id: 3,
      name: "Reference",
      subOptions: ["Existing Client", "Directors", "Employee"],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [selectedSubOption, setSelectedSubOption] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // You might want to update subOptions based on selectedCategory
  };

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(query.toLowerCase())
  );

  const subOptions = selectedCategory ? selectedCategory.subOptions : [];

  // Initial pagination setup or when data changes
  useEffect(() => {
    setPaginatedPeople(
      people.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    );
  }, [people, page, rowsPerPage]);
// Handle page change
const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

// Handle edit button click
const handleEditClick = (index) => {
  const realIndex = page * rowsPerPage + index;
  setFormData(people[realIndex]);
  setEditingIndex(realIndex);
  setIsFormVisible(true);
};

// Handle delete button click
const handleDeleteClick = (index) => {
  const realIndex = page * rowsPerPage + index;
  const updatedPeople = people.filter((_, i) => i !== realIndex);
  setPeople(updatedPeople);

  // Adjust the page if necessary
  if (updatedPeople.length <= page * rowsPerPage && page > 0) {
    setPage(page - 1);
  }
};

// Handle rows per page change
const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(parseInt(event.target.value, 10));
  setPage(0);
};
useEffect(() => {
  setPaginatedPeople(
    people.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  );
}, [people, page, rowsPerPage]);



const emptyRows =
  page > 0 ? Math.max(0, (1 + page) * rowsPerPage - people.length) : 0;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [status, setStatus] = useState('');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setIsDropdownOpen(false);
  };
  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
      {/* Conditional Rendering */}
      {!isFormVisible ? (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Customers</h2>
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
                  Add Customer
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700"
                  onClick={handleExportUsersData}
                >
                  <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
                  Export Customer
                </button>
              </li>
            </ul>
          </div>

          <div className="mt-4">
            {/* <div className="flex items-center space-x-8">
      <div className="flex flex-col w-[35rem]">
        <label
          htmlFor="searchName"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Search Customer Name
        </label>
        <input
          id="searchName"
          type="text"
          placeholder="Search by name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="flex flex-col w-[25rem]">
        <label
          htmlFor="searchEmail"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Search by Email
        </label>
        <input
          id="searchEmail"
          type="text"
          placeholder="Search by email"
          value={searchEmail}
          onChange={(e) => setSearchEmail(e.target.value)}
          className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="flex-shrink-0">
        <button
          type="button"
          className="px-6 py-3 flex items-center space-x-2 rounded-md bg-indigo-600 text-white text-sm font-medium"
          onClick={handleSearch}
        >
          <FaFilter className="h-3 w-3" />
          <span>Filter</span>
        </button>
      </div>
    </div> */}

           
          </div>
          <TableContainer component={Paper} className="mt-4">
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell>Email</StyledTableCell>
                  <StyledTableCell>Mobile No</StyledTableCell>
                  <StyledTableCell>Address</StyledTableCell>
                  <StyledTableCell>Gender</StyledTableCell>
                  {/* <StyledTableCell>Edit</StyledTableCell>
                  <StyledTableCell>Delete</StyledTableCell> */}
                  <StyledTableCell>Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedPeople.map((person, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell>
                      <div className="flex items-center space-x-2">
                        {/* <Avatar src={person.profileImg} /> */}
                        <span>{person.firstName}</span>
                        <span>{person.lastName}</span>
                      </div>
                    </StyledTableCell>

                    <StyledTableCell>{person.email}</StyledTableCell>
                    <StyledTableCell>{person.phoneNumber}</StyledTableCell>
                    <StyledTableCell>
                      {person.addressLine1}
                      {person.addressLine2 && `, ${person.addressLine2}`}
                      <br />
                      {person.city}, {person.state}, {person.zipCode}
                    </StyledTableCell>

                    {/* <StyledTableCell>{person.gender}</StyledTableCell> */}
                    <StyledTableCell>
                      <span
                          className={`inline-block px-3 py-2 text-xs font-semibold rounded-full ${
                            person.gender === "Male"
                              ? "bg-green-100 text-green-800 shadow-md"
                              : person.gender === "Female"
                              ? "bg-pink-100 text-pink-800 shadow-md"
                              : "bg-gray-100 text-gray-800 shadow-md"
                          }`}
                        >
                          {person.gender}
                        </span>
                      {/* <span
                        className={`inline-block w-20 px-3 py-2 text-xs font-semibold text-center rounded-full ${
                          person.gender === "Male"
                            ? "bg-green-100 text-green-800 shadow-md"
                            : person.gender === "Female"
                            ? "bg-pink-100 text-pink-800 shadow-md"
                            : "bg-gray-100 text-gray-800 shadow-md"
                        }`}
                      >
                        {person.gender}
                      </span> */}
                    </StyledTableCell>
                    {/* <StyledTableCell>
                    
                     
    <div
      className="inline-flex items-center justify-center w-14 h-7 cursor-pointer rounded-lg bg-blue-100 text-blue-800 shadow-md"
      onClick={() => handleEditClick(index)}
    >
      <FaEdit className="w-4 h-4" />
    </div>
    

                    </StyledTableCell>
                    <StyledTableCell>
                    
                        <div
      className="inline-flex items-center justify-center w-14 h-7 cursor-pointer rounded-lg bg-pink-100 text-red-500 shadow-md"
      onClick={() => handleDeleteClick(index)}
    >
      <FaTrash className="w-4 h-4" />
    </div>
  
                      
                    </StyledTableCell> */}
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
                        <AiOutlineDelete
                          aria-hidden="true"
                          className="h-4 w-4"
                        />
                        Delete
                      </button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
                {emptyRows > 0 && (
                  <StyledTableRow style={{ height: 53 * emptyRows }}>
                    <StyledTableCell colSpan={6} />
                  </StyledTableRow>
                )}
              </TableBody>
              <TableFooter>
                {/* <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[
                      5,
                      10,
                      25,
                      { label: "All", value: -1 },
                    ]}
                    colSpan={3}
                    count={people.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    // ActionsComponent={TablePaginationActions}
                  />
                </TableRow> */}
                  <TableRow>
                    <TablePagination
                      rowsPerPageOptions={[5, 10, 25]}
                      colSpan={6}
                      count={people.length}
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
      ) : (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleFormSubmit}>
            {/* <h2 className="text-xl font-semibold mb-4">Customer Form</h2> */}
            <h2 className="text-xl font-semibold mb-4 px-24">Customer</h2>
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 px-16 md:px-24">
              {/* Customer Number */}
              {/* <div>
                <label
                  htmlFor="customerNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Customer Reference Number
                </label>
                <input
                  type="text"
                  name="customerNumber"
                  value={formData?.customerNumber || ""}
                  onChange={handleFormChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div> */}

              {/* First Name */}
              <div className="flex items-center">
                <div className="w-full">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData?.firstName || ""}
                    onChange={handleFormChange}
                    required
                    className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
  {/* Address Line 1 */}
  <div className="flex items-center">
                <div className="w-full">
                  <label
                    htmlFor="addressLine1"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address Line 1
                  </label>
                  <input
                    type="text"
                    name="addressLine1"
                    value={formData?.addressLine1 || ""}
                    onChange={handleFormChange}
                    required
                    className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

           
              {/* Last Name */}
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData?.lastName || ""}
                  onChange={handleFormChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

                 {/* Address Line 2 */}
                 <div>
                <label
                  htmlFor="addressLine2"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address Line 2
                </label>
                <input
                  type="text"
                  name="addressLine2"
                  value={formData?.addressLine2 || ""}
                  onChange={handleFormChange}
                  className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

                          {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData?.email || ""}
                  onChange={handleFormChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
 {/* City */}
 <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData?.city || ""}
                  onChange={handleFormChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
 
             
              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData?.phoneNumber || ""}
                  onChange={handleFormChange}
                  required
                  pattern="\d{10}"
                  title="Phone Number should be 10 digits."
                  className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

               {/* State */}
               <div>
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700"
                >
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData?.state || ""}
                  onChange={handleFormChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

             
              {/* Role ID */}
              {/* <div>
  <label htmlFor="roleId" className="block text-sm font-medium text-gray-700">
    Role ID
  </label>
  <select
    name="roleId"
    value={formData?.roleId || ""}
    onChange={handleFormChange}
    required
    className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
  >
    <option value="" disabled>Select a role</option>
    <option value="admin">Admin</option>
    <option value="store user">Store User</option>
    <option value="finance">Finance</option>
    <option value="production">Production</option>
    <option value="technical">Technical</option>
  </select>
</div> */}

              {/* Profile Image */}
              {/* <div>
      <label htmlFor="profileImg" className="block text-sm font-medium text-gray-700">
        Profile Image
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mt-1 block w-full text-sm text-gray-500"
      />
      {formData?.profileImg && (
        <img
          src={formData.profileImg}
          alt="Profile"
          className="mt-2 w-24 h-24 object-cover rounded-md"
        />
      )}
    </div> */}
              {/* Comments */}
              <div>
                <label htmlFor="gender" className="block text-sm font-medium">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleFormChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 sm:text-sm"
                >
                  <option value="">Select Gender</option>
                  <option
                    value="Male"
                    // className="bg-green-100 text-green-800 shadow-sm"
                  >
                    Male
                  </option>
                  <option
                    value="Female"
                    // className="bg-pink-100 text-pink-800 shadow-sm"
                  >
                    Female
                  </option>
                </select>
              </div>

               {/* Zip Code */}
               <div>
                <label
                  htmlFor="zipCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Zip Code
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData?.zipCode || ""}
                  onChange={handleFormChange}
                  required
                  pattern="\d{5,6}"
                  title="Zip Code should be 5 or 6 digits."
                  className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="mb-4">
                <label className="block text-xs font-medium text-gray-700">
                  Referred By
                </label>
                <Combobox
                  as="div"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <div className="relative ">
                    <Combobox.Input
                      // className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 sm:text-sm"
                      onChange={(event) => setQuery(event.target.value)}
                      displayValue={(category) => category?.name}
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </Combobox.Button>

                    {filteredCategories.length > 0 && (
                      <Combobox.Options className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 sm:text-sm">
                        {/* // className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"> */}
                        {filteredCategories.map((category) => (
                          <Combobox.Option
                            key={category.id}
                            value={category}
                            className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                          >
                            <span className="block truncate group-data-[selected]:font-semibold">
                              {category.name}
                            </span>

                            <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          </Combobox.Option>
                        ))}
                      </Combobox.Options>
                    )}
                  </div>
                </Combobox>

                {selectedCategory && subOptions.length > 0 && (
                  <div className="mt-4">
                    <label className="block text-xs font-medium text-gray-700">
                      Sub-Category
                    </label>
                    <Combobox
                      as="div"
                      value={selectedSubOption}
                      onChange={setSelectedSubOption}
                    >
                      <div className="relative ">
                        <Combobox.Input
                          className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={(event) => setQuery(event.target.value)}
                          displayValue={(subOption) => subOption}
                        />
                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                          <ChevronUpDownIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </Combobox.Button>

                        {subOptions.length > 0 && (
                          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {subOptions.map((option, index) => (
                              <Combobox.Option
                                key={index}
                                value={option}
                                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                              >
                                <span className="block truncate group-data-[selected]:font-semibold">
                                  {option}
                                </span>

                                <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              </Combobox.Option>
                            ))}
                          </Combobox.Options>
                        )}
                      </div>
                    </Combobox>
                  </div>
                )}
              </div>
              <div>
                <label
                  htmlFor="comments"
                  className="block text-sm font-medium text-gray-700"
                >
                  Comments
                </label>
                <textarea
                  name="comments"
                  value={formData?.comments || ""}
                  onChange={handleFormChange}
                  className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  rows="3"
                />
              </div>
            </div>
            
            <div className="mt-6 flex justify-end gap-4">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-custom-darkblue py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-custom-lightblue"
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
