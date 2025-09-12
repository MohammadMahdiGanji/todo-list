import { FaRegStar } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";
import { TiTick } from "react-icons/ti";
import { MdRemoveDone } from "react-icons/md";
import { useEffect, useState } from "react";
import { useLocalStorage } from "../../Hooks/useLocalStorage";

export default function TableData({ data }) {
  const [todoList, setTodoList] = useState([]);

  const [value, key, setLocalStorage, getLocalStirage, removeLocalStorage] =
    useLocalStorage();

  useEffect(() => {
    setTodoList(data);
  }, [data]);

  useEffect(() => {
    setLocalStorage("todo", todoList);
  }, [todoList]);

  const removeData = (id) => {
    const result = todoList.filter((item) => item.id !== id);
    setLocalStorage("todo", result);
    setTodoList(result);
  };

  return (
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
        {todoList.map((item) => (
          <tr
            key={item.id}
            className="odd:bg-[#ccdfd8] border-b-1 border-[rgba(0,0,0,0.2)]"
          >
            <td className="p-2 text-center">{item.id}</td>
            <td className="p-2 text-center">{item.name}</td>
            <td className="p-2 text-center">
              {item.important ? (
                <GoStarFill className="text-amber-400 ms-auto cursor-pointer text-2xl" />
              ) : (
                <FaRegStar className="text-amber-400 mx-auto cursor-pointer text-2xl" />
              )}
            </td>
            <td className="p-2 text-center">
              {item.isComplete ? (
                <MdRemoveDone className="mx-auto cursor-pointer text-2xl" />
              ) : (
                <MdRemoveDone className="mx-auto cursor-pointer text-2xl" />
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
  );
}
