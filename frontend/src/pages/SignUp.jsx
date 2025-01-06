import React, { useState } from "react";
import Separator from "../components/Separator";
import Button from "../components/Button";
import Loading from "../components/Loading";
import { useUser } from "../utils/api/useUser";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const { isLoading, store } = useUser();
  const [data, setData] = useState([
    { nama: "", telp: "", email: "", password: "" },
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await store(data).then((v) => {
      setDisabled(true);
      if (v) {
        alert("Akun Berhasil dibuat, anda akan kembali ke halaman login");
        navigate("/");
      }
    });
  };

  return (
    <div className="h-screen bg-[url('https://arvitour.com/wp-content/uploads/2022/07/Kota-Denpasar.jpg.webp')] bg-cover bg-center flex md:items-center justify-center">
      <div className="bg-slate-50 md:rounded-2xl px-20 md:px-32 py-16 flex flex-col w-full lg:w-2/5 md:w-2/3">
        <span className="font-semibold text-2xl text-center mb-6">Sign Up</span>
        <form onSubmit={handleSubmit}>
          <div>
            <span className="text-sm ">Nama</span>
            <input
              value={data.nama}
              onChange={(v) =>
                setData({ ...data, nama: v.currentTarget.value })
              }
              className="mt-1 border bg-transparent border-slate-400 w-full py-2 px-4 rounded-lg hover:bg-slate-200/50"
              type="text"
            />
          </div>
          <div>
            <span className="text-sm ">Telp</span>
            <input
              value={data.telp}
              onChange={(v) =>
                setData({ ...data, telp: v.currentTarget.value })
              }
              className="mt-1 border bg-transparent border-slate-400 w-full py-2 px-4 rounded-lg hover:bg-slate-200/50"
              type="text"
            />
          </div>
          <div>
            <span className="text-sm ">Email Address</span>
            <input
              value={data.email}
              onChange={(v) =>
                setData({ ...data, email: v.currentTarget.value })
              }
              className="mt-1 border bg-transparent border-slate-400 w-full py-2 px-4 rounded-lg hover:bg-slate-200/50"
              type="text"
            />
          </div>

          <div className="mt-2">
            <span className="text-sm ">Password</span>
            <input
              value={data.password}
              onChange={(v) =>
                setData({ ...data, password: v.currentTarget.value })
              }
              className="mt-1 border bg-transparent border-slate-400 w-full py-2 px-4 rounded-lg hover:bg-slate-200/50"
              type="password"
            />
          </div>
          <Button
            isLoading={isLoading}
            type="submit"
            className={`w-full ${
              disabled &&
              "active:outline-slate-600 bg-slate-600 hover:bg-slate-600/90"
            }`}
            disabled={disabled}
          >
            {isLoading ? <Loading withText /> : "Register"}
          </Button>
        </form>
        <div className="flex gap-x-4 items-center my-10">
          <Separator /> OR <Separator />
        </div>
        <div className="flex flex-col gap-4">
          <button className="rounded-full w-full border border-slate-600 py-3 hover:bg-slate-200/50">
            Continue with Facebook
          </button>
          <button className="rounded-full w-full border border-slate-600 py-3 hover:bg-slate-200/50">
            Continue with Google
          </button>
          <button className="rounded-full w-full border border-slate-600 py-3 hover:bg-slate-200/50">
            Continue with Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
