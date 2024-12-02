import React, { useEffect } from "react";
import QuizImage from "../../../teacher/assets/Quiz.png";

import { MdLiveTv } from "react-icons/md";
import { TeacherDashboardQuizCardwrap } from "./TeacherDashboardQuizCard.styles";
import { Link } from "react-router-dom";
const TeacherdashBoardQuizCard = ({ cardsdata }) => {
    console.log("Quizcardsdata", cardsdata);

    const iconMap = {
        "Recent Quiz": <MdLiveTv />,
    };
const onClick = () => {
    console.log("clicked");
}

  return (
        <TeacherDashboardQuizCardwrap>
          <div className="card">
            {cardsdata ? (
              <div className="card-content">
                <div className="card-title">
               
                 Recent Quiz : {cardsdata.title} </div>
                  <div className="card-icon">
                    <img src={QuizImage} alt="Maths Icon" />
                  </div>
     
                  {/* Table for batch, subject, and class */}
                  <table className="info-table">
                    <tbody>
                      <tr>
                        <td className="label">Batch</td>
                        <td className="value">: {cardsdata.batch_name || "N/A"}</td>
                      </tr>
                      <tr>
                        <td className="label">Subject</td>
                        <td className="value">: {cardsdata.subject_name || "N/A"}</td>
                      </tr>
                      <tr>
                        <td className="label">Class</td>
                        <td className="value">: {cardsdata.className || "N/A"}</td>
                      </tr>
                      <tr>
                        <td className="label">Answered By</td>
                        <td className="value">: {cardsdata.answeredBy || "0"}</td>
                      </tr>
                    </tbody>
                  </table>
                 
                
     
               
               
              </div>
            ) : (
              <div>No Data Available</div>
            )}
          </div>
          <Link className="view-button" to={'/teacher/dashboard/quizz/assignedBatch'}>
                View
              </Link>
          
        </TeacherDashboardQuizCardwrap>
      );
    };
     

export default TeacherdashBoardQuizCard;
