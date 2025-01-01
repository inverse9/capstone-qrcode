import { useState } from "react";
import { axiosRequest } from "../axios";

export const useUser = () => {
  const controller = new AbortController();
  // eslint-disable-next-line no-unused-vars
  const [isErr, setErr] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const store = async (data) => {
    setLoading(true);
    return await axiosRequest("POST", "/users", data)
      .catch((e) => {
        setErr(e.response.data.errors);
        console.log(e.response.data.errors);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    isLoading,
    isErr,
    store,
    controller,
  };
};
