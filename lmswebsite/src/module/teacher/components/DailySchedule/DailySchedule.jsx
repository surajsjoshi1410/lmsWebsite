import React, { useState, useEffect } from 'react'
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css"; // Default styles for react-big-calendar
import moment from "moment";
import { getTeacherAttendance, getTeacherByAuthId, getTeacherById, getTeacherscheduleById } from '../../../../api/teacherApi';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import  {DailyScheduleContainerWrap} from "./DailySchedule.styles";

const localizer = momentLocalizer(moment);

export default function DailySchedule() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const isSameDay = (date1, date2) => {
        console.log("date1", date1, "date2", date2);
        // Check if year, month, and day are the same for both dates
        return (date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate());
    };

    // Fetch teacher schedule from API
    useEffect(() => {
        const fetchSchedule = async () => {
            try {
                setLoading(true);
                const authId = JSON.parse(localStorage.getItem("sessionData")).userId;
                const teacherdata = await getTeacherByAuthId(authId);
                const response = await getTeacherscheduleById(teacherdata.teacher._id);
                const attendanceData = await getTeacherAttendance(teacherdata.teacher._id);
                const schedule = response.data.schedule;

                // Map the schedule into events for react-big-calendar
                let formattedEvents = schedule.map((item, index) => ({
                    id: index,
                    title: item.meeting_title || "No Title", // Use the meeting title from the API response
                    start: new Date(item.date) || new Date(),
                    end: new Date(new Date(item.date).getTime() + 60 * 60 * 1000), // Assume 1-hour meetings
                    meetingId: item.meeting_id, // Use meeting_id to track clocking
                    meeting_url: item.meeting_url || null, // Include meeting URL
                    backgroundColor: 'rgba(0, 123, 255, 0.7)',
                    clockIn: false,
                    clockOut: false,
                }));
                const currentDate = new Date();
                const filteredEvents = formattedEvents.filter(item => isSameDay(new Date(item.start), currentDate));
                setEvents(filteredEvents);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch schedule");
                setLoading(false);
            }
        };

        fetchSchedule();
    }, []);


    // Custom event rendering
    const renderEvent = ({ event }) => {
        // console.log("event", event);
        return (
            <div style={{ padding: "5px", backgroundColor: event?.backgroundColor }}>
               
                <strong>{event?.title}</strong>
                <br />
                <span style={{ fontSize: "12px", color: "#ffffff" }}>
                    {moment(event?.start).format("hh:mm A")} -{" "}
                    {moment(event?.end).format("hh:mm A")}
                </span>
                

            </div>
        );
    };




    return (
        <DailyScheduleContainerWrap>
           <h1 className='daily-schedule-header'>Daily Schedule</h1>

            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridDay" // You can switch to timeGridDay for day view
                events={events}
                eventContent={renderEvent}
                headerToolbar={{
                    left: 'prev,next today',
                    center: '',    
                    right: 'timeGridDay',

                }}
                customButtons={{
                    myCustomButton: {
                        text: 'My Custom Button',
                        click: () => alert('Custom button clicked!'),
                    },
                }}
                buttonText={{
                    today: 'Go to Today', // Customize 'Today' button text
                  }}
                
        
                  eventTextColor="white" // Text color of the event
                  
                height={340}
                editable={true}
                droppable={true}

            />

        </DailyScheduleContainerWrap>
    )
}
