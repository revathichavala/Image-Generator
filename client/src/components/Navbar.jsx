import React from "react";
import styled from "styled-components";
import { AddRounded } from "@mui/icons-material";
import { Link } from "react-router-dom"; // ✅ Added for navigation
import Button from "./Button";

const Container = styled.div`
  padding: 12px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: ${({ theme }) => theme.text_primary};
`;

const Header = styled.div`
  font-weight: bold;
  font-size: 24px;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between; // button on right, links on left
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Header>GenAI</Header>
      <BottomRow>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/post">Create Post</NavLink>
         
        </NavLinks>

        <Button
          text="Explore"
          //leftIcon={<AddRounded style={{ fontSize: "18px" }} />}
        />
      </BottomRow>
    </Container>
  );
};

export default Navbar;
