import api from "../config/axiosConfig";



 export const getTotalNumberOfStudents = async () => {
    try {
        const response = await api.get('/adminDashboard/dashboard/numberOfStudents');
        return response;
    } catch (error) {
        console.error(error);
    }
}
export const getTotalNumberOfTeachers = async () => {
    try {
        const response = await api.get('/adminDashboard/dashboard/numberOfTeachers');
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const getTotalNumberOfBatches = async () => {
    try {
        const response = await api.get('/adminDashboard/dashboard/numberOfBatches');
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const getTotalRevenue = async () => {
    try {
        const response = await api.get('/adminDashboard/dashboard/totalrevenue');
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const getPaidAndUnpaidAmount = async () => {
    try {
        const response = await api.get('/adminDashboard/dashboard/amountPaidUnpaid');
        return response;
    } catch (error) {
        console.error(error);
    }
}