import api from "../config/axiosConfig";

export const createBenefit = async (data) => {
    try {
        const response = await api.post("/benefits/", data);
        console.log("Benefit created successfully:", response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getBenefitById = async (id) => {
    try {
        const response = await api.get(`/benefits/${id}`);
        console.log("Benefit fetched successfully:", response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getAllBenefits = async () => {
    try {
        const response = await api.get("/benefits/");
        console.log("All benefits fetched successfully:", response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const updateBenefitById = async (id, data) => {
    try {
        const response = await api.put(`/benefits/${id}`, data);
        console.log("Benefit updated successfully:", response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const deleteBenefit = async (id) => {
    try {
        const response = await api.delete(`/benefits/${id}`);
        console.log("Benefit deleted successfully:", response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
