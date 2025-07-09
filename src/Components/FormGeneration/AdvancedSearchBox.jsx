import React from "react";
import { Box, TextField, Divider } from "@mui/material";
import DateRangeBox from "./DateRangeBox";
import SearchInputBox from "./SearchInputBox";
import InputDropdown from "./InputDropdown";

import {
  FILING_MODES,
  MODES,
  PORTS,
  SB_TYPES,
  ACTIVE_OPTIONS,
  SHOW_OPTIONS,
  CUSTOM_HOUSES,
} from "../../Utils/index";

export default function AdvancedSearchBox({
  dateRange,
  setDateRange,
  showAdvancedSearch,
  setShowAdvancedSearch,
  filingMode,
  setFilingMode,
  mode,
  setMode,
  loadingPort,
  setLoadingPort,
  destinationPort,
  setDestinationPort,
  exporter,
  setExporter,
  customHouse,
  setCustomHouse,
  status,
  setStatus,
  sbType,
  setSbType,
  active,
  setActive,
  show,
  setShow,
}) {
  if (!showAdvancedSearch) return null;

  // const handleCancel = () => {
  //   if (setShowAdvancedSearch) {
  //     setShowAdvancedSearch(false);
  //   }
  // };

  const handleDateRangeChange = (newValue) => {
    setDateRange(newValue);
  };

  // const handleSearch = () => {
  //   console.log("Search");
  // };

  return (
    <Box
      sx={{
        borderRadius: 2,
        width: "90%",
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: { xs: 1, sm: 5, lg: 5 },
          mb: 2,
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #c4c4c4",
            borderRadius: 2,
            overflow: "hidden",
            height: 40,
            bgcolor: "#fff",
            minWidth: { xs: 30,sm:50, md: 100, },
          }}
        >
          <TextField
            select
            label="Job No"
            size="small"
            variant="outlined"
            sx={{
              minWidth: 100,
              "& .MuiOutlinedInput-root": {
                border: "none",
                borderRadius: 1,
                bgcolor: "transparent",
                height: 40,
              },
              "& .MuiInputLabel-root": {
                top: "-7px",
              },
              "& fieldset": { border: "none" },
            }}
            SelectProps={{ native: true }}
          >
            <option>Job No</option>
          </TextField>
          <Divider orientation="vertical" flexItem />
          <TextField
            placeholder=""
            size="small"
            variant="outlined"
            sx={{
              flex: 1,
              "& .MuiOutlinedInput-root": {
                border: "none",
                bgcolor: "transparent",
                height: 40,
              },
              "& fieldset": { border: "none" },
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #c4c4c4",
            borderRadius: 2,
            overflow: "hidden",
            height: 40,
            bgcolor: "#fff",
          }}
        >
          <DateRangeBox value={dateRange} onChange={handleDateRangeChange} />
        </Box>
        <InputDropdown
          select
          label={"FilingMode"}
          value={filingMode}
          onChange={(e) => setFilingMode(e.target.value)}
          options={FILING_MODES}
        />

        <InputDropdown
          select
          label="Mode"
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          options={MODES}
        />
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 5, mb: 2 }}>
        <SearchInputBox
          label="Loading Port"
          value={loadingPort}
          onChange={setLoadingPort}
          options={PORTS}
        />

        <SearchInputBox
          label="Destination Port"
          value={destinationPort}
          onChange={setDestinationPort}
          options={PORTS}
        />

        <SearchInputBox
          label="Exporter"
          value={exporter}
          onChange={setExporter}
          options={PORTS}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          mb: 2,
          flexDirection: "row",
        }}
      >
        <SearchInputBox
          placeholder="-"
          label="Custom House"
          value={customHouse}
          onChange={setCustomHouse}
          options={CUSTOM_HOUSES}
        />

        <SearchInputBox
          placeholder="-"
          label="Status"
          value={status}
          onChange={setStatus}
          options={ACTIVE_OPTIONS}
        />

        <InputDropdown
          placeholder="-"
          label="S/B Type"
          value={sbType}
          onChange={setSbType}
          options={SB_TYPES}
        />

        <InputDropdown
          select
          label="Active"
          value={active}
          onChange={setActive}
          options={ACTIVE_OPTIONS}
        />

        <InputDropdown
          select
          label="Show"
          value={show}
          onChange={setShow}
          options={SHOW_OPTIONS}
        />
      </Box>
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 2,
          mt: 2,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <WhiteButton onClick={handleCancel} label="Clear Search" />
        <BlackButton label="Search" onClick={handleSearch} />
      </Box> */}
    </Box>
  );
}
