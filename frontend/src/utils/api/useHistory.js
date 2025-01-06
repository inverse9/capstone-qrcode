import { useState } from "react";
import { axiosRequest } from "../axios";

export const useHistory = () => {
  const controller = new AbortController();
  const [objects, setObjects] = useState([]);
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

    await axiosRequest("GET", "/history", config)
      .then((v) => setObjects(v.data))
      .finally(() => {
        setLoading(false);
        setPageLoaded(true);
      });
  };

  const store = async (data) => {
    setLoading(true);
    return await axiosRequest("POST", "/history", { object_id: data })
      .catch((e) => {
        setErr(true);
        console.log(e.response.data.errors);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    objects,
    isLoading,
    isErr,
    fetchAll,
    store,
    setPageLoaded,
    isPageLoaded,
    controller,
  };
};
