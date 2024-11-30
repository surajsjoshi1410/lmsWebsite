// // src/components/BatchCard.jsx

// import React from "react";
// import { BatchCardWrap } from "./BatchCard.styles";

// const BatchCard = ({ batch }) => {
//     // Destructure the required fields from the batch object
//     const {
//         batch_image,
//         batch_name,
//         class_id,
//         subject_id,
//         teacher_id,
//         date,
//         studentcount,
//         action,
//     } = batch;

//     // Format the date to a readable format
//     const formattedDate = new Date(date).toLocaleDateString("en-US", {
//         year: "numeric",
//         month: "long",
//         day: "numeric",
//     });

//     return (
//         <BatchCardWrap>
//             <div className="batch-card">
//                 <div className="batch-image-container">
//                     <img
//                         src={batch_image || "https://via.placeholder.com/400x300?text=No+Image"}
//                         alt={batch_name}
//                         className="batch-image"
//                         loading="lazy"
//                         onError={(e) => {
//                             e.target.onerror = null;
//                             e.target.src = "https://via.placeholder.com/400x300?text=No+Image";
//                         }}
//                     />
//                 </div>
//                 <div className="batch-content">
//                     <h2 className="batch-name">{batch_name}</h2>
//                     <div className="batch-details">

//   {/* Teacher Name */}
//   {teacher_id.length > 0 &&
//                             <div className="detail-item">
//                                 <span className="detail-icon">👨‍🏫</span>
//                                 <span className="detail-text">
//                                     <strong>Teacher:</strong>{" "}
//                                     {teacher_id && teacher_id.length > 0 ? (
//                                         teacher_id.map((teacher, index) => (
//                                             <span key={teacher._id}>
//                                                 {teacher.user_id ? teacher.user_id.name : "Unknown"}
//                                                 {index < teacher_id.length - 1 && ", "}
//                                             </span>
//                                         ))
//                                     ) : (
//                                         <span className="no-teacher">No Teacher Assigned</span>
//                                     )}
//                                 </span>
//                             </div>
//                         }

                        
//                         {/* Subject Name */}

// {subject_id && (
//                             <div className="detail-item">
//                                 <span className="detail-icon">📚</span>
//                                 <span className="detail-text">
//                                     <strong>Subject:</strong> {subject_id.subject_name}
//                                 </span>
//                             </div>
//                         )}

//                         {/* Class Level */}
//                         {class_id && (
//                             <div className="detail-item">
//                                 <span className="detail-icon">🎓</span>
//                                 <span className="detail-text">
//                                     <strong>Class Level:</strong> {class_id.classLevel}
//                                 </span>
//                             </div>
//                         )}

                       

                      

//                         {/* Date */}
//                         <div className="detail-item-date">
//                             <span className="detail-date-icon">📅</span>
//                             <span className="detail-text-date">
//                                 <strong>Date:</strong> {formattedDate}
//                             </span>
//                         </div>

//                         {/* Student Count */}
//                         <div className="detail-item">
//                             <span className="detail-icon">👥</span>
//                             <span className="detail-text">
//                                 <strong>Students:</strong> {studentcount}
//                             </span>
//                         </div>
//                         {/* Action */}
//                         <div className="detail-item">
//                             <span className="detail-icon">⚙️</span>
//                             <span className="detail-text">
//                                 <strong>Action:</strong> {action}
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </BatchCardWrap>
//     );
// };

// export default BatchCard;


// src/components/BatchCard.jsx

import React from "react";
import { BatchCardWrap } from "./BatchCard.styles";

const BatchCard = ({ batch }) => {
    // Destructure the required fields from the batch object
    const {
        batch_image,
        batch_name,
        class_id,
        subject_id,
        teacher_id,
        date,
        studentcount,
        action,
    } = batch;

    // Format the date to a readable format
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <BatchCardWrap>
            <div className="batch-card">
                <div className="batch-image-container">
                    <img
                        src={batch_image || "https://via.placeholder.com/400x300?text=No+Image"}
                        alt={batch_name}
                        className="batch-image"
                        loading="lazy"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://via.placeholder.com/400x300?text=No+Image";
                        }}
                    />
                </div>
                <div className="batch-content">
                    {/* Header: Batch Name and Date */}
                    <div className="batch-header">
                        <h2 className="batch-name">{batch_name}</h2>
                        <div className="batch-date">
                            📅 {formattedDate}
                        </div>
                    </div>

                    {/* Batch Details */}
                    <div className="batch-details">

                        {/* Teacher Name */}
                        {teacher_id && teacher_id.length > 0 && (
                            <div className="detail-item">
                                <span className="detail-icon">👨‍🏫</span>
                                <span className="detail-text">
                                    <strong>Teacher:</strong>{" "}
                                    {teacher_id.map((teacher, index) => (
                                        <span key={teacher._id}>
                                            {teacher.user_id ? teacher.user_id.name : "Unknown"}
                                            {index < teacher_id.length - 1 && ", "}
                                        </span>
                                    ))}
                                </span>
                            </div>
                        )}

                        {/* Subject Name */}
                        {subject_id && (
                            <div className="detail-item">
                                <span className="detail-icon">📚</span>
                                <span className="detail-text">
                                    <strong>Subject:</strong> {subject_id.subject_name}
                                </span>
                            </div>
                        )}

                        {/* Class Level */}
                        {class_id && (
                            <div className="detail-item">
                                <span className="detail-icon">🎓</span>
                                <span className="detail-text">
                                    <strong>Class Level:</strong> {class_id.classLevel}
                                </span>
                            </div>
                        )}

                        {/* Student Count */}
                        <div className="detail-item">
                            <span className="detail-icon">👥</span>
                            <span className="detail-text">
                                <strong>Students:</strong> {studentcount}
                            </span>
                        </div>
                    </div>

                    {/* Footer: Action */}
                    <div className="batch-footer">
                        <span className="action-text">
                           {action}
                        </span>
                    </div>
                </div>
            </div>
        </BatchCardWrap>
    );
};

export default BatchCard;
