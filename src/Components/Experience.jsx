import { useEffect, useState } from "react";
import exp from "./exp.json";
function Experience() {
  const [listState, setListState] = useState(false);

  const handleClick = (event) => {
    setListState(event.target.id);
  };
  const closeList = () => {
    setListState(false);
  };

  return (
    // section - 3
    <section
      id="experience"
      className=" flex flex-col gap-4 px-10 py-5 lg:px-[184px] xl:px-[264px] 2xl:px-[425px]"
    >
      <div className="filter rounded flex flex-col gap-5 p-3">
        <p className="flex justify-start font-bold">Experience : </p>
        <div className="flex flex-col md:flex-row md:justify-between gap-5">
          <div className="flex flex-col items-center">
            <div className="text-center">
              {" "}
              <p id="nokia" onClick={handleClick}>
                NOKIA NETWORK ENGINEER
              </p>
              <p>(DEC 2021 - PRESENT)</p>
            </div>
            {listState === "nokia" && (
              <ul onClick={closeList}>
                {exp.map((element) => {
                  if (element.job === listState) {
                    console.log(listState);
                    return element.tasks.map((task) => {
                      return <li>&#x2022; {task}</li>;
                    });
                  }
                })}
              </ul>
            )}
          </div>
          <div className="flex flex-col items-center">
            <div className="text-center">
              <p id="bosch" onClick={handleClick}>
                BOSCH, FOI TECHNICIAN
              </p>
              <p>(NOV 2020 - NOV 2021 )</p>
            </div>
            {listState === "bosch" && (
              <ul onClick={closeList}>
                {exp.map((element) => {
                  if (element.job === listState) {
                    console.log(listState);
                    return element.tasks.map((task) => {
                      return <li>&#x2022; {task}</li>;
                    });
                  }
                })}
              </ul>
            )}
          </div>
          <div className="flex flex-col items-center">
            <div className="text-center">
              {" "}
              <p id="internship" onClick={handleClick}>
                BOSCH SUMMER INTERNSHIP
              </p>
              <p>(JUN - AUG, 2019)</p>
            </div>
            {listState === "internship" && (
              <ul onClick={closeList}>
                {exp.map((element) => {
                  if (element.job === listState) {
                    console.log(listState);
                    return element.tasks.map((task) => {
                      return <li>&#x2022; {task}</li>;
                    });
                  }
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
