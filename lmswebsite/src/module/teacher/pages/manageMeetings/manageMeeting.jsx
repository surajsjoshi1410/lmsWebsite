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
  getTeacherAttendance,
} from "../../../../api/teacherApi"; // Adjust this import path as necessary

const localizer = momentLocalizer(moment);

function ManageMeeting() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attendanceStatus, setAttendanceStatus] = useState({});
  const [loadData, setLoadData] = useState(false);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        setLoading(true);
        const authId = JSON.parse(localStorage.getItem("sessionData")).userId;
        const teacherdata = await getTeacherByAuthId(authId);
        const response = await getTeacherscheduleById(teacherdata.teacher._id);
        const attendanceData= await getTeacherAttendance(teacherdata.teacher._id); 
        const schedule = response.data.schedule;

        let formattedEvents = schedule.map((item, index) => ({
          id: index,
          title: item.meeting_title || "No Title", // Use the meeting title from the API response
          start: new Date(item.date),
          end: new Date(new Date(item.date).getTime() + 60 * 60 * 1000), // Assume 1-hour meetings
          meetingId: item.meeting_id, // Use meeting_id to track clocking
          meeting_url: item.meeting_url || null, // Include meeting URL
          clockIn: false,
          clockOut: false,
        }));
        attendanceData.attendance.map((item) => {
          formattedEvents = formattedEvents.map((event) => {
            if (item?.meeting_id === event.meetingId) {
              return {
                ...event,
                clockIn: item.clock_in_time?true:false,
                clockOut: item.clock_out_time?true:false
              };
            }else{
              return event;
            }
          });
        });

        setEvents(formattedEvents);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch schedule");
        setLoading(false);
      }
    };

    fetchSchedule();
  }, [loadData]);

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
      const response = await clockIn(teacherdata.teacher._id, meetingId); // Make sure you pass teacher._id

      setAttendanceStatus((prevStatus) => ({
        ...prevStatus,
        [meetingId]: "clocked-in", // Update the status to clocked-in
       
      }));
      if(response){
        setLoadData(!loadData);
      }
    } catch (error) {
      console.error("Error clocking in:", error);
    }
  };

  // Handle clock-out action
  const handleClockOut = async (meetingId) => {
    try {
      const authId = JSON.parse(localStorage.getItem("sessionData")).userId;
      const teacherdata = await getTeacherByAuthId(authId);
      const response = await clockOut(teacherdata.teacher._id, meetingId); // Pass teacherId and meetingId

      setAttendanceStatus((prevStatus) => ({
        ...prevStatus,
        [meetingId]: "clocked-out", // Update the status to clocked-out
      }));
      if(response){
        setLoadData(!loadData);
     }
    } catch (error) {
      console.error("Error clocking out:", error);
    }
  };

  // Render events for the calendar
  const renderEvent = ({ event }) => {

    return (
      <div>
        <strong>{event.title}</strong>
        <br />
        <span style={{ fontSize: "12px", color: "#111111" }}>
          {moment(event.start).format("hh:mm A")} -{" "}
          {moment(event.end).format("hh:mm A")}
        </span>
        <br />
        {event.meeting_url ? (
          !event.clockIn ? (
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
          ):
          null
         
        ) : null}
        <br />

        {!event.clockIn && !event.clockOut ? (
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
        ) : event.clockIn&&!event.clockOut ? (
          <button
            onClick={() => handleClockOut(event.meetingId)}
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
          <span style={{ color: "green" }}>Clocked Out</span>
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
