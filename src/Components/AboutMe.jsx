import { Routes, Route } from "react-router-dom";
import General from "./General";
import Motorcycles from "./Motorcycles";
import Hiking from "./Hiking";
import Travel from "./Travel";

function AboutMe() {
  return (
    // section - 1
    <section id="aboutMe" className=" py-6 lg:px-36 xl:px-56 2xl:px-96">
      {/* About me div by default*/}
      <Routes>
        <Route path="/" element={<General />} />
        <Route path="moto" element={<Motorcycles />} />
        <Route path="hiking" element={<Hiking />} />
        <Route path="travel" element={<Travel />} />
      </Routes>
    </section>
  );
}

export default AboutMe;
