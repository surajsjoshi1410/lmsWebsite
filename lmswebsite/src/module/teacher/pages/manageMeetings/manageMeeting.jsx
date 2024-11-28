import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import axios from "axios";
import "react-big-calendar/lib/css/react-big-calendar.css"; // Default styles for react-big-calendar
import "./ManageMeeting.css"; // Optional custom styles
import {
  getTeacherByAuthId,
  getTeacherscheduleById,
  clockIn,
  clockOut,
} from "../../../../api/teacherApi"; // Adjust this import path as necessary

const localizer = momentLocalizer(moment);

function ManageMeeting() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attendanceStatus, setAttendanceStatus] = useState({});

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        setLoading(true);
        const authId = JSON.parse(localStorage.getItem("sessionData")).userId;
        const teacherdata = await getTeacherByAuthId(authId);
        const response = await getTeacherscheduleById(teacherdata.teacher._id);
        const schedule = response.data.schedule;

        const formattedEvents = schedule.map((item, index) => ({
          id: index,
          title: item.meeting_title || "No Title", // Use the meeting title from the API response
          start: new Date(item.date),
          end: new Date(new Date(item.date).getTime() + 60 * 60 * 1000), // Assume 1-hour meetings
          meetingId: item.meeting_id, // Use meeting_id to track clocking
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

  // Handle event click (meeting link)
  const handleSelectEvent = (event) => {
    if (event.meeting_url) {
      window.open(event.meeting_url, "_blank"); // Open the meeting URL in a new tab
    } else {
      alert("Meeting link is not available.");
    }
  };

  // Handle clock-in action
  const handleClockIn = async (meetingId) => {
    try {
      const authId = JSON.parse(localStorage.getItem("sessionData")).userId;
      const teacherdata = await getTeacherByAuthId(authId);

      // Clock-in API requires teacherId and meetingId
      await clockIn(teacherdata.teacher._id, meetingId); // Make sure you pass teacher._id

      setAttendanceStatus((prevStatus) => ({
        ...prevStatus,
        [meetingId]: "clocked-in", // Update the status to clocked-in
      }));
    } catch (error) {
      console.error("Error clocking in:", error);
    }
  };

  // Handle clock-out action
  const handleClockOut = async (meetingId) => {
    try {
      const teacherId = JSON.parse(localStorage.getItem("sessionData")).userId;
      await clockOut(teacherId, meetingId); // Pass teacherId and meetingId

      setAttendanceStatus((prevStatus) => ({
        ...prevStatus,
        [meetingId]: "clocked-out", // Update the status to clocked-out
      }));
    } catch (error) {
      console.error("Error clocking out:", error);
    }
  };

  // Render events for the calendar
  const renderEvent = ({ event }) => {
    const isClockedIn = attendanceStatus[event.meeting_id] === "clocked-in";
    const isClockedOut = attendanceStatus[event.meeting_id] === "clocked-out";

    return (
      <div>
        <strong>{event.title}</strong>
        <br />
        <span style={{ fontSize: "12px", color: "#ffffff" }}>
          {moment(event.start).format("hh:mm A")} -{" "}
          {moment(event.end).format("hh:mm A")}
        </span>
        <br />
        {event.meeting_url ? (
          <button
            onClick={() => handleSelectEvent(event)}
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "5px 10px",
              marginTop: "5px",
            }}
          >
            Join Meeting
          </button>
        ) : null}
        <br />

        {!isClockedIn && !isClockedOut ? (
          <button
            onClick={() => handleClockIn(event.meetingId)}
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "5px 10px",
              marginTop: "5px",
            }}
          >
            Clock In
          </button>
        ) : isClockedIn ? (
          <button
            onClick={() => handleClockOut(event.meeting_id)}
            style={{
              backgroundColor: "#FF6347",
              color: "white",
              padding: "5px 10px",
              marginTop: "5px",
            }}
          >
            Clock Out
          </button>
        ) : (
          <span>Clocked Out</span>
        )}
      </div>
    );
  };

  return (
    <div className="manage-meeting">
      {loading ? (
        <p>Loading schedule...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "800px", margin: "50px 0" }}
          eventPropGetter={(event) => ({
            style: { backgroundColor: "#ffffff" },
          })}
          components={{
            event: renderEvent,
          }}
        />
      )}
    </div>
  );
}

export default ManageMeeting;
