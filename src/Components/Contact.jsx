import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

function Contact() {
  const [tooltipPhone, setTooltipPhone] = useState(false);
  const [tooltipEmail, setTooltipEmail] = useState(false);
  const copyContentPhone = () => {
    const phoneNumber = "0748354090";
    setTooltipPhone(true);
    console.log("Copied");
    setTimeout(() => {
      setTooltipPhone(false);
    }, 600);
    navigator.clipboard.writeText(phoneNumber);
  };
  const copyContentEmail = () => {
    const email = "petrar96raul@gmail.com";
    setTooltipEmail(true);
    console.log("Copied");
    setTimeout(() => {
      setTooltipEmail(false);
    }, 600);
    navigator.clipboard.writeText(email);
  };

  return (
    // section - 6
    // this can be made as a footer....
    <section
      id="contact"
      className="flex flex-col gap-4 px-7 text-center mb-10 py-5 lg:px-[184px] xl:px-[264px] 2xl:px-[425px]"
    >
      <div className="flex justify-between filter rounded p-3">
        <Link to="https://www.facebook.com/mihai.raul.3" target="_blank">
          <FaFacebook size={"2rem"} />
        </Link>
        <Link to="https://www.instagram.com/raulpetrarr/" target="_blank">
          <AiFillInstagram size={"2rem"} />
        </Link>
        <Link
          to="https://www.linkedin.com/in/raul-petrar-730a481ba/"
          target="_blank"
        >
          <AiFillLinkedin size={"2rem"} />
        </Link>
        <div onClick={copyContentPhone} className="relative">
          {tooltipPhone && (
            <div className="bg-gray-400 absolute -left-6 -top-7 px-3 rounded">
              Copied
            </div>
          )}
          <FaPhoneSquareAlt className="cursor-pointer" size={"2rem"} />
        </div>
        <div id="email" onClick={copyContentEmail} className="relative">
          {tooltipEmail && (
            <div className="bg-gray-400 absolute -left-6 -top-7 px-3 rounded">
              Copied
            </div>
          )}
          <MdEmail className="cursor-pointer" size={"2rem"} />
        </div>
      </div>
    </section>
  );
}

export default Contact;
