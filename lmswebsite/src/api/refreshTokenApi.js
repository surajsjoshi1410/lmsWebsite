import api from '../config/axiosConfig';

export const updateAccessToken = async () => {   
    console.log("updateAccessToken"); 
    try {
        const sessionData = JSON.parse(localStorage.getItem('sessionData'));
        console.log("sessionData referesh", sessionData);
        if (sessionData?.refreshToken) {
            const response = await api.post('refreshToken/get-access-token',{refresh_token:sessionData.refreshToken});
            if (response.status === 200) {  
                const newsessionData={
                    ...sessionData,
                    accessToken: response.data.accessToken,
                    refreshToken: response.data.refreshToken
                }
                localStorage.removeItem('sessionData');
                localStorage.setItem('sessionData', JSON.stringify(newsessionData));
            }
        }
    } catch (error) {
        console.error('Error updating access token:', error);
        throw error;
    }
};
