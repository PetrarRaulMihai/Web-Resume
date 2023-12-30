import ProjectItem from "./ProjectItem";
import weatherApp from "../Images/projects-images/weatherApp.png";
import rockPaperScissors from "../Images/projects-images/rockPaperScissors.png";
import audiophile from "../Images/projects-images/audiophile.png";
import youtubeDesign from "../Images/projects-images/youtubeDesign.png";

function PersonalWork({ setModalOn, setTitle, setImgPath }) {
  // this is the class constructor for project instances
  class MyProject {
    constructor(id, title, tech, webUrl, webGit, path) {
      this.id = id;
      this.title = title;
      this.tech = tech;
      this.webUrl = webUrl;
      this.webGit = webGit;
      this.path = path;
    }
  }

  const project1 = new MyProject(
    1,
    "Invoice-App",
    [
      "HTML",
      "CSS",
      "Tailwind",
      "JavaScript",
      "React",
      "Database",
      "Formik & Yup",
    ],
    "https://invoice-app-gules-nine.vercel.app/",
    "https://github.com/PetrarRaulMihai/InvoiceApp"
    // invoiceApp
  );
  const project2 = new MyProject(
    2,
    "Frontend quizz-App",
    [
      "HTML",
      "CSS",
      "Tailwind",
      "JavaScript",
      "React",
      "Database",
      "Formik & Yup",
    ],
    "https://frontend-quizz-app-self.vercel.app/",
    "https://github.com/PetrarRaulMihai/Frontend-quizz-app"
    // quizzApp
  );

  const project3 = new MyProject(
    3,
    "Audiophille",
    ["HTML", "CSS", "Tailwind", "JavaScript", "React"],
    "https://web-audiophille.vercel.app/",
    "https://github.com/PetrarRaulMihai/Web-audiophille",
    audiophile
  );

  const project4 = new MyProject(
    4,
    "Weather-app",
    ["HTML", "CSS", "Tailwind", "JavaScript", "React"],
    "https://weather-app-vert-tau.vercel.app/",
    "https://github.com/PetrarRaulMihai/Weather-app",
    weatherApp
  );

  const project5 = new MyProject(
    5,
    "Rock-paper-scissors",
    ["HTML", "CSS", "Tailwind", "JavaScript", "React"],
    "https://rock-paper-scissors-six-flame.vercel.app/",
    "https://github.com/PetrarRaulMihai/Rock-paper-scissors",
    rockPaperScissors
  );

  const project6 = new MyProject(
    6,
    "Youtube-Design",
    ["HTML", "CSS"],
    "https://petrarraulmihai.github.io/Youtube/youtube.html",
    "https://github.com/PetrarRaulMihai/Youtube",
    youtubeDesign
  );

  const projects = [project1, project2, project3, project4, project5, project6];
  return (
    // section - 5
    <section
      id="personalWork"
      className=" flex flex-col px-7 py-5 lg:px-[184px] xl:px-[264px] 2xl:px-[425px]"
    >
      <div className="filter rounded flex flex-col gap-4 p-3 pb-10">
        <p className="flex justify-start font-bold">Personal work : </p>
        {/* this has to be a component */}
        <div className="flex gap-5 flex-wrap justify-center">
          {projects.map((project, index) => {
            return (
              <ProjectItem
                setModalOn={setModalOn}
                setImgPath={setImgPath}
                setTitle={setTitle}
                key={index}
                title={project.title}
                tech={project.tech}
                webUrl={project.webUrl}
                webGit={project.webGit}
                imgPath={project.path}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PersonalWork;
