import { moneyList } from "../assets/data";

const Side = ({ questionNumber, setQuestionNumber }) => {
  return (
    <div className="pyramid  md:w-[25%] md:flex items-center justify-center hidden md:visible">
      <ul className="moneyList w-full p-5">
        {moneyList.map((list, index) => (
          <li
            key={index}
            className={
              questionNumber === list.id
                ? "active mb-1 rounded-md px-2 py-1 flex items-center gap-x-2"
                : "mb-1 rounded-md px-2 py-1 flex items-center gap-x-2"
            }
          >
            {list.money}
            {/* <span className="moneyListItemNumber text-sm md:text-lg font-thin w-[20%]">
              {list.id}
            </span> */}
            {/* <span className="moneyListItemAmount text-sm md:text-xl font-light">
              
            </span> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Side;
