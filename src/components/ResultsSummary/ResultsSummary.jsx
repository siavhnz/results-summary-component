import Summary from "./Summary";

const ResultsSummary = () => {
  return (
    <div className="md:ml-auto md:mr-auto md:grid md:w-[735px] md:grid-cols-2 md:rounded-3xl md:shadow-xl md:shadow-light-lavender">
      <div className="flex flex-1 flex-col rounded-b-3xl bg-gradient-to-b from-light-slate-blue to-light-royal-blue pb-9 pt-5 md:rounded-t-3xl md:pb-14 md:pt-10">
        <p className=" text-center font-Hanken-Grotesk text-lg capitalize text-light-lavender md:text-2xl">
          your result
        </p>
        <div className="mt-6 flex h-36 w-36 flex-col items-center justify-center self-center rounded-[100%] bg-gradient-to-b from-violet-blue to-persian-blue md:mt-8 md:h-48 md:w-48">
          <span className="font-Hanken-Grotesk text-[3.5rem] leading-[4.25rem] text-white md:pt-4 md:text-7xl md:leading-[5rem]">
            76
          </span>
          <span className="font-Hanken-Grotesk text-off-white md:text-lg">
            of 100
          </span>
        </div>
        <p className="pt-5 text-center font-Hanken-Grotesk text-2xl font-medium capitalize text-white md:pt-10 md:text-3xl">
          great
        </p>
        <p className="px-14 pt-1 text-center font-Hanken-Grotesk text-base leading-6 text-off-white md:pt-4 md:text-lg md:leading-[1.375rem] ">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div className="flex-1 px-8 pb-4 pt-5 md:px-10 md:pt-10">
        <h2 className="font-Hanken-Grotesk text-lg font-medium capitalize text-dark-gray-blue md:text-2xl">
          summary
        </h2>
        <Summary />
        <button className="relative z-10 mt-6 flex h-14 w-full items-center justify-center rounded-3xl bg-dark-gray-blue font-Hanken-Grotesk text-lg font-medium capitalize text-white before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:-z-10 before:h-full before:w-full before:rounded-3xl before:bg-gradient-to-t before:from-light-slate-blue before:to-light-royal-blue before:opacity-0 before:transition-opacity before:duration-700 before:content-[''] hover:bg-gradient-to-b  hover:before:opacity-100 md:mt-10">
          continue
        </button>
      </div>
    </div>
  );
};

export default ResultsSummary;
