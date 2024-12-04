import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {
  ChartWrapper,
  ChartTitle,
  LegendWrapper,
  LegendItem,
  LegendColorBox,
  StyledPieChartWrapper,
} from "./PieChartPage.styles"; // Importing styled components
 
const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
];
 
const COLORS = ["#EE1B7A", "#FFC1CD"];
 
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
 
  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
 
export default class Example extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj";
 
  render() {
    return (
      <ResponsiveContainer>
        <ChartWrapper>
          <ChartTitle>Paid and Unpaid Amount</ChartTitle>
          <StyledPieChartWrapper>
            <PieChart width={400} height={400}>
              <Pie
                data={this.props.data}
                cx="50%"
                cy="40%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                content={({ payload }) => {
                  if (payload && payload.length) {
                    const { name, value } = payload[0];
                    return (
                      <div style={{ backgroundColor: "white", padding: "5px" }}>
                        <p>
                          {name}: &#8377; {value}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
            </PieChart>
          </StyledPieChartWrapper>
          <LegendWrapper>
            <LegendItem>
              <LegendColorBox color="#EE1B7A" />
              Paid
            </LegendItem>
            <LegendItem>
              <LegendColorBox color="#FFC1CD" />
              Unpaid
            </LegendItem>
          </LegendWrapper>
        </ChartWrapper>
      </ResponsiveContainer>
    );
  }
}
 