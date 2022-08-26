const format = (inputDate) => {
  let date, month, year;

  date = inputDate.getDate();
  month = inputDate.getMonth();
  year = inputDate.getFullYear();

  date = date.toString().padStart(2, "0");

  month = month.toString().padStart(2, "0");

  const datelist = [`${date}/${month}/${year}`, year];
  return datelist;
};

export default format;
