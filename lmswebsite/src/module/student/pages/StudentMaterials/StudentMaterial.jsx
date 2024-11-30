import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getContentByBatchId } from "../../../../api/batchContentApi";
import { MaterialContainer, MaterialCardWrapper } from "./StudnetMaterials.style";  // Import styles
import { Fa0 } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import { getBatchById } from "../../../../api/batchApi"

const StudentMaterial = () => {
    const { batchId } = useParams(); // Get batchId from URL parameters
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [batchName, setBatchName] = useState("");
    useEffect(() => {
        const fetchContents = async () => {
            try {
                console.log("Batch ID:", batchId); // Log batchId to ensure it's correct
                const batchData = await getBatchById(batchId);  // Fetch batch info using batchId
                console.log("Batch Data:", batchData);

                if (batchData && batchData.batch?.batch_name) {
                    setBatchName(batchData.batch?.batch_name);  // Set batch name from the response

                    console.log("Batch dcdcdcdName:", batchData.batch?.batch_name);
                } else {
                    setError("Batch not found.");
                    setLoading(false);
                    return;
                }

                // Check if the batchId is valid (e.g., if it's a valid format)
                if (!batchId || batchId === "material") {
                    setError("Invalid batch ID.");
                    setLoading(false);
                    return;
                }

                // Fetch contents based on batchId
                const response = await getContentByBatchId(batchId);
                console.log("Response:", response);

                if (response && response.length === 0) {
                    setError("No materials available for this batch.");
                } else {
                    setContents(response);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching contents:", error); // Log the error for debugging
                setError("Error fetching contents."); // Set error message for display
                setLoading(false);
            }
        };

        fetchContents();
    }, [batchId]);

    // Show loading state while data is being fetched
    if (loading) return <p>Loading... </p>;

    // Show error message if there was an issue Batch {batchId.batchName?.batch_name}
    if (error) return <p>{error}</p>;

    return (
        <MaterialContainer>
            <h2>Materials for {batchName} </h2>
            <div className="card-list">
                {contents.map((material) => (
                    <MaterialCardWrapper key={material.id}>
                        <div className="card-header">
                            {/* <h3>{material.name}</h3> */}
                            <p>Hello 123</p>
                            <a href={material.downloadUrl} target="_blank" className="btn-download" download>
                                <FaDownload />
                            </a>
                        </div>
                        {/* <div className="card-body">
                            <p>{material.description}</p>
                        </div> */}
                    </MaterialCardWrapper>
                ))}
            </div>
        </MaterialContainer>
    );
};

export default StudentMaterial;
