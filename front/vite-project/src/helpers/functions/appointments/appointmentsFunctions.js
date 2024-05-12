import axios from "axios";

export async function getAppointments() {
  const response = await axios.get("http://localhost:3000/appointments");
  return response.data;
}

export async function getAppointmentsById(id) {
  const response = await axios.get(`http://localhost:3000/appointments/${id}`)
  return response.data;
}

export async function createAppointment ({dateRequest, timeRequest, dateAppointment, timeAppointment, serviceId }) {
  await axios.post("http://localhost:3000/appointments/schedule", {dateRequest, timeRequest, dateAppointment, timeAppointment, serviceId });
}

export async function cancelAppointment () {
  ("http://localhost:3000/appointments/cancel/1")
}