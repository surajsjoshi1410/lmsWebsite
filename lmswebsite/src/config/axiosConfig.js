import axios from "axios";
import{updateAccessToken} from "../api/refreshTokenApi";

// Create an Axios instance with the base URL and common configurations
const api = axios.create({
  baseURL: "https://lmswebsite-backend.vercel.app/", // Replace with your backend base URL
  // baseURL : "http://localhost:5000/",

  timeout: 30000, // Optional: Timeout after 10 seconds
  headers: {
    "Content-Type": "application/json",
  },
});
// Optional: Add a request interceptor to attach authorization token
api.interceptors.request.use(
  (config) => {
    const sessionData = JSON.parse(localStorage.getItem("sessionData")); // Example: Retrieve token from local storage

    if (sessionData && sessionData.accessToken) {
      config.headers.Authorization = `Bearer ${sessionData.accessToken}`;
    }
    // config.headers.Authorization = `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFlNTIxYmY1ZjdhNDAwOGMzYmQ3MjFmMzk2OTcwOWI1MzY0MzA5NjEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbG1zZWR1Y2F0aW9ucGxhZm9ybSIsImF1ZCI6Imxtc2VkdWNhdGlvbnBsYWZvcm0iLCJhdXRoX3RpbWUiOjE3MzIwMTQzNTQsInVzZXJfaWQiOiJuanU3VjZ1clhtUGJ6UHRhajgwbXd3QzBPNTczIiwic3ViIjoibmp1N1Y2dXJYbVBielB0YWo4MG13d0MwTzU3MyIsImlhdCI6MTczMjAxNDM1NCwiZXhwIjoxNzMyMDE3OTU0LCJlbWFpbCI6ImFkbWluaGloaUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiYWRtaW5oaWhpQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cGbP-qBpb3TwDRoBTlNxC3FeyPXi4BRS3PHc-ghw2HEEHTC_cVqYlR0RmZ5D_RPKkvDY2VToG7iN3femn9SR8tDSQpO_R7IFEHCVPe_1J7PHRSIIuzQo1pEIGcaw88oNkOrd_tX2iAuqYBhaiuMVab0l1pkcxspk7LKuyEGw2Kj_l0kBc9ncTR57N4edMZGnKb5UnZG7AVRAvlymQboX5aBBNjoFXp57u2NSV8NDLYz3raScmzw1g-yiiORZAEXjKuqXxfCvXCszSIzcfoLGY5keLKXR9DpRmAk_2uPcKrZ_rXyLUTX1D76TAgT6SdYsC1fMdpX70iDRcN4-k39zfA`;
    return config;
  },
  (error) => Promise.reject(error)
);

// // Optional: Add a response interceptor to handle errors globally
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     console.error("API Error:", error.response?.data || error.message);
//     return Promise.reject(error);
//   }
// );


// Response interceptor to handle token expiration
api.interceptors.response.use(
  (response) => response, // Pass through successful responses
  async (error) => {
    const originalRequest = error.config;

    // Check if the error is due to token expiration and avoid retry loops
    if (
      error.response &&
      error.response.status === 401 && // Token expired or unauthorized
      !originalRequest._retry
    ) {
      originalRequest._retry = true; // Mark request as retried to avoid loops

      try {
        // Call the updateAccessToken() function to get a new token
       await updateAccessToken();

        // Update the token in local storage
        const sessionData = JSON.parse(localStorage.getItem("sessionData")) || {};
        // Update the authorization header for the failed request
        originalRequest.headers.Authorization = `Bearer ${sessionData.accessToken}`;

        // Retry the original request with the new token
        return api(originalRequest);
      } catch (refreshError) {
        console.error("Failed to refresh token:", refreshError);
        return Promise.reject(refreshError);
      }
    }

    // For other errors, reject the promise
    return Promise.reject(error);
  }
);

export default api;
