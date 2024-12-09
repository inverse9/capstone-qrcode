/* eslint-disable react/prop-types */
import React, { useState } from "react";
import MarkdownEditor from "../../components/MarkdownEditor";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useObjects } from "../../utils/api/useObjects";
import { useNavigate } from "react-router-dom";
import { useObjectProperties } from "../../utils/api/useObjectProperties";

const CreateObject = () => {
  const navigate = useNavigate();

  const { store } = useObjects();
  const { store: storeProperties, isLoading } = useObjectProperties();
  const [objectName, setobjectName] = useState("");
  const [components, setComponents] = useState([{ judul: "", isi: "1" }]);

  const handleAddComponent = () => {
    const newComponent = { judul: "", isi: "qqq" };
    setComponents([...components, newComponent]);
  };

  const handleRemoveComponent = (i) => {
    setComponents(components.filter((_, index) => index !== i));
  };

  const onSubmit = async () => {
    const objectData = { user_id: 1, nama: objectName };

    await store(objectData).then((v) => {
      // eslint-disable-next-line no-unused-vars
      const propertiesData = components.map((component, _) => ({
        object_id: v.data.id,
        ...component,
      }));
      storeProperties(propertiesData).then(() => navigate("/objects"));
    });
  };

  // useEffect(() => {
  //   console.log(components);
  // }, [components]);

  return (
    <div className="px-10">
      <h1 className="font-semibold text-xl mb-4">Input Object</h1>
      <div className="flex flex-col gap-4">
        <section className="bg-white rounded-md w-full p-4 shadow">
          <div>
            <span className="text-sm ">Nama Object</span>
            <input
              value={objectName}
              onChange={(v) => setobjectName(v.currentTarget.value)}
              className="mt-1 border bg-transparent border-slate-400 w-full py-2 px-4 rounded-lg hover:bg-slate-200/50 focus:outline-none focus:bg-white"
              type="text"
            />
          </div>
        </section>
        {components.map((_, i) => (
          <section
            key={i}
            className="bg-white rounded-md w-full p-4 mt-6 shadow relative"
          >
            {i > 1 && (
              <span
                onClick={() => handleRemoveComponent(i)}
                className="cursor-pointer hover:text-red-400"
              >
                <XMarkIcon className="size-5 absolute right-2 top-2" />
              </span>
            )}
            <div>
              <span className="text-sm ">Kategori</span>
              <input
                value={components[i].judul}
                onChange={(va) => {
                  const val = va.currentTarget.value;
                  setComponents((prev) =>
                    prev.map((item, idx) =>
                      idx === i ? { ...item, judul: val } : item
                    )
                  );
                }}
                className="mt-1 border bg-transparent border-slate-400 w-full py-2 px-4 rounded-lg hover:bg-slate-200/50 focus:outline-none focus:bg-white"
                type="text"
              />
            </div>
            <div className="mt-4">
              <span className="text-sm ">Isi</span>
              <MarkdownEditor />
            </div>
            {i === components.length - 1 && (
              <button
                className="py-2 px-3 w-fit outline active:outline-blue-600 outline-offset-1 bg-blue-600 mt-2 rounded-lg text-slate-100 hover:bg-blue-700"
                onClick={() => handleAddComponent()}
              >
                Tambah kategori lain
              </button>
            )}
          </section>
        ))}
      </div>

      <div className="text-right">
        <button
          onClick={() => (isLoading ? "" : onSubmit())}
          className={`${isLoading ? "bg-slate-600" : "bg-blue-600"}
            w-fit lg:w-2/12 py-2 px-4 outline active:outline-blue-600 outline-offset-1  rounded-lg text-slate-100 hover:bg-blue-700 mt-4`}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateObject;
