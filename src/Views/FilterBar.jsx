import React from "react";
import {
  Box,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import DateRangeBox from "../Components/FormGeneration/DateRangeBox";
import AdvancedSearchBox from "../Components/FormGeneration/AdvancedSearchBox";
import SearchBox from "../Components/FormGeneration/SearchBox";
export default function FilterBar() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        p: 1.2,
        backgroundColor: "var(--gray-0)", 
        borderRadius: 2,
        border: "1px solid var(--brand-200)",
      }}
    >
      {/* Search Box - 65% */}
      <Box sx={{ flexBasis: "67%" }}>
      <SearchBox/>
      </Box>

      {/* Date Range - 25% */}
      <Box sx={{ flexBasis: "20%" }}>
        <DateRangeBox />
      </Box>

      {/* Advanced Search - 10% */}
      <Box sx={{ flexBasis: "10%" }}>
        <AdvancedSearchBox />
      </Box>
    </Box>
  );
}
