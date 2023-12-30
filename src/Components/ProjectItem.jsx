import { Link } from "react-router-dom";
function ProjectItem({
  title,
  tech,
  webUrl,
  webGit,
  setModalOn,
  setTitle,
  imgPath,
  setImgPath,
}) {
  const openModal = (event) => {
    console.log("open modal");
    console.log(event.target.innerText);
    setTitle(title);
    setModalOn(true);
    setImgPath(imgPath);
  };
  return (
    <div className="project-bg rounded w-full sm:w-60 px-3 py-5 flex flex-col gap-1 hover:scale-105 transition">
      <p onClick={openModal} className="text-lg font-bold">
        {title}
      </p>
      <div className="flex gap-2 flex-wrap">
        {tech.map((e, index) => {
          return <p key={index}>{e}</p>;
        })}
      </div>
      <Link to={webUrl} target="_blank">
        Open Web
      </Link>
      <Link to={webGit} target="_blank">
        <p>Open Git</p>
      </Link>
    </div>
  );
}

export default ProjectItem;
