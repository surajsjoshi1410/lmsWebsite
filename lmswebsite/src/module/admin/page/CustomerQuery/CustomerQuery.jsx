// CustomerQuery2.jsx
import React, { useState, useEffect } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import { CustomerQueryWrap } from "./CustomerQuery.styles";
import { getAllQuerys } from "../../../../api/customerQueryApi";
import CustomerQueryViewForm from "../CustomerQueryViewForm/CustomerQueryViewForm";
import { Table, Button, Modal, Input, Select } from 'antd';

const { Option } = Select;

export default function CustomerQuery() {
  const [searchInput, setSearchInput] = useState('');
  const [filterData, setFilterData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("pending");
  const [queryId, setQueryId] = useState(null);

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text, record) => (
        <Button type="link" onClick={() => handleStatusClick(record)}>
          {text.charAt(0).toUpperCase() + text.slice(1)}
        </Button>
      ),
    },
  ];

  const openModal = () => {
    setIsModalOpen(true);
  }
  const closeModal = () => {
    setIsModalOpen(false);
  }

  const handleStatusClick = (record) => {
    setQueryId(record.key); // Assuming record.key is queryId
    openModal();
  };

  useEffect(() => {
    const apiCaller = async () => {
      try {
        const data = await getAllQuerys();
        const filteredQueries = data?.queries?.filter(
          (query) => query.queryStatus === statusFilter
        );
        if (filteredQueries) {
          const dataFilter = filteredQueries.map((query) => {
            return {
              key: query._id, // 'key' is required for Ant Design tables
              title: query.title || "N/A",
              description: query.message || "N/A",
              date: new Date(query.dateQueried).toLocaleDateString() || "N/A",
              status: query.queryStatus || "N/A",
            };
          });
          setOriginalData(dataFilter);
          setFilterData(dataFilter);
        }
      } catch (error) {
        console.error("Error fetching queries:", error);
      }
    }
    apiCaller();
  }, [statusFilter]);

  // Filter data based on searchInput for "Title"
  useEffect(() => {
    if (searchInput) {
      const filtered = originalData.filter((item) =>
        item.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilterData(filtered);
    } else {
      setFilterData(originalData); // Reset to original data if search is empty
    }
  }, [searchInput, originalData]);

  return (
    <CustomerQueryWrap className="content-area">
      <div>
        <div className="area-row ar-one">
          <div className="CustomerQueries-batches_nav">
            <h2 className="CustomerQueries-batch_title">Customer Queries</h2>
            <div className="CustomerQueries-search">
              <Input
                prefix={<FaSearch />}
                placeholder="Search by Title"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
            {/* Filter */}
            <div className="CustomerQueries-filter">
              <div className="CustomerQueries-filter-dropdown">
                <FaFilter className="CustomerQueries-filter-icon" />
                <Select
                  value={statusFilter}
                  onChange={(value) => setStatusFilter(value)}
                  className="CustomerQueries-dropdown"
                  style={{ width: 120 }}
                >
                  <Option value="pending">Pending</Option>
                  <Option value="solved">Solved</Option>
                </Select>
              </div>
            </div>
          </div>
        </div>
        <div className="area-row ar-two"></div>
        <div className="area-row ar-three">
          {filterData.length > 0 ? (
            <Table columns={columns} dataSource={filterData} />
          ) : (
            <p>No results found</p>
          )}
        </div>
      </div>

      {/* Modal for Query Details */}
      <Modal
        visible={isModalOpen}
        onCancel={closeModal}
        footer={null}
        // title="Query Details"
        width={800}
      >
        {queryId && <CustomerQueryViewForm queryId={queryId} closeModal={closeModal}/>}
      </Modal>
    </CustomerQueryWrap>
  );
}
