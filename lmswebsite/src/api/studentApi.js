import api from "../config/axiosConfig";

/**
 * Function to fetch payment status chart data.
 * @param {Object} filters - Filters for the API request.
 * @param {string} filters.year - The year to filter the data by (optional).
 * @param {string} filters.month - The month to filter the data by (optional).
 * @param {string} filters.day - The day to filter the data by (optional).
 * @returns {Promise<Object>} - The response data containing the payment status chart data.
 */
export const getPaymentStatusChartData = async (queryParams) => {
  try {
    // Construct query parameters
    //   const queryParams = new URLSearchParams();
    //   if (year) queryParams.append('year', year);
    //   if (month) queryParams.append('month', month);
    //   if (day) queryParams.append('day', day);

    // Make the GET request
    const response = await api.get(`/students/payment/statusChart?${queryParams}`);

    console.log('Payment status chart data fetched successfully:', response.data);
    return response.data; // Return the response data
  } catch (error) {
    console.error('Error fetching payment status chart data:', error.response?.data || error.message);
    throw error; // Throw the error for further handling
  }
};


/**
 * Fetch a single student by ID.
 * @param {string} studentId - The ID of the student to fetch.
 * @returns {Promise<Object>} - The student data from the API.
 */
export const getStudentById = async (studentId) => {
  try {
    // Make GET request to fetch student data
    const response = await api.get(`/students/${studentId}`);

    // Return student data
    return response.data;
  } catch (error) {
    // Handle and rethrow the error for calling functions
    console.error('Error fetching student:', error);
    throw error;
  }
};

/**
 * Fetch all students from the backend.
 * @returns {Promise<Array>} - An array of student objects from the API.
 */
export const getAllStudents = async () => {
  try {
    // Make GET request to fetch all students
    const response = await api.get('/students');
    console.log('All students fetched successfully:', response.data);

    // Return the list of students
    return response.data;
  } catch (error) {
    // Handle and rethrow the error for calling functions
    console.error('Error fetching students:', error);
    throw error;
  }
};


export const getStudentByAuthId = async (authId) => {
  try {
    const response = await api.get('/students/getstudent/getbyAuthId', {
      headers: {
        'auth_id': authId, // Pass the auth_id in headers
      },
    });
    return response.data; // Return the teacher data from the API response
  } catch (error) {
    console.error('Error fetching student by auth_id:', error);
    throw error; // Re-throw error for further handling if needed
  }
};


export const getStudentsByClassId = async (classId) => {
  try {
    const response = await api.get(`/students/class/${classId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching students by class ID:', error);
    throw error;
  }
};

export const getStudentsForBatchBySubjectId = async (subjectId) => {
  try {
    const response = await api.get(`/students/batch/subject/${subjectId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching students by Subject ID:', error);
    throw error;
  }
}

export const getStudentscheduleById = async (studentId) => {
  try {
    const response = await api.get(`/students/student/${studentId}/schedule`);
    return response;
  } catch (error) {
    console.error('Error fetching student schedule:', error);
    throw error;
  }
}

export const studentClockIn = async (studentId, meetingId) => {
  try {
    const response = await api.post(`/students/clock-in`, {
      meetingId,
      studentId,
    });
    console.log("clockedin", response.data);
    return response.data;
  } catch (error) {
    console.error("Error clocking in:", error.response?.data || error.message);
  }
};

export const studentClockOut = async (studentId, meetingId) => {
  console.log("studentClockOut", studentId, meetingId);
  try {
    const response = await api.post(`/students/clock-out`, {
      meetingId,
      studentId,
    });
    console.log("clockedout", response.data);
    return response.data;
  } catch (error) {
    console.error("Error clocking out:", error.response?.data || error.message);
  }
};


export const getStudentAttendance = async (studentId) => {
  try {
    const response = await api.get(`/students/student/attendance?studentId=${studentId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching student attendance:", error);
    throw error;
  }
};

export const getStudentsForAttendance = async () => {
  try {
    const response = await api.get(`/students/student/forattendance`);
    return response.data;
  } catch (error) {
    console.error('Error fetching students for attendance:', error);
    throw error;
  }
};

export const updateMode = async (studentId) => {
  try {
    const data = {
      student_id: studentId,
    }
    const response = await api.put(`/students/student/mode`,data);
    return response.data;
  } catch (error) {
    console.error('Error updating mode:', error);
    throw error;
  }
}