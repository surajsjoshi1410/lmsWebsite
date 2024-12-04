import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import { FilterOutlined } from "@ant-design/icons";
import { Select, Form } from "antd";
import { getDailyRevenueByMonth } from "../../../../api/adminDashboardApi";
import {
  ChartWrapper,
  ChartTitle,
  MonthButton,
  MonthSelectWrapper,
  FormItem,
  ChartContainerWrapper,
  ChartContainer,
  CustomSelect, // Import the styled CustomSelect
} from "./DailyRevenueByMonth.styles"; // Import styled components

const DailyRevenueByMonth = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [data, setData] = useState();

  useEffect(() => {
    const apiCaller = async () => {
      const dailyRevenueByMonth = await getDailyRevenueByMonth(
        selectedMonth + 1
      ); // Passing correct month
      console.log("daily", dailyRevenueByMonth);
      setData(dailyRevenueByMonth);
    };
    apiCaller();
  }, [selectedMonth]);

  const getMonthDays = (startDate = new Date()) => {
    const month = startDate.getMonth();
    const year = startDate.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => (i + 1).toString());
  };

  const xLabels = getMonthDays();
  let rData = Array(xLabels.length).fill(0);

  data?.data?.forEach((item, index) => {
    if (index < rData.length) {
      rData[index] = item.revenue;
    }
  });

  const handleMonthChange = (value) => {
    setSelectedMonth(value); // Update selected month
  };

  const chartData = {
    labels: xLabels,
    datasets: [
      {
        label: "Revenue",
        data: rData,
        fill: false,
        borderColor: "#EE1B7A",
        pointBackgroundColor: "transparent", // Make points invisible
        pointBorderColor: "transparent", // Remove the point borders
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    aspectRatio: 0,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Removes the gridlines on the x-axis
        },
        ticks: {
          display: true, // Show ticks on the x-axis (optional)
        },
        title: {
          display: true,
          text: "Days of the Month",
        },
        borderColor: "transparent", // Removes the x-axis border/line
        borderWidth: 0, // Removes the x-axis border width
      },
      y: {
        grid: {
          display: false, // Removes the gridlines on the y-axis
        },
        ticks: {
          display: true, // Show ticks on the y-axis (optional)
        },
        title: {
          display: true,
          text: "Revenue",
        },
        beginAtZero: true,
        borderColor: "transparent", // Removes the y-axis border/line
        borderWidth: 0, // Removes the y-axis border width
      },
    },
  };

  return (
    <ChartWrapper>
      <ChartTitle>Monthly Revenue</ChartTitle>

      <MonthButton>
        <MonthSelectWrapper>
          <FilterOutlined style={{ marginRight: "10px" }} />

          <FormItem>
            <CustomSelect
              value={selectedMonth}
              onChange={handleMonthChange}
              placeholder="Select Month"
            >
              {[...Array(12)].map((_, index) => (
                <Select.Option key={index} value={index}>
                  {new Date(0, index).toLocaleString("en-US", {
                    month: "long",
                  })}
                </Select.Option>
              ))}
            </CustomSelect>
          </FormItem>
        </MonthSelectWrapper>
      </MonthButton>

      <ChartContainerWrapper>
        <ChartContainer>
          <Chart
            type="line"
            data={chartData}
            options={chartOptions}
            style={{ height: "300px", width: "1200px" }}
          />
        </ChartContainer>
      </ChartContainerWrapper>
    </ChartWrapper>
  );
};

export default DailyRevenueByMonth;
