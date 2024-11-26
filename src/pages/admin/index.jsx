import React from "react";
import { ChartPie } from "../../components/charts/ChartPie";
import ChartBar from "../../components/charts/ChartBar";
import { ChartLine } from "../../components/charts/ChartLine";

const Admin = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 h-[500px]">
        <div className="flex flex-col w-2/5 h-full">
          Jumlah Object yang di scan
          <div className=" w-full h-full border p-4 bg-white rounded-lg">
            <div className="flex flex-col size-full">
              <ChartPie />
              <div className="self-start flex-1">
                <div className="font-semibold mb-4">Keterangan</div>
                <div className="grid grid-cols-4 place-start-end">
                  <div className="col-span-2">Patung Catur Muka :</div>
                  <div className="pl-3">123</div>
                </div>
                <div className="grid grid-cols-4 place-start-end">
                  <div className="col-span-2">Garuda Wisnu Kencana :</div>
                  <div className="pl-3">87</div>
                </div>
                <div className="grid grid-cols-4 place-start-end">
                  <div className="col-span-2">Lukisan Pasar Tradisional :</div>
                  <div className="pl-3">12</div>
                </div>
                <div className="grid grid-cols-4 place-start-end">
                  <div className="col-span-2">Monumen Bajra Sandhi :</div>
                  <div className="pl-3">378</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" p-4 flex-1">
          <div className="flex flex-col w-full h-full">
            Jumlah Object yang di scan
            <div className=" w-full h-full border p-4 bg-white rounded-lg">
              <div className="flex flex-col size-full">
                <ChartLine />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className=" w-full">
          Jumlah Object yang di scan
          <div className=" w-full h-72 border p-4 bg-white rounded-lg">
            <div className="flex flex-col size-full">
              <ChartBar />
              {/* <div className="self-start flex-1">
                <div className="font-semibold mb-4">Keterangan</div>
                <div className="grid grid-cols-4 place-start-end">
                  <div className="col-span-2">Patung Catur Muka :</div>
                  <div className="pl-3">123</div>
                </div>
                <div className="grid grid-cols-4 place-start-end">
                  <div className="col-span-2">Garuda Wisnu Kencana :</div>
                  <div className="pl-3">87</div>
                </div>
                <div className="grid grid-cols-4 place-start-end">
                  <div className="col-span-2">Lukisan Pasar Tradisional :</div>
                  <div className="pl-3">12</div>
                </div>
                <div className="grid grid-cols-4 place-start-end">
                  <div className="col-span-2">Monumen Bajra Sandhi :</div>
                  <div className="pl-3">378</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
