/* eslint-disable react/prop-types */
import React, { useState } from "react";
import MarkdownEditor from "../../components/MarkdownEditor";
import { XMarkIcon } from "@heroicons/react/20/solid";

const CreateObject = () => {
  const [components, setComponents] = useState([
    { id: 1, title: "", body: "" },
  ]);

  const handleAddComponent = () => {
    const newComponent = { id: components.length + 1, title: "", body: "" };
    setComponents([...components, newComponent]);
  };

  const handleRemoveComponent = (id) => {
    setComponents(components.filter((component) => component.id !== id));
  };

  const CategoryComponent = ({ id, isLast }) => (
    <section className="bg-white rounded-md w-full p-4 shadow relative">
      {components.length > 1 && (
        <span
          onClick={() => handleRemoveComponent(id)}
          className="cursor-pointer hover:text-red-400"
        >
          <XMarkIcon className="size-5 absolute right-2 top-2" />
        </span>
      )}
      <div>
        <span className="text-sm ">Kategori</span>
        <input
          className="mt-1 border bg-transparent border-slate-400 w-full py-2 px-4 rounded-lg hover:bg-slate-200/50 focus:outline-none focus:bg-white"
          type="text"
        />
      </div>
      <div className="mt-4">
        <span className="text-sm ">Isi</span>
        <MarkdownEditor />
      </div>
      {isLast && (
        <button
          className="py-2 px-3 w-fit bg-blue-600 mt-2 rounded-lg text-slate-100 hover:bg-blue-700"
          onClick={() => handleAddComponent()}
        >
          Tambah kategori lain
        </button>
      )}
    </section>
  );

  return (
    <div className="px-10">
      <h1 className="font-semibold text-xl mb-4">Input Object</h1>
      <div className="flex flex-col gap-4">
        <section className="bg-white rounded-md w-full p-4 shadow">
          <div>
            <span className="text-sm ">Nama Object</span>
            <input
              className="mt-1 border bg-transparent border-slate-400 w-full py-2 px-4 rounded-lg hover:bg-slate-200/50 focus:outline-none focus:bg-white"
              type="text"
            />
          </div>
        </section>
        {components.map((v, i) => (
          <CategoryComponent
            key={i}
            id={v.id}
            isLast={i === components.length - 1}
          />
        ))}
      </div>

      <div className="text-right">
        <button className="w-fit lg:w-2/12 py-2 px-4 bg-blue-600 rounded-lg text-slate-100 hover:bg-blue-700 mt-4">
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateObject;
