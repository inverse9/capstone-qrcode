import React, { useEffect, useState } from "react";
import Separator from "../components/Separator";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/api/useAuth";
import Button from "../components/Button";
import Loading from "../components/Loading";

const Login = () => {
  const navigate = useNavigate();

  const [err, setErr] = useState("");
  const { authentication, isLoading } = useAuth();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await authentication(credentials)
      .then((v) => {
        saveSess(v.data);
        if (v.data.id === 1) {
          navigate("/superadmin");
        } else {
          navigate("/dashboard");
        }
      })
      .catch((e) => {
        setErr(e.response.data.message);
      });
  };

  const saveSess = (response) => {
    localStorage.setItem(
      "user",
      JSON.stringify({ id: response.id, email: response.email })
    );
    localStorage.setItem("token", response.token);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard", { replace: true });
    }
  }, []);

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
          <button className="rounded-full w-full border border-slate-600 py-3 hover:bg-slate-200/50 flex gap-2 items-center justify-center">
            <img
              className="size-6"
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              alt=""
            />
            <span> Continue with Google</span>
          </button>
          <button className="rounded-full w-full border border-slate-600 py-3 hover:bg-slate-200/50 flex gap-2 items-center justify-center">
            <img
              className="size-6"
              src="https://static.vecteezy.com/system/resources/previews/016/716/467/non_2x/twitter-icon-free-png.png"
              alt=""
            />

            <span>Continue with Twitter</span>
          </button>
        </div>
        <div className="flex gap-x-4 items-center my-10">
          <Separator /> OR <Separator />
        </div>
        <section className="relative">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="text-sm" htmlFor="email">
                Email Address
              </label>
              <input
                value={credentials.email}
                onChange={(v) => {
                  setCredentials((prv) => ({
                    ...prv,
                    email: v.target.value,
                  }));
                }}
                id="email"
                className="mt-1 border bg-transparent border-slate-400 w-full py-2 px-4 rounded-lg hover:bg-slate-200/50"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label className="text-sm" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                value={credentials.password}
                onChange={(v) => {
                  setCredentials((prv) => ({
                    ...prv,
                    password: v.target.value,
                  }));
                }}
                className="mt-1 border bg-transparent border-slate-400 w-full py-2 px-4 rounded-lg hover:bg-slate-200/50"
                type="password"
              />
            </div>
            {err && (
              <div className="mb-4 mt-2 text-red-500 absolute">*{err}</div>
            )}
            <Button isLoading={isLoading} type="submit">
              {isLoading ? <Loading withText /> : "Login"}
            </Button>
          </form>
          <div className="mt-4">
            <span className="text-sm text-slate-600">
              Don{"'"}t have an account?{" "}
              <span
                role="link"
                onClick={() => navigate("/signup")}
                className="hover:underline hover:text-blue-600 cursor-pointer"
              >
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
