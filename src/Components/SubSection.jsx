function SubSection({ srcImg, title, text, setSectionState }) {
  const handleClick = () => {
    setSectionState(false);
  };
  return (
    <div>
      <div className="flex justify-between">
        <p>{title}</p>
        <button
          onClick={handleClick}
          className="bg-black text-white w-6 h-6 font-bold rounded-full flex justify-center items-center"
        >
          X
        </button>
      </div>
      <img src={srcImg}></img>
      <p>{text}</p>
    </div>
  );
}

export default SubSection;
