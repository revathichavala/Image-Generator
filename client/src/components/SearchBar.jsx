import React from "react";
import { SearchOutlined } from "@mui/icons-material"; // ✅ Fix typo in import name
import styled from "styled-components";

const SearchBarContainer = styled.div`
  max-width: 400px;
  display: flex;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.text_secondary + "90"};
  border-radius: 8px;
  padding: 12px 16px;  // ✅ Fixed typo: "pading" → "padding"
  cursor: pointer;
  gap: 6px;
  align-items: center;
`;

const SearchBar = ({search,setSearch}) => {
  return (
    <SearchBarContainer>
      <SearchOutlined />
      <input
        placeholder="Search with prompt or name....."
        style={{
          border: "none",
          outline: "none",
          width: "100%",
          color: "inherit",
          background: "transparent",
        }}
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
