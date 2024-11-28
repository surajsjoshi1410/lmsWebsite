import React, { useState, useEffect } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { getAllCircularNotificationsApi } from "../../../../api/circularNotificationApi";
import { Button, Input, Modal, Table, Select } from "antd";  // Import Select component
import { CircularWrap } from "./Circulars.styles";
import CreateCircular from "../CreateCircular/CreateCircular";

const { Option } = Select;  // Destructure Option from Select

export default function Circulars() {
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isCreateCircularModalOpen, setIsCreateCircularModalOpen] = useState(false);
  const [filter, setFilter] = useState("all");  // New state variable for filter

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (src) => (
        <img
          src={src}
          alt="Circular"
          className="circular-image-box"
          onClick={() => {
            setSelectedImage(src);
            setIsModalOpen(true);
          }}
          style={{ width: "50px", cursor: "pointer" }}
        />
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <Button
          type="text"
          onClick={() => {
            setSelectedImage(record.image);
            setIsModalOpen(true);
          }}
        >
          View Image
        </Button>
      ),
    },
  ];

  // Fetch data on component mount
  useEffect(() => {
    const apiCaller = async () => {
      const data = await getAllCircularNotificationsApi(filter);
      console.log("Fetched Circulars:", data);
      if (data) {
        const formattedData = data.circularNotifications.map((circular) => ({

          key: circular._id,
          title: circular.circularName || "N/A",
          description: circular.content || "N/A",
          image: circular.image || "",
          userType: circular.role || "all",  // Assuming userType is part of the data
        }));
        setOriginalData(formattedData);
        setData(formattedData);
      }
    };
    apiCaller();
  }, [filter]);

  // Filter data based on searchInput and selected filter
  useEffect(() => {
    let filteredData = originalData.filter((item) =>
      item.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    
    // Apply additional filter based on userType
    if (filter !== "all") {
      filteredData = filteredData.filter(item => item.userType === filter);
    }
    
    setData(filteredData);
  }, [searchInput, originalData, filter]);  // Re-run filter when searchInput or filter changes

  const openCreateCircularModal = () => {
    setIsCreateCircularModalOpen(true);
  };

  const closeCreateCircularModal = () => {
    setIsCreateCircularModalOpen(false);
  };

  return (
    <CircularWrap>
      <div className="circular-header">
        <h2 className="circular-title">Created Circulars</h2>
        <div className="circulat-button">
          <Input
            placeholder="Search by Circular Name"
            prefix={<FaSearch />}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            style={{ width: "300px", marginRight: "20px" }}
          />

          {/* Filter Dropdown */}
          <Select
            value={filter}
            onChange={(value) => setFilter(value)}
            style={{ width: 150, marginRight: "20px" }}
          >
            <Option value="all">All</Option>
            <Option value="teacher">Teacher</Option>
            <Option value="student">Student</Option>
          </Select>

          <Button
            type="primary"
            style={{ background: "#EE1B7A", borderColor: "#EE1B7A" }}
            icon={<AiOutlineFileAdd />}
            onClick={openCreateCircularModal}
          >
            Create Circular
          </Button>
        </div>
      </div>

      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
        bordered
      />

      {/* Image Viewer Modal */}
      <Modal
        visible={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
        centered
      >
        <img
          src={selectedImage}
          alt="Circular"
          style={{ width: "100%", maxHeight: "500px" }}
        />
      </Modal>

      {/* Create Circular Modal */}
      <Modal
        visible={isCreateCircularModalOpen}
        footer={null}
        onCancel={closeCreateCircularModal}
        centered
      >
        <CreateCircular closeModal={closeCreateCircularModal} />
      </Modal>
    </CircularWrap>
  );
}
