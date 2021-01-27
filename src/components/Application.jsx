import React, { useState, useEffect } from "react";
import axios from 'axios';
import "components/Application.scss";
import DayList from 'components/DayList';
import Appointment from 'components/Appointment'
import useApplicationData from 'hooks/useApplicationData'
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from 'helpers/selectors'

const Application = (props) => {

  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();

  // CALLING HELPERS
  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const dailyInterviewers = getInterviewersForDay(state, state.day);
  const lastAppt = <Appointment key="last" time="5pm" />;

  return (
    <main className="layout">
      <section className="sidebar">
      <img
        className="sidebar--centered"
        src="images/logo.png"
        alt="Interview Scheduler"
      />
      <hr className="sidebar__separator sidebar--centered" />
      <nav className="sidebar__menu">
      <DayList days={state.days} day={state.day} setDay={ setDay } />
      </nav>
      <img
        className="sidebar__lhl sidebar--centered"
        src="images/lhl.png"
        alt="Lighthouse Labs"
      />
      </section>
      <section className="schedule">
        {

          dailyAppointments.map(appointment => {

            const interview = getInterview(state, appointment.interview);

            return (

              <Appointment 
                key={appointment.id}
                id={appointment.id}
                time={appointment.time}
                interview={interview}
                interviewers={dailyInterviewers}
                bookInterview={bookInterview}
                cancelInterview={cancelInterview}
              />

            )       
          })
          
        }
        {lastAppt}
      </section>
    </main>
  );
};

export default Application