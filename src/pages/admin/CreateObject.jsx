import React from "react";
import MarkdownEditor from "../../components/MarkdownEditor";

const CreateObject = () => {
  return (
    <div>
      <h1 className="font-semibold text-xl mb-4">Input Object</h1>
      <section className="bg-white rounded-md w-full p-4 shadow">
        <div>
          <span className="text-sm text-slate-500">Nama Object</span>
          <input
            className="mt-1 border bg-transparent border-slate-400 w-full py-2 px-4 rounded-lg hover:bg-slate-200/50"
            type="text"
          />
        </div>
        <div>
          <span className="text-sm text-slate-500">Kategori</span>
          <input
            className="mt-1 border bg-transparent border-slate-400 w-full py-2 px-4 rounded-lg hover:bg-slate-200/50"
            type="text"
          />
        </div>
        <div>
          <span className="text-sm text-slate-500">Isi</span>
          <MarkdownEditor />
        </div>
      </section>
    </div>
  );
};

export default CreateObject;
