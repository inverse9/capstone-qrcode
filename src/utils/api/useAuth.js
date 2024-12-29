import { useState } from "react";
import { axiosRequest } from "../axios";

export const useAuth = () => {
  const controller = new AbortController();
  const [err, setErr] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isPageLoaded, setPageLoaded] = useState(false);

  const authentication = async (data) => {
    setLoading(true);
    return await axiosRequest("POST", "/auth/login", data)
      .catch((e) => {
        // console.log(e.response.data.message);
        setErr(e.response);
        console.log({ pepega: e });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    isLoading,
    err,
    authentication,
    // update,
    setPageLoaded,
    isPageLoaded,
    controller,
  };
};
