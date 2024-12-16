/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import MarkdownEditor from "../../components/MarkdownEditor";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useObjects } from "../../utils/api/useObjects";
import { useNavigate } from "react-router-dom";
import { useObjectProperties } from "../../utils/api/useObjectProperties";
import { useObjectImage } from "../../utils/api/useObjectImage";
import Button from "../../components/Button";

const CreateObject = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const { store } = useObjects();
  const { store: storeProperties } = useObjectProperties();
  const { store: storeImages, isLoading } = useObjectImage();
  const [objectName, setobjectName] = useState("");
  const [components, setComponents] = useState([{ judul: "", isi: "1" }]);
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    setImages(files);

    // Create previews for all selected images
    const filePreviews = files.map((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      return new Promise((resolve) => {
        reader.onloadend = () => resolve(reader.result);
      });
    });

    Promise.all(filePreviews).then((previews) => setPreviews(previews));
  };

  // const uploadImages = async () => {
  //   if (images.length === 0) {
  //     alert("No images selected!");
  //     return;
  //   }

  //   const formData = new FormData();
  //   images.forEach((image, index) => formData.append(`image_${index}`, image));

  //   try {
  //     const response = await fetch("YOUR_API_ENDPOINT", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       alert("Images uploaded successfully!");
  //       console.log("Server Response:", data);
  //     } else {
  //       alert("Failed to upload images.");
  //     }
  //   } catch (error) {
  //     console.error("Error uploading images:", error);
  //   }
  // };

  const handleAddComponent = () => {
    const newComponent = { judul: "", isi: "" };
    setComponents([...components, newComponent]);
  };

  const handleRemoveComponent = (i) => {
    setComponents(components.filter((_, index) => index !== i));
  };

  const onSubmit = async () => {
    let objectId = 0;
    const objectData = { user_id: user.id, nama: objectName };
    await store(objectData).then((v) => {
      objectId = v.data.id;
      const propertiesData = components.map((component, _) => ({
        object_id: objectId,
        ...component,
      }));
      storeProperties(propertiesData).then(() => {
        if (images.length === 0) {
          navigate("/objects");
        } else {
          const imgData = {
            object_id: objectId,
            src: images[0].name,
          };
          storeImages(imgData).then(() => navigate("/objects"));
        }
      });
    });
  };

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
            className="bg-white rounded-md w-full p-4 mt-4 shadow relative"
          >
            {i > 0 && (
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
              <MarkdownEditor
                index={i}
                value={components}
                setValue={setComponents}
              />
            </div>
            {i === components.length - 1 && (
              <Button
                className={"w-fit mt-2"}
                onClick={() => handleAddComponent()}
              >
                Tambah kategori lain
              </Button>
            )}
          </section>
        ))}
      </div>
      <section className="bg-white rounded-md w-full p-4 mt-4 shadow">
        <span className="text-sm ">Gambar</span>
        <div>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            {previews.map((preview, index) => (
              <img
                key={index}
                src={preview}
                alt={`Preview ${index + 1}`}
                style={{ width: "100px" }}
              />
            ))}
          </div>
        </div>
      </section>
      <div className="text-right">
        <Button
          className={"w-fit lg:w-2/12"}
          onClick={() => (isLoading ? "" : onSubmit())}
          isLoading={isLoading}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default CreateObject;
