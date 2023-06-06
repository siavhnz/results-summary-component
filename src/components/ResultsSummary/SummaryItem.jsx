const SummaryItem = ({ bg, color, border, category, score, icon }) => {
  return (
    <div
      className={`${bg} relative flex h-14 items-center gap-x-3 rounded-xl bg-opacity-5 bg-no-repeat px-4`}
    >
      {/* create corners */}
      <div
        className={`absolute left-0 top-0 h-3 w-3 rounded-tl-xl border-t border-opacity-20 ${border}`}
      ></div>
      <div
        className={`absolute left-0 top-0 h-3 w-3 rounded-tl-xl border-l border-opacity-20 ${border}`}
      ></div>
      <div
        className={`absolute bottom-0 left-0 h-3 w-3 rounded-bl-xl border-b border-opacity-20 ${border}`}
      ></div>
      <div
        className={`absolute bottom-0 left-0 h-3 w-3 rounded-bl-xl border-l border-opacity-20 ${border}`}
      ></div>
      <div
        className={`absolute bottom-0 right-0 h-3 w-3 rounded-br-xl border-b border-opacity-20 ${border}`}
      ></div>
      <div
        className={`absolute bottom-0 right-0 h-3 w-3 rounded-br-xl border-r border-opacity-20 ${border}`}
      ></div>
      <div
        className={`absolute right-0 top-0 h-3 w-3 rounded-tr-xl border-t border-opacity-20 ${border}`}
      ></div>
      <div
        className={`absolute right-0 top-0 h-3 w-3 rounded-tr-xl border-r border-opacity-20 ${border}`}
      ></div>
      <img src={icon} alt={category} />
      <p className={`${color} font-Hanken-Grotesk font-medium md:text-lg`}>{category}</p>
      <p className="ml-auto flex gap-x-1 font-Hanken-Grotesk md:text-lg">
        <span className="pr-1 font-bold text-dark-gray-blue">{score}</span>
        <span className="font-medium text-off-white">/</span>
        <span className="font-medium text-off-white">100</span>
      </p>
    </div>
  );
};

export default SummaryItem;
