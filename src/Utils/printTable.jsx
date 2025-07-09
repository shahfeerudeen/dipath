export const printTable = (title, headers, rows) => {
    const printableHeaders = headers
      .filter(h => h.id !== 'actions' && h.id !== 'lock')
      .map(h => `<th>${h.label}</th>`)
      .join('');
  
    const printableRows = rows
      .map(row => {
        return `
          <tr>
            ${headers
              .filter(h => h.id !== 'actions' && h.id !== 'lock')
              .map(h => `<td>${row[h.id] ?? ''}</td>`)
              .join('')}
          </tr>
        `;
      })
      .join('');
  
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${title}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #ccc; padding: 8px; text-align: left; font-size: 12px; }
            th { background-color: #f0f0f0; }
            h2 { margin-bottom: 10px; }
          </style>
        </head>
        <body>
          <h2>${title}</h2>
          <table>
            <thead><tr>${printableHeaders}</tr></thead>
            <tbody>${printableRows}</tbody>
          </table>
          <script>
            window.onload = function () {
              window.print();
              setTimeout(() => window.close(), 100);
            };
          </script>
        </body>
      </html>
    `;
  
    const printWindow = window.open('', '_blank', 'width=1000,height=700');
    if (printWindow) {
      printWindow.document.open();
      printWindow.document.write(html);
      printWindow.document.close();
    } else {
      alert('Popup blocked! Please allow popups for this site.');
    }
  };
  