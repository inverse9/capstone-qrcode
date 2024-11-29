import React from "react";
import Separator from "../components/Separator";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 md:overflow-hidden hidden md:block">
        <img
          src="https://arvitour.com/wp-content/uploads/2022/07/Kota-Denpasar.jpg.webp"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className=" bg-slate-50 flex-1 flex flex-col justify-center p-8 py-6 md:p-20">
        <div className="font-bold text-2xl mb-10">Sign in</div>
        <div className="flex flex-col gap-4">
          <button className="rounded-full w-full border border-slate-600 py-3 hover:bg-slate-200/50">
            Continue with Google
          </button>
          <button className="rounded-full w-full border border-slate-600 py-3 hover:bg-slate-200/50">
            Continue with Twitter
          </button>
        </div>
        <div className="flex gap-x-4 items-center my-10">
          <Separator /> OR <Separator />
        </div>
        <section className="relative">
          <div>
            <span className="text-sm ">Email Address</span>
            <input
              className="mt-1 border bg-transparent border-slate-400 w-full py-2 px-4 rounded-lg hover:bg-slate-200/50"
              type="text"
            />
          </div>
          <div className="mt-4">
            <span className="text-sm ">Password</span>
            <input
              className="mt-1 border bg-transparent border-slate-400 w-full py-2 px-4 rounded-lg hover:bg-slate-200/50"
              type="password"
            />
          </div>
          <div className="flex justify-end ">
            <span className="font-semibold absolute right-0 text-sm text-slate-600  mt-2 cursor-pointer hover:underline">
              Forgot Password?
            </span>
          </div>

          <button className="rounded-full py-3 w-2/5 px-4 bg-blue-600 mt-12 text-slate-50 hover:bg-blue-600/90">
            Sign in
          </button>
          <div className="mt-4">
            <span
              className="text-sm text-slate-600"
              onClick={() => navigate("/signup")}
            >
              Don{"'"}t have an acount?{" "}
              <span className="hover:underline cursor-pointer">
                Sign Up Here
              </span>
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
