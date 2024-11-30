// AssignedTeacherBatch.jsx

import React, { useState, useEffect } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { QuizBatcheswrap } from './QuizBatches.styles';
import { getBatchesByTeacherId } from "../../../../../api/batchApi";
import BatchCard from "../../../components/BatchCard/BatchCard";
import DashboardTable from "../../../../admin/components/DashboardTable/DashboardTable";
import { IoMdClose } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { getTeacherByAuthId } from "../../../../../api/teacherApi";
import { useNavigate } from "react-router-dom";
import LoadingPage from "../../../../../pages/LoadingPage/LoadingPage";

export default function QuizBatches() {
    const [searchInput, setSearchInput] = useState("");
    const [filterData, setFilterData] = useState([]);
    const [originalData, setOriginalData] = useState([]);
    const [batches, setBatches] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [stdTableIndex, setStdTableIndex] = useState(null);
    const [tableData, setTableData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const modelOpen = () => {
        setIsModalOpen(true);
    };
    const modelClose = () => {
        setIsModalOpen(false);
        setStdTableIndex(null);
        setTableData([]);
        // window.location.reload(); // Consider removing this to prevent full page reload
    };

    useEffect(() => {
        const fetchBatches = async () => {
            try {
                const authId = JSON.parse(localStorage.getItem("sessionData")).userId;
                const teacherData = await getTeacherByAuthId(authId);
                console.log("Teacher Data:", teacherData);
                const fetchedBatches = await getBatchesByTeacherId(teacherData.teacher._id);
                setBatches(fetchedBatches);
                setOriginalData(fetchedBatches);
                setFilterData(fetchedBatches);
                console.log("Fetched Batches:", fetchedBatches);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching batches:', err);
                // setError('Failed to fetch batches');
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

    useEffect(() => {
        console.log(stdTableIndex);
        if (stdTableIndex >= 0) {
            const batch = originalData[stdTableIndex];
            if (batch && batch.students) {
                setTableData(batch.students.map((student) => ({
                    "Name": student.user_id.name,
                    "Email": student.user_id.email
                })));
            }
        }
    }, [stdTableIndex, originalData]);

    return (
        <QuizBatcheswrap className="content-area">
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
                    <p style={{ color: 'red' }}>{error}</p>
                ) : batches && filterData.length > 0 ? (
                    filterData.map((batch, index) => {
                        const batchData = {
                            batch_image: batch.batch_image,
                            batch_name: batch.batch_name,
                            class_id: batch.class_id,
                            subject_id: batch.subject_id,
                            teacher_id: batch.teacher_id,
                            date: batch.date,
                            studentcount: batch.students.length,
                            action: <button onClick={() => { navigate(`/teacher/dashboard/quizz/batches/${batch._id}`) }}> View Quizes</button>
                        }
                        return (
                            <BatchCard key={batch._id} batch={batchData} />
                        )
                    })
                ) : (
                    <>
                        <div className="quizBatches-batchNotFound">
                            <h2 className="AssignedTeacherBatch-batch_title">No batches Assigned for you.</h2>
                        </div>
                    </>
                )}

               
            </div>
        </QuizBatcheswrap>
    )
}
