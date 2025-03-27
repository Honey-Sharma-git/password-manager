import { IoCloseCircleOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { GiConfirmed } from "react-icons/gi";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

export const ChangePassword = ({
  setChangePassShown,
  isNewPassShown,
  toggleNewPassShown,
  isConfirmPassShown,
  toggleConfirmPassShown,
}) => {
  return (
    <aside className=" flex flex-row justify-center z-50 absolute min-h-screen w-full bg-gray-500/50 p-5">
      <form className="flex flex-col gap-3 z-50 bg-amber-300 w-1/2 p-5 rounded-lg absolute ">
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
          <label htmlFor="newPass">New password:</label>
          <div className="relative">
            <div className="absolute translate-y-[-50%] top-[50%] text-lg left-2 text-[#3b387f]">
              <RiLockPasswordLine />
            </div>
            <input
              className="border p-2 px-8 rounded-sm w-full  focus:border-[#3b387f] focus:border-2 focus:outline-none"
              type={isNewPassShown ? "text" : "password"}
              name="newPass"
              id="newPass"
            />
            <div
              className="absolute top-[50%] right-2 translate-y-[-50%] cursor-pointer text-lg text-[#3b387f]"
              onClick={toggleNewPassShown}
            >
              {isNewPassShown ? <FaRegEyeSlash /> : <FaRegEye />}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="confirmPass">Confirm password:</label>
          <div className="relative">
            <div className="absolute translate-y-[-50%] top-[50%] text-lg left-2 text-[#3b387f]">
              <GiConfirmed />
            </div>
            <input
              className="border p-2 px-8 rounded-sm w-full  focus:border-[#3b387f] focus:border-2 focus:outline-none"
              type={isConfirmPassShown ? "text" : "password"}
              name="confirmPass"
              id="confirmPass"
            />
            <div
              className="absolute top-[50%] right-2 translate-y-[-50%] cursor-pointer text-lg text-[#3b387f]"
              onClick={toggleConfirmPassShown}
            >
              {isConfirmPassShown ? <FaRegEyeSlash /> : <FaRegEye />}
            </div>
          </div>
        </div>
        <button
          className="bg-[#3b387f] w-[70%] self-center text-white p-1 rounded-sm cursor-pointer shadow-lg hover:bg-[#4c45bb] mt-2"
          type="submit"
        >
          Save password
        </button>
      </form>
    </aside>
  );
};
