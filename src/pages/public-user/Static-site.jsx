import React from "react";
import Separator from "../../components/Separator";
import ImageSlider from "../../components/ImageSlider";

const StaticSite = () => {
  const images = [
    {
      src: "https://cdn.idntimes.com/content-images/community/2023/09/caturmuka1-c7c8a956c08d5240d23a9803c984bd4e-988a02c24588103695718a4b8625a848.jpg",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-LgKNMmiWWfmoXSyWGmzTu7aTYnpDrp_ztA&s",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIMcMalQF8YWlgCzCL2wvUGjuCJtd36-bUHQ&s",
    },
  ];
  return (
    <div className="m-4">
      <h1 className="font-semibold text-xl">Patung Catur Muka</h1>
      <div className="text-sm text-justify mt-2">
        Kota Denpasar memiliki sebuah patung ikonik sebagai penanda titik nol
        Kota Denpasar. Patung ini disebut dengan nama Patung Catur Muka.
        Lokasinya berada persis di tengah-tengah persimpangan Jalan Surapati,
        Veteran, Gajah Mada, dan Udayana.
        <br />
        <br />
        Lokasi ini kerap menjadi lokasi kegiatan-kegiatan yang diadakan oleh
        Pemerintah Kota (Pemkot) Denpasar, satu di antaranya Denpasar Festival.
        Selain itu, juga menjadi tempat untuk melangsungkan kegiatan upacara
        keagamaan seperti Tawur Agung Kesanga untuk menyambut Hari Raya Nyepi.
      </div>
      <div className="-mx-4 mt-4">
        <ImageSlider images={images} />
      </div>
      <section className="mt-10">
        <h1 className="font-semibold text-lg">Sejarah</h1>
        <Separator />

        <div className="text-sm text-justify mt-2">
          Patung catur muka dibuat pada tahun 1973 oleh seorang seniman bernama
          <b> I Gusti Nyoman Lempad (Dhana, 2002).</b> <br />
          Patung ini berbahan dasar batu granit dengan tinggi sembilan (9) meter
          dan terletak di tengah perempatan yang menghubungkan jalan Gajah Mada,
          jalan Surapati, jalan Veteran dan jalan Udayana.
        </div>
      </section>
      <section className="mt-10">
        <h1 className="font-semibold text-lg">
          Makna kepala empat pada Patung Catur Muka
        </h1>
        <Separator />

        <div className="text-sm text-justify mt-2">
          Patung Catur Muka mengambil sosok Dewa Brahma. Dewa Brahma dipercaya
          sebagai simbol asal mula dari kehidupan dan kenyataan yang tidak
          terbatas. Pada bagian bawah (alas) terdapat bunga lotus atau padma
          sebagai lambang kesucian dan alam semesta.
          <br />
          <br />
          Catur Muka berasal dari kata catur yang berarti empat, dan muka
          berarti kepala atau wajah. Jadi Catur Muka berarti sosok yang memiliki
          empat kepala. Pada Patung Catur Muka terdapat empat kepala sebagai
          simbol Dewa Brahma dengan empat sifat berbeda. Masing-masing kepala
          pada Patung Catur Muka menghadap ke empat arah penjuru mata angin.
          <br />
          <br />
          <b>Berikut makna dari empat kepala pada Patung Catur Muka:</b>
          <ol className="list-disc">
            <li className="ml-4 text-justify lg:text-sm mt-1">
              Kepala yang menghadap ke barat atau ke Jalan Gajah Mada sebagai
              simbol Dewa Mahadewa yang memiliki sifat kasih sayang{" "}
            </li>
            <li className="ml-4 text-justify lg:text-sm mt-1">
              Kepala menghadap ke timur atau ke Jalan Surapati sebagai simbol
              Dewa Iswara yang memiliki sifat bijaksana{" "}
            </li>
            <li className="ml-4 text-justify lg:text-sm mt-1">
              Kepala menghadap ke selatan atau ke Jalan Udayana sebagai simbol
              Dewa Brahma yang memiliki sifat menjaga ketentraman
            </li>
            <li className="ml-4 text-justify lg:text-sm mt-1">
              Kepala yang menghadap ke utara atau ke Jalan Veteran sebagai
              simbol Dewa Wisnu sebagai simbol sifat kuat dan menyucikan jiwa
              manusia.
            </li>
          </ol>
        </div>
      </section>
      <section className="mt-10">
        <h1 className="font-semibold text-lg">
          Keistimewaan Patung Catur Muka
        </h1>
        <Separator />

        <div className="text-sm text-justify mt-2">
          Patung Catur muka memiliki peran penting dalam mempertahankan
          kebudayaan kerajaan. Patung Catur Muka berfungsi sebagai batas
          wilayah, dan batas puri-puri sebagai transformasi kerajaan di Bali.
          Selain wilayah puri-puri, juga sebagai pembagi wilayah Kota Denpasar.
          <br />
          <br />
          Patung Catur Muka juga berperan penting dalam budaya dan tradisi.
          Pemilihan lokasi di titik nol Kota Denpasar ini sekaligus menjadi
          sebuah Catus Patha Agung (simpang empat utama) Kota Denpasar. Sebagai
          Catus Patha Agung, Patung Catur Muka sebagai tempat pelaksanaan Tawur
          Agung Kesanga Kota Denpasar, upacara pencaruan (upacara korban suci)
          lainnya, dan upacara yang dilakukan pihak puri seperti Mepurwa
          Daksina, dan lainnya.
          <br />
          <br />
          Sebagai ikon Kota Denpasar, Patung Catur Muka sering dijadikan lokasi
          acara yang diadakan oleh Pemkot Denpasar atau pihak lainnya. Patung
          Catur Muka memiliki kekuatan taksu tersendiri bagi banjar-banjar di
          seputaran Kota Denpasar saat pelaksanaan tradisi ogoh-ogoh. Hampir
          setiap banjar yang membuat ogoh-ogoh selalu beratraksi di area Patung
          Catur Muka.
          <br />
          <br />
          Sebagai ikon Kota Denpasar, Patung Catur Muka selalu berbenah. Patung
          Catur Muka kini memiliki air mancur yang dapat bergerak secara dinamis
          dengan hiasan lampu-lampu warna-warni. Tak jarang, wisatawan yang
          sedang berkunjung ke Kota Denpasar menyempatkan diri untuk
          mengabadikan Patung Catur Muka.
        </div>
      </section>

      <section className="mt-10">
        <h1 className="font-semibold text-lg">Video</h1>
        <Separator />
        <div className="aspect-video w-full lg:w-1/2 mt-2">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/0XGhDxfroPA?si=J7oqyVbxkcYhUVRl"
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

        <ol className="text-sm list-decimal mt-2">
          <li className="ml-4 text-justify text-xs lg:text-sm">
            Ari Budiadnyana (18 September 2023)
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://bali.idntimes.com/science/discovery/ari-budiadnyana/sejarah-patung-catur-muka-denpasar-c1c2"
              className="hover:underline hover:cursor-pointer text-blue-500"
            >
              Sejarah Patung Catur Muka, Ikonnya Kota Denpasar
            </a>
          </li>
        </ol>
      </section>

      <section className="mt-10 ">
        <Separator />
        <div className="flex gap-x-4 items-center mt-2">
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

export default StaticSite;
