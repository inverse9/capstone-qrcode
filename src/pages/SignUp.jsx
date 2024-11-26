import React from "react";
import Separator from "../components/Separator";

const SignUp = () => {
  return (
    <div className="h-screen bg-[url('https://arvitour.com/wp-content/uploads/2022/07/Kota-Denpasar.jpg.webp')] bg-cover bg-center flex items-center justify-center">
      <div className="bg-slate-50 rounded-2xl px-32 py-16 flex flex-col w-2/5">
        <span className="font-semibold text-2xl text-center mb-6">Sign Up</span>
        <div>
          <span className="text-sm ">Email Address</span>
          <input
            className="mt-1 border bg-transparent border-slate-400 w-full py-2 px-4 rounded-lg hover:bg-slate-200/50"
            type="text"
          />
        </div>

        <div className="mt-2">
          <span className="text-sm ">Password</span>
          <input
            className="mt-1 border bg-transparent border-slate-400 w-full py-2 px-4 rounded-lg hover:bg-slate-200/50"
            type="password"
          />
        </div>
        <button className="rounded-full py-3 w-full px-4 bg-blue-600 mt-4 text-slate-50 hover:bg-blue-600/90">
          Continue
        </button>
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
