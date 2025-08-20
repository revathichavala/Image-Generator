import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import TextInput from "./TextInput";
import { AutoAwesome, CreateRounded } from "@mui/icons-material";
import { GenerateAIImage, CreatePost } from "../api"; 
import GeneratedImageCard from "./GeneratedImageCard";

const Form = styled.div`
  flex: 1;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 9%;
  justify-content: center;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.div`
  font-size: 17px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

const Actions = styled.div`
  flex: 1;
  display: flex;
  gap: 8px;
`;

const GenerateImageForm = () => { 
  const [post, setPost] = useState({ name: "", prompt: "", photo: "" });
  const [generateImageLoading, setGenerateImageLoading] = useState(false);
  const [createPostLoading, setCreatePostLoading] = useState(false);
  const navigate = useNavigate();   
  const [error,setError] =useState("");
  const generateImageFun = async () => {
    setGenerateImageLoading(true);
    try {
      const res = await GenerateAIImage({ prompt: post.prompt });
      setPost({
        ...post,
        photo: res?.data?.image, // base64 image
      });
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Failed to generate image";
      alert(errorMessage);
      console.error("Error generating image:", error);
    } finally {
      setGenerateImageLoading(false);
    }
  };

  const createPostFun = async () => {
    setCreatePostLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", post.name);
      formData.append("prompt", post.prompt);

      // Convert base64 -> Blob
      const byteString = atob(post.photo.split(",")[1]);
      const mimeString = post.photo.split(",")[0].split(":")[1].split(";")[0];
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([ab], { type: mimeString });

      formData.append("photo", blob);

      await CreatePost(formData); // must send as multipart/form-data
      alert("Post created successfully!");
      navigate("/");
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Failed to create post";
      alert(errorMessage);
      console.error("Error creating post:", error);
    } finally {
      setCreatePostLoading(false);
    }
  };

  return (
    <Form>
      <Top>
        <Title>Generate Image with Prompt</Title>
        <Desc>Write the prompt for the image you want to generate</Desc>
      </Top>

      <Body>
        {/* Only show if loading or image exists */}
        {(generateImageLoading || post.photo) && (
          <GeneratedImageCard src={post.photo} loading={generateImageLoading} />
        )}

        <TextInput
          label="Author"
          placeholder="Enter your name..."
          name="name"
          value={post.name}
          handleChange={(e) => setPost({ ...post, name: e.target.value })}
        />

        <TextInput
          label="Image Prompt"
          placeholder="Write a detailed prompt about the image..."
          name="prompt"
          rows="8"
          textArea
          value={post.prompt}
          handleChange={(e) => setPost({ ...post, prompt: e.target.value })}
        />
          {error && <div style={{color: "red"}}>{error}</div>}
        <p>** You can post the AI Generated Image to the Community **</p>
      </Body>

      <Actions>
        <Button
          text="Generate Image"
          flex
          leftIcon={<AutoAwesome />}
          isLoading={generateImageLoading}
          isDisabled={post.prompt === ""}
          onClick={generateImageFun}
        />

        <Button
          text="Post Image"
          flex
          variant="secondary"
          leftIcon={<CreateRounded />}
          isLoading={createPostLoading}
          isDisabled={post.name === "" || post.prompt === "" || post.photo === ""}
          onClick={createPostFun}
        />
      </Actions>
    </Form>
  );
};

export default GenerateImageForm;