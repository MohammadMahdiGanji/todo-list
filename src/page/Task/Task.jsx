import { RiSettings4Line } from "react-icons/ri";
import AddTask from "../../Component/AddTask/AddTask";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
import TableData from "../../Component/TableData/TableData";
import { FaRegStar } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";
import { TiTick } from "react-icons/ti";
import { MdRemoveDone } from "react-icons/md";

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
        console.log(todoList);
        console.log(result);
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

  const removeData = (id) => {
    const result = todoList.filter((item) => item.id !== id);
    setLocalStorage("todo", result);
    setTodoList(result);
  };

  const clickImportant = (id) => {
    const newTodoList = [];

    todoList.forEach((item) => {
      if (item.id == id) {
        item.isImportant = !item.isImportant;
      }
      newTodoList.push(item);
    });

    setLocalStorage("todo", newTodoList);
    setTodoList(newTodoList);
  };

  const clickComplete = (id) => {
    const newTodoList = [];
    const result = todoList.forEach((item) => {
      if (item.id == id) {
        item.isCompleted = !item.isCompleted;
      }
      newTodoList.push(item);
    });
    setLocalStorage("todo", newTodoList);
    setTodoList(newTodoList);
  };

  const updateData = (id) => {
    Swal.fire({
      title: "update name todo:",
      icon: "info",
      input: "text",
      showCancelButton: "true",
      confirmButtonText: "confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        if (result.value.length > 2) {
          const newTodoLIst = [];
          todoList.forEach((item) => {
            if (item.id == id) {
              item.name = result.value;
            }
            newTodoLIst.push(item);
          });
          setLocalStorage("todo", newTodoLIst);
          setTodoList(newTodoLIst);
        }
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
        <TableData>
          <table className="w-full">
            <thead>
              <tr className="bg-[#00ff9d] ">
                <th className="p-2 text-center">ID</th>
                <th className="p-2 text-center">Name</th>
                <th className="p-2 text-center">Important</th>
                <th className="p-2 text-center">IsCompleted</th>
                <th className="p-2 text-center">update</th>
                <th className="p-2 text-center">remove</th>
              </tr>
            </thead>
            <tbody>
              {todoList.map((item, index) => (
                <tr
                  key={item.id}
                  className="odd:bg-[#ccdfd8] border-b-1 border-[rgba(0,0,0,0.2)]"
                >
                  <td className="p-2 text-center">{index + 1}</td>
                  <td className="p-2 text-center">{item.name}</td>
                  <td className="p-2 text-center">
                    {item.isImportant ? (
                      <GoStarFill
                        className="text-amber-400 mx-auto cursor-pointer text-2xl"
                        onClick={() => clickImportant(item.id)}
                      />
                    ) : (
                      <FaRegStar
                        className="text-amber-400 mx-auto cursor-pointer text-2xl"
                        onClick={() => clickImportant(item.id)}
                      />
                    )}
                  </td>
                  <td className="p-2 text-center">
                    {item.isCompleted ? (
                      <TiTick
                        className="mx-auto cursor-pointer text-4xl"
                        onClick={() => clickComplete(item.id)}
                      />
                    ) : (
                      <MdRemoveDone
                        className="mx-auto cursor-pointer text-4xl"
                        onClick={() => clickComplete(item.id)}
                      />
                    )}
                  </td>
                  <td className="p-2 text-center">
                    <button
                      className="bg-green-400 py-1 px-4 rounded-md text-white cursor-pointer"
                      onClick={() => updateData(item.id)}
                    >
                      update
                    </button>
                  </td>
                  <td className="p-2 text-center">
                    <button
                      className="bg-red-400 py-1 px-4 rounded-md text-white cursor-pointer"
                      onClick={() => removeData(item.id)}
                    >
                      remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableData>
      </div>
    </div>
  );
}
