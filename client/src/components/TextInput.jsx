import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
  padding: 0px 4px;
  text-transform: uppercase;
`;

const OutlinedInput = styled.div`
  border-radius: 8px;
  border: 0.5px solid ${({ theme }) => theme.text_secondary};
  background-color: transparent;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: none;
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 14px;

  &::placeholder {
    color: ${({ theme }) => theme.text_secondary};
    opacity: 0.6;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: none;
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 14px;
  resize: vertical;

  &::placeholder {
    color: ${({ theme }) => theme.text_secondary};
    opacity: 0.6;
  }
`;

const TextInput = ({
  label,
  placeholder,
  name,
  value,
  handleChange,
  textArea = false,
  rows = 4,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <OutlinedInput>
        {textArea ? (
          <TextArea
            name={name}
            rows={rows}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
          />
        ) : (
          <Input
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
          />
        )}
      </OutlinedInput>
    </Container>
  );
};

export default TextInput;
