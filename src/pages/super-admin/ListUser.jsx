import React from "react";

const ListUser = () => {
  return (
    <div>
      <table className=" w-full text-base bg-white shadow rounded-2xl mt-6">
        <thead className="text-slate-800 border-b sticky top-14 bg-white rounded-t-2xl">
          <tr className="text-left ">
            <th className="p-3 first:rounded-tl-2xl last:rounded-tr-2xl">No</th>
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
          <tr className="text-sm ">
            <td className="p-3 text-left">1.</td>
            <td className="p-3 text-left">
              <div className="text-left">
                <h3 className=" ">Nama: Test</h3>
                <h3 className=" ">Email: test@test.com</h3>
                <h3>Telp: 0829372938</h3>
              </div>
            </td>
            <td className="p-3">
              <div className="">date</div>
            </td>

            <td className="p-3 flex gap-2">
              asd
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
        </tbody>
      </table>
    </div>
  );
};

export default ListUser;
