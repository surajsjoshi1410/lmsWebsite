import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { StudentDashboardScreenWrap } from "./StudentDashboardScreen.styles";
import batch_icon from "../../assets/total_batches_icon.png";
import student_icon from "../../assets/total_students_icon.png";
import teacher_icon from "../../assets/total_teachers_icon.png";
import TeacherdashBoardCards from "../../../teacher/components/TeacherdashBoardCards/TeacherdashBoardCards";
import { getStatisticsData } from "../../../../api/statsApi";

const StudentDashboardScreen = () => {
  const [dashboardCards, setDashboardCards] = useState([]);

  useEffect(() => {
    const apiCaller = async () => {
      const response = await getStatisticsData();
      setDashboardCards([
        {
          title: "Total students",
          count: response.totalStudents,
          iconPath: student_icon,
          background: "#F8E7D8",
        },
        {
          title: "Total teachers",
          count: response.totalTeachers,
          iconPath: teacher_icon,
          background: "#D7FDEB",
        },
        {
          title: "Total Batches",
          count: response.totalBatches,
          iconPath: batch_icon,
          background: "#C9E2FF",
        },
      ]);
    };
    apiCaller();
  }, []);

  return (
    <StudentDashboardScreenWrap className="content-area">
      <div>
        <TeacherdashBoardCards cardsData={dashboardCards} />
      </div>
      <div className="area-row ar-two">
        {/* <UserEngagementChart /> <ContactForms /> */}
      </div>
      <div className="area-row ar-three">{/* <UpcomingBatch /> */}</div>
    </StudentDashboardScreenWrap>
  );
};

export default StudentDashboardScreen;
