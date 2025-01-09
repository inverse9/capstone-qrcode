import React, { useState } from "react";
import { useUser } from "../../utils/api/useUser";
import Loading from "../../components/Loading";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const navigate = useNavigate();
  const { store, isLoading } = useUser();

  const [formData, setFormData] = useState({
    nama: "",
    telp: "",
    email: "",
    password: "default",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.email === "") {
      alert("Data masih kosong");
      return;
    }
    try {
      await store(formData).finally(() => navigate("/list-user"));
    } catch (error) {
      console.error("Error :", error);
    }
  };

  return (
    <div className=" mx-auto p-4 ">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div>
            <label
              htmlFor="nama"
              className="block text-sm font-medium text-gray-700"
            >
              Nama
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="my-4">
            <label
              htmlFor="telp"
              className="block text-sm font-medium text-gray-700"
            >
              Telepon
            </label>
            <input
              type="tel"
              id="telp"
              name="telp"
              value={formData.telp}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button className={"w-1/4"} isLoading={isLoading} type="submit">
            {isLoading ? <Loading withText /> : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
