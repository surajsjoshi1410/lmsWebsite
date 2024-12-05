import api from "../config/axiosConfig";



export const createReschedule = async (data) => {
   try {
    console.log("inside API", data);    
      const response = await api.post("/reschedule/reschedule-meetings/create", data);
      return response.data;
   } catch (error) {
      console.error("Error creating reschedule:", error);
      throw error;
   }
};

export const getRescheduleByTeacherId = async (teacherId) => {
   try {
      const response = await api.get(`/reschedule//reschedule-meetings/teacher/${teacherId}`);
      return response.data;
   } catch (error) {
      console.error("Error fetching reschedule by teacher ID:", error);
      throw error;
   }
};

export  const approveReschedule = async (meetingId) => {         
   try {
      const response = await api.put(`/reschedule/reschedule-meetings/approve/${meetingId}`);
      return response.data;
   } catch (error) {
      console.error("Error approving reschedule:", error);
      throw error;
   }
};

export  const rejectReschedule = async (meetingId) => {
   try {
      const response = await api.put(`/reschedule/reschedule-meetings/reject/${meetingId}`);
      return response.data;
   } catch (error) {
      console.error("Error rejecting reschedule:", error);
      throw error;
   }
}