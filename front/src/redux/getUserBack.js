import axios from "axios";

export async function getUserBack() {
  const token = localStorage.getItem("token");
  const cleanedToken = token.replace(/^"(.*)"$/, "$1");
  const config = {
    method: "get",
    url: "http://localhost:3000/users/find",
    headers: {
      Authorization: `Bearer ${cleanedToken}`,
    },
  };
  const response = await axios(config);
  return response;
}
