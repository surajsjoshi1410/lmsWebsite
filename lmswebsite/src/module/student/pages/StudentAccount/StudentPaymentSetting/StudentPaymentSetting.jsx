import React from "react";
import { Table, Button, Typography } from "antd";

const { Title } = Typography;

const paymentHistory = [
  {
    key: "1",
    batch: "Student 1",
    payment: "12299/-",
    date: "30/10/2024",
    status: "Confirmed",
  },
  {
    key: "2",
    batch: "Student 2",
    payment: "499/-",
    date: "29/10/2024",
    status: "Pending",
  },
  {
    key: "3",
    batch: "Student 3",
    payment: "299/-",
    date: "28/10/2024",
    status: "Confirmed",
  },
  {
    key: "4",
    batch: "Student 4",
    payment: "299/-",
    date: "27/10/2024",
    status: "Confirmed",
  },
];

const StudentPaymentSettings = () => {
  const columns = [
    {
      title: "Batch",
      dataIndex: "batch",
      key: "batch",
    },
    {
      title: "Payment",
      dataIndex: "payment",
      key: "payment",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <span
          style={{
            color: status === "Confirmed" ? "green" : "orange",
            fontWeight: "bold",
          }}
        >
          {status}
        </span>
      ),
    },
  ];

  const handleExport = () => {
    console.log("Exporting payment history...");
    // Add export functionality here
  };

  return (
    <div style={{ padding: "24px", background: "#fff", borderRadius: "8px" }}>
      <Title level={3}>Payment History</Title>
      <Table
        dataSource={paymentHistory}
        columns={columns}
        pagination={{ pageSize: 5 }}
        bordered
        style={{ marginTop: "16px" }}
      />
      <Button
        type="primary" 
        style={{ marginTop: "16px", backgroundColor: "#f52754", borderColor: "#f52754" , 
        
        } }
        onClick={handleExport}
      >
        Export History
      </Button>
    </div>
  );
};

export default StudentPaymentSettings;
