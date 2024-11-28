import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { DashboardScreenWrap } from "./Dashboard.styles";
import batch_icon from "../../assets/total_batches_icon.png";
import student_icon from "../../assets/total_students_icon.png";
import teacher_icon from "../../assets/total_teachers_icon.png";
import UserEngagementChart from "../../components/UserEngagementChart/UserEngagementChart";
import ContactForms from "../../components/ContactForm/ContactForm";
import UpcomingBatch from "../../components/UpcommingBatch/UpcominngBatch";
import Cards from "../../components/dashBoardCards/cards"; // Import the new Cards component
import { getStatisticsData } from "../../../../api/statsApi";
import { getTotalNumberOfBatches,getTotalNumberOfStudents,getTotalNumberOfTeachers,getDailyRevenueByMonth,getPaidAndUnpaidAmount,getTotalRevenue, getWeeklyTeacherApplicationCount } from "../../../../api/adminDashboardApi";


const Dashboard = () => {
  const [dashboardCards, setDashboardCards] = useState([]);

  useEffect(() => {
    const apiCaller = async () => {
      const response = await getStatisticsData();
      const totalStudents = await getTotalNumberOfStudents();
      const totalTeachers = await getTotalNumberOfTeachers();
      const totalBatches = await getTotalNumberOfBatches();
      const totalRevenue = await getTotalRevenue();
      const paidAndUnpaidAmount = await getPaidAndUnpaidAmount();
      const dailyRevenueByMonth = await getDailyRevenueByMonth();
      const weeklyTeacherApplication = await getWeeklyTeacherApplicationCount();

      console.log(paidAndUnpaidAmount);
      console.log(dailyRevenueByMonth);
      console.log(weeklyTeacherApplication);
      setDashboardCards([
        {
          title: "Total students",
          count: totalStudents.count,
          iconPath: student_icon,
          background: "#F8E7D8",
        },
        {
          title: "Total teachers",
          count: totalTeachers.count,
          iconPath: teacher_icon,
          background: "#D7FDEB",
        },
        {
          title: "Total Batches",
          count: response.totalBatches,
          iconPath: batch_icon,
          background: "#C9E2FF",
        },
        {
          title: "Total Revenue",
          count: totalRevenue.totalAmount,
          iconPath: batch_icon,
          background: "#C9E2FF",
        },
      ]);

    };
    apiCaller();
  }, []);

  return (
    <DashboardScreenWrap className="content-area">
      <div>
        <Cards cardsData={dashboardCards} />
      </div>
      <div className="area-row ar-two">
        <UserEngagementChart /> <ContactForms />
      </div>
      <div className="area-row ar-three">{/* <UpcomingBatch /> */}</div>
    </DashboardScreenWrap>
  );
};

export default Dashboard;
