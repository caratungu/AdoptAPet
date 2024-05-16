import axios from "axios";

export async function getServices() {
  const response = await axios.get("http://localhost:3000/services");
  return response.data;
}
