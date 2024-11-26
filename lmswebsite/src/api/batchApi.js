import api from "../config/axiosConfig";

export const createBatch = async (responseData) => {
    try {
        // Call the backend API using the Axios instance
        const response = await api.post("/batches/", responseData);
        console.log("Batch created successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error creating batch:", error.response?.data || error.message);
    }
};

/**
 * Fetch all batches with optional query parameters.
 * @param {Object} params - Query parameters (e.g., page, limit, start_date, end_date, teacher_id, etc.)
 * @returns {Promise<Object>} - Returns the response data or logs an error.
 */
export const getAllBatches = async (params) => {
    try {
      // Call the backend API using Axios with query params
      if(params!==undefined){
        const response = await api.get('/batches/getAllBatches/all', { params });
        console.log('Batches fetched successfully:', response.data);
        return response.data; // Return the response data
      }else{
        const response = await api.get('/batches/getAllBatches/all');
        console.log('Batches fetched successfully:', response.data);
        return response.data; // Return the response data
      }
    } catch (error) {
      console.error('Error fetching batches:', error.response?.data || error.message);
      throw error; // Optionally rethrow the error for further handling
    }
  };

  // Function to get all batches
export const getAllBatchesNoFilter = async () => {
  try {
    const response = await api.get('/batches/getAllBatchesNoFilter');
    return response.data;
  } catch (error) {
    console.error('Error fetching batches:', error);
    throw error; // Re-throw the error to handle it in the calling function
  }
};

export const getBatchesByTeacherId = async (teacherId) => {
  try {
    const response = await api.get(`/batches/getBatches/teacher/${teacherId}`);
    console.log("batches fetched succesfully",response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching batches:', error);
    throw error; // Re-throw the error to handle it in the calling function
  }
};


export const getBatchById = async(batch_id)=>{
  try{
    const response = await api.get(`/batches/${batch_id}`);
    console.log("batches fetched succesfully",response.data);
    return response.data;

  }catch(error)
  {
    console.error("Error fetching batch",error);
    throw error;
  }
}


export const getBatchesByStudentId = async (studentId) => {   
  try {
    const response = await api.get(`/batches/getAllBatches/student/${studentId}`);
    console.log("batches fetched succesfully",response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching batches:', error);  
    throw error; // Re-throw the error to handle it in the calling function
  }
};

