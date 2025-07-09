import React, { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import {
  ModuleRegistry,
  ClientSideRowModelModule
} from "ag-grid-community";

// Register only required modules
ModuleRegistry.registerModules([ClientSideRowModelModule]);

// Import styles
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export default function CustomTable({  }) {
  const tableHeaders = [
  { field: "name", headerName: "Name" },
  { field: "email", headerName: "Email" },
];

const tableRows = [
  { name: "Nagendran", email: "nag@example.com" },
  { name: "Akhil", email: "akhil@example.com" },
];
  const columnDefs = useMemo(() => {
    return tableHeaders.map((col) => ({
      ...col,
      headerName: col.headerName || col.field,
      cellStyle: { color: "red", fontWeight: "bold" }, // apply red color to all cells
    }));
  }, [tableHeaders]);

  const defaultColDef = useMemo(() => ({
    resizable: true,
    sortable: true,
    filter: true,
    minWidth: 100,
  }), []);

  return (
    <div
      className="ag-theme-alpine"
      style={{ height: 600, width: "100%" }}
    >
      <AgGridReact
        rowData={tableRows}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        animateRows
        pagination
        paginationPageSize={10}
      />
    </div>
  );
}

