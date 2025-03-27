import { FaShareAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdUpdate } from "react-icons/md";
import { Password } from "./Password";
export const TableBody = ({ item, index }) => {
  return (
    <tr key={item._id}>
      <td className="text-left border py-2 px-2 text-gray-500 ">{index}</td>
      <td className="text-left border py-2 px-2 text-gray-500 ">
        {item.userName}
      </td>
      <td className="text-left border py-2 px-2 text-gray-500 ">
        <Password item={item} />
      </td>
      <td className="text-left border py-2 px-2 text-gray-500 ">
        <a
          className="text-blue-600 hover:text-blue-800 underline
"
          href={item.domain}
        >
          {item.domain}
        </a>
      </td>
      <td className=" border items-center  text-2xl text-center py-2 px-2 text-gray-500 ">
        <div className="flex flex-row justify-evenly">
          <button>
            <FaShareAlt className="hover:text-gray-950 text-gray-500 cursor-pointer" />
          </button>
          <button>
            <MdDelete className="hover:text-gray-950 text-gray-500 cursor-pointer" />
          </button>
          <button>
            <MdUpdate className="hover:text-gray-950 text-gray-500 cursor-pointer" />
          </button>
        </div>
      </td>
    </tr>
  );
};
