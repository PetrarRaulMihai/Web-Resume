import { useState, useEffect } from "react";

function Modal({ setModalOn, title, imgPath }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setModalOn(false);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isModalOpen]);

  return (
    // this is the aprent container of everything
    <div className="fixed top-0 bottom-0 z-50 w-full flex justify-center inset-0 overflow-auto backdrop-blur-md">
      {/* this is the modal container */}
      <div className="absolute filterHeaderMenu w-4/5 top-20 bottom-20 rounded-xl object-cover overflow-auto">
        {/* this is the container of p */}
        <div className="aboslute">
          <p
            onClick={closeModal}
            className="absolute right-0 top-0 bg-gray-400 w-8 text-xl font-bold rounded-bl-lg rounded-tr-lg flex justify-center items-center"
          >
            X
          </p>
        </div>
        <img className="mx-auto rounded-xl" src={imgPath}></img>
      </div>
    </div>
  );
}

export default Modal;

{
  /* <div className="w-full flex justify-center fixed bg-rose-800">
ssss
<div className="fixed top-12 w-4/5 h-85 mx-auto bg-rose-400 rounded-lg overflow-auto">
  <p
    onClick={closeModal}
    className="bg-gray-400 w-8 text-xl font-bold rounded-bl-lg rounded-tr-lg flex justify-center items-center fixed right-0 top-0"
  >
    X
  </p>
  <img src={imgPath}></img>
</div>
</div> */
}

// i have to check the modal cancel background scroll
