import axios from "axios";

// eslint-disable-next-line no-undef
vitest.mock("axios");

describe("API call", () => {
  const URL = "http://realdev1.psti.undiknas.ac.id:3000/api/objects";
  const config = {
    params: {
      userId: 2,
      relation: true,
    },
  };

  it("should fetch object data", async () => {
    const mockResponse = [
      {
        id: 1,
        user_id: 2,
        object_name: "patung caturmuka",
        date_time: "2024-11-23T03:21:50.000Z",
        properties: [
          {
            id: 1,
            judul: "Sejarah",
            isi: "Patung catur muka dibuat pada tahun 1973 oleh seorang seniman bernama\r\n          <b> I Gusti Nyoman Lempad (Dhana, 2002).</b> <br />\r\n          Patung ini berbahan dasar batu granit dengan tinggi sembilan (9) meter\r\n          dan terletak di tengah perempatan yang menghubungkan jalan Gajah Mada,\r\n          jalan Surapati, jalan Veteran dan jalan Udayana.",
          },
          {
            id: 7,
            judul: "Referensi",
            isi: ' 1. Ari Budiadnyana (18 September 2023)\r\n            <br />\r\n            <a\r\nstyle="color:rgb(59 130 246);cursor: pointer;text-decoration-line: underline;";\r\n              target="_blank"\r\n              rel="noopener noreferrer"\r\n              href="https://bali.idntimes.com/science/discovery/ari-budiadnyana/sejarah-patung-catur-muka-denpasar-c1c2"\r\n             \r\n            >\r\n              Sejarah Patung Catur Muka, Ikonnya Kota Denpasar\r\n            </a>',
          },
          {
            id: 6,
            judul: "Video",
            isi: "0XGhDxfroPA?si=J7oqyVbxkcYhUVRl",
          },
          {
            id: 4,
            judul: "Keistimewaan Patung Catur Muka",
            isi: " Patung Catur muka memiliki peran penting dalam mempertahankan\r\n          kebudayaan kerajaan. Patung Catur Muka berfungsi sebagai batas\r\n          wilayah, dan batas puri-puri sebagai transformasi kerajaan di Bali.\r\n          Selain wilayah puri-puri, juga sebagai pembagi wilayah Kota Denpasar.\r\n          <br />\r\n          <br />\r\n          Patung Catur Muka juga berperan penting dalam budaya dan tradisi.\r\n          Pemilihan lokasi di titik nol Kota Denpasar ini sekaligus menjadi\r\n          sebuah Catus Patha Agung (simpang empat utama) Kota Denpasar. Sebagai\r\n          Catus Patha Agung, Patung Catur Muka sebagai tempat pelaksanaan Tawur\r\n          Agung Kesanga Kota Denpasar, upacara pencaruan (upacara korban suci)\r\n          lainnya, dan upacara yang dilakukan pihak puri seperti Mepurwa\r\n          Daksina, dan lainnya.\r\n          <br />\r\n          <br />\r\n          Sebagai ikon Kota Denpasar, Patung Catur Muka sering dijadikan lokasi\r\n          acara yang diadakan oleh Pemkot Denpasar atau pihak lainnya. Patung\r\n          Catur Muka memiliki kekuatan taksu tersendiri bagi banjar-banjar di\r\n          seputaran Kota Denpasar saat pelaksanaan tradisi ogoh-ogoh. Hampir\r\n          setiap banjar yang membuat ogoh-ogoh selalu beratraksi di area Patung\r\n          Catur Muka.\r\n          <br />\r\n          <br />\r\n          Sebagai ikon Kota Denpasar, Patung Catur Muka selalu berbenah. Patung\r\n          Catur Muka kini memiliki air mancur yang dapat bergerak secara dinamis\r\n          dengan hiasan lampu-lampu warna-warni. Tak jarang, wisatawan yang\r\n          sedang berkunjung ke Kota Denpasar menyempatkan diri untuk\r\n          mengabadikan Patung Catur Muka.",
          },
          {
            id: 3,
            judul: "Makna kepala empat pada Patung Catur Muka",
            isi: ' Patung Catur Muka mengambil sosok Dewa Brahma. Dewa Brahma dipercaya\r\n          sebagai simbol asal mula dari kehidupan dan kenyataan yang tidak\r\n          terbatas. Pada bagian bawah (alas) terdapat bunga lotus atau padma\r\n          sebagai lambang kesucian dan alam semesta.\r\n          <br />\r\n          <br />\r\n          Catur Muka berasal dari kata catur yang berarti empat, dan muka\r\n          berarti kepala atau wajah. Jadi Catur Muka berarti sosok yang memiliki\r\n          empat kepala. Pada Patung Catur Muka terdapat empat kepala sebagai\r\n          simbol Dewa Brahma dengan empat sifat berbeda. Masing-masing kepala\r\n          pada Patung Catur Muka menghadap ke empat arah penjuru mata angin.\r\n          <br />\r\n          <br />\r\n          <b>Berikut makna dari empat kepala pada Patung Catur Muka:</b>\r\n          <ol className="list-disc">\r\n            <li style="margin-left: 5px;" className="ml-4 text-justify lg:text-sm mt-1">\r\n              -  Kepala yang menghadap ke barat atau ke Jalan Gajah Mada sebagai\r\n              simbol Dewa Mahadewa yang memiliki sifat kasih sayang\r\n            </li>\r\n            <li style="margin-left: 5px;" className="ml-4 text-justify lg:text-sm mt-1">\r\n              -  Kepala menghadap ke timur atau ke Jalan Surapati sebagai simbol\r\n              Dewa Iswara yang memiliki sifat bijaksana\r\n            </li>\r\n            <li style="margin-left: 5px;" className="ml-4 text-justify lg:text-sm mt-1">\r\n              -  Kepala menghadap ke selatan atau ke Jalan Udayana sebagai simbol\r\n              Dewa Brahma yang memiliki sifat menjaga ketentraman\r\n            </li>\r\n            <li style="margin-left: 5px;" className="ml-4 text-justify lg:text-sm mt-1">\r\n              -  Kepala yang menghadap ke utara atau ke Jalan Veteran sebagai\r\n              simbol Dewa Wisnu sebagai simbol sifat kuat dan menyucikan jiwa\r\n              manusia.\r\n            </li>\r\n          </ol>',
          },
        ],
        images: [
          {
            id: 2,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-LgKNMmiWWfmoXSyWGmzTu7aTYnpDrp_ztA&s\n",
          },
          {
            id: 1,
            src: "https://cdn.idntimes.com/content-images/community/2023/09/caturmuka1-c7c8a956c08d5240d23a9803c984bd4e-988a02c24588103695718a4b8625a848.jpg",
          },
          {
            id: 3,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIMcMalQF8YWlgCzCL2wvUGjuCJtd36-bUHQ&s\n",
          },
        ],
      },
    ];

    axios.get.mockResolvedValue(mockResponse);
    const data = await axios.get(URL, config);

    expect(data).toEqual(mockResponse);
    expect(axios.get).toHaveBeenCalledWith(URL, config);
  });

  it("should handle errors", async () => {
    axios.get.mockRejectedValue(new Error("API error"));

    await expect(axios.get(URL, config)).rejects.toThrow("API error");
  });
});
