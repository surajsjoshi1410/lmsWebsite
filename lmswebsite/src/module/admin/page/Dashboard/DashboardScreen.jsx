import React, { useEffect, useState } from "react";
import { DashboardScreenWrap } from "./Dashboard.styles";
import batch_icon from "../../assets/total_batches_icon.png";
import student_icon from "../../assets/total_students_icon.png";
import teacher_icon from "../../assets/total_teachers_icon.png";
// import revenue_icon from "../../assets/total_revenue_icon.png";
import Cards from "../../components/dashBoardCards/cards";
import {
  getTotalNumberOfBatches,
  getTotalNumberOfStudents,
  getTotalNumberOfTeachers,
  getTotalRevenue,
  getPaidAndUnpaidAmount,
  getDailyRevenueByMonth,
  getWeeklyTeacherApplicationCount,
} from "../../../../api/adminDashboardApi";
import PieChartPage from "../../components/PieChartPage/PieChartPage";
import WeeklyTeacherApplication from "../../components/WeeklyTeacherApplication/WeeklyTeacherApplication";
import DailyRevenueByMonth from "../../components/DailyRevenueByMonth/DailyRevenueByMonth";
 
const Dashboard = () => {
  const [dashboardCards, setDashboardCards] = useState([]);
  const [paidAmount, setPaidAmount] = useState(0);
  const [unpaidAmount, setUnpaidAmount] = useState(0);
  const [weeklyTeacherApplication, setWeeklyTeacherApplication] = useState([]); // State for weekly teacher application data
  const [dailyRevenue, setDailyRevenue] = useState([]);
 
  useEffect(() => {
    const apiCaller = async () => {
      try {
        // Fetching required data
        const totalStudents = await getTotalNumberOfStudents();
        const totalTeachers = await getTotalNumberOfTeachers();
        const totalBatches = await getTotalNumberOfBatches();
        const totalRevenue = await getTotalRevenue();
        const paidAndUnpaidResponse = await getPaidAndUnpaidAmount();
 
        const dailyRevenueByMonth = await getDailyRevenueByMonth();
        const weeklyTeacherApplicationData =
          await getWeeklyTeacherApplicationCount(); // Get weekly teacher application data
 
        // Setting state with fetched data
        setPaidAmount(paidAndUnpaidResponse.paid_amount);
        setUnpaidAmount(paidAndUnpaidResponse.unpaid_amount);
        setWeeklyTeacherApplication(weeklyTeacherApplicationData); // Set the weekly teacher application data
        // console.log(weeklyTeacherApplicationData); // Debug log
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
            count: totalBatches.count,
            iconPath: batch_icon,
            background: "#C9E2FF",
          },
          {
            title: "Total Revenue",
            count: totalRevenue.totalAmount,
            background: "#8CFAC7",
          },
        ]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
 
    apiCaller();
  }, []); // Empty dependency array to run once when the component mounts
 
  return (
    <DashboardScreenWrap className="content-area">
      <div>
        <Cards cardsData={dashboardCards} />
      </div>
      <div className="area-row ar-two">
        <PieChartPage
          data={[
            { name: "Paid Amount", value: paidAmount },
            { name: "Unpaid Amount", value: unpaidAmount },
          ]}
          className="PieChart"
        />
        <WeeklyTeacherApplication data={weeklyTeacherApplication} />
        {/* Pass weekly data */}
      </div>
      <div className="area-row ar-three">
        {/* Add more components if needed */}
        <DailyRevenueByMonth data={dailyRevenue} />
      </div>
    </DashboardScreenWrap>
  );
};
 
export default Dashboard;