import todoIcon from "../../assets/img/TodoIcon.svg";
import { PiCheckFat } from "react-icons/pi";
import { PiStar } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div
      className={`sticky h-full top-0 bottom-0 left-0 
                w-[300px] border-r-2 border-[rgba(0,0,0,0.1)]`}
    >
      <div className="flex item-center gap-3 px-3 pt-7">
        <img src={todoIcon} alt="todo" />
        <h2 className="text-[40px] text-[#0D5329]">TO-DO </h2>
      </div>
      <ul className="mt-10 flex flex-col gap-5">
        <Link to="/">
          <li className="flex items-center gap-4 text-[20px] py-2 px-4 bg-[#C4DCD3] rounded-lg">
            <PiCheckFat className="text-[25px]" />
            <span>Tasks</span>
          </li>
        </Link>
        <Link to="/important">
          <li className="flex items-center gap-4 text-[20px] py-2 px-4 bg-[#C4DCD3] rounded-lg">
            <PiStar className="text-[25px]" />
            <span href="#">Important</span>
          </li>
        </Link>
        <Link to="/completed">
          <li className="flex items-center gap-4 text-[20px] py-2 px-4 bg-[#C4DCD3] rounded-lg">
            <RiDeleteBinLine className="text-[25px]" />
            <span href="#">Completed</span>
          </li>
        </Link>
      </ul>
    </div>
  );
}
