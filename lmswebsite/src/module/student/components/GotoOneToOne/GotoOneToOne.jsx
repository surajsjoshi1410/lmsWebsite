import React from "react";
import { useNavigate } from "react-router-dom";
import { GotoOneToOneContainer } from "./GotoOneToOne.style";

export const GotoOneToOne = () => {
    const navigate = useNavigate();

    const handleGoToDashboard = () => {
        navigate("/student/mode"); // Adjust the route as needed
    };  

    return (
       <GotoOneToOneContainer>
         <div>
            <h1>Want to enroll for One to One Sessions</h1>
            <button onClick={handleGoToDashboard}>Go to Enroll</button>
        </div>  
       </GotoOneToOneContainer>
    )
}