import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar() {

    const [events, setEvents] = useState([{
        id: '',
        title: ''
    }]);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setEvents(data))
        .catch(err => console.error(err))
    }

    function renderEventContent(eventInfo) {
        return (
        <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.activity}</i>
            <i>{eventInfo.event.duration}</i>
        </>
        );
    }
    
    return(
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin]}
            headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            initialView="timeGridWeek"
            events={events}
            weekends={false}
            initialEvents={events}
            eventContent={renderEventContent} 
        />
    )
}

export default Calendar;