export default function getAppointmentsForDay(state, DAY) {

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