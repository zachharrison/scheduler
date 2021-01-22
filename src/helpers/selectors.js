const getAppointmentsForDay = (state, DAY) => {

  const result = [];

  if (state.days.every(day => day.name !== DAY)) return result;
  if (state.days.length < 1) return result;

  const daysAppointments = state.days.filter(day => day.name === DAY)[0].appointments;
  const appointmentsArr = Object.values(state.appointments)
  
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

  if (state.days.every(day => day.name !== DAY)) return result;
  if (state.days.length < 1) return result;

  const daysInterviewers = state.days.filter(day => day.name === DAY)[0].interviewers;
  const interviewersArr = Object.values(state.interviewers)
  
  for (const interviewer of daysInterviewers) {
    for (const interviewerObj of interviewersArr) {
      if (interviewer === interviewerObj.id) {
        result.push(interviewerObj)
      } 
    }
  }
  // console.log(result)
  return result;

};

const state = {

  days: [
    {
      id: 1,
      name: "Monday",
      appointments: [1, 2, 3],
      interviewers: [2]
    },
    {
      id: 2,
      name: "Tuesday",
      appointments: [4, 5, 6],
      interviewers: [1, 2]
    }
  ],

  appointments: {
    "1": { id: 1, time: "12pm", interview: null },
    "2": { id: 2, time: "1pm", interview: null },
    "3": {
      id: 3,
      time: "2pm",
      interview: { student: "Archie Cohen", interviewer: 2 }
    },
    "4": { id: 4, time: "3pm", interview: null },
    "5": {
      id: 5,
      time: "4pm",
      interview: { student: "Chad Takahashi", interviewer: 2 }
    }, 
    "6": {
      id: 6,
      time: "5pm",
      interview: { student: "Archie Cohen", interviewer: 1 }
    }
  },

  interviewers: {
    "1": {  
      "id": 1,
      "name": "Sylvia Palmer",
      "avatar": "https://i.imgur.com/LpaY82x.png"
    },
    "2": {
      id: 2,
      name: "Tori Malcolm",
      avatar: "https://i.imgur.com/Nmx0Qxo.png"
    }
  }

};

// const state = {

//   days: [
//     {
//       id: 1,
//       name: "Monday",
//       appointments: [1, 2, 3]
//     },
//     {
//       id: 2,
//       name: "Tuesday",
//       appointments: [4, 5]
//     }
//   ],

//   appointments: {
//     "1": { id: 1, time: "12pm", interview: null },
//     "2": { id: 2, time: "1pm", interview: null },
//     "3": {
//       id: 3,
//       time: "2pm",
//       interview: { student: "Archie Cohen", interviewer: 2 }
//     },
//     "4": { id: 4, time: "3pm", interview: null },
//     "5": {
//       id: 5,
//       time: "4pm",
//       interview: { student: "Chad Takahashi", interviewer: 2 }
//     }
//   },

//   interviewers: {
//     "1": {  
//       "id": 1,
//       "name": "Sylvia Palmer",
//       "avatar": "https://i.imgur.com/LpaY82x.png"
//     },
//     "2": {
//       id: 2,
//       name: "Tori Malcolm",
//       avatar: "https://i.imgur.com/Nmx0Qxo.png"
//     }
//   }

// };

export {
  getAppointmentsForDay, 
  getInterview,
  getInterviewersForDay
}