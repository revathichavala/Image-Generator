import Post from "../models/Posts.js";
import * as dotenv from "dotenv";
import { createError } from "../error.js";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ Get all posts
export const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({}).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    console.error("Error fetching posts:", error);
    next(createError(500, "Failed to fetch posts"));
  }
};

// ✅ Create a new post
export const createPost = async (req, res, next) => {
  try {
    console.log("📩 Incoming post body:", req.body); // 👈 add this

    const { name, prompt, photo } = req.body;

    if (!name || !prompt || !photo) {
      console.log("❌ Missing fields:", { name, prompt, photo }); // 👈 add this
      return next(createError(400, "Name, prompt, and photo are required"));
    }

    let photoUrl = photo;

    if (typeof photo === "string" && !photo.startsWith("http")) {  // 👈 safe check
      try {
        console.log("⬆ Uploading to Cloudinary...");
        const uploadResponse = await cloudinary.uploader.upload(photo, {
          resource_type: "image",
          folder: "mern_ai_images",
          timeout: 120000,
        });
        photoUrl = uploadResponse.secure_url;
      } catch (uploadError) {
        console.error("Cloudinary upload error:", uploadError);
        return next(createError(500, "Image upload failed"));
      }
    }

    const newPost = await Post.create({
      name,
      prompt,
      photo: typeof photo === "string" ? photo : JSON.stringify(photo),
    });
        res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    console.error("DETAILED CREATE POST ERROR:", error); // 👈 already here
    next(createError(500, "Failed to create post"));
  }
};