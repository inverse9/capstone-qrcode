import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import QRcode from "../../components/QRcode";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import Paging from "../../components/Paging";
import { PencilIcon, TrashIcon } from "@heroicons/react/20/solid";

const ROOTPATH = "http://localhost:5173";

const Object = () => {
  const navigate = useNavigate();

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const [size, setSize] = useState(400);
  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setSize(isMobile ? 190 : 400);
  }, [isMobile]);

  return (
    <div className="px-2 lg:px-10">
      <div>
        <button
          onClick={() => navigate("/object")}
          className="w-fit lg:w-2/12 py-2 px-4 bg-indigo-600 rounded-lg text-slate-100 hover:bg-indigo-700"
        >
          Tambah Object
        </button>
        <table className=" w-full text-base bg-white shadow rounded-2xl mt-6">
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
              <th className="p-3 first:rounded-tl-2xl last:rounded-tr-2xl"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-slate-100 cursor-pointer text-sm ">
              <td className="p-3 text-left">
                <div className="text-left">
                  <h3 className="">Patung Catur Muka</h3>
                </div>
              </td>
              <td className="p-3">
                <div className="">13:24 PM</div>
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
              <td className="p-3 flex gap-2">
                <button className="rounded-lg p-2 border border-slate-300 hover:bg-yellow-500 hover:text-slate-50 hover:border-yellow-500">
                  <PencilIcon className="size-4" />
                </button>
                <button className="rounded-lg p-2 border border-slate-300 hover:bg-red-500 hover:text-slate-50 hover:border-red-500">
                  <TrashIcon className="size-4" />
                </button>
              </td>
            </tr>
            <tr className="hover:bg-slate-100 cursor-pointer text-sm ">
              <td className="p-3 text-left">
                <div className="text-left">
                  <h3 className="">Patung Catur Muka</h3>
                </div>
              </td>
              <td className="p-3">
                <div className="">13:24 PM</div>
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
              <td className="p-3 flex gap-2">
                <button className="rounded-lg p-2 border border-slate-300 hover:bg-yellow-500 hover:text-slate-50 hover:border-yellow-500">
                  <PencilIcon className="size-4" />
                </button>
                <button className="rounded-lg p-2 border border-slate-300 hover:bg-red-500 hover:text-slate-50 hover:border-red-500">
                  <TrashIcon className="size-4" />
                </button>
              </td>
            </tr>
            <tr className="hover:bg-slate-100 cursor-pointer text-sm ">
              <td className="p-3 text-left">
                <div className="text-left">
                  <h3 className="">Patung Catur Muka</h3>
                </div>
              </td>
              <td className="p-3">
                <div className="">13:24 PM</div>
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
              <td className="p-3 flex gap-2">
                <button className="rounded-lg p-2 border border-slate-300 hover:bg-yellow-500 hover:text-slate-50 hover:border-yellow-500">
                  <PencilIcon className="size-4" />
                </button>
                <button className="rounded-lg p-2 border border-slate-300 hover:bg-red-500 hover:text-slate-50 hover:border-red-500">
                  <TrashIcon className="size-4" />
                </button>
              </td>
            </tr>
            <tr className="hover:bg-slate-100 cursor-pointer text-sm ">
              <td className="p-3 text-left">
                <div className="text-left">
                  <h3 className="">Patung Catur Muka</h3>
                </div>
              </td>
              <td className="p-3">
                <div className="">13:24 PM</div>
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
              <td className="p-3 flex gap-2">
                <button className="rounded-lg p-2 border border-slate-300 hover:bg-yellow-500 hover:text-slate-50 hover:border-yellow-500">
                  <PencilIcon className="size-4" />
                </button>
                <button className="rounded-lg p-2 border border-slate-300 hover:bg-red-500 hover:text-slate-50 hover:border-red-500">
                  <TrashIcon className="size-4" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Dialog open={isOpen} onClose={setIsOpen} className="relative z-30">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-30 w-screen overflow-y-auto">
          <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="text-center  sm:mt-0 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="text-base font-semibold text-gray-900"
                  >
                    QR Code Patung Catur Muka
                  </DialogTitle>
                  <div className="mt-4 text-sm">
                    Untuk menyimpan QR Code, klik kanan pada gambar dibawah lalu
                    pilih &quot;Save Image as&quot;.
                  </div>
                  <div className="mt-2 aspect-square w-full flex items-center justify-center border-2 p-2 border-slate-700 rounded-lg">
                    <QRcode text={`${ROOTPATH}/scan/3`} size={size} />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 sm:ml-3 sm:w-auto"
                >
                  Tutup
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      <Paging />
    </div>
  );
};

export default Object;
