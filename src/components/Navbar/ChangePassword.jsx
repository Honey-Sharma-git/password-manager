import axios from "axios";
import { useState } from "react";
//React icons:
import { IoCloseCircleOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { GiConfirmed } from "react-icons/gi";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
//Constants:
import { baseURL } from "../../utils/constant";

export const ChangePassword = ({
  setChangePassShown,
  isNewPassShown,
  toggleNewPassShown,
  isConfirmPassShown,
  toggleConfirmPassShown,
}) => {
  const [changedPassDetails, setChangedPassDetails] = useState({
    password: "",
    conPassword: "",
  });

  function handleInputChange(e) {
    setChangedPassDetails((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  async function getData(e) {
    e.preventDefault();
    const response = await axios.post(
      `${baseURL}/v1/changePassword`,
      changedPassDetails
    );
  }

  return (
    <aside className=" flex flex-row justify-center z-50 absolute min-h-screen w-full bg-black/80 p-5">
      <form className="flex flex-col gap-3 z-50 bg-gray-100/50 backdrop-blur-sm shadow-lg sm:w-1/3 p-5 rounded-lg absolute ">
        <figure
          onClick={() => {
            setChangePassShown(false);
          }}
          className="cursor-pointer flex flex-row justify-end text-2xl"
        >
          <IoCloseCircleOutline />
        </figure>
        <legend className="text-3xl font-bold">Change login password</legend>
        <div className="flex flex-col gap-1 ">
          <label htmlFor="password">New password:</label>
          <div className="relative">
            <div className="absolute translate-y-[-50%] top-[50%] text-lg left-2 text-[var(--theme-primary-color)]">
              <RiLockPasswordLine />
            </div>
            <input
              onChange={handleInputChange}
              className="border p-2 px-8 rounded-sm w-full  focus:border-[var(--theme-primary-color)] focus:border-2 focus:outline-none"
              type={isNewPassShown ? "text" : "password"}
              name="password"
              id="password"
              placeholder="****************"
            />
            <div
              className="absolute top-[50%] right-2 translate-y-[-50%] cursor-pointer text-lg text-[var(--theme-primary-color)]"
              onClick={toggleNewPassShown}
            >
              {isNewPassShown ? <FaRegEyeSlash /> : <FaRegEye />}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="conPassword">Confirm password:</label>
          <div className="relative">
            <div className="absolute translate-y-[-50%] top-[50%] text-lg left-2 text-[var(--theme-primary-color)]">
              <GiConfirmed />
            </div>
            <input
              onChange={handleInputChange}
              className="border p-2 px-8 rounded-sm w-full  focus:border-[var(--theme-primary-color)] focus:border-2 focus:outline-none"
              type={isConfirmPassShown ? "text" : "password"}
              name="conPassword"
              id="conPassword"
              placeholder="****************"
            />
            <div
              className="absolute top-[50%] right-2 translate-y-[-50%] cursor-pointer text-lg text-[var(--theme-primary-color)]"
              onClick={toggleConfirmPassShown}
            >
              {isConfirmPassShown ? <FaRegEyeSlash /> : <FaRegEye />}
            </div>
          </div>
        </div>
        <button
          onClick={getData}
          className="bg-[var(--theme-primary-color)] w-[70%] self-center text-white p-1 rounded-sm cursor-pointer shadow-lg hover:bg-[var(--theme-primary-hover-color)] mt-2"
          type="submit"
        >
          Save password
        </button>
      </form>
    </aside>
  );
};
