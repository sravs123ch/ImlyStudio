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
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import axios from "axios";
import { RoleContext } from '../../Context/roleContext'; // Import StoreContext

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#003375',
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

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function Roles() {
  const [editingIndex, setEditingIndex] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchName, setSearchName] = useState("");
  const [roles, setRoles] = useState([]);

  const navigate = useNavigate();


  const getAllRoles = async () => {
    try {
      const response = await axios.get(
        "https://imlystudios-backend-mqg4.onrender.com/api/userrole/getAllRoles"
      );
      return response.data.roles;
    } catch (error) {
      console.error("Error fetching stores:", error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const rolesData = await getAllRoles();
        setRoles(rolesData);
      } catch (error) {
        console.error("Failed to fetch roles", error);
      }
    };
    fetchRoles();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedRoles = roles.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );
  const emptyRows = rowsPerPage - paginatedRoles.length;

  const getRoleById = async (roleId) => {
    try {
      const response = await axios.get(
        `https://imlystudios-backend-mqg4.onrender.com/api/userrole/getUserroleById/${roleId}`
      );
      console.log("Role retrieved successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching store:", error);
      throw error;
    }
  };
// API Call for deleting a store
const deleteRoleById = async (roleId) => {
  try {
    const response = await axios.delete(
      `https://imlystudios-backend-mqg4.onrender.com/api/userrole/updateUserrole/${roleId}`
    );
    console.log("Role deleted successfully:", response.data);
    return response.data; // Return the response data
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};

  //  API Call for updating a user
const updateRoleById = async (roleId, updatedData) => {
  try {
    const response = await axios.put(
      `https://imlystudios-backend-mqg4.onrender.com/api/userrole/updateRoles/${roleId}`,
      updatedData
    );
    console.log("Role updated successfully:", response.data);
    return response.data; // Return the response data
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

const { setRoleDetails } = useContext(roleContext); 

  const handleEditClick = async (index) => {
    const realIndex = page * rowsPerPage + index;
    const storeId = stores[realIndex].StoreId;

    try {
      const roleDetails = await getRoleById(roleId); // Use getroleById from context
      console.log("Fetched role details:", roleDetails);
      setRoleDetails(roleDetails);
      navigate('/Roleform');
    } catch (error) {
      console.error("Error fetching role details:", error);
    }
  };


  //  Handle save or update action in your form
  const handleSaveChanges = async (updatedData) => {
    const roleId = roles[editingIndex].roleID;
  
    try {
      await updateRoleById(roleId, updatedData); // Update the user via API
      
      // Update the user in the local state
      const updatedRoles = roles.map((role, index) =>
        index === editingIndex ? { ...role, ...updatedData } : role
      );
      setStores(updatedRoles);
      // setIsFormVisible(false); // Hide the form after saving changes
    } catch (error) {
      console.error("Error updating roles:", error);
    }
  };

  const handleDeleteClick = async (index) => {
    const realIndex = page * rowsPerPage + index;
    const roleId = roles[realIndex].StoreID;

    try {
      await deleteRoleById(roleId); // Use deleteStoreById from context
      const updatedRoles = roles.filter((_, i) => i !== realIndex);
      setStores(updatedRoles);

      if (updatedRoles.length <= page * rowsPerPage && page > 0) {
        setPage(page - 1);
      }
    } catch (error) {
      console.error("Error deleting role:", error);
    }
  };

  // Fetch users on component mount
useEffect(() => {
  const fetchRoles = async () => {
    try {
      const roleList = await getAllRoles();
      setRoles(roleList);
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  };

  fetchRoles();
}, []);

const [paginatedPeople, setPaginatedPeople] = useState([]);
  const exportToExcel = (data, fileName) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  const handleExportRolesData = () => {
    exportToExcel("roles");
  };

  useEffect(() => {
    setPaginatedPeople(
      roles.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    );
  }, [roles, page, rowsPerPage]);

  const handleAddStoreClick = () => {
    // Clear the user details before navigating
    setStoreDetails(null); 
    navigate('/Roleform');
  };

  return (
    // <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
    //   <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
    //     <div className="flex justify-between items-center">
    //       <h2 className="text-xl font-semibold">Stores</h2>

    //       <div className="flex items-center space-x-4">
    //         <div className="relative flex flex-col w-[20rem] -ml-4">
    //           <label htmlFor="searchName" className="text-sm font-medium"></label>
    //           <input
    //             id="searchName"
    //             type="text"
    //             placeholder="Search by Name or Email"
    //             value={searchName}
    //             onChange={(e) => setSearchName(e.target.value)}
    //             className="mt-1 p-2 pr-10 border border-gray-300 rounded-md"
    //           />
    //           <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
    //             <IoIosSearch />
    //           </div>
    //         </div>
    //       </div>
    //       <ul className="mt-4 sm:ml-16 sm:mt-0 flex space-x-4">
    //         <li>
    //           <button
    //             type="button"
               
    //             className="inline-flex items-center gap-x-1 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
    //             onClick={handleAddStoreClick}
    //           >
    //             <FaPlus aria-hidden="true" className="h-4 w-4" />
    //             Add Store
    //           </button>
    //         </li>
    //         <li>
    //           <button
    //             type="button"
    //             onClick={handleExportStoresData}
    //             className="inline-flex items-center gap-x-1 rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500"
    //           >
    //             <FaEdit aria-hidden="true" className="h-4 w-4" />
    //             Export to Excel
    //           </button>
    //         </li>
    //       </ul>
    //     </div>

    //     <TableContainer component={Paper} className="mt-4 rounded-lg shadow">
    //       <Table>
    //         <TableHead>
    //           <TableRow>
    //             <StyledTableCell>Store Name</StyledTableCell>
    //             <StyledTableCell>Email</StyledTableCell>
    //             <StyledTableCell>Phone</StyledTableCell>
    //             <StyledTableCell>Location</StyledTableCell>
    //             <StyledTableCell>Actions</StyledTableCell>
    //           </TableRow>
    //         </TableHead>

    //         <TableBody>
    //           {paginatedStores.map((row, index) => (
    //             <StyledTableRow key={index}>
    //               <StyledTableCell>{row.StoreName}</StyledTableCell>
    //               <StyledTableCell>{row.Email}</StyledTableCell>
    //               <StyledTableCell>{row.Phone}</StyledTableCell>
    //               <StyledTableCell>{row.Address}</StyledTableCell>
    //               <StyledTableCell>
    //                 <IconButton onClick={() => handleEditClick(index)}>
    //                   <AiOutlineEdit />
    //                 </IconButton>
    //                 <IconButton onClick={() => handleDeleteClick(index)}>
    //                   <AiOutlineDelete />
    //                 </IconButton>
    //               </StyledTableCell>
    //             </StyledTableRow>
    //           ))}
    //           {emptyRows > 0 && (
    //             <StyledTableRow style={{ height: 53 * emptyRows }}>
    //               <StyledTableCell colSpan={6} />
    //             </StyledTableRow>
    //           )}
    //         </TableBody>
    //         <TableFooter>
    //           <TableRow>
    //             <TablePagination
    //               rowsPerPageOptions={[5, 10, 25]}
    //               colSpan={5}
    //               count={stores.length}
    //               rowsPerPage={rowsPerPage}
    //               page={page}
    //               onPageChange={handleChangePage}
    //               onRowsPerPageChange={handleChangeRowsPerPage}
    //               ActionsComponent={TablePaginationActions}
    //             />
    //           </TableRow>
    //         </TableFooter>
    //       </Table>
    //     </TableContainer>
    //   </div>
    // </div>

    <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
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
      </div>
  );
}

export default Stores;
