import React from "react";
import img from "../../../../assets/images/details-2.png";

function DetailsTwo() {
  return (
    <div>
      <div className="flex justify-center bg-[#f9f8f8]">
        <div className="xl:w-[1140px] w-[90%]">
          <div className="lg:gap-16 gap-y-44 grid grid-cols-1 lg:grid-cols-2 my-32">
            <div>
              <img src={img} alt="" />
            </div>
            <div className="flex items-center">
              <div className="text-start">
                <h1 className="text-[32px] font-semibold text-[#272556] pb-5 xl:w-[400px]">
                  Anyone can start using the app with minimum skills
                </h1>
                <p className="text-[#565578] text-base pb-5">
                  Velit dictum non proin egestas convallis nunc, eu auctor
                  massa. Nam hendrerit, eros ut viverra lobortis, mauris nisi
                  porta risus, placerat dignissim tellus auctor masse
                </p>
                <li className="text-[#565578] text-base pb-2">Fusce ipsum augue, ultrices rutrum est accel, pulvin </li>
                <li className="text-[#565578] text-base pb-2">Fermentum elit. Vestibulum cursuso bibendum viverra</li>
                <li className="text-[#565578] text-base pb-2"> Quisque blanditpulvinar metus, eu sta malesuada</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsTwo;
