import axios from "axios";

const API = axios.create({
  baseURL: "https://image-generator-1-9a3d.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const GetPosts = async () => await API.get("/post/");
export const CreatePost = async (data) => await API.post("/post/", data);
export const GenerateAIImage = async (data) => await API.post("/generateImage", data);