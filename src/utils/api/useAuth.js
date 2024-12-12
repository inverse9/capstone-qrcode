import { useState } from "react";
import { axiosRequest } from "../axios";

export const useAuth = () => {
  const controller = new AbortController();
  const [isErr, setErr] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isPageLoaded, setPageLoaded] = useState(false);

  const authentication = async (data) => {
    setLoading(true);
    return await axiosRequest("POST", "auth/login", data)
      .catch((e) => {
        console.log(e.response.data.errors);
        setErr(e.response.data.errors);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    isLoading,
    isErr,
    authentication,
    // update,
    setPageLoaded,
    isPageLoaded,
    controller,
  };
};
