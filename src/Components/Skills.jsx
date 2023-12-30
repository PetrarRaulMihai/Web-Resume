function Skills() {
  // telecom domain skills array
  const telecom = [
    "SIP, DIAMETER, RTP/RTCP protocols",
    "VoLTE, VoWiFi, VoIP",
    "Call flow tracking",
    "KPIs analyse",
    "LINUX",
    "LOGs interpreting",
    "KUBERNETHES",
    "Wireshark",
    "CEM Tool",
  ];

  // front end domain skills array
  const frontend = [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrp",
    "Tailwind",
    "React",
    "API",
    "SQL",
    "GIT",
    "GIT Hub",
    "Leaflet",
  ];

  return (
    // section - 4
    <section
      id="skills"
      className="flex flex-col gap-4 px-10 py-5 lg:px-[184px] xl:px-[264px] 2xl:px-[425px]"
    >
      <div className="filter rounded flex flex-col gap-4 p-3">
        <p className="flex justify-start font-bold">Skills : </p>
        <div className="flex flex-col sm:flex-row gap-10 sm:justify-around">
          <div className="flex flex-col items-center">
            <p className="text-xl font-bold">Telecom :</p>
            <ul className="text-center">
              {telecom.map((skill, index) => {
                return <li key={index}>{skill}</li>;
              })}
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xl font-bold">Front End :</p>
            <ul className="text-center">
              {frontend.map((skill, index) => {
                return <li key={index}>{skill}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
