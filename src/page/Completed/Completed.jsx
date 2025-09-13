import { useEffect, useState } from "react";
import Header from "../../Component/Header/Header";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
import TableData from "../../Component/TableData/TableData";
import { FaRegStar } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";
import { TiTick } from "react-icons/ti";
import { MdRemoveDone } from "react-icons/md";

export default function Completed() {
  const [todoList, setTodoList] = useState([]);
  const [value, key, setLocalStorage, getLocalStirage, removeLocalStorage] =
    useLocalStorage();

  useEffect(() => {
    const data = getLocalStirage("todo");
    const filterData = data.filter((item) => item.isCompleted == true);
    setTodoList(filterData);
  }, []);

  return (
    <div>
      <Header title="completed task" />
            <div className="p-30">
              <TableData>
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#00ff9d] ">
                      <th className="p-2 text-center">ID</th>
                      <th className="p-2 text-center">Name</th>
                      <th className="p-2 text-center">Important</th>
                      <th className="p-2 text-center">IsCompleted</th>
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
                            <GoStarFill className="text-amber-400 mx-auto  text-2xl" />
                          ) : (
                            <FaRegStar className="text-amber-400 mx-auto  text-2xl" />
                          )}
                        </td>
                        <td className="p-2 text-center">
                          {item.isCompleted ? (
                            <TiTick className="mx-auto  text-4xl" />
                          ) : (
                            <MdRemoveDone className="mx-auto text-4xl" />
                          )}
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
