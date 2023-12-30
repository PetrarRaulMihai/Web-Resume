import Header from "./Components/Header";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import PersonalWork from "./Components/PersonalWork";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Modal from "./Components/Modal";
import "./App.css";
import { useState } from "react";

function App() {
  const [modalOn, setModalOn] = useState(false);
  const [title, setTitle] = useState("");
  const [imgPath, setImgPath] = useState("");

  return (
    <div className="flex flex-col gap-10 background xl:text-lg 2xl:text-xl text-gray-300">
      <Header />
      <h1 className="mt-24 text-center font-bold text-3xl px-8">
        Hi, I'm Raul, welcome on my web page
      </h1>
      <AboutMe />
      <Education />
      <Experience />
      <Skills />
      <PersonalWork
        setModalOn={setModalOn}
        setTitle={setTitle}
        setImgPath={setImgPath}
      />
      <Contact />
      {modalOn && (
        <Modal setModalOn={setModalOn} title={title} imgPath={imgPath} />
      )}
    </div>
  );
}

export default App;

// Iulian way: new component Modal si asezata aici App.js asezam componenta aici
//
