import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import axiosInstance from "../../Api/AxiosInstance";

export default function InputDropdown({
  label,
  placeholder,
  options = [],
  value = "",
  onChange,
  icon = null,
  sx,
  error = false,
  helperText = "",
  ...props
}) {
  const [fetchedOptions, setFetchedOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const isPlaceholder = value === "";

  const fetchOptions = async () => {
    if (
      options &&
      typeof options === "object" &&
      !Array.isArray(options) &&
      options.url
    ) {
      try {
        setLoading(true);

        const response = await axiosInstance({
          method: options.method || "GET",
          url: options.url,
        });

        console.log("Dropdown API response:", response);

        // Adjust this mapping based on your API
        const orgs = response?.data?.organizations ?? [];

        const mapped = orgs.map((item) => ({
          label: item.organizationName,
          value: item.id,
        }));

        setFetchedOptions(mapped);
      } catch (error) {
        console.error("Error fetching dropdown options:", error);
        setFetchedOptions([]);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (Array.isArray(options)) {
      setFetchedOptions(options);
    } else {
      fetchOptions();
    }
  }, [JSON.stringify(options)]);

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", mb: 2, gap: 1, ...sx }}
    >
      {label && <Typography sx={{ fontWeight: 500 }}>{label}</Typography>}

      <TextField
        select
        size="small"
        value={value}
        onChange={onChange}
        error={error}
        helperText={helperText}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: error ? "2px solid red" : "1.5px solid  var(--gray-300)",
              borderRadius: "8px",
            },
            "&.Mui-focused fieldset": {
              borderColor: "var(--gray-300)",
            },
            "&:hover fieldset": {
              borderColor: "var(--gray-300)",
            },
            fontWeight: isPlaceholder ? 400 : 500,
            color: isPlaceholder ? "var(--gray-500)" : "#000",
            "& .MuiOutlinedInput-input": {
              paddingTop: "12px",
              paddingBottom: "12px",
            },
          },
          "& .MuiFormHelperText-root": {
            color: "red",
            fontWeight: 500,
          },
          "& svg.MuiSelect-icon": {
            display: "none",
            border: "gray",
          },
        }}
        InputProps={{
          endAdornment: (
            <>
              {loading && (
                <InputAdornment position="end">
                  <CircularProgress size={18} />
                </InputAdornment>
              )}
              {icon && <InputAdornment position="end">{icon}</InputAdornment>}
            </>
          ),
        }}
        SelectProps={{
          displayEmpty: true,
          MenuProps: {
            PaperProps: {
              sx: {
                borderRadius: 2,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                border: "1px solid var(--gray-300)",
                "& .MuiMenuItem-root": {
                  paddingY: "10px",
                  paddingX: "19px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  width:360,
                  ml:1.1,
                  "&:hover": {
                    backgroundColor: "var(--brand-100)",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "var(--brand-100)",
                  },
                  "&.Mui-selected:hover": {
                    backgroundColor: "var(--brand-100)",
                  },
                },
              },
            },
          },
        }}
        
        {...props}
      >
        {placeholder && value === "" && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}

        {fetchedOptions.map((opt, idx) => (
          <MenuItem
            key={idx}
            value={opt.value ?? opt}
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              backgroundColor: "white",
              "&:hover": {
                backgroundColor: "var(--brand-100)",
              },
              "&.Mui-selected": {
                backgroundColor: "var(--brand-100)",
              },
              "&.Mui-selected:hover": {
                backgroundColor: "var(--brand-100)",
              },
              "&.Mui-focusVisible": {
                backgroundColor: "var(--brand-100)",
              },
            }}
          >
            {opt.label ?? opt}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}
