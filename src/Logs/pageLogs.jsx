const logs = [];

export function addPageLog(message) {
  logs.push({ message, time: new Date().toISOString() });
  // Optional: also log to the console
  console.log(`[PAGE LOG] ${message}`);
}

export function getPageLogs() {
  return logs;
}