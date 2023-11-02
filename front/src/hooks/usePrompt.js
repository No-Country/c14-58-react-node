import axios from "axios";

export default async function getPrompt(prompt) {
  try {
    const api = await axios.post("http://localhost:3000/pets/prompt", {
      prompt: prompt,
    });

    const text = api.data.response;
    return text;
  } catch (error) {
    return null;
  }
}
