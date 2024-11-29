import { useState } from "react";
import { axiosRequest } from "../axios";

export const useObjects = () => {
  const controller = new AbortController();
  const [objects, setObjects] = useState();
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

    await axiosRequest("GET", "objects", config)
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
    await axiosRequest("GET", `objects/${id}`, config)
      .then((v) => setObject(v.data))

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

  //   const store = async (data: Partial<servicePropsSend>) => {
  //     setLoading(true);
  //     await axiosRequest("POST", "service", undefined, data).then(() =>
  //       fetchAll()
  //     );
  //     // .catch((e) => {
  //     //   console.log(e.response.data.errors)
  //     // })
  //   };

  //   const update = async (data: Partial<servicePropsSend>, id: number) => {
  //     setLoading(true);
  //     await axiosRequest("POST", `service/${id}`, undefined, data).then(() =>
  //       fetchAll()
  //     );
  //   };

  //   const deleteData = async (id: number) => {
  //     setLoading(true);
  //     await axiosRequest("DELETE", `service/${id}`).then(() => fetchAll());
  //   };

  return {
    object,
    objects,
    isLoading,
    isErr,
    fetchAll,
    fetchbyId,
    // store,
    // update,
    // deleteData,
    setPageLoaded,
    isPageLoaded,
    controller,
  };
};
