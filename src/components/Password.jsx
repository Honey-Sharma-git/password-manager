import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

export const Password = ({ item }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="relative ">
      <input
        readOnly
        className="p-1 pr-7  rounded-lg w-full"
        type={isShown ? "text" : "password"}
        value={item.password}
      />
      <div
        className="absolute right-2 translate-y-[50%] top-0 cursor-pointer text-[#3b387f] text-lg"
        onClick={() => {
          setIsShown((prev) => {
            return !prev;
          });
        }}
      >
        {isShown ? <FaRegEye /> : <FaRegEyeSlash />}
      </div>
    </div>
  );
};
