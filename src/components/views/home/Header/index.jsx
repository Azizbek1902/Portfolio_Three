import React, { useState } from "react";
import img from "../../../../assets/images/header-illustration.svg";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

    // const texts = ['young startups', 'small business', 'bootstrappers']

    // const [bannerText, setBannerText] = useState('')

  return (
    <div>
      <div className="flex xl:justify-end lg:justify-center justify-center bg-[#fff2dc]">
        <div className="xl:w-[1300px] lg:w-[85%] w-[90%] lg:h-[100vh] md:h-[900px] h-[650px]">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="flex items-center justify-center">
              <div className="text-center lg:text-start lg:w-[520px] w-[600px]">
                <h1 className="font-semibold md:text-6xl text-4xl leading-snug">
                  The #1 CRM app for <u className="text-[#f25c05]">bootstrappers</u>
                </h1>
                <p className="font-normal text-lg py-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  dignissim, neque ut vanic barem ultrices sollicitudin
                </p>
                <button onClick={() => {navigate("/login")}} className="bg-[#272556] w-full lg:w-52 font-semibold text-base py-3 px-10 rounded-3xl text-white hover:bg-[#fff2dc] hover:border-black hover:border-[1px] hover:text-black">
                  Sign up for free
                </button>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
