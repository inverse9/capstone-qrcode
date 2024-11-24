import React, { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import QRcode from "../../components/QRcode";

const Object = () => {
  let [isOpen, setIsOpen] = useState(false);
  const rootPath = "http://localhost:5173";
  return (
    <div>
      <button className="w-2/12 py-2 px-4 bg-indigo-500 rounded-lg text-slate-100 hover:bg-indigo-600">
        Tambah Object
      </button>
      <table className=" w-full text-sm bg-white shadow rounded-2xl mt-6">
        <thead className="text-slate-800 border-b sticky top-14 bg-white rounded-t-2xl">
          <tr className="text-left ">
            <th className="p-3 first:rounded-tl-2xl last:rounded-tr-2xl">
              Nama Object
            </th>
            <th className="p-3 first:rounded-tl-2xl last:rounded-tr-2xl">
              Tanggal dibuat
            </th>
            <th className="p-3 first:rounded-tl-2xl last:rounded-tr-2xl">
              QR Code
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="p-3 text-left">
              <div className="text-left">
                <h3 className="text-sm md:text-base font-semibold">
                  Patung Catur Muka
                </h3>
              </div>
            </td>
            <td>
              <div className="">
                13:24:00
                <br />
                14-November-2024
              </div>
            </td>
            <td className="p-3 ">
              {" "}
              <span
                className="hover:underline cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                QR Code
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      <Dialog open={isOpen} onClose={setIsOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="text-base font-semibold text-gray-900"
                  >
                    QR Code Patung Catur Muka
                  </DialogTitle>
                  <div className="mt-2 aspect-square w-full flex items-center justify-center border-2 border-slate-700 rounded-lg">
                    <QRcode text={`${rootPath}/scan/3`} />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex w-full justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 sm:ml-3 sm:w-auto"
                >
                  Tutup
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Object;
