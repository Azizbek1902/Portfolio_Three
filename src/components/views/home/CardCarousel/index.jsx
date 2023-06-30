import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import img from "../../../../assets/images/testimonial-1.jpg";
import img2 from "../../../../assets/images/testimonial-2.jpg";
import img3 from "../../../../assets/images/testimonial-3.jpg";
import img4 from "../../../../assets/images/testimonial-4.jpg";
import img5 from "../../../../assets/images/testimonial-5.jpg";
import img6 from "../../../../assets/images/testimonial-6.jpg";
import img7 from "../../../../assets/images/testimonial-1.jpg";
import img8 from "../../../../assets/images/testimonial-2.jpg";
import img9 from "../../../../assets/images/testimonial-3.jpg";
import img10 from "../../../../assets/images/testimonial-4.jpg";
import img11 from "../../../../assets/images/testimonial-5.jpg";
import img12 from "../../../../assets/images/testimonial-6.jpg";
const CardCarousel = () => {
  const data = [
    {
      id: 1,
      img: img,
      texts:
        " Tortor sodales eget. Vivamus imperdiet leo eu risus tincidunt uris. Proin placerat, urna hendrerit placerat erase convallis",
      title: "Jude Thorn - Designer",
    },
    {
      id: 2,
      img: img2,
      texts:
        " Etiam est lorem, interdum non semper ut, bibendum vitae ante. Pellente sollicitun sagittis lectus. Aenean in comod",
      title: "Tim Shaw - Designer",
    },
    {
      id: 3,
      img: img3,
      texts:
        " Quisque nec turpis placerat, accumsan lorem lobortis, vestibulum elit. Fusce finibus nisl varius semper elementum vivamus",
      title: "Lindsay Spice - Marketer",
    },
    {
      id: 4,
      img: img4,
      texts:
        "Vulputate sed tellus nec, imperdiet luctus purus. Morbi lobortis massa a mi interdum condimentum. Integer non gravida nisi",
      title: "Ann Blake - Developer",
    },

    {
      id: 5,
      img: img5,
      texts:
        " Tortor sodales eget. Vivamus imperdiet leo eu risus tincidunt uris. Proin placerat, urna hendrerit placerat erase convallis",
      title: "Jude Thorn - Designer",
    },
    {
      id: 6,
      img: img6,
      texts:
        " Eros volutpat ante mauris euismod sem, ut varius nisi lectus in urna. Integer luctus, nunc eget maximus intem, orci risus",
      title: "Roy Smith - Developer",
    },
    {
      id: 7,
      img: img7,
      texts:
        " Tortor sodales eget. Vivamus imperdiet leo eu risus tincidunt uris. Proin placerat, urna hendrerit placerat erase convallis",
      title: "Jude Thorn - Designer",
    },
    {
      id: 8,
      img: img8,
      texts:
        " Etiam est lorem, interdum non semper ut, bibendum vitae ante. Pellente sollicitun sagittis lectus. Aenean in comod",
      title: "Tim Shaw - Designer",
    },
    {
      id: 9,
      img: img9,
      texts:
        " Quisque nec turpis placerat, accumsan lorem lobortis, vestibulum elit. Fusce finibus nisl varius semper elementum vivamus",
      title: "Lindsay Spice - Marketer",
    },
    {
      id: 10,
      img: img10,
      texts:
        "Vulputate sed tellus nec, imperdiet luctus purus. Morbi lobortis massa a mi interdum condimentum. Integer non gravida nisi",
      title: "Ann Blake - Developer",
    },

    {
      id: 11,
      img: img11,
      texts:
        " Tortor sodales eget. Vivamus imperdiet leo eu risus tincidunt uris. Proin placerat, urna hendrerit placerat erase convallis",
      title: "Jude Thorn - Designer",
    },
    {
      id: 12,
      img: img12,
      texts:
        " Eros volutpat ante mauris euismod sem, ut varius nisi lectus in urna. Integer luctus, nunc eget maximus intem, orci risus",
      title: "Roy Smith - Developer",
    },
  ];
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={60}
        slidesPerView={3}
        loop={true}
        navigation
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          }
        }}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map((elem) => (
          <SwiperSlide className="flex justify-center" key={elem.id}>
            <div className="text-center">
              <div className="flex justify-center my-7">
                <img className="rounded-full w-1/4" src={elem.img} alt="" />
              </div>
              <div className="flex justify-center">
                <p className="text-[#565578] font-body text-base pb-4 w-[80%]">
                  {elem.texts}
                </p>
              </div>
              <h1 className="text-xl font-semibold pb-5">{elem.title}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default CardCarousel;
