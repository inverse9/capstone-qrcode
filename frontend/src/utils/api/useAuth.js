import { useState } from "react";
import { axiosRequest } from "../axios";

export const useAuth = () => {
  const controller = new AbortController();
  const [isLoading, setLoading] = useState(false);
  const [isPageLoaded, setPageLoaded] = useState(false);

  const authentication = async (data) => {
    setLoading(true);
    return await axiosRequest("POST", "/auth/login", data).finally(() => {
      setLoading(false);
    });
  };

  return {
    isLoading,
    authentication,
    // update,
    setPageLoaded,
    isPageLoaded,
    controller,
  };
};
