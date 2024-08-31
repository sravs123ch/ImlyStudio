
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { useTheme } from "@mui/material/styles";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import * as XLSX from "xlsx";
import PropTypes from "prop-types";
import { FaTable } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import axios from "axios";
import { UserContext } from "../../Context/userContext";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#003375", // Dark blue color
      color: theme.palette.common.white,
      fontWeight: "bold",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
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
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
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

function User() {
  const [editingIndex, setEditingIndex] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchName, setSearchName] = useState("");
  // const [searchEmail, setSearchEmail] = useState("");

  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  // Your getAllUsers function
  const getAllUsers = async () => {
    try {
      const response = await axios.get(
        "https://imlystudios-backend-mqg4.onrender.com/api/users/getAllUsers"
      );
      // console.log("Users retrieved successfully:", response.data);
      return response.data.users; // Return the list of users
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getAllUsers();
        setUsers(usersData);
      } catch (error) {
        console.error("Failed to fetch users", error);
      }
    };
    fetchUsers();
  }, []);

  // Handle pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Calculate pagination data
  const paginatedUsers = users.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );
  const emptyRows = rowsPerPage - paginatedUsers.length;

  const getUserById = async (userId) => {
    try {
      const response = await axios.get(
        `https://imlystudios-backend-mqg4.onrender.com/api/users/getUserById/${userId}`
      );
      console.log("User retrieved successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  };
  // API Call for deleting a user
  const deleteUserById = async (userId) => {
    try {
      const response = await axios.delete(
        `https://imlystudios-backend-mqg4.onrender.com/api/users/deleteUser/${userId}`
      );
      console.log("User deleted successfully:", response.data);
      return response.data; // Return the response data
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  };
  // API Call for updating a user
  const updateUserById = async (userId, updatedData) => {
    try {
      const response = await axios.put(
        `https://imlystudios-backend-mqg4.onrender.com/api/users/updateUser/${userId}`,
        updatedData
      );
      console.log("User updated successfully:", response.data);
      return response.data; // Return the response data
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  };

  const { setUserDetails } = useContext(UserContext);

  const handleEditClick = async (index) => {
    const realIndex = page * rowsPerPage + index;
    const userId = users[realIndex].UserID;

    try {
      const userDetails = await getUserById(userId);
      console.log("Fetched user details:", userDetails);

      // Store userDetails in context
      setUserDetails(userDetails);

      // Navigate to userform
      navigate("/userform");
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  // Handle save or update action in your form
  const handleSaveChanges = async (updatedData) => {
    const userId = users[editingIndex].UserID;

    try {
      await updateUserById(userId, updatedData); // Update the user via API

      // Update the user in the local state
      const updatedUsers = users.map((user, index) =>
        index === editingIndex ? { ...user, ...updatedData } : user
      );
      setUsers(updatedUsers);
      // setIsFormVisible(false); // Hide the form after saving changes
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // Handle delete button click
  const handleDeleteClick = async (index) => {
    const realIndex = page * rowsPerPage + index;
    const userId = users[realIndex].UserID;

    try {
      await deleteUserById(userId); // Delete the user via API

      // Remove the user from the local state
      const updatedUsers = users.filter((_, i) => i !== realIndex);
      setUsers(updatedUsers);

      // Adjust the page if necessary
      if (updatedUsers.length <= page * rowsPerPage && page > 0) {
        setPage(page - 1);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Fetch users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userList = await getAllUsers();
        setUsers(userList);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  //   // Example if using useState
  const [paginatedPeople, setPaginatedPeople] = useState([]);

  const exportToExcel = (data, fileName) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  const handleExportUsersData = () => {
    exportToExcel("Customers");
  };

  useEffect(() => {
    setPaginatedPeople(
      users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    );
  }, [users, page, rowsPerPage]);

  // const handleAddUserClick = () => {
  //   // Navigate to the UserForm route
  //   navigate('/userform');
  // };
  const handleAddUserClick = () => {
    // Clear the user details before navigating
    setUserDetails(null); // Assuming setUserDetails is a method from UserContext to clear user details
    navigate("/userform");
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Users</h2>

          <div className="flex items-center space-x-4">
            <div className="relative flex flex-col w-[20rem] -ml-4">
              <label
                htmlFor="searchName"
                className="text-sm font-medium"
              ></label>
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
                Add Users
              </button>
            </li>

            <li>
              <button
                type="button"
                className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700"
                onClick={handleExportUsersData}
              >
                <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
                Export Users
              </button>
            </li>
          </ul>
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
                <StyledTableCell>Actions</StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {paginatedUsers.map((person, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell>
                    <div className="flex items-center space-x-2">
                      <img
                        src={person.ProfileImage}
                        alt="Profile"
                        className="h-24 w-24 rounded-full object-cover"
                      />
                      <span>{person.FirstName}</span>
                      <span>{person.LastName}</span>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell>{person.Email}</StyledTableCell>
                  <StyledTableCell>{person.PhoneNumber}</StyledTableCell>
                  <StyledTableCell>
                    {person.Address?.AddressLine1}
                    {person.Address?.AddressLine2 &&
                      `, ${person.Address.AddressLine2}`}
                    <br />
                    {person.Address?.CityID}, {person.Address?.StateID},{" "}
                    {person.Address?.ZipCode}
                  </StyledTableCell>

                  <StyledTableCell>
                    <span
                      className={`inline-block px-3 py-2 text-xs font-semibold rounded-full ${
                        person.Gender === "M"
                          ? "bg-green-100 text-green-800 shadow-md"
                          : person.Gender === "F"
                          ? "bg-pink-100 text-pink-800 shadow-md"
                          : "bg-gray-100 text-gray-800 shadow-md"
                      }`}
                    >
                      {person.Gender}
                    </span>
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
                <StyledTableRow style={{ height: 53 * emptyRows }}>
                  <StyledTableCell colSpan={6} />
                </StyledTableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[10, 20, 25]}
                  colSpan={6}
                  count={users.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  // SelectProps={{
                  //   inputProps: {
                  //     "aria-label": "rows per page",
                  //   },
                  //   native: true,
                  // }}
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
export default User;
