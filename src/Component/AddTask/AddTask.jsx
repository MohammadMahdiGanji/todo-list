import { TiPlus } from "react-icons/ti";

export default function AddTask({ addTodo }) {

  const clickHandler = () => {
    addTodo();
  };

  return (
    <div
      className="bg-[#C4DCD3] p-8 rounded-3xl cursor-pointer hover:bg-[#9fc4b6]
  transition-all duration-200"
      onClick={clickHandler}
    >
      <span className="text-[20px]">add a task</span>
      <TiPlus className="text-white text-[50px] mx-auto mt-2" />
    </div>
  );
}
