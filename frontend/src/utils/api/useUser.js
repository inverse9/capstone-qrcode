import { useState } from "react";
import { axiosRequest } from "../axios";

export const useUser = () => {
  const controller = new AbortController();
  const [users, setUsers] = useState([]);
  const [isErr, setErr] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isPageLoaded, setPageLoaded] = useState(false);

  const fetchAll = async (userId) => {
    setLoading(true);
    const config = {
      signal: controller.signal,
      params: {
        userId: userId,
        relation: true,
      },
    };

    await axiosRequest("GET", "/users", config)
      .then((v) => setUsers(v.data))
      .finally(() => {
        setLoading(false);
        setPageLoaded(true);
      });
  };

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
    fetchAll,
    users,
    controller,
    isPageLoaded,
  };
};
