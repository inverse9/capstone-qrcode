import React from "react";
import ImageSlider from "../../../components/ImageSlider";
import Separator from "../../../components/Separator";

const images = [
  "https://bva.telkomuniversity.ac.id/wp-content/uploads/2024/06/image-20.png",
  "https://munthu.com/wp-content/uploads/2024/06/patung-kepala-budha-pahat-manual-batu-lava-gunung-merapi-borobudur-12.jpg",
  "https://via.placeholder.com/600x300?text=Slide+3",
];

const ScannedObject = () => {
  return (
    <div className="m-4">
      <h1 className="font-semibold text-lg">Patung Catur Muka</h1>
      <div className="-mx-4 mt-4">
        <ImageSlider images={images} />
      </div>

      <section className="mt-10">
        <h1 className="font-semibold text-lg">Sejarah</h1>
        <Separator />

        <div className="text-sm text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
          magnam dolores, molestiae sequi ut ratione deleniti? Cum aut, quas
          praesentium laudantium, nulla accusantium natus dignissimos
          repudiandae corrupti quod ipsam numquam.
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
          magnam dolores, molestiae sequi ut ratione deleniti? Cum aut, quas
          praesentium laudantium, nulla accusantium natus dignissimos
          repudiandae corrupti quod ipsam numquam.
        </div>
      </section>

      <section className="mt-10">
        <h1 className="font-semibold text-lg">Video</h1>
        <Separator />
        <div className="aspect-video w-full bg-red-100 lg:w-1/2">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/-FA7pc4fLj0?si=lp3AyFyo_D_vWB8q"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
        </div>
      </section>

      <section className="mt-10">
        <h1 className="font-semibold text-lg">Referensi</h1>
        <Separator />

        <ol className="text-sm list-decimal ">
          <li className="ml-4 text-justify text-xs lg:text-sm">
            Husaini, Adian (2005).{" "}
            <span className="italic">
              Wajah Peradaban Barat: Dari Hegemoni Kristen ke Dominasi Sekuler
              Liberal.
            </span>
            Jakarta: Gema Insani. hlm. 17. ISBN 978-602-250-517-4.
          </li>
          <li className="ml-4 text-justify text-xs lg:text-sm mt-1">
            Husaini, Adian (2005).{" "}
            <span className="italic">
              Wajah Peradaban Barat: Dari Hegemoni Kristen ke Dominasi Sekuler
              Liberal.
            </span>
            Jakarta: Gema Insani. hlm. 17. ISBN 978-602-250-517-4.
          </li>
        </ol>
      </section>
      <section className="mt-10 ">
        <Separator />
        <div className="flex gap-x-4 items-center">
          <img
            src="https://image.similarpng.com/very-thumbnail/2021/07/Colorful-logo-design-template-on-transparent-background-PNG.png"
            alt=""
            className="size-16 lg:ml-20"
          />
          <div className="text-left text-xs lg:text-sm my-4 lg:my-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            atque repellat, iure beatae quaerat, 2024
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScannedObject;
