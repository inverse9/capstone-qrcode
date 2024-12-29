import * as XLSX from "xlsx";

const exportToExcel = (data, dateStart, dateEnd, title) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  XLSX.writeFile(workbook, `${title}_${dateStart} - ${dateEnd}.xlsx`);
};

export default exportToExcel;
