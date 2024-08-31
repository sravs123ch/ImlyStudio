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
    TenantID: 1,
    StoreID:2,
    StoreName: "",
    Email: "",
    Password: "",  // Added Password field to formData
    Phone: "",
  
  });

  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isEditMode) {
      setFormData({
        StoreName: "",
        Email: "",
        Phone: "",
        Password: "",  
      });
    }
  }, [isEditMode]);

  useEffect(() => {
    if (!isEditMode) return;
    
    const store = location.state?.storeDetails?.store || storeDetails?.store;
    if (store) {
      setFormData({
        StoreName: store.StoreName || "",
        Email: store.Email || "",
        Phone: store.Phone || "",
        Password: store.Password || "",  // Include password for edit mode
        StoreID: store.StoreID || "",
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
      navigate("/store");
    } catch (error) {
      console.error("Submission failed:", error);
      setError("Failed to create store.");
    }
  };

  const handleUpdateSubmit = async (event) => {
    event.preventDefault();
    try {
      const storeId = formData.StoreID; // Assuming `StoreID` is used for updates
console.log(storeId)

      if (!storeId) {
        console.error("Store ID is missing in formData");
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
      if (error.response) {
        console.error("Update failed with response error:", error.response.data);
      } else if (error.request) {
        console.error("Update failed with no response received:", error.request);
      } else {
        console.error("Update failed with error:", error.message);
      }
      setError("Failed to update store.");
    }
  };

  const handleCancel = () => {
    navigate("/Stores");
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
         
        <form onSubmit={isEditMode ? handleUpdateSubmit : handleFormSubmit}>
            <h2 className="text-xl font-semibold mb-4 px-24">Stores</h2>
            <div className="mb-4">
              <label htmlFor="RoleName" className="block text-sm font-medium text-gray-700">
                Role Name
              </label>
              <input
                id="RoleName"
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
   
  );
}

export default Storeform;
