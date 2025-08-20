import React from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Avatar from "@mui/material/Avatar";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import FileSaver from "file-saver";

// Styled component for the card
const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black + "60"};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black + "80"};
    transform: scale(1.05);
  }

  &:nth-child(7n + 1) {
    grid-column: auto / span 2;
    grid-row: auto / span 2;
  }
`;

// Overlay that appears on hover
const HoverOverlay = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 8px;
  padding: 12px;
  backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.white || "#fff"};
  transition: opacity 0.3s ease;
  border-radius: 6px;

  ${Card}:hover & {
    opacity: 1;
  }
`;

// Prompt text
const Prompt = styled.div`
  font-weight: 400;
  font-size: 15px;
  color: ${({ theme }) => theme.white || "#fff"};
`;

// Author info
const Author = styled.div`
  font-weight: 400;
  font-size: 15px;
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${({ theme }) => theme.white || "#fff"};
`;

// Footer of the overlay
const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// Main component
const ImageCard = ({ item }) => {
  const downloadImage = () => {
    if (item?.photo) {
      FileSaver.saveAs(item.photo, "download.jpg");
    }
  };

  return (
    <Card>
      <LazyLoadImage
        alt={item?.prompt || "Generated"}
        style={{ borderRadius: "12px" }}
        width="100%"
        src={item?.photo}
        effect="blur"
      />

      <HoverOverlay>
        <Prompt>{item?.prompt || "No prompt available"}</Prompt>
        <Footer>
          <Author>
            <Avatar sx={{ width: 32, height: 32 }}>
              {item?.name[0]}
            </Avatar>
            {item?.author}
          </Author>
          <DownloadRoundedIcon
            style={{ cursor: "pointer" }}
            onClick={downloadImage}
          />
        </Footer>
      </HoverOverlay>
    </Card>
  );
};

export default ImageCard;
