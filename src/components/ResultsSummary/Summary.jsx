import SummaryItem from "./SummaryItem";
import { data } from "./data";

const Summary = () => {
  const bg = [
    "bg-light-red",
    "bg-orangey-yellow",
    "bg-green-teal",
    "bg-cobalt-blue",
  ];
  const colors = [
    "text-light-red",
    "text-orangey-yellow",
    "text-green-teal",
    "text-cobalt-blue",
  ];

  const borders = [
    "border-light-red",
    "border-orangey-yellow",
    "border-green-teal",
    "border-cobalt-blue",
  ];

  return (
    <div className="flex flex-col gap-y-4 pt-6">
      {data.map((item, index) => {
        return (
          <SummaryItem
            key={index}
            bg={bg[index]}
            color={colors[index]}
            border={borders[index]}
            category={item.category}
            score={item.score}
            icon={item.icon}
          />
        );
      })}
    </div>
  );
};

export default Summary;
