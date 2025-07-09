export const downloadCSV = (headers, tableRows, filename = "export.csv") => {
    const csvHeaders = headers.map((h) => h.label || h.id).join(",");
    const csvRows = tableRows
      .map((row) =>
        headers.map((h) => `"${row[h.id] || ""}"`).join(",")
      )
      .join("\n");
  
    const csvContent = `${csvHeaders}\n${csvRows}`;
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  