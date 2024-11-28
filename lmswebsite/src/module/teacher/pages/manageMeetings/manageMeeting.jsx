import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import axios from "axios";
import "react-big-calendar/lib/css/react-big-calendar.css"; // Default styles for react-big-calendar
import "./ManageMeeting.css"; // Optional custom styles
import { getTeacherByAuthId, getTeacherscheduleById } from "../../../../api/teacherApi";

const localizer = momentLocalizer(moment);

function ManageMeeting() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch teacher schedule from API
  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        setLoading(true);
        // const teacherId = "6482b54ef5823f6b2e3db456"; // Replace with dynamic teacher ID
        // const response = await axios.get(
        //   `http://localhost:5000/teachers/teacher/67456cc8d15050c25347206f/schedule`
        // );

        const authId = JSON.parse(localStorage.getItem("sessionData")).userId;
        const teacherdata=await getTeacherByAuthId(authId);
        const response= await getTeacherscheduleById(teacherdata.teacher._id);
        const schedule = response.data.schedule;

        // Map the schedule into events for react-big-calendar
        const formattedEvents = schedule.map((item, index) => ({
          id: index,
          title: item.meeting_title || "No Title", // Use the meeting title from the API response
          start: new Date(item.date),
          end: new Date(new Date(item.date).getTime() + 60 * 60 * 1000), // Assume 1-hour meetings
          meeting_url: item.meeting_url || null, // Include meeting URL
        }));

        setEvents(formattedEvents);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch schedule");
        setLoading(false);
      }
    };

    fetchSchedule();
  }, []);

  // Handle when a user clicks on an event
  const handleSelectEvent = (event) => {
    if (event.meeting_url) {
      window.open(event.meeting_url, "_blank"); // Open the meeting URL in a new tab
    } else {
      alert("Meeting link is not available.");
    }
  };

  // Custom event rendering
  const renderEvent = ({ event }) => (
    <div>
      <strong>{event.title}</strong>
      <br />
      {event.meeting_url ? (
        <button
          style={{
            marginTop: "5px",
            backgroundColor: "#3f51b5",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "5px 10px",
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering calendar selection
            handleSelectEvent(event);
          }}
        >
          Join Meeting
        </button>
      ) : (
        <span style={{ color: "red", fontSize: "12px" }}>
          Meeting URL not available
        </span>
      )}
    </div>
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Manage Meetings</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 600 }}
          views={["month", "week", "day", "agenda"]} // Available views
          defaultView="month" // Set the default view
          selectable={true} // Allow selecting events
          components={{
            event: renderEvent, // Use custom event rendering
          }}
          popup={true} // Show details in a popup
          eventPropGetter={() => (event) => ({
            style: {
              backgroundColor: event.meeting_url ? "#e3f2fd" : "#f8d7da", // Differentiate events with and without meeting_url
              color: "black",
            },
          })}
        />
      )}Z
    </div>
  );
}

export default ManageMeeting;
