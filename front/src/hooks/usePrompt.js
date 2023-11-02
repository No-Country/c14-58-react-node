import axios from "axios";
import { GATEWAY } from "../assets/globals";

export default async function getPrompt(prompt) {
  try {
    const api = await axios.post(GATEWAY + "/pets/prompt", {
      prompt: prompt,
    });

    const text = api.data.response;
    return text;
  } catch (error) {
    return null;
  }
}
