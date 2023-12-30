import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import sigWhite from "../Images/sigWhite.png";

function Header() {
  const [modalState, setModalState] = useState(false);

  const openModal = () => {
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
  };

  const donwloadFile = () => {
    window.location.href = "./Resume.pdf";
  };

  return (
    <header className="z-30 fixed top-0 left-0 right-0 filterHeader text-white h-16 flex items-center mb-24 justify-between pl-6">
      <FontAwesomeIcon
        className="h-7"
        icon={faBars}
        style={{ color: "#fcfcfc" }}
        onClick={openModal}
      />
      <img className="h-14" src={sigWhite} alt="Signature"></img>
      {/* modal */}
      {modalState && (
        <div className="fixed top-0 left-0 right-0 bg-rose-600 flex flex-col py-3 font-bold text-lg text-center gap-3">
          <button
            onClick={closeModal}
            className="absolute bg-white right-2 top-2 text-black w-8 h-8 rounded-full text-xl flex items-center justify-center font-bold"
          >
            X
          </button>
          <Link
            onClick={closeModal}
            to="aboutMe"
            smooth={true}
            duration={500}
            offset={-90}
          >
            About Me
          </Link>
          <Link
            onClick={closeModal}
            to="education"
            smooth={true}
            duration={500}
            offset={-90}
          >
            Education
          </Link>
          <Link
            onClick={closeModal}
            to="experience"
            smooth={true}
            duration={500}
            offset={-90}
          >
            Experience
          </Link>
          <Link
            onClick={closeModal}
            to="skills"
            smooth={true}
            duration={500}
            offset={-90}
          >
            Skills
          </Link>
          <Link
            onClick={closeModal}
            to="personalWork"
            smooth={true}
            duration={500}
            offset={-90}
          >
            Personal Work
          </Link>
          <Link
            onClick={closeModal}
            to="contact"
            smooth={true}
            duration={500}
            offset={-90}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
