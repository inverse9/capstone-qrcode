import React from "react";
import { ChartPie } from "../../components/charts/ChartPie";
import ChartBar from "../../components/charts/ChartBar";
import { ChartLine } from "../../components/charts/ChartLine";

const Admin = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col lg:flex-row gap-4 md:h-[500px] h-[1000px]">
        <div className="flex flex-col w-full lg:w-2/6 h-full">
          <h1 className="font-semibold">Jumlah Object yang di scan hari ini</h1>
          <div className=" w-full h-full border p-4 bg-white rounded-lg">
            <div className="flex flex-col size-full">
              <ChartPie />
              <div className="self-start flex-1">
                <div className="font-semibold mb-4">Keterangan</div>
                <div className="grid grid-cols-4 place-start-end">
                  <div className="col-span-2">Patung Catur Muka:</div>
                  <div className="pl-2">123</div>
                </div>
                <div className="grid grid-cols-4 place-start-end">
                  <div className="col-span-2">Garuda Wisnu Kencana:</div>
                  <div className="pl-2">87</div>
                </div>
                <div className="grid grid-cols-4 place-start-end">
                  <div className="col-span-2">Lukisan Pasar Tradisional:</div>
                  <div className="pl-2">12</div>
                </div>
                <div className="grid grid-cols-4 place-start-end">
                  <div className="col-span-2">Monumen Bajra Sandhi:</div>
                  <div className="pl-2">378</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex-1 h-[900px] md:h-full">
          <div className="flex flex-col w-full h-full">
            <h1 className="font-semibold">
              Jumlah Object yang di scan dalam waktu 1 minggu terakhir
            </h1>
            <div className=" w-full h-full border p-4 bg-white rounded-lg">
              <div className="flex flex-col size-full">
                <ChartBar />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-full">
          <h1 className="font-semibold">
            Jumlah Object yang di scan dalam waktu 1 minggu terakhir
          </h1>
          <div className=" w-full h-[400px] border p-4 bg-white rounded-lg">
            <div className="flex flex-col size-full">
              <ChartLine />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
