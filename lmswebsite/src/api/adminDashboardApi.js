import api from "../config/axiosConfig";



 export const getTotalNumberOfStudents = async () => {
    try {
        const response = await api.get('/adminDashboard/dashboard/numberOfStudents');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
export const getTotalNumberOfTeachers = async () => {
    try {
        const response = await api.get('/adminDashboard/dashboard/numberOfTeachers');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getTotalNumberOfBatches = async () => {
    try {
        const response = await api.get('/adminDashboard/dashboard/totalBatches');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getTotalRevenue = async () => {
    try {
        const response = await api.get('/adminDashboard/dashboard/totalrevenue');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getPaidAndUnpaidAmount = async () => {
    try {
        const response = await api.get('/adminDashboard/dashboard/amountPaidUnpaid');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


export const getWeeklyTeacherApplicationCount=  async () => {
    try {
        const response = await api.get('/adminDashboard/dashboard/weeklyTeacherApplication');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getDailyRevenueByMonth=  async (month) => {
    try {
        const currentYear = new Date().getFullYear();
        const response = await api.get(`/adminDashboard/dashboard/dailyRevenueForMonth?year=${currentYear}&month=${month}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}