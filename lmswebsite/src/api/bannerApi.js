import api from "../config/axiosConfig";

export const createBanner = async (responseData) => {
    
    console.log("responseData", responseData);
    
    try {
        // Call the backend API using the Axios instance
        const response = await api.post("/banners/", responseData);
        console.log("Banner created successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error creating banner:", error.response?.data || error.message);
    }
};


export const updateBanner = async (bannerId, responseData) => {
    try {  
        const response = await api.put(`/banners/${bannerId}`, responseData);
        console.log("Banner updated successfully:", response.data);
        return response.data;   
    } catch (error) {
        console.error("Error updating banner:", error.response?.data || error.message);
    }
};

export const deleteBanner = async (bannerId) => {
    try {
        const response = await api.delete(`/banners/${bannerId}`);
        console.log("Banner deleted successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error deleting banner:", error.response?.data || error.message);
    }
};  


export const getBanners = async () => {
    try {
        const response = await api.get("/banners/");
        console.log("Banners fetched successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching banners:", error.response?.data || error.message);
    }
};