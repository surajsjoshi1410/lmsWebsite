// src/module/teacher/pages/BecomeTeacherApplicationForm/TaskBoard/QuizPage/AssignedTeacherBatch.jsx

import React, { useState, useEffect } from "react";
import { FaSearch, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { AssignedTeacherBatchesWrap } from './AssignedTeacherBatches.style';
import { getBatchesByTeacherId } from "../../../../api/batchApi";
import BatchCard from "../../components/BatchCard/BatchCard";
import { getTeacherByAuthId } from "../../../../api/teacherApi";
import LoadingPage from "../../../../pages/LoadingPage/LoadingPage";
import { Heading, PageContainer } from "../../../../style/PrimaryStyles/PrimaryStyles";
import { Table, Button, Input, Modal, Image, message } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function AssignedTeacherBatch() {
    const [searchInput, setSearchInput] = useState("");
    const [filterData, setFilterData] = useState([]);
    const [originalData, setOriginalData] = useState([]);
    const [batches, setBatches] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const fetchBatches = async () => {
            try {
                const sessionData = JSON.parse(localStorage.getItem("sessionData"));
                if (!sessionData || !sessionData.userId) {
                    throw new Error("User is not authenticated.");
                }

                const authId = sessionData.userId;
                const teacherData = await getTeacherByAuthId(authId);
                console.log("Teacher Data:", teacherData);

                if (!teacherData.teacher || !teacherData.teacher._id) {
                    throw new Error("Teacher data is incomplete.");
                }

                const fetchedBatches = await getBatchesByTeacherId(teacherData.teacher._id);
                setBatches(fetchedBatches);
                setOriginalData(fetchedBatches);
                setFilterData(fetchedBatches);
                console.log("Fetched Batches:", fetchedBatches);
                setLoading(false);
            } catch (err) {
                setBatches(null);
                console.error('Error fetching batches:', err);
                // setError(err.message || 'Failed to fetch batches');
                setLoading(false);
            }
        };

        fetchBatches();
    }, []);

    // Filter data based on searchInput for "Batch Name"
    useEffect(() => {
        if (searchInput) {
            const filtered = originalData.filter((item) =>
                item["batch_name"].toLowerCase().includes(searchInput.toLowerCase())
            );
            setFilterData(filtered);
        } else {
            setFilterData(originalData); // Reset to original data if search is empty
        }
    }, [searchInput, originalData]);

    // Handle navigation to Student List
    const handleViewStudents = (batchId, batchName) => {
        navigate(`/teacher/dashboard/assigned-batches/${batchId}`, { state: { batchName } });
    };

    return (
        <PageContainer>
            <AssignedTeacherBatchesWrap className="content-area">
                <div className="area-row ar-one">
                    <Heading>Assigned Batches</Heading>
                    <Input
                        placeholder="Search by Circular Name"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        allowClear
                        prefix={<SearchOutlined />}
                        style={{ width: 300 }}
                    />
                </div>
                
                <div className="area-row ar-two">
                    {/* Additional content can go here */}
                </div>
                <div className="area-row ar-three">
                    {loading ? (
                        <>
                            <LoadingPage />
                        </>
                    ) : error ? (
                        <div>
                            <p style={{ color: 'red' }}>{error}</p>
                            {error === "No batches found for this teacher" && (
                                <Link to="/teacher/dashboard/create-batch">
                                    <button style={{
                                        padding: "10px 20px",
                                        backgroundColor: "#28a745",
                                        color: "#fff",
                                        border: "none",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                        marginTop: "10px"
                                    }}>
                                        Create New Batch
                                    </button>
                                </Link>
                            )}
                        </div>
                    ) : batches && filterData.length > 0 ? (
                        filterData.map((batch) => {
                            const batchData = {
                                batch_image: batch.batch_image,
                                batch_name: batch.batch_name,
                                class_id: batch.class_id,
                                subject_id: batch.subject_id,
                                teacher_id: batch.teacher_id,
                                date: batch.date,
                                studentcount: batch.students.length,
                                action: (
                                    <button
                                        onClick={() => handleViewStudents(batch._id, batch.batch_name)}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            padding: "5px 10px",
                                            backgroundColor: "#ff007a",
                                            color: "#fff",
                                            border: "none",
                                            borderRadius: "5px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        View Students
                                    </button>
                                )
                            };
                            return (
                                <BatchCard key={batch._id} batch={batchData} />
                            );
                        })
                    ) :
                        (
                            <>
                                <div className="assignedBatches-batchNotFound">
                                    <h2 className="AssignedTeacherBatch-batch_title">No batches Assigned for you.</h2>
                                </div>
                            </>

                        )}
                </div>
            </AssignedTeacherBatchesWrap>
        </PageContainer>
    );
}
