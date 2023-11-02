import axios from "axios";
import { GATEWAY } from "../src/assets/globals";

export async function editPet(petCredentials) {
  try {
    const token = localStorage.getItem("token");
    const cleanedToken = token.replace(/^"(.*)"$/, "$1");

    const config = {
      // method: "get",
      url: GATEWAY + "/pets",
      method: "patch",
      headers: {
        Authorization: `Bearer ${cleanedToken}`,
        "Content-Type": "application/json",
      },
      data: petCredentials,
    };
    const response = await axios(config);

    return response.data;
  } catch (error) {
    console.error(error);
  }
}
