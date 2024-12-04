import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import {
  ChartWrapper,
  ChartTitle,
  ChartContainer,
  ChartWarpper,
  BarChartWrapper,
} from "./WeeklyTeacherApplication.styles";

const WeeklyTeacherApplication = ({ data }) => {
  // Function to generate the labels for the week, starting from today
  const getWeekDays = (startDate = new Date()) => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const labels = [];
    const startDay = startDate.getDay(); // Get the current day of the week

    for (let i = 0; i < 7; i++) {
      const day = daysOfWeek[(startDay + i) % 7];
      labels.push(day);
    }
    return labels;
  };

  // Generate labels and application data
  const xLabels = getWeekDays();
  const wData = data?.data?.map((item) => item.applications) || [];

  return (
    <ChartWrapper>
      {/* Title for the chart */}
      <ChartTitle>Weekly Teacher Applications</ChartTitle>

      {/* Bar Chart Container */}
      <ChartContainer>
        <BarChartWrapper>
          <ChartWarpper>
            <BarChart
              width={600}
              height={300}
              series={[
                {
                  data: wData,
                  label: "Number of Applications Received",
                  id: "uvId",
                  color: "#ee1b7a",
                  labelPosition: "right",
                  labelFormatter: (params) => (
                    <text
                      x={params.x}
                      y={params.y}
                      dy={4} // Adjust vertical alignment
                      fontSize="14px"
                      fill="#000" // Optional: Customize label color
                    >
                      {params.value}
                    </text>
                  ),
                },
              ]}
              xAxis={[
                {
                  data: xLabels,
                  label: "Days",
                  scaleType: "band",
                  bandPadding: 0.01,
                },
              ]}
            />
          </ChartWarpper>
        </BarChartWrapper>
      </ChartContainer>
    </ChartWrapper>
  );
};

export default WeeklyTeacherApplication;
