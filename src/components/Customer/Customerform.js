import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { CustomerContext } from '../../Context/customerContext';

function Customerform() {
  const navigate = useNavigate();
  const location = useLocation();
  const { customerDetails } = useContext(CustomerContext);

  // Determine if in edit mode (only if customer data exists)
  const isEditMode = Boolean(location.state?.customerDetails?.customer || customerDetails?.customer);

  const [formData, setFormData] = useState(location.state?.customerDetails || {
    TenantID: 1,   // Set default value for TenantID
    CustomerID: null, // Set CustomerID as null initially
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    PhoneNumber: "",
    Gender:"",
    AddressLine1: "",
    AddressLine2: "",
    CityID: 1,
    StateID: 1,
    CountryID: 1,
    ZipCode: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (isEditMode) {
      const customer = location.state?.customerDetails?.customer || customerDetails?.customer;
      setFormData({
        TenantID: customer.TenantID || 1,
        CustomerID: customer.CustomerID || null,
        FirstName: customer.FirstName || "",
        LastName: customer.LastName || "",
        Email: customer.Email || "",
        Password: "",  // Clear password if in edit mode
        PhoneNumber: customer.PhoneNumber || "",
        Gender: customer.Gender || "",
        AddressLine1: customer.AddressLine1 || "",
        AddressLine2: customer.AddressLine2 || "",
        CityID: customer.CityID || 1,
        StateID: customer.StateID || 1,
        CountryID: customer.CountryID || 1,
        ZipCode: customer.ZipCode || "",
      });
    }
  }, [isEditMode, location.state?.customerDetails?.customer, customerDetails?.customer]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    // Log the form data being sent to the API
    console.log("FormData:", formData);
  
    try {
      const response = await axios.post(
        "https://imlystudios-backend-mqg4.onrender.com/api/customers/createCustomer",
        formData
      );
  
      // Log the full response from the server
      console.log("Full Response:", response);
      console.log("Response data:", response.data);
  
      navigate("/Customer");
    } catch (error) {
      console.error("Submission failed:", error);
  
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
        setError("Failed to create customer: " + error.response.data.message);
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
      const customerId = formData.CustomerID;
  
      // Log formData to ensure CustomerID is present
      console.log("FormData before submission:", formData);
  
      if (!customerId) {
        console.error("Customer ID is missing in formData");
        setError("Customer ID is missing.");
        return;
      }
  
      console.log("Submitted details for update:", formData);
  
      const response = await axios.put(
        `https://imlystudios-backend-mqg4.onrender.com/api/customers/updateCustomer/${customerId}`,
        formData
      );
      console.log("Update successful:", response.data);
  
      navigate("/Customer");
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
    navigate("/Customer");
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={isEditMode ? handleUpdateSubmit : handleFormSubmit}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold mb-4 px-24">Customers</h2>
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
                 {/* Gender */}
                 {/* <div>
              <label htmlFor="Gender" className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <select
                id="Gender"
                name="Gender"
                value={formData.Gender || ""}
                onChange={handleFormChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="">Select Gender</option>
                <option value="M">M</option>
                <option value="F">F</option>
               
              </select>
            </div> */}

            {/* Address Line 1 */}
            <div>
              <label htmlFor="AddressLine1" className="block text-sm font-medium text-gray-700">
                Address Line 1
              </label>
              <input
                type="text"
                id="AddressLine1"
                name="AddressLine1"
                value={formData.AddressLine1 || ""}
                onChange={handleFormChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* Address Line 2 */}
            <div>
              <label htmlFor="AddressLine2" className="block text-sm font-medium text-gray-700">
                Address Line 2
              </label>
              <input
                type="text"
                id="AddressLine2"
                name="AddressLine2"
                value={formData.AddressLine2 || ""}
                onChange={handleFormChange}
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* City ID */}
            <div>
              <label htmlFor="CityID" className="block text-sm font-medium text-gray-700">
                City ID
              </label>
              <input
                type="number"
                id="CityID"
                name="CityID"
                value={formData.CityID || ""}
                onChange={handleFormChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* State ID */}
            <div>
              <label htmlFor="StateID" className="block text-sm font-medium text-gray-700">
                State ID
              </label>
              <input
                type="number"
                id="StateID"
                name="StateID"
                value={formData.StateID || ""}
                onChange={handleFormChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* Country ID */}
            <div>
              <label htmlFor="CountryID" className="block text-sm font-medium text-gray-700">
                Country ID
              </label>
              <input
                type="number"
                id="CountryID"
                name="CountryID"
                value={formData.CountryID || ""}
                onChange={handleFormChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* Zip Code */}
            <div>
              <label htmlFor="ZipCode" className="block text-sm font-medium text-gray-700">
                Zip Code
              </label>
              <input
                type="text"
                id="ZipCode"
                name="ZipCode"
                value={formData.ZipCode || ""}
                onChange={handleFormChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

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
        </form>
      </div>
    </div>
  );
}

export default Customerform;
