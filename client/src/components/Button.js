import React from "react";
import styled from "styled-components";
import { CircularProgress } from "@mui/material";

const Button = styled.div`
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: min-content;
  padding: 10px 24px;

  background-color: ${({ variant, theme }) =>
    variant === "secondary" ? theme.bgLight : theme.button};

  color: ${({ variant, theme }) =>
    variant === "secondary" ? theme.text_primary : theme.white};

  @media (max-width: 600px) {
    padding: 8px 12px;
  }

  ${({ isDisabled }) =>
    isDisabled &&
    `
    opacity: 0.4;
    cursor: not-allowed;
  `}

  ${({ isLoading }) =>
    isLoading &&
    `
    opacity: 0.8;
    cursor: not-allowed;
  `}

  ${({ flex }) =>
    flex &&
    `
    flex: 1;
  `}

  &:hover {
    opacity: ${({ isDisabled, isLoading }) =>
      isDisabled || isLoading ? "inherit" : "0.85"};
  }
`;

const CustomButton = ({
  text,
  isLoading = false,
  isDisabled = false,
  rightIcon,
  leftIcon,
  variant = "primary", // ✅ renamed from type
  onClick,
  flex,
}) => {
  return (
    <Button
      onClick={() => {
        if (!isDisabled && !isLoading && onClick) {
          onClick();
        }
      }}
      isDisabled={isDisabled}
      isLoading={isLoading}
      variant={variant}  // ✅ pass as styled-component prop
      flex={flex}
    >
      {isLoading && (
        <CircularProgress style={{ width: "18px", height: "18px", color: "white" }} />
      )}
      {leftIcon && !isLoading && <>{leftIcon}</>}
      {text && !isLoading && <>{text}</>}
      {rightIcon && !isLoading && <>{rightIcon}</>}
    </Button>
  );
};

export default CustomButton;
