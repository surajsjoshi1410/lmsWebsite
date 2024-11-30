import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  CustomerQueryViewFormWrap,
  QueryFormContainer,
  QueryFormField,
  StatusButton,
} from "./CustomerQueryViewForm.styles";
import { fetchQueryById, updateQueryById } from "../../../../api/customerQueryApi";

const CustomerQueryViewForm = ({queryId,closeModal}) => {

  const navigate = useNavigate();
  const [query, setQuery] = useState(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch query details when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchQueryById(queryId);
        setQuery(data);
        setStatus(data.queryStatus);
      } catch (err) {
        console.error("Error fetching query:", err.message);
        setError("Failed to fetch query details.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [queryId]);

  // Function to update the query status to "solved" on the backend
  const resolveQuery = async () => {
    try {
      const updatedQuery = { ...query, queryStatus: "solved", querySolved: true };

      await updateQueryById(queryId, updatedQuery);
      setQuery(updatedQuery);
      setStatus("solved");
      closeModal();
      alert("Query status updated to solved successfully.");
      navigate("/admin/customerQueries");
    } catch (error) {
      console.error("Error updating query status:", error.message);
      alert("Failed to update query status.");
    }
  };

  if (loading) return <p>Loading query details...</p>;
  if (error) return <p className="error_message">{error}</p>;

  return (
    <CustomerQueryViewFormWrap>
      <h2 className="queryForm-title">Query Details</h2>
      <QueryFormContainer>
        <QueryFormField>
          <label>Title:</label>
          <p>{query.title}</p>
        </QueryFormField>
        <QueryFormField>
          <label>Contact Email:</label>
          <p>{query.contactEmail}</p>
        </QueryFormField>
        <QueryFormField>
          <label>Contact Number:</label>
          <p>{query.contactNumber}</p>
        </QueryFormField>
        <QueryFormField>
          <label>Message:</label>
          <p>{query.message}</p>
        </QueryFormField>
        <QueryFormField>
          <label>Date Queried:</label>
          <p>{new Date(query.dateQueried).toLocaleString()}</p>
        </QueryFormField>
        
        <QueryFormField>
          <label>Status:</label>
          <p>{status.charAt(0).toUpperCase() + status.slice(1)}</p>
        </QueryFormField>
       
        {status === "pending" && (
          <StatusButton className="resolve" onClick={resolveQuery}>
            Resolve Query
          </StatusButton>
        )}
      </QueryFormContainer>
    </CustomerQueryViewFormWrap>
  );
};

export default CustomerQueryViewForm;
