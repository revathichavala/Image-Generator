import fetch from "node-fetch";
import { createError } from "../error.js";

export const generateImage = async (req, res, next) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return next(createError(400, "Prompt is required"));
        }

        console.log("Generating image for prompt:", prompt);

        // Hugging Face API call
        const response = await fetch(
            "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
            {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${process.env.HUGGINGFACE_API_KEY}`, // ✅ Fixed backticks
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ inputs: prompt }),
            }
        );

        if (!response.ok) {
            const errorText = await response.text();
            console.error("HuggingFace API Error:", errorText);
            return next(createError(response.status, `HuggingFace API Error: ${errorText}`)); // ✅ Fixed backticks
        }

        // Get image from API (returns binary)
        const arrayBuffer = await response.arrayBuffer();
        const base64Image = Buffer.from(arrayBuffer).toString("base64");

        // Send base64 image back to frontend
        res.status(200).json({
            success: true,
            image: `data:image/png;base64,${base64Image}`, // ✅ Fixed backticks
        });

    } catch (error) {
        next(error);
    }
};
