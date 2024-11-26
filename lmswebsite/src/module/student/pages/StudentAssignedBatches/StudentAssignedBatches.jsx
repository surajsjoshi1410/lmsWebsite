// src/module/teacher/pages/BecomeTeacherApplicationForm/TaskBoard/QuizPage/AssignedTeacherBatch.jsx

import React, { useState, useEffect } from "react";
import { FaSearch, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { StudentAssignedBatchWrap } from './StudentAssignedBatches.styles';
import { getBatchesByStudentId, getBatchesByTeacherId } from "../../../../api/batchApi";
import BatchCard from "../../components/BatchCard/BatchCard";
import { getTeacherByAuthId } from "../../../../api/teacherApi";
import LoadingPage from "../../../../pages/LoadingPage/LoadingPage";
import { getStudentByAuthId } from "../../../../api/studentApi";

export default function StudentAssignedBatches() {
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
                const studentData = await getStudentByAuthId(authId);
                console.log("Student Data:", studentData);

                if (!studentData.student || !studentData.student._id) {
                    throw new Error("Teacher data is incomplete.");
                }

                const fetchedBatches = await getBatchesByStudentId(studentData.student._id);
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
        <StudentAssignedBatchWrap className="content-area">
            <div className="area-row ar-one">
                <div className="AssignedTeacherBatch-batches_nav">
                    <h2 className="AssignedTeacherBatch-batch_title">Assigned Batches</h2>
                    <div className="AssignedTeacherBatch-search">
                        <form>
                            <div className="input-group">
                                <span className="input-icon">
                                    <FaSearch />
                                </span>
                                <input
                                    type="text"
                                    className="input-control"
                                    placeholder="Search by Batch Name"
                                    value={searchInput}
                                    onChange={(e) => setSearchInput(e.target.value)}
                                />
                            </div>
                        </form>
                    </div>
                </div>
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
                        <p>Error: {error}</p>
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
                                <button>
                                    <FaEye style={{ marginRight: "5px" }} /> future Actions
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
        </StudentAssignedBatchWrap>
    );
}
