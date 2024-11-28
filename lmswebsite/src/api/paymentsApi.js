import api from '../config/axiosConfig';

/**
 * Function to create a payment
 * @param {Object} paymentData - The data for the payment
 * @param {string} paymentData.amount - The amount to be paid
 * @param {string} paymentData.student_id - The ID of the student making the payment
 * @param {string} paymentData.package_id - The ID of the package associated with the payment
 * @param {string} paymentData.payment_method - The method of payment (e.g., Razorpay)
 * @returns {Object} - The response data containing payment details
 */
export const createPaymentApi = async (paymentData) => {
    try {
        const response = await api.post('/api/payment', paymentData);
        console.log('Payment created successfully:', response.data);
        return response.data; // Return the payment details
    } catch (error) {
        console.error('Error creating payment:', error.response ? error.response.data : error.message);
        throw error; // Throw the error for further handling
    }
};

/**
 * Function to fetch all payments
 * @returns {Array} - The response data containing all payments
 */
export const getAllPaymentsApi = async () => {
    try {
        const response = await api.get('/api/payments/allPayments');
        console.log('Payments fetched successfully:', response.data);
        return response.data; // Return the response data containing all payments
    } catch (error) {
        console.error('Error fetching payments:', error.response ? error.response.data : error.message);
        throw error; // Throw the error for further handling
    }
};

/**
 * Function to fetch payment details by payment ID
 * @param {string} paymentId - The ID of the payment to retrieve
 * @returns {Object} - The response data containing payment details
 */
export const getPaymentDetailsByIdApi = async (paymentId) => {
    try {
        const response = await api.get(`/payment/details/${paymentId}`);
        console.log('Payment details fetched successfully:', response.data);
        return response.data; // Return the response data containing payment details
    } catch (error) {
        console.error('Error fetching payment details:', error.response ? error.response.data : error.message);
        throw error; // Throw the error for further handling
    }
};



export const createPaymentForCustomPackage = async (paymentData) => {
    try {
        const response = await api.post('/api/payments/customPackage/create-order', paymentData);
        console.log('Payment link successfully:', response.data);
        return response.data; // Return the payment details
    } catch (error) {
        console.error('Error creating payment Link:', error.response ? error.response.data : error.message);
        throw error; // Throw the error for further handling
    }
};