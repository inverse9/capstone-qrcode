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
import {
  ExclamationTriangleIcon,
  PencilIcon,
  QrCodeIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import { useObjects } from "../../utils/api/useObjects";

const ROOTPATH = "http://realdev1.psti.undiknas.ac.id";

const Object = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const { fetchAll, controller, isPageLoaded, objects, deleteData } =
    useObjects();
  const [selectedObject, setselectedObject] = useState({});
  const [size, setSize] = useState(400);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);

  const handleQR = (object) => {
    setselectedObject(object);
    setIsOpen(true);
  };

  const handleDelete = async (object) => {
    setselectedObject(object);
    setIsOpenDelete(true);
  };

  const submitDelete = async () => {
    await deleteData(selectedObject.id).then(() => {
      setIsOpenDelete(false);

      fetchAll(2);
    });
  };

  useEffect(() => {
    setSize(isMobile ? 300 : 400);
  }, [isMobile]);

  useEffect(() => {
    fetchAll(2);
    // return () => {
    //   controller.abort();
    // };
  }, []);

  if (isPageLoaded) {
    return (
      <div className="px-2 lg:px-10">
        <div>
          <button
            onClick={() => navigate("/object")}
            className="w-fit lg:w-2/12 py-2 px-4 bg-blue-600 rounded-lg text-slate-100 hover:bg-blue-700"
          >
            Tambah Object
          </button>
          {objects && objects.length > 0 ? (
            <>
              <table className=" w-full text-base bg-white shadow rounded-2xl mt-6">
                <thead className="text-slate-800 border-b sticky top-14 bg-white rounded-t-2xl">
                  <tr className="text-left ">
                    <th className="p-3 first:rounded-tl-2xl last:rounded-tr-2xl">
                      Nama Object
                    </th>
                    <th className="p-3 first:rounded-tl-2xl last:rounded-tr-2xl">
                      Tanggal dibuat
                    </th>
                    <th className="p-3 first:rounded-tl-2xl last:rounded-tr-2xl"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {objects.map((v, _) => (
                    <tr key={v.id} className="text-sm ">
                      <td className="p-3 text-left">
                        <div className="text-left">
                          <h3
                            className="cursor-pointer hover:underline inline"
                            onClick={() => navigate(`/object/${v.id}`)}
                          >
                            {v.object_name}
                          </h3>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="">{v.date_time}</div>
                      </td>

                      <td className="p-3 flex gap-2">
                        <button
                          onClick={() => handleQR(v)}
                          className="rounded-lg p-2 border border-slate-300 hover:bg-blue-500 hover:text-slate-50 hover:border-blue-500"
                        >
                          <QrCodeIcon className="size-4" />
                        </button>
                        <button
                          onClick={() => navigate(`/object/${v.id}`)}
                          className="rounded-lg p-2 border border-slate-300 hover:bg-yellow-500 hover:text-slate-50 hover:border-yellow-500"
                        >
                          <PencilIcon className="size-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(v)}
                          className="rounded-lg p-2 border border-slate-300 hover:bg-red-500 hover:text-slate-50 hover:border-red-500"
                        >
                          <TrashIcon className="size-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            <>belum terdapat data</>
          )}
        </div>

        {isOpen && (
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
                        QR Code {selectedObject.object_name}
                      </DialogTitle>
                      <div className="mt-4 text-sm">
                        Untuk menyimpan QR Code, klik kanan pada gambar dibawah
                        lalu pilih &quot;Save Image as&quot;.
                      </div>
                      <div className="mt-2 aspect-square w-full flex items-center justify-center border-2 p-2 border-slate-700 rounded-lg">
                        <QRcode
                          text={`${ROOTPATH}/scan/${selectedObject.id}`}
                          size={size}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:ml-3 sm:w-auto"
                    >
                      Tutup
                    </button>
                  </div>
                </DialogPanel>
              </div>
            </div>
          </Dialog>
        )}

        {isOpenDelete && (
          <Dialog
            open={isOpenDelete}
            onClose={setIsOpenDelete}
            className="relative z-30"
          >
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
                        <div className="flex items-center gap-2">
                          <ExclamationTriangleIcon className="size-6 text-red-600" />
                          <span>
                            Hapus Object {selectedObject.object_name}?
                          </span>
                        </div>
                      </DialogTitle>
                      <div className="mt-4 text-sm">
                        Object akan hilang dan tidak dapat dikembalikan
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 flex flex-row-reverse sm:px-6 gap-2">
                    <button
                      type="button"
                      onClick={() => submitDelete()}
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 sm:ml-3 sm:w-auto"
                    >
                      Hapus!
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsOpenDelete(false)}
                      className="inline-flex w-full justify-center rounded-md border  px-3 py-2 text-sm font-semibold shadow-sm hover:bg-slate-200 sm:ml-3 sm:w-auto"
                    >
                      Kembali
                    </button>
                  </div>
                </DialogPanel>
              </div>
            </div>
          </Dialog>
        )}

        <Paging />
      </div>
    );
  }
  return "not loaded";
};

export default Object;
