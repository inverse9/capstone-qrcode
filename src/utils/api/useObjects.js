import { useState } from "react";
import { axiosRequest } from "../axios";

export const useObjects = () => {
  const controller = new AbortController();
  const [objects, setObjects] = useState();
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

  //   const fetchbyId = async (id: number, isVisible?: boolean) => {
  //     setLoading(true);
  //     const config: AxiosRequestConfig = {
  //       signal: controller.signal,

  //       params: {
  //         "filter[is_visible]": isVisible,
  //         include: ["popup", "popup.questions", "counter"],
  //         append: ["quota_left_today", "latest_with_counter"],
  //       },
  //     };
  //     await axiosRequest("GET", `service/${id}`, config)
  //       .then((v) => setSelectedService(v.data))
  //       .finally(() => setLoading(false));
  //   };

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
    objects,
    isLoading,
    fetchAll,
    // fetchbyId,
    // store,
    // update,
    // deleteData,
    setPageLoaded,
    isPageLoaded,
    controller,
  };
};
