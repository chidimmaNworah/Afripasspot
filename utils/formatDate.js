// utils/formatDate.js

export function formatDate(dateInput = Date.now()) {
  const now = new Date(dateInput);

  const day = now.getDate();
  const month = now.toLocaleString("default", { month: "long" }); // "May"
  const year = now.getFullYear();

  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const suffix = hours >= 12 ? "pm" : "am";

  return `${day} ${month}, ${year} ${hours}:${minutes}${suffix}`;
}
