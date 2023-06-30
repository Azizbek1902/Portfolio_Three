import React from "react";
import { FaFacebookF, FaPinterestP } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';

function Footer() {
  return (
    <div>
      <div className="flex justify-center bg-[#272556]">
        <div className="w-[95%] md:w-[90%] xl:w-[1140px]">
          <div className="grid mt-28 grid-cols-1 lg:grid-cols-3 mb-10 lg:gap-10 xl:gap-32">
            <div className="text-start text-white lg:mb-0 mb-14">
              <h1 className="text-base font-medium">About Website</h1>
              <p className="font-extralight pt-4">
                Proin ut felis purus vestibulum in orci molestie, efficitur
                lacus ac pellentesque elit. Fusce mollis laoreet lobortis nulla
                ac efficitur lacus ac
              </p>
            </div>
            <div className="text-start text-white lg:mb-0 mb-14">
              <h1 className="text-base font-medium">Links</h1>
              <p className="font-extralight pt-4">
                Important: Terms & Conditions, Privacy Policy <br /> Useful:
                Colorpicker, Icon Library, Illustrations <br /> Menu: Home, Features,
                Details, Pricing
              </p>
            </div>
            <div className="lg:text-end text-white lg:mb-0 mb-14">
              <div className="flex gap-3 lg:justify-end pb-6">
                <FaFacebookF size={50} color="#272556" className="py-3 px-3 rounded-full bg-white"/>
                <AiOutlineTwitter size={50} color="#272556" className="py-3 px-3 rounded-full bg-white"/>
                <FaPinterestP size={50} color="#272556" className="py-3 px-3 rounded-full bg-white"/>
                < BsInstagram size={50} color="#272556" className="py-3 px-3 rounded-full bg-white"/>
              </div>
                  <h1>Quam posuerei pellent esque <br /> vam contact@site.com</h1>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 mb-10 mt-28">
              <div className="flex justify-center font-light text-white lg:justify-end">
                  <h1>Copyright © Your name </h1>
              </div>
              <div></div>
              <div className="flex justify-center font-light text-white lg:justify-start">
                  <h1>Distributed By Themewagon</h1>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
