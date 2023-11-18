import ServicesImage1 from '../assets/service/Dayacare.png';
import ServicesImage2 from '../assets/service/Grooming.png';
import ServicesImage3 from '../assets/service/Healthcare.png';
import ServicesImage4 from '../assets/service/hygine.png';
import ServicesImage5 from '../assets/service/Pet transport.png';
// import ServicesImage6 from '../assets/service/Service-6.png';

import People1 from '../assets/testimonial/people-1.jpg';
import People2 from '../assets/testimonial/people-2.jpg';
import People3 from '../assets/testimonial/people-3.jpg';

import Dokter1 from '../assets/dokter/drh_ratna.png'
import Dokter2 from '../assets/dokter/drh_windi.png'
import Dokter3 from '../assets/dokter/drh_kama.png'


export const navLinks = [{
        id: 1,
        path: "services",
        text: "Our Services",
    },
    {
        id: 2,
        path: "symtomschecker",
        text: "SymptomsChecker",

    },
    {
        id: 3,
        path: "fasilitas",
        text: "Fasilitas",
    },
    {
        id: 4,
        path: "doctor",
        text: "Doctors",
    },
    {
        id: 5,
        path: "reservasi",
        text: "Reservasi",
    },
    {
        id: 6,
        path: "reservation-history",
        text: "Riwayat Reservasi",
    },
];

export const Services = [{
        id: 1,
        image: ServicesImage1,
        star1: "fa-solid fa-star",
        star2: "fa-solid fa-star",
        star3: "fa-solid fa-star",
        star4: "fa-solid fa-star",
        star5: "fa-solid fa-star-half-stroke",
        title: "Daycare",
        price: "Rp. 300.000",
        fasilitas: "Lihat Fasilitas",
        delay: "",
    },
    {
        id: 2,
        image: ServicesImage2,
        star1: "fa-solid fa-star",
        star2: "fa-solid fa-star",
        star3: "fa-solid fa-star",
        star4: "fa-solid fa-star",
        star5: "fa-solid fa-star",
        title: "Grooming",
        price: "Rp. 340.000",
        fasilitas: "Lihat Fasilitas",
        delay: "200",
    },
    {
        id: 3,
        image: ServicesImage3,
        star1: "fa-solid fa-star",
        star2: "fa-solid fa-star",
        star3: "fa-solid fa-star",
        star4: "fa-solid fa-star",
        star5: "fa-solid fa-star",
        title: "Healthcare",
        price: "Rp. 280.000",
        fasilitas: "Lihat Fasilitas",
        delay: "400",
    },
    {
        id: 4,
        image: ServicesImage4,
        star1: "fa-solid fa-star",
        star2: "fa-solid fa-star",
        star3: "fa-solid fa-star",
        star4: "fa-solid fa-star",
        star5: "fa-solid fa-star",
        title: "Hyginiccare",
        price: "Rp. 420.000",
        fasilitas: "Lihat Fasilitas",
        delay: "",
    },
    {
        id: 5,
        image: ServicesImage5,
        star1: "fa-solid fa-star",
        star2: "fa-solid fa-star",
        star3: "fa-solid fa-star",
        star4: "fa-solid fa-star",
        star5: "fa-solid fa-star",
        title: "PetTransport",
        price: "Rp. 380.000",
        fasilitas: "Lihat Fasilitas",
        delay: "200",
    },
    // {
    //     id: 6,
    //     image: ServicesImage6,
    //     star1: "fa-solid fa-star",
    //     star2: "fa-solid fa-star",
    //     star3: "fa-solid fa-star",
    //     star4: "fa-solid fa-star",
    //     star5: "fa-solid fa-star",
    //     title: "Mastering Icon Design with Adobe Illustrator",
    //     price: "Rp. 300.000",
    //     fasilitas: "Beli Kelas",
    //     delay: "400",
    // },
];

export const doctors = [
  {
    id: 1,
    desc: "",
    image: Dokter1,
    name: "Drh. Ratna",
    skill: "Bedah",
  },
  {
    id: 2,
    desc: "",
    image: Dokter2,
    name: "Drh. Windi",
    skill: "Bedah",
  },
  {
    id: 3,
    desc: "",
    image: Dokter3,
    name: "Drh. Kama",
    skill: "Bedah",
  },
]

export const testimonial = [
    {
      id: 1,
      desc: "mampir ke pet shop deket rumah buat beli keperluan cimol. hari ini resmi jadi babu 😀 dan udah nyobain ke kliniknya juga pelayanannya oke, dokternya dan susternya juga baik2 😁💗 lengkap bgt ada pet shop, pet hotel, pet klinik, dll",
      image: People1,
      name: "People 1",
      skill: "UI UX Designer",
    },
    {
      id: 2,
      desc: "Clinik hewan terbaik versi saya di kota balikpapan.t4 nya bersih,wangi dan nyaman.ada cat &dog food juga di pet shopnya yg bersebelahan dgn cliniknya.hotel hewan dan grooming tersedia juga",
      image: People2,
      name: "People 2",
      skill: "Flutter Developer",
    },
    {
      id: 3,
      desc: "Saya sangat menyukai pelayanannya..vet clinic n hotel so clean...profesional and the price is not affordable",
      image: People3,
      name: "People 3",
      skill: "Web Developer",
    },
    {
      id: 4,
      desc: "Alhamdulillah puas bgt, ramah n nyaman baik sm customer maupun sm anabulnya",
      image: People1,
      name: "People 4",
      skill: "UI UX Designer",
    },
    {
      id: 5,
      desc: "Pet shop andalan di Balikpapan. Pelayanan ramah, terpercaya untuk titip anabul. Sudah pake jasa di Jose hampir 10 tahun",
      image: People2,
      name: "People 5",
      skill: "Flutter Developer",
    },
    {
      id: 6,
      desc: "Tempatnya bersih dan rapi dan pegawainya supel jadi bikin nyaman, ada ruang tunggu.",
      image: People3,
      name: "People 6",
      skill: "Web Developer",
    },
    {
      id: 7,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
      image: People1,
      name: "People 7",
      skill: "UI UX Designer",
    },
    {
      id: 8,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
      image: People2,
      name: "People 8",
      skill: "Flutter Developer",
    },
    {
      id: 9,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
      image: People3,
      name: "People 9",
      skill: "Web Developer",
    },
  ];

  export const dataSwiper = [
    {
      id: 1,
      desc: "mampir ke pet shop deket rumah buat beli keperluan cimol. hari ini resmi jadi babu 😀 dan udah nyobain ke kliniknya juga pelayanannya oke, dokternya dan susternya juga baik2 😁💗 lengkap bgt ada pet shop, pet hotel, pet klinik, dll",
      image: People1,
      name: "People 1",
      skill: "UI UX Designer",
    },
    {
      id: 2,
      desc: "Clinik hewan terbaik versi saya di kota balikpapan.t4 nya bersih,wangi dan nyaman.ada cat &dog food juga di pet shopnya yg bersebelahan dgn cliniknya.hotel hewan dan grooming tersedia juga",
      image: People2,
      name: "People 2",
      skill: "Flutter Developer",
    },
    {
      id: 3,
      desc: "Saya sangat menyukai pelayanannya..vet clinic n hotel so clean...profesional and the price is not affordable",
      image: People3,
      name: "People 3",
      skill: "Web Developer",
    },
    {
      id: 4,
      desc: "Alhamdulillah puas bgt, ramah n nyaman baik sm customer maupun sm anabulnya",
      image: People1,
      name: "People 4",
      skill: "UI UX Designer",
    },
    {
      id: 5,
      desc: "Pet shop andalan di Balikpapan. Pelayanan ramah, terpercaya untuk titip anabul. Sudah pake jasa di Jose hampir 10 tahun",
      image: People2,
      name: "People 5",
      skill: "Flutter Developer",
    },
    {
      id: 6,
      desc: "Tempatnya bersih dan rapi dan pegawainya supel jadi bikin nyaman, ada ruang tunggu.",
      image: People3,
      name: "People 6",
      skill: "Web Developer",
    },
];

export const faq = [
  {
    id: 1,
    eventKey: 0,
    title: "Apa saja layanan grooming yang tersedia untuk hewan peliharaan?",
    desc: "Layanan grooming untuk hewan peliharaan mencakup pencucian, potong bulu, pemotongan kuku, dan perawatan gigi.",
  },
  {
    id: 2,
    eventKey: 1,
    title: "cara merawat bulu hewan peliharaan agar tetap sehat dan bersih?",
    desc: "Untuk merawat bulu hewan peliharaan, Anda dapat menyikatnya secara teratur, mandikan sesuai kebutuhan, dan beri makan makanan yang baik untuk kesehatan bulu.",
  },
  {
    id: 3,
    eventKey: 2,
    title: "produk grooming terbaik untuk hewan peliharaan?",
    desc: "Beberapa produk grooming yang populer untuk hewan peliharaan termasuk sampo khusus hewan peliharaan, sikat bulu berkualitas, dan alat pemotong kuku.",
  },
  {
    id: 4,
    eventKey: 3,
    title: "perawatan khusus yang diperlukan untuk hewan peliharaan tertentu?",
    desc: "Beberapa hewan peliharaan mungkin memerlukan perawatan khusus, seperti jenis bulu panjang yang memerlukan grooming lebih sering.",
  },
  {
    id: 5,
    eventKey: 4,
    title: "cara memilih salon grooming yang tepat untuk hewan peliharaan saya?",
    desc:"Anda dapat memilih salon grooming yang tepat dengan memeriksa ulasan, mengunjungi salon untuk melihat kondisinya, dan berbicara dengan penjaga hewan peliharaan lainnya.",
  },
  {
    id: 6,
    eventKey: 5,
    title:  "cara untuk mempermudah proses grooming hewan peliharaan di rumah?",
    desc:"Anda dapat membeli peralatan grooming dasar dan mengikuti panduan online atau meminta saran dari salon grooming hewan peliharaan.",
  },
  {
    id: 7,
    eventKey: 6,
    title: "risiko kesehatan yang perlu diperhatikan saat melakukan grooming?",
    desc: "Ya, ada risiko seperti luka saat memotong kuku atau menggunting bulu, jadi penting untuk berhati-hati atau berkonsultasi dengan seorang ahli hewan jika diperlukan.",
  },
  {
    id: 8,
    eventKey: 7,
    title:"Berapa sering hewan peliharaan saya perlu melakukan grooming?",
    desc: "Frekuensi grooming tergantung pada jenis dan kebutuhan hewan peliharaan Anda, tetapi biasanya sebaiknya dilakukan secara teratur."
  },
];
