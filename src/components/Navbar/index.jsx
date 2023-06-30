import React, { useState } from "react";
import icon from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { FcMenu } from "react-icons/fc";
import Example from "./Dropdown";

function Navbar() {
  const [isActive, setIsActive] = useState(true);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  // const [dropDown, setDropDown] = useState(true);
  // const handleDown = () => {
  //   setDropDown(!dropDown);
  // };

  return (
    <>
      <div className="flex justify-center bg-[#fff2dc]">
        <div className="w-[100%] xl:w-[1140px]">
          <div className="sticky top-0 left-0 ">
            <div className="flex items-center py-7 px-5 justify-between">
              <div>
                <div className="w-[8rem]">
                  <img className="w-full" src={icon} alt="icon" />
                </div>
              </div>
              <div className="hidden lg:flex lg:items-center lg:gap-x-12">
                <ul className="flex gap-x-5 items-center">
                  <Link
                    to="/"
                    className="text-[#272556] active:text-[#f25c05] hover:text-[#f25c05] focus:text-[#f25c05] font-semibold cursor-pointer"
                  >
                    Home
                  </Link>
                  <Link className="text-[#272556] active:text-[#f25c05] hover:text-[#f25c05] focus:text-[#f25c05] font-semibold cursor-pointer">
                    Features
                  </Link>
                  <Link className="text-[#272556] active:text-[#f25c05] hover:text-[#f25c05] focus:text-[#f25c05] font-semibold cursor-pointer">
                    Details
                  </Link>
                  <Link className="text-[#272556] active:text-[#f25c05] hover:text-[#f25c05] focus:text-[#f25c05] font-semibold cursor-pointer">
                    Pricing
                  </Link>
                  <Link
                    // onClick={() => handleDown()}
                    className={`text-[#272556] active:text-[#f25c05] hover:text-[#f25c05] focus:text-[#f25c05] font-semibold cursor-pointer`}
                  >
                    <Example />
                    {/* <div className={dropDown ? "block h-32 w-10 shadow-2xl bg-[#fff2dc]" : "hidden"}>
                      <Link className="text-[#272556] block active:text-[#f25c05] hover:text-[#f25c05] focus:text-[#f25c05] font-semibold cursor-pointer">
                        Features
                      </Link>
                      <Link className="text-[#272556] block active:text-[#f25c05] hover:text-[#f25c05] focus:text-[#f25c05] font-semibold cursor-pointer">
                        Details
                      </Link>
                      <Link className="text-[#272556] block active:text-[#f25c05] hover:text-[#f25c05] focus:text-[#f25c05] font-semibold cursor-pointer">
                        Pricing
                      </Link>
                    </div> */}
                  </Link>
                  <button className="py-1 font-semibold text-[#f25c05] hover:text-white hover:bg-[#f25c05] px-6 rounded-2xl border-[1px] border-[#f25c05]">
                    <Link to="/login">Log in</Link>
                  </button>
                </ul>
                <div>
                  {/* <Button
              textSize="1rem"
              textWeight="1rem"
              textColor="white"
              bgColor="#5969FE"
              round="20px"
              pt="4px"
              pb="8px"
              px="30px"
            >
              Get quote
            </Button> */}
                </div>
              </div>
              <div className="lg:hidden z-10">
                <FcMenu onClick={handleClick} className="text-[2.2rem]" />
              </div>
            </div>
            <div className="flex justify-end">
              <div
                className={`${
                  isActive
                    ? "w-[0] absolute h-[100vh]"
                    : "block fixed w-[100%] h-[100vh] bg-[#fff2dc]"
                } overflow-hidden`}
                style={{ transition: "all 0.3s linear" }}
              >
                <ul className="pl-6">
                  <Link
                    to="/"
                    className="text-[#272556] block pb-2 active:text-[#f25c05] hover:text-[#f25c05] focus:text-[#f25c05] font-semibold cursor-pointer"
                  >
                    Home
                  </Link>
                  <Link className="text-[#272556]  block pb-2 active:text-[#f25c05] hover:text-[#f25c05] focus:text-[#f25c05] font-semibold cursor-pointer">
                    Features
                  </Link>
                  <Link className="text-[#272556]  block pb-2 active:text-[#f25c05] hover:text-[#f25c05] focus:text-[#f25c05] font-semibold cursor-pointer">
                    Details
                  </Link>
                  <Link className="text-[#272556]  block pb-2 active:text-[#f25c05] hover:text-[#f25c05] focus:text-[#f25c05] font-semibold cursor-pointer">
                    Pricing
                  </Link>
                  <Link className="text-[#272556]  block pb-2 active:text-[#f25c05] hover:text-[#f25c05] focus:text-[#f25c05] font-semibold cursor-pointer">
                    Drop
                  </Link>
                  <button className="py-1 font-semibold text-[#f25c05] hover:text-white hover:bg-[#f25c05] px-6 rounded-2xl border-[1px] border-[#f25c05]">
                    Log in
                  </button>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
