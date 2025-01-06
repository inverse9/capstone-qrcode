export const formatDate = (date = new Date()) => {
  const d = new Date(date);
  let convertedMonth, convertedDay, convertedYear;

  convertedMonth = (d.getMonth() + 1).toString().padStart(2, "0");
  convertedDay = d.getDate().toString().padStart(2, "0");
  convertedYear = d.getFullYear();
  return [convertedDay, convertedMonth, convertedYear].join("-");
};

export const formatTime = (date) => {
  const d = new Date(date);
  const hour = d.getHours().toString().padStart(2, "0");
  const minutes = d.getMinutes().toString().padStart(2, "0");
  const seconds = d.getSeconds().toString().padStart(2, "0");
  return [hour, minutes, seconds].join(":");
};
