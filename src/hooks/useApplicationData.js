import React, { useState, useEffect } from "react";
import axios from 'axios';

const useApplicationData = () => {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });
  
  // CREATE LOCAL HELPERS
  const setDay = day => setState({ ...state, day });

  const getSpotsRemaining = (day, appointments) => {

    let freeSpots = 0;
    const spotsForThisDay = day.appointments;

    for (const spot of spotsForThisDay) {
      if (appointments[spot].interview === null) {
        freeSpots += 1;
      }
    }

    return freeSpots;
  }

  const showSpotsRemaining = (days, appointments) => {

    const spots = days.map(day => ({
      ...day,
      spots: getSpotsRemaining(day, appointments)
    }));

    return spots;
  }
  
  const bookInterview = (id, interview) => {

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
  
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const days = showSpotsRemaining(state.days, appointments);
  
    return axios
    .put(`/api/appointments/${id}`, appointment)
    .then((res) => setState({...state, days, appointments}))
  
  };
  
  const cancelInterview = (id) => {
  
    const appointment = {
      ...state.appointments[id], 
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const days = showSpotsRemaining(state.days, appointments);
  
    return axios
    .delete(`/api/appointments/${id}`)
    .then((res) => setState({...state, days, appointments}))
  
  };
  
  useEffect(() => {
  
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then(all => 
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }))
    )
  
  }, []);


  return { state, setDay, bookInterview, cancelInterview }

};

export default useApplicationData