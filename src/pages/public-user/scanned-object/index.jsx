import React from "react";
import ImageSlider from "../../../components/ImageSlider";

const images = [
  "https://bva.telkomuniversity.ac.id/wp-content/uploads/2024/06/image-20.png",
  "https://munthu.com/wp-content/uploads/2024/06/patung-kepala-budha-pahat-manual-batu-lava-gunung-merapi-borobudur-12.jpg",
  "https://via.placeholder.com/600x300?text=Slide+3",
];

const ScannedObject = () => {
  return (
    <div className="m-4">
      <h1 className="font-semibold text-lg">Patung Catur Muka</h1>
      <div className="h-40 mt-4 bg-red-100 -mx-4">
        <ImageSlider images={images} />
      </div>

      <section className="mt-20">
        <h1 className="font-semibold text-lg">Sejarah</h1>
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
    </div>
  );
};

export default ScannedObject;
