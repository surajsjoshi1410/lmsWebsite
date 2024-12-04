import React, { useEffect, useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import { Table, Input, Button, Select, Modal } from "antd";
import { TeacherApplicationFormViewWrap } from "./TeacherApplicationFormView.styles";
import { getTeacherApplications } from "../../../../api/teachersApplicationApi";
import TeacherApplicationFormReview from "../TeachersApplicationFormReview/TeacherApplicationFormReview";

const { Option } = Select;

export default function TeacherApplicationFormView() {
  const [searchInput, setSearchInput] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [statusFilter, setStatusFilter] = useState("pending");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teacherId, setTeacherId] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
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
      render: (text, record) => (
        <Button className="status-button"
          type="link"
          onClick={() => {
            setTeacherId(record.id);
            openModal();
          }}
        >
          {text.charAt(0).toUpperCase() + text.slice(1)}
        </Button>
      ),
    },
  ];

  useEffect(() => {
    const apiCaller = async () => {
      try {
        const data = await getTeacherApplications(statusFilter);
        if (data) {
          const transformedData = data.applications.map((teacher) => ({
            id: teacher._id, // Required for Ant Design's Table
            name: teacher.teacher_id.name || "N/A",
            email: teacher.teacher_id.email || "N/A",
            date: new Date(teacher.date_applied).toLocaleDateString() || "N/A",
            status: teacher.approval_status || "N/A",
          }));
          setOriginalData(transformedData);
          setFilterData(transformedData);
        }
      } catch (error) {
        console.error("Error fetching teacher applications:", error);
      }
    };
    apiCaller();
  }, [statusFilter]);

  // Filter data based on search input
  useEffect(() => {
    if (searchInput) {
      const filtered = originalData.filter((item) =>
        Object.values(item).some((value) =>
          value.toString().toLowerCase().includes(searchInput.toLowerCase())
        )
      );
      setFilterData(filtered);
    } else {
      setFilterData(originalData);
    }
  }, [searchInput, originalData]);

  return (
    <TeacherApplicationFormViewWrap className="content-area">
      <div className="area-row ar-one">
        <div className="TeachersApplicationFormView-batches_nav">
          <h2 className="TeachersApplicationFormView-batch_title">
            Application Form
          </h2>
          <div className="TeachersApplicationFormView-search">
            <Input
              prefix={<FaSearch />}
              placeholder="Search by Teacher Name"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              style={{ width: "300px" }}
            />
          </div>
          {/* Filter Dropdown */}
          <div className="TeachersApplicationFormView-filter">
            <div className="filter-dropdown">
              <FaFilter className="filter-icon" />
              <Select
                value={statusFilter}
                onChange={(value) => setStatusFilter(value)}
                style={{ width: "150px", marginLeft: "10px" }}
              >
                <Option value="pending">Pending</Option>
                <Option value="rejected">Rejected</Option>
                <Option value="approved">Approved</Option>
              </Select>
            </div>
          </div>
        </div>
      </div>
      <div className="area-row ar-three">
        {filterData.length > 0 ? (
          <Table
            columns={columns}
            dataSource={filterData}
            rowKey={(record) => record.id} // Set row key
            pagination={{ pageSize: 10 }}
          />
        ) : (
          <p>No data found for your search.</p>
        )}
      </div>

      {/* Modal for Viewing Application */}
      <Modal
        visible={isModalOpen}
        onCancel={closeModal}
        footer={null}
        // title="Teacher Application Details"
        width={800}
      >
        {teacherId && (
          <TeacherApplicationFormReview teacher_Id={teacherId} closeModal={closeModal} />
        )}

      </Modal>
    </TeacherApplicationFormViewWrap>
  );
}
