import React, { useState } from "react";
import DateRangePicker from "../../components/DateRangePicker";
import DropdownSelect from "../../components/DropdownSelect";
import Button from "../../components/Button";

const Report = () => {
  const [endDate, setEndDate] = useState(new Date());
  const [startDate, setStartDate] = useState(
    new Date().setMonth(endDate.getMonth() - 1)
  );
  const options = [
    { value: "Patung Catur Muka", label: "Patung Catur Muka" },
    { value: "Garuda Wisnu Kencana", label: "Garuda Wisnu Kencana" },
    { value: "Lukisan Pasar Tradisional", label: "Lukisan Pasar Tradisional" },
    { value: "Monumen Bajra Sandhi", label: "Monumen Bajra Sandhi" },
  ];
  return (
    <div>
      <h1>Laporan</h1>
      <section className="bg-white p-4 rounded-lg mt-2 shadow border-2 border-slate-800 ">
        <div className="mb-4">
          <h1 className="mb-2">Pilih Object</h1>
          <DropdownSelect options={options} />
        </div>
        <DateRangePicker
          endDate={endDate}
          startDate={startDate}
          setEndDate={setEndDate}
          setStartDate={setStartDate}
        />
        <div className="text-right">
          <Button className={" w-fit lg:w-2/12 "}>Submit</Button>
        </div>
      </section>
    </div>
  );
};

export default Report;
