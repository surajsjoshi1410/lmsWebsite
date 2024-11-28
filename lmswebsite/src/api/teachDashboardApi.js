import api from '../config/axiosConfig';

export const getBatchesCount = async (teacherId) => {
    try {
        const response = await api.get(`/teacherDashboard/count/${teacherId}`);
        console.log("Batches count fetched successfully:", response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getStudentsCount  = async (teacherId) => {
    try {
        const response = await api.get(`/teacherDashboard/countStudents/${teacherId}`);
        console.log("Students count fetched successfully:", response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getRecentQuizForTeacher = async (teacherId) => {
    try {
        const response = await api.get(`/teacherDashboard/recent/${teacherId}`);
        console.log("Recent Quiz fetched successfully:", response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
};