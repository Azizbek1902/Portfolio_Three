import { AiOutlineRight } from "react-icons/ai";
import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import img from "../../../../assets/images/details-1.svg";
import modalImg from "../../../../assets/images/details-modal.jpg";

function Details() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <div>
      <div className="flex justify-center bg-[#f9f8f8]">
        <div className="xl:w-[1140px] w-[90%]">
          <div className="lg:gap-16 gap-y-44 grid grid-cols-1 lg:grid-cols-2 my-32">
            <div className="flex items-center">
              <div className="text-start">
                <h1 className="text-[32px] font-semibold text-[#272556] pb-5 xl:w-[37 0px]">
                  Manage your customer’s expectations and get them to trust you
                </h1>
                <p className="text-[#565578] text-base pb-5">
                  Vestibulum ullamcorper augue ex, imperdiet tincidunt tellus
                  bibendum inconsectetur rutrum mauris orbi scelerisque cursus
                  augue, ac suscipit sem mattis at ut suscipit
                </p>
                {/* <button className="bg-[#272556] py-2 px-7 font-semibold rounded-3xl text-white cursor-pointer">Modal</button> */}
                <Fragment>
                  <Button
                    onClick={handleOpen}
                    className="modalButton"
                    variant="gradient"
                  >
                    Modal
                  </Button>
                  <Dialog className="w-[900px]" open={open} handler={handleOpen}>
                    <div className="flex justify-between gap-20 p-10">
                      <div>
                        <img className="rounded-lg w-full" src={modalImg} alt="" />
                      </div>
                      <div className="text-start">
                        <h1>Goals Settings</h1>
                        <p className="pb-20">
                          In gravida at nunc sodales pretium. Vivamus semper,
                          odio vitae mattis auctor, elit elit semper magna ac
                          tum nico vela spider
                        </p>
                        <h1>User Feedback</h1>
                        <p className="">
                          Sapien vitae eros. Praesent ut erat a tellus posuere
                          nisi more thico cursus pharetra finibus posuere nisi.
                          Vivamus feugiat
                        </p>
                        <div className="flex items-center gap-2 my-5">
                          <AiOutlineRight />
                          <h1>Tincidunt sem vel brita bet mala</h1>
                        </div>
                        <div className="flex items-center gap-2 my-5">
                          <AiOutlineRight />
                          <h1>Sapien condimentum sacoz sil necr</h1>
                        </div>
                        <div className="flex items-center gap-2 my-5">
                          <AiOutlineRight />
                          <h1>Fusce interdum nec ravon fro urna</h1>
                        </div>
                        <div className="flex items-center gap-2 my-5">
                          <AiOutlineRight />
                          <h1>Integer pulvinar biolot bat tortor</h1>
                        </div>
                        <div className="flex items-center gap-2 my-5">
                          <AiOutlineRight />
                          <h1>Id ultricies fringilla fangor raq trinit</h1>
                        </div>
                        <DialogFooter>
                          <Button
                            variant="gradient"
                            color="green"
                            onClick={handleOpen}
                          >
                            <span>Details</span>
                          </Button>
                          <Button
                            variant="text"
                            color="red"
                            onClick={handleOpen}
                            className="mr-1"
                          >
                            <span>Close</span>
                          </Button>
                        </DialogFooter>
                      </div>
                    </div>
                  </Dialog>
                </Fragment>
              </div>
            </div>
            <div>
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
