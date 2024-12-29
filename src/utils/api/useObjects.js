import { useState } from "react";
import { axiosRequest } from "../axios";

export const useObjects = () => {
  const controller = new AbortController();
  const [objects, setObjects] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [object, setObject] = useState();
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

    await axiosRequest("GET", "/objects", config)
      .then((v) => setObjects(v.data))
      .finally(() => {
        setLoading(false);
        setPageLoaded(true);
      });
  };

  const fetchbyId = async (id) => {
    setLoading(true);
    const config = {
      signal: controller.signal,
      params: {
        relation: true,
      },
    };
    return await axiosRequest("GET", `objects/${id}`, config)
      // .then((v) => setObject(v.data))
      .catch((e) => {
        console.error("Error object:", e);
        if (e.response) {
          console.error("Response data:", e.response.data);
          console.error("Response status:", e.response.status);
        } else if (e.request) {
          console.error("No response received:", e.request);
        } else {
          console.error("Error:", e.message);
        }
        setErr(true);
      })
      .finally(() => {
        setLoading(false);
        setPageLoaded(true);
      });
  };

  const store = async (data) => {
    setLoading(true);
    return await axiosRequest("POST", "/objects", data)
      .catch((e) => {
        console.log(e.response.data.errors);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const update = async (data, id) => {
    setLoading(true);
    await axiosRequest("PUT", `/objects/${id}`, undefined, data)
      // .then(() =>
      //   fetchAll()
      // );
      .finally(() => {
        setLoading(false);
      });
  };

  const deleteData = async (id) => {
    setLoading(true);
    await axiosRequest("DELETE", `/objects/${id}`);
  };

  return {
    object,
    objects,
    isLoading,
    isErr,
    fetchAll,
    fetchbyId,
    store,
    update,
    deleteData,
    setPageLoaded,
    isPageLoaded,
    controller,
  };
};
