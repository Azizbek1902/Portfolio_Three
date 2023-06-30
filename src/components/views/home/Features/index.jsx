import { FaRegComments } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaRegClipboard } from "react-icons/fa";
import React from "react";

function Features() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="xl:w-[1140px] lg:w-[80%] md:w-[90%] w-[95%]">
          <div className=" flex justify-center my-20">
            <h1 className="text-center w-[90%] md:w-[520px] lg:w-[500px] text-3xl font-medium">
              Ioniq CRM application is packed with{" "}
              <u className="text-[#f25c05]">awesome features</u>
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 mb-20 lg:gap-10 md:gap-y-20 gap-y-24 xl:gap-32">
            <div className="flex justify-center">
              <div className="text-center">
                <div className="flex justify-center mb-10">
                  <div className="flex justify-center bg-[#efebfd] rounded-xl w-[76px] h-[76px] items-center">
                    <FaHeadphonesAlt color="#8763ee" size={42} />
                  </div>
                </div>
                <h1 className="text-2xl font-semibold pb-5">Customer Lists</h1>
                <p className="text-[#565578] font-normal text-base">
                  Et blandit nisl libero at arcu. Donec ac lectus sed tellus
                  mollis viverra. Nullam pharetra ante at nunc elementum
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-center">
                <div className="flex justify-center mb-10">
                  <div className="flex justify-center bg-[#defaeb] rounded-xl w-[76px] h-[76px] items-center">
                    <FaRegClipboard color="#00d462" size={42} />
                  </div>
                </div>
                <h1 className="text-2xl font-semibold pb-5">Sales Tracking</h1>
                <p className="text-[#565578] font-normal text-base">
                  Vulputate nibh feugiat. Morbi pellent diam nec libero lacinia,
                  sed ultrices velit scelerisque. Nunc placerat justo sem
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-center">
                <div className="flex justify-center mb-10">
                  <div className="flex justify-center bg-[#e2ebfd] rounded-xl w-[76px] h-[76px] items-center">
                    <FaRegComments color="#1f68f3" size={42} />
                  </div>
                </div>
                <h1 className="text-2xl font-semibold pb-5">Reporting Tool</h1>
                <p className="text-[#565578] font-normal text-base">
                  Ety suscipit metus sollicitudin euqu isq imperdiet nibh nec
                  magna tincidunt, nec pala vehicula neque sodales verum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
