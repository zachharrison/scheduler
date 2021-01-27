const getAppointmentsForDay = (state, DAY) => {

  const result = [];

  // ERROR HANDLING
  if (state.days.every(day => day.name !== DAY)) return result;
  if (state.days.length < 1) return result;

  // FILTER ALL APPOINTMENTS FOR A SPECIFIC DAY 
  const daysAppointments = state.days.filter(day => day.name === DAY)[0].appointments;

  // GET ALL APPOINTMENTS IN AN ARRAY FROM STATE OBJECT
  const appointmentsArr = Object.values(state.appointments)
  
  // LOOP THROUGH AND PUSH TO RESULT ARRAY IF APPOINTMENT ID'S MATCH
  for (const app of daysAppointments) {
    for (const appObj of appointmentsArr) {
      if (app === appObj.id) {
        result.push(appObj)
      } 
    }
  }

  return result;

};

const getInterview = (state, interview) => {
  
  if (interview === null) return null;
  const result = {};
  const interviewers = Object.values(state.interviewers);

  /* 
    IF INTERVIEWER IS GIVING THE INTERVIEW THAT IS PASSED IN, CREATE AN OBJECT WITH STUDENT AND INTERVIEWER PROPERTIES.
    OTHERWISE RETURN NULL
  */
  for (const interviewer of interviewers) {
    if (interview.interviewer === interviewer.id) {
      result.student = interview.student;
      result.interviewer = {...interviewer}
      return result;
    } 
  }

  return null;

}

const getInterviewersForDay = (state, DAY) => {

  const result = [];

  // ERROR HANDLING
  if (state.days.every(day => day.name !== DAY)) return result;
  if (state.days.length < 1) return result;

  // FILTER ALL INTERVIEWERS FOR A SPECIFIC DAY 
  const daysInterviewers = state.days.filter(day => day.name === DAY)[0].interviewers;

  // GET ALL INTERVIEWERS IN AN ARRAY FROM STATE OBJECT
  const interviewersArr = Object.values(state.interviewers)
  
  // LOOP THROUGH AND PUSH TO RESULT ARRAY IF INTERVIEWER ID'S MATCH
  for (const interviewer of daysInterviewers) {
    for (const interviewerObj of interviewersArr) {
      if (interviewer === interviewerObj.id) {
        result.push(interviewerObj)
      } 
    }
  }

  return result;

};

export {
  getAppointmentsForDay, 
  getInterview,
  getInterviewersForDay
}