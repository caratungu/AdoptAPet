import axios from "axios";

export async function getAppointments(userId) {
  const response = await axios.get(`http://localhost:3000/turns/byUser/${userId}`);
  return response.data.appointments;
}

// export async function getAppointments(userId) {
//   const response = await axios.get("http://localhost:3000/turns");
//   const apps = response.data.filter((app) => {
//     if (app.user.id === userId) {
//       return app;
//     }
//   })
//   return apps;
// }

export async function getAppointmentsById(id) {
  const response = await axios.get(`http://localhost:3000/turns/${id}`)
  return response.data;
}

export async function createAppointment ({ dateAppointment, timeAppointment, serviceId }, userId) {
  const dateRequest = new Date();
  const timeRequest = `${dateRequest.getHours()}:${dateRequest.getMinutes()}`
  const newAppointment = {
    dateRequest,
    timeRequest,
    dateAppointment,
    timeAppointment,
    userId: userId,
    serviceId: parseInt(serviceId) + 1,
  }
  const response = await axios.post("http://localhost:3000/turns/schedule", newAppointment);
  return response.data;
}

export async function cancelAppointment (id) {
  const response = await axios.put(`http://localhost:3000/turns/cancel/${id}`);
  return response.data;
}