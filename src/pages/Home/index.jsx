import React from "react";
import Header from "../../components/views/home/Header";
import Features from "../../components/views/home/Features";
import Details from "../../components/views/home/Details";
import DetailsTwo from "../../components/views/home/DetailsTwo";
import Carousel from "../../components/views/home/Carousel";
import Pricing from "../../components/views/home/Pricing";
import Accordions from "../../components/views/home/Accordion";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Features />
      <Details />
      <DetailsTwo />
      <Carousel />
      <div className="flex justify-center text-center py-40 bg-[#272556]">
        <div>
          <div className="flex justify-center">
            <h1 className="text-white text-2xl font-semibold pb-5 md:w-[700px] xl:w-[650px] w-[90%]">
              Ioniq will change the way you think about CRM solutions due to
              it’s advanced tools and integrated functionalities
            </h1>
          </div>
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="bg-[#272556] rounded-3xl font-semibold mt-5 text-white border-[1px] py-3 px-10 border-white hover:bg-white hover:text-[#565578] "
          >
            Sign up for free
          </button>
        </div>
      </div>
      <Pricing />
      <div className="flex justify-center my-40">
        <div className="xl:w-[850px] w-[95%] md:w-[90%] lg:w-[80%]">
          <h1 className="text-[#272556] text-center text-3xl font-semibold py-10">
            Frequent questions
          </h1>
          <Accordions />
        </div>
      </div>
    </div>
  );
}

export default Home;