import api from "../config/axiosConfig";

export const getTeacherById = async (user_id) => {
  try {
    // Call the backend API using the Axios instance
    const response = await api.get(`/teachers/${user_id}`);
    console.log("Teacher fetched successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching teacher:",
      error.response?.data || error.message
    );
  }
};

export const getAllTeachers = async () => {
  try {
    // Call the backend API using the Axios instance
    const response = await api.get("/teachers/");
    console.log("Teachers fetched successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching teachers:",
      error.response?.data || error.message
    );
  }
};

export const updateTeacherById = async (user_id, teacherData) => {
  try {
    // Call the backend API using the Axios instance
    const response = await api.put(`/teachers/update/${user_id}`, teacherData);
    console.log("Teacher updated successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error updating teacher:",
      error.response?.data || error.message
    );
  }
};

export const getTeachersByExperience = async () => {
  try {
    // Call the backend API using the Axios instance
    const response = await api.get(`/teachers/experience/greater`);
    console.log("Teachers fetched successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching teachers:",
      error.response?.data || error.message
    );
  }
};

/**
 * Fetch teacher details by auth_id.
 * @param {string} authId - The auth_id of the teacher.
 * @param {string} token - JWT token for authentication.
 * @returns {object} - The teacher data from the API response.
 */
export const getTeacherByAuthId = async (authId) => {
  try {
    const response = await api.get("/teachers/teacher/AuthId", {
      headers: {
        auth_id: authId, // Pass the auth_id in headers
      },
    });
    return response.data; // Return the teacher data from the API response
  } catch (error) {
    console.error("Error fetching teacher by auth_id:", error);
    throw error; // Re-throw error for further handling if needed
  }
};

export const getTeacherscheduleById = async (tecaherId) => {
  try {
    const response = await api.get(`/teachers/teacher/${tecaherId}/schedule`);
    return response;
  } catch (error) {
    console.error("Error fetching teacher schedule:", error);
    throw error;
  }
};

export const clockIn = async (teacherId, meetingId) => {
  try {
    const response = await api.post(`/teachers/clock-in`, {
      meetingId,
      teacherId,
    });
    console.log("clockedin", response.data);
    return response.data;
  } catch (error) {
    console.error("Error clocking in:", error.response?.data || error.message);
  }
};
export const clockOut = async (teacherId, meetingId) => {
  try {
    const response = await api.post(`/teachers/clock-out`, {
      meetingId,
      teacherId,
    });
    console.log("clockedout", response.data);
    return response.data;
  } catch (error) {
    console.error("Error clocking out:", error.response?.data || error.message);
  }
};

export const getTeacherAttendance = async (teacherId) => {
  try {
    const response = await api.get(`/teachers/teacher/attendance?teacherId=${teacherId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching teacher attendance:", error);
    throw error;
  }
};