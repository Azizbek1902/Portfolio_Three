import React from "react";
import img from "../../../../assets/images/decoration-lines.svg";
import { useNavigate } from "react-router-dom";

function Pricing() {
  
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-center pt-20 pb-20 bg-[#f9f8f8]">
        <div className="xl:w-[1140px] w-[85%]">
          <h1 className="text-center py-10 font-semibold text-4xl text-[#272556]">
            Free forever tier and 2 pro plans
          </h1>
          <div className="grid grid-cols-1 gap-y-3 md:gap-y-0 lg:grid-cols-3 lg:gap-16 xl:gap-20">
            <div className="text-center md:p-16 p-3  lg:w-[298px] xl:w-[342px]  border-[#9fa3ae] border-[1px] rounded-3xl bg-white">
              <div className="flex gap-3 justify-center pb-6">
                <img className="w-7" src={img} alt="" />
                <h1 className="font-semibold text-3xl text-[#272556]">
                  Free tier
                </h1>
                <img className="w-7 scale-x-[-1]" src={img} alt="" />
              </div>
              <p className="text-[#565578] text-base font-normal leading-9 pb-7">
                Fusce pulvinar eu mi acm <br /> Curabitur consequat nisl bro{" "}
                <br /> Reget facilisis molestie <br /> Vivamus vitae sem in
                tortor <br /> Pharetra vehicula ornares <br />
                Vivamus dignissim sit amet Ut <br /> convallis aliquama set
              </p>
              <h1 className="font-semibold text-6xl text-[#272556] pb-8">
                Free
              </h1>
              <button onClick={() => {navigate("/login")}} className="bg-[#272556] rounded-full font-semibold text-white text-base py-3 px-10">
                Sign up
              </button>
            </div>
            <div className="text-center md:p-16 p-3  lg:w-[298px] xl:w-[342px]  border-[#9fa3ae] border-[1px] rounded-3xl bg-white">
              <div className="flex gap-3 justify-center pb-6">
                <img className="w-7" src={img} alt="" />
                <h1 className="font-semibold text-3xl text-[#272556]">
                  Advanced
                </h1>
                <img className="w-7 scale-x-[-1]" src={img} alt="" />
              </div>
              <p className="text-[#565578] text-base font-normal leading-9 pb-7">
                Nunc commodo magna quis <br /> Lacus fermentum tincidunt <br />{" "}
                Nullam lobortis porta diam <br />
                Announcing of invita mro <br /> Dictum metus placerat luctus{" "}
                <br /> Sed laoreet blandit mollis <br /> Mauris non luctus est
              </p>
              <h1 className="font-semibold text-6xl flex items-end justify-center text-[#272556] pb-8">
                $19 <span className="text-base font-normal">/month</span>
              </h1>
              <button onClick={() => {navigate("/login")}} className="bg-[#272556] rounded-full font-semibold text-white text-base py-3 px-10">
                Sign up
              </button>
            </div>
            <div className="text-center md:p-16 p-3  lg:w-[298px] xl:w-[342px]  border-[#9fa3ae] border-[1px] rounded-3xl bg-white">
              <div className="flex gap-3 justify-center pb-6">
                <img className="w-7" src={img} alt="" />
                <h1 className="font-semibold text-3xl text-[#272556]">
                  Professional
                </h1>
                <img className="w-7 scale-x-[-1]" src={img} alt="" />
              </div>
              <p className="text-[#565578] text-base font-normal leading-9 pb-7">
                Quisque rutrum mattis <br /> Quisque tristique cursus lacus{" "}
                <br />
                Quisque rutrum mattis <br />
                Quisque tristique cursus lacus <br />
                Interdum sollicitudin maec <br />
                Quam posuerei pellentesque <br />
                Mollis felis. Integer id quam <br />
              </p>
              <h1 className="font-semibold text-6xl flex items-end justify-center text-[#272556] pb-8">
                $29 <span className="text-base font-normal">/month</span>
              </h1>
              <button onClick={() => {navigate("/login")}} className="bg-[#272556] rounded-full font-semibold text-white text-base py-3 px-10">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
