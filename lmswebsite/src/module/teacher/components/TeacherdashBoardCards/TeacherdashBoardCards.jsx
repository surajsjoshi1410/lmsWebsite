import React from "react";
import { TeacherdashBoardCardswrap } from "./TeacherdashBoardCards.styles";
import { ImUser } from "react-icons/im";
import { GiTeacher } from "react-icons/gi";
import { MdLiveTv } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { Ri24HoursFill } from "react-icons/ri";

// Define icon mappings for each title
const iconMap = {
  "Total students": <ImUser />,
  "Total teachers": <GiTeacher />,
  "Total Batches": <FaPeopleGroup />,
  "Total Working Hours": <Ri24HoursFill />,
};

const TeacherdashBoardCards = ({ cardsData = [] }) => {
  // Log the received data for debugging
  console.log('Received cardsData:', cardsData);

  // Check if cardsData is an array
  if (!Array.isArray(cardsData)) {
    console.error("Expected cardsData to be an array but received:", cardsData);
    return <div>No data available</div>; // Render fallback message
  }

  return (
    <TeacherdashBoardCardswrap>
      <div className="cards">
        {cardsData.length > 0 ? (
          cardsData.map((card, index) => (
            <div key={index} className="card-item">
              <div className="card-content">
                <div
                  className="card-item-icon"
                  style={{ backgroundColor: card.background }}
                >
                  {iconMap[card.title] || <ImUser />} {/* Fallback icon */}
                </div>
                <div className="card-text-content">
                  <p className="card-item-text">{card.title}</p>
                  <div className="card-item-value">{card.count}</div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No data available</div> // Fallback message when cardsData is empty
        )}
      </div>
    </TeacherdashBoardCardswrap>
  );
};

export default TeacherdashBoardCards;
