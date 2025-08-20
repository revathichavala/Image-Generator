import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "../components/TextInput";
import GenerateImageForm from "../components/GenerateImageForm";
import GeneratedImageCard from "../components/GeneratedImageCard"; // ✅ Import it here

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  margin: auto;
`;

const Button = styled.button`
  background-color: #4f46e5;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #4338ca;
  }
`;

const CreatePost = () => {
  const [formData, setFormData] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const [generateImageLoading, setGenerateImageLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const generateImage = () => {
    console.log("Generating image for prompt:", formData.prompt);
    setGenerateImageLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      setFormData((prev) => ({
        ...prev,
        photo: "https://via.placeholder.com/300x200.png?text=Generated+Image",
      }));
      setGenerateImageLoading(false);
    }, 1500);
  };

  return (
    <Container>

      {/* ✅ Use the GeneratedImageCard component here */}
      <GenerateImageForm/>
      <GeneratedImageCard
        src={formData.photo}
        loading={generateImageLoading}
      />
      
    </Container>
  );
};

export default CreatePost;
