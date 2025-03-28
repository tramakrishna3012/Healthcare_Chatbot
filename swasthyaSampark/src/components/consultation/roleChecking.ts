//roleChecking.ts
import axios from "axios";

import {BACKEND_URL} from "./services/api.ts";
export default async function roleChecking() {
  const token = localStorage.getItem("token");
  const data = await axios.post(`${BACKEND_URL}/api/auth/verify`, {
    token,
  });
  return data.data.role;
}
