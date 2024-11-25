import React, { useState, useEffect } from "react";
import { Table, Button, Input, Modal, Image, message } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { getAllCircularNotificationsApi } from "../../../../api/circularNotificationApi";
import { TeacherCircularWrap } from "./TeacherCircular.styles";
import LoadingPage from "../../../../pages/LoadingPage/LoadingPage";

const TeacherCircular = () => {
  const [circulars, setCirculars] = useState([]);
  const [filteredCirculars, setFilteredCirculars] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Fetch circular data
  useEffect(() => {
    const fetchCirculars = async () => {
      try {
        const data = await getAllCircularNotificationsApi();
        if (data?.circularNotifications) {
          const formattedData = data.circularNotifications.map((circular) => ({
            key: circular._id, // Unique key for Ant Design Table
            title: circular.circularName,
            description: circular.content,
            image: circular.image,
          }));
          setCirculars(formattedData);
          setFilteredCirculars(formattedData);
        } else {
          message.error("Failed to fetch circular notifications.");
        }
      } catch (error) {
        console.error("Error fetching circulars:", error);
        message.error("Error fetching circular data.");
      }
    };

    fetchCirculars();
  }, []);

  // Handle search functionality
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchInput(value);
    const filtered = circulars.filter((circular) =>
      circular.title.toLowerCase().includes(value)
    );
    setFilteredCirculars(filtered);
  };

  // Open modal with selected image
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalVisible(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedImage(null);
  };

  // Table columns
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
      render: (image) => (
        <Image
          src={image}
          alt="Circular"
          width={50}
          preview={false}
          onClick={() => openModal(image)}
          style={{ cursor: "pointer" }}
        />
      ),
    },
  ];

  return (
    <TeacherCircularWrap>{circulars ?
      <>
        <div className="header">
          <h2>Created Circulars</h2>
          <Input
            placeholder="Search by Circular Name"
            value={searchInput}
            onChange={handleSearch}
            allowClear
            prefix={<SearchOutlined />}
            style={{ width: 300 }}
          />
        </div>
        <Table
          dataSource={filteredCirculars}
          columns={columns}
          pagination={{ pageSize: 5 }}
          bordered
        />
        <Modal
          // title="View Image"
          visible={isModalVisible}
          onCancel={closeModal}
          footer={null}
          centered
        >
          <Image src={selectedImage} alt="Circular" width="100%" />
        </Modal>
      </>
      :
      <LoadingPage />
    }
    </TeacherCircularWrap>
  );
};

export default TeacherCircular;
