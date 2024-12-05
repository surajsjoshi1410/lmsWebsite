import api from "../config/axiosConfig";


export const getBatchIdByMeetingId = async(meetingId) => {  
    console.log("innerApi ffff",meetingId);
    try{
        const response= await api.get(`/meetings/getbatch/${meetingId}`);
        return response.data;
    }catch(error){
        console.error("Error clocking out:", error.response?.data || error.message);
    }
}
export const getTeacherByMeetingId = async(meetingId) => {  
    console.log("innerApi",meetingId);  
    try{
        const response= await api.get(`/teachers/getTeacherByMeetingId/one/${meetingId}`);
        return response.data;
    }catch(error){
        console.error("Error clocking out:", error.response?.data || error.message);
    }
}