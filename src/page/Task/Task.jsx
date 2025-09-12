import { RiSettings4Line } from "react-icons/ri";
import AddTask from "../../Component/AddTask/AddTask";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
import TableData from "../../Component/TableData/TableData";

export default function Task() {
  const [todoList, setTodoList] = useState([]);
  const [value, key, setLocalStorage, getLocalStirage, removeLocalStorage] =
    useLocalStorage();

    useEffect(() => {
      const data = getLocalStirage("todo");
      setTodoList(data);
    }, []);
  const addTodo = () => {
    Swal.fire({
      title: "Enter Name Todo:",
      icon: "info",
      input: "text",
      showCancelButton: true,
      confirmButtonText: "confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(todoList)
        console.log(result)
        const newTodo = {
          id: todoList.length + 1,
          name: result.value,
          isImportant: false,
          isCompleted: false,
        };

        setTodoList((prev) => {
          const updated = [...prev, newTodo];
          setLocalStorage("todo", updated);
          return updated;
        });
      }
    });
  };
  return (
    <div className="w-full">
      <div className="bg-[#D9D9D9] w-full p-4">
        <RiSettings4Line className="text-[40px] ml-auto text-[#424242] cursor-pointer" />
      </div>
      <div className="p-10 flex">
        <AddTask addTodo={addTodo} />
      </div>
      <div className="py-10 px-30">
        <TableData todoList={todoList} setTodoList={setTodoList} />
      </div>
    </div>
  );
}
