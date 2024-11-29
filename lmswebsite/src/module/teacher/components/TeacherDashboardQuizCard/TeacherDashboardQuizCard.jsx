import React from "react";

import { MdLiveTv } from "react-icons/md";

const TeacherdashBoardQuizCard = ({ cardsdata }) => {
    console.log("Quizcardsdata", cardsdata);

    const iconMap = {
        "Recent Quiz": <MdLiveTv />,
    }
  // cardsdata defaults to an empty array if it's undefined or null
  return (
    <div className="dashboard-cards">
      
        <div className="card">
          <div className="card-content">
          <div className="card-icon">{cardsdata.icon}</div>
            <div className="card-title">{cardsdata.title}</div>
            <div className="card-value">{cardsdata.count}</div>
            
          </div>

</div>
    </div>
  );
};

export default TeacherdashBoardQuizCard;
