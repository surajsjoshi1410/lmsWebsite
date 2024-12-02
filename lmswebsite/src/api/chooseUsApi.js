import api from "../config/axiosConfig";
export const createChooseUsFeature = async (data) => {
    try {
        const response = await api.post(`/chooseUs/create`, data);
        console.log('Choose us feature created successfully:', response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getChooseUsData = async () => {
    try {
        const response = await api.get(`/chooseUs/getData`);
        console.log('Choose us data fetched successfully:', response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const updateChooseUsFeature = async (chooseUsId, data) => {
    try {
        const response = await api.put(`/chooseUs/update/${chooseUsId}`, data);
        console.log('Choose us feature updated successfully:', response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const deleteChooseUsFeature = async (chooseUsId) => {
    try {
        const response = await api.delete(`/chooseUs/delete/${chooseUsId}`);
        console.log('Choose us feature deleted successfully:', response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
}