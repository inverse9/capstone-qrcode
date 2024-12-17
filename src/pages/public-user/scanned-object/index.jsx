/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import ImageSlider from "../../../components/ImageSlider";
import Separator from "../../../components/Separator";
import { useParams } from "react-router-dom";
import { useObjects } from "../../../utils/api/useObjects";
import DOMPurify from "dompurify";

const ScannedObject = () => {
  let { id } = useParams();
  const { fetchbyId, object, isPageLoaded, isErr } = useObjects();

  useEffect(() => {
    fetchbyId(id);
    // return () => {
    //   controller.abort();
    // };
  }, []);

  if (isPageLoaded) {
    return (
      <div className="m-4">
        {isErr ? (
          <h1 className="font-semibold text-xl capitalize">
            Objek tidak ditemukan
          </h1>
        ) : (
          <>
            <h1 className="font-semibold text-xl capitalize">
              {object.object_name}
            </h1>
            {/* <div className="text-sm text-justify mt-2">
              Kota Denpasar memiliki sebuah patung ikonik sebagai penanda titik
              nol Kota Denpasar. Patung ini disebut dengan nama Patung Catur
              Muka. Lokasinya berada persis di tengah-tengah persimpangan Jalan
              Surapati, Veteran, Gajah Mada, dan Udayana.
              <br />
              <br />
              Lokasi ini kerap menjadi lokasi kegiatan-kegiatan yang diadakan
              oleh Pemerintah Kota (Pemkot) Denpasar, satu di antaranya Denpasar
              Festival. Selain itu, juga menjadi tempat untuk melangsungkan
              kegiatan upacara keagamaan seperti Tawur Agung Kesanga untuk
              menyambut Hari Raya Nyepi.
            </div> */}
            <div className="-mx-4 mt-4">
              <ImageSlider images={object.images} />
            </div>
            {object.properties.map((v, _) => {
              const sanitizedContent = DOMPurify.sanitize(v.isi);
              return (
                <section key={v.id} className="mt-10">
                  <h1 className="font-semibold text-lg">{v.judul}</h1>
                  <Separator />

                  {v.judul === "Video" ? (
                    <div className="aspect-video w-full lg:w-1/2 mt-2">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/0XGhDxfroPA?si=${v.isi}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      />
                    </div>
                  ) : (
                    <div
                      className="text-sm text-justify mt-2"
                      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
                    />
                  )}
                </section>
              );
            })}
          </>
        )}
      </div>
    );
  }
  return "Loading ...";
};

export default ScannedObject;
