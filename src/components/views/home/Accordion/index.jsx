import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Accordions() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      <Accordion open={open === 1}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="flex justify-start gap-4 py-7 text-lg font-semibold"
        >
          {open === 1 ? <FaChevronUp /> : <FaChevronDown />}
          How can I contact you quickly and get a reasonable quote more for my
          project?
        </AccordionHeader>
        <AccordionBody className="text-base font-medium px-10">
          Sed lacinia cursus viverra. Nunc sed libero euismod, congue dui a,
          vulputate quam. Pellentesque neque nisi, ultrices ut ipsum ac, mattis
          sollicitudin neque. Ut ac nunc sem. Etiam id erat facilisis magna
          sagittis porta. Donec eu dolor eu dolor finibus sodales consectetur,
          et condimentum elit tincidunt
        </AccordionBody>
        <hr />
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="flex justify-start gap-4 py-7 text-lg font-semibold"
        >
          {open === 2 ? <FaChevronUp /> : <FaChevronDown />}
          Is the Free Tier available for unlimited time or it will end more
          words after a while?
        </AccordionHeader>
        <AccordionBody className="text-base font-medium px-10">
          Mauris faucibus placerat nisl. Sed eros odio, posuere at felis quis,
          tincidunt facilisis nibh. Nulla in ante sem. Nam aliquam urna nisi,
          cursus semper dolor convallis at. Duis vulputate est in consectetur,
          et condimentum elit tincidunt libero consectetur, et condimentum suis
          vulputate est in libero
        </AccordionBody>
        <hr />
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="flex justify-start gap-4 py-7 text-lg font-semibold"
        >
          {open === 3 ? <FaChevronUp /> : <FaChevronDown />}
          Can I use the app on mobile devices or it’s limited more words to
          desktop use?
        </AccordionHeader>
        <AccordionBody className="text-base font-medium px-10">
          Nullam at diam at mi facilisis consectetur at non turpis. Proin a
          felis nisi. Sed at orci rutrum, tincidunt magna vel, pharetra libero.
          Proin mauris orci, faucibus eget malesuada vel, consectetur, et
          condimentum elit tincidunt pellentesque vitae ligula. Pellentesque
          euismod tincidun
        </AccordionBody>
        <hr />
      </Accordion>
    </Fragment>
  );
}
export default Accordions;
