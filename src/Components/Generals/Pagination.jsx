// src/components/ResponsivePagination.js

import React from "react";
import { Box, Pagination, PaginationItem } from "@mui/material";

const ResponsivePagination = ({ count, page, onChange }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" }, // Responsive column layout
        justifyContent: { xs: "center", md: "end" },
        alignItems: "center",
        gap: 1.5,
        mt: 1,
        pb: 5,
        px: { xs: 2, sm: 3, md: 7 },
        my: 5,
        "& .MuiPagination-ul": {
          gap: 1.5,
          flexWrap: "wrap",
          justifyContent: { xs: "center", md: "flex-end" },
        },
      }}
    >
      <Pagination
        count={count}
        page={page}
        onChange={onChange}
        size="small"
        siblingCount={1}
        boundaryCount={1}
        sx={{
          "& .MuiPaginationItem-root": {
            backgroundColor: "transparent", // remove background
            fontWeight: "normal",
          },
          "& .Mui-selected": {
            backgroundColor: "transparent !important", // remove background for selected
            fontWeight: "bold",
            border: "none",
          },
        }}
        renderItem={(item) => (
          <PaginationItem
            {...item}
            components={{
              previous: () => (
                <Box
                  component="span"
                  sx={{
                    color: "gray",
                    fontWeight: "bold",
                    fontSize: 14,
                    bgcolor: "rgba(77, 77, 77, 0.16)",
                    px: 1.5,
                    py: 1,
                    borderRadius: 1,
                    minWidth: 80,
                    textAlign: "center",
                    display: "inline-block",
                    whiteSpace: "nowrap",
                  }}
                >
                  ‹ Previous
                </Box>
              ),
              next: () => (
                <Box
                  component="span"
                  sx={{
                    color: "gray",
                    fontWeight: "bold",
                    fontSize: 14,
                    bgcolor: "rgba(77, 77, 77, 0.16)",
                    px: 1.5,
                    py: 1,
                    borderRadius: 1,
                    minWidth: 70,
                    textAlign: "center",
                    display: "inline-block",
                    whiteSpace: "nowrap",
                  }}
                >
                  Next ›
                </Box>
              ),
            }}
          />
        )}
      />
    </Box>
  );
};

export default ResponsivePagination;
