function Education() {
  return (
    // section - 2
    <section
      id="education"
      className="flex flex-col gap-4 px-10 text-center py-5 lg:px-[184px] xl:px-[264px] 2xl:px-[425px]"
    >
      <div className="filter flex flex-col gap-5 rounded p-3">
        <p className="flex justify-start font-bold">Education : </p>
        <ul className="flex flex-col gap-6 md:flex-row md:justify-between ">
          <li>
            <p>INFORMAL SCHOOL</p>
            <p>JAN 2023 - PRESENT</p>
          </li>
          <li>
            <p>UTCN, APPLIED ELECTRONICS</p>
            <p>2016 - 2020</p>
          </li>
          <li>
            <p>ECONOMIC COLLEGE</p>
            <p>2012 - 2016</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Education;
