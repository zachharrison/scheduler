import React, { useState, useEffect } from "react";
import axios from 'axios';
import Application from 'components/Application';

export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });
  
  // CREATE LOCAL HELPERS
  const setDay = day => setState({ ...state, day });
  
  const bookInterview = (id, interview) => {
  
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
  
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
  
    return axios
    .put(`/api/appointments/${id}`, appointment)
    .then((res) => setState({...state, appointments}))
  
  };
  
  const cancelInterview = (id) => {
  
    const appointment = {
      ...state.appointments, 
      interview: null
    };
  
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
  
    return axios
    .delete(`/api/appointments/${id}`)
    .then((res) => setState({...state, appointments}))
  
  };
  
  useEffect(() => {
  
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then(all => 
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }))
    )
  
  }, [state.appointments]);


  return { state, setDay, bookInterview, cancelInterview }

}



