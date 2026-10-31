# 🎨 AI Image Generator – MERN Stack

An AI-powered image generation web application that transforms text prompts into images using Artificial Intelligence. Users can generate creative images from text descriptions, explore previously generated images, and share their creations with the community.

## 🚀 Project Overview

The **AI Image Generator** is a full-stack web application built using the MERN stack and Hugging Face AI API. It allows users to enter descriptive text prompts and generate AI-generated images using the Stable Diffusion XL model.

The application also provides a community gallery where users can publish their generated images along with prompts and usernames.

## ✨ Features

- **AI Image Generation:** Generate images from text descriptions using Hugging Face's Stable Diffusion XL model.
- **Text-to-Image Conversion:** Convert natural language prompts into AI-generated visuals.
- **Community Gallery:** Explore images shared by other users.
- **Share Creations:** Publish generated images with usernames and prompts.
- **Cloud Image Storage:** Store and manage images using Cloudinary.
- **Search Functionality:** Search for images based on prompts.
- **Responsive Interface:** Interactive user interface with a modern dark theme.
- **MongoDB Integration:** Store image posts and related information.

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, JavaScript |
| UI Styling | Styled Components, Material UI |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| AI Model | Hugging Face – Stable Diffusion XL |
| Image Storage | Cloudinary |
| API Communication | Axios, REST API |
| Routing | React Router DOM |

## 🏗️ Project Architecture

The application follows a client-server architecture.

1. **Frontend:** React.js handles the user interface, prompt input, image generation requests, and community gallery.
2. **Backend:** Node.js and Express.js handle API requests and application logic.
3. **AI Integration:** Hugging Face API processes text prompts and generates images.
4. **Database:** MongoDB stores image posts, usernames, prompts, and image URLs.
5. **Cloud Storage:** Cloudinary stores uploaded images and provides image URLs.

## 📂 Project Structure

```text
Image-Generator/
│
├── client/
│   ├── public/
│   └── src/
│       ├── api/
│       │   └── index.js
│       ├── components/
│       │   ├── Button.js
│       │   ├── GenerateImageForm.jsx
│       │   ├── GeneratedImageCard.jsx
│       │   ├── ImageCard.jsx
│       │   ├── Navbar.jsx
│       │   ├── SearchBar.jsx
│       │   └── TextInput.jsx
│       ├── pages/
│       │   ├── CreatePost.jsx
│       │   └── Home.jsx
│       ├── utils/
│       │   └── Theme.js
│       ├── App.js
│       └── index.js
│
├── server/
│   ├── controllers/
│   │   ├── GenerateAIImage.js
│   │   └── Posts.js
│   ├── models/
│   │   └── Posts.js
│   ├── routes/
│   │   ├── GenerateImage.js
│   │   └── Posts.js
│   ├── error.js
│   ├── index.js
│   └── package.json
│
├── package.json
└── README.md
```

## ⚙️ Installation and Setup

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

```bash
cd Image-Generator
```

### 2. Install Frontend Dependencies

```bash
cd client
npm install
```

### 3. Install Backend Dependencies

Open another terminal:

```bash
cd Image-Generator/server
npm install
```

### 4. Configure Environment Variables

Create a `.env` file inside the `server` directory.

Add the following environment variables:

```env
MONGODB_URL=your_mongodb_connection_string

HUGGINGFACE_API_KEY=your_huggingface_api_key

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

**Note:** Replace the placeholder values with your actual credentials. Never upload your `.env` file or expose API keys on GitHub.

### 5. Start the Backend Server

From the server directory:

```bash
npm start
```

The backend server runs at:

```text
http://localhost:8080
```

### 6. Start the Frontend

From the client directory:

```bash
npm start
```

The React application runs at:

```text
http://localhost:3000
```

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/post/` | Retrieve all shared image posts |
| POST | `/api/post/` | Create and publish an image post |
| POST | `/api/generateImage/` | Generate an image using an AI prompt |

## 🧠 How It Works

1. The user enters a text prompt describing the desired image.
2. The React frontend sends the prompt to the Express backend.
3. The backend forwards the prompt to the Hugging Face Stable Diffusion XL API.
4. The AI model generates an image based on the input prompt.
5. The generated image is returned to the frontend.
6. Users can publish their creations to the community gallery.
7. Published image details are stored in MongoDB, while images are uploaded to Cloudinary.

## 🔐 Environment and Security

- API credentials are managed using environment variables.
- Backend API endpoints handle AI image generation requests.
- MongoDB manages application data.
- Cloudinary handles image storage.

## 🔮 Future Enhancements

- User authentication and profile management.
- Download generated images.
- Image generation history.
- Multiple AI image generation models.
- Advanced image customization options.
- Like, comment, and bookmark functionality.

## 👩‍💻 Author

**Revathi Chavala**

B.Tech – Computer Science and Business Systems

SRKR Engineering College

GitHub: [Your GitHub Profile](https://github.com/revathichavala)

---

⭐ If you find this project interesting, consider giving it a star!
