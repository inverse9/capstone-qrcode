import React, { useEffect } from "react";
import { useUser } from "../../utils/api/useUser";
import { formatDate, formatTime } from "../../utils/date";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const ListUser = () => {
  const navigate = useNavigate();
  const { users, controller, isLoading, isPageLoaded, fetchAll } = useUser();

  useEffect(() => {
    fetchAll();
    // return () => {
    //   controller.abort();
    // };
  }, []);

  if (isPageLoaded) {
    return (
      <div className="px-2 lg:px-10">
        <h1 className="font-semibold text-xl">List User</h1>
        <Button
          className={"lg:w-3/12 xl:w-2/12 mt-0"}
          onClick={() => navigate("/user")}
        >
          Tambah User
        </Button>
        <table className=" w-full text-base bg-white shadow rounded-2xl mt-6">
          <thead className="text-slate-800 border-b sticky top-14 bg-white rounded-t-2xl">
            <tr className="text-left ">
              <th className="p-3 first:rounded-tl-2xl last:rounded-tr-2xl">
                No
              </th>
              <th className="p-3 first:rounded-tl-2xl last:rounded-tr-2xl">
                User
              </th>
              <th className="p-3 first:rounded-tl-2xl last:rounded-tr-2xl">
                Tanggal bergabung
              </th>
              <th className="p-3 first:rounded-tl-2xl last:rounded-tr-2xl"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((v, i) => (
              <tr className="text-sm ">
                <td className="p-3 text-left">{i + 1}</td>
                <td className="p-3 text-left">
                  <div className="text-left">
                    <h3 className=" ">Nama: {v.nama}</h3>
                    <h3 className=" ">Email: {v.email}</h3>
                    <h3>Telp: {v.telp}</h3>
                  </div>
                </td>
                <td className="p-3">
                  {formatTime(v.date_time)} {formatDate(v.date_time)}
                </td>

                <td className="p-3 flex gap-2">
                  {/* <button
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
                        </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return "not loaded";
};

export default ListUser;
