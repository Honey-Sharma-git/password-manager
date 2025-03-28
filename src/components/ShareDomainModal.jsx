import {
  shareDomainID,
  showDomainShareModal,
} from "../redux/slice/shareDomainModalSlice";
import { useDispatch } from "react-redux";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import { useState } from "react";
import { useSelector } from "react-redux";

export const ShareDomainModal = ({ userList }) => {
  const dispatch = useDispatch();
  const domainID = useSelector((state) => {
    return state.showDomainShareModal;
  });
  const [isDropdownShown, setIsDropdownShown] = useState(false);
  const [userIdDomainId, setUserIdDomainId] = useState([]);

  function closeShareDomainModal() {
    dispatch(showDomainShareModal());
  }

  function toggleDropdown(e) {
    e.preventDefault();
    setIsDropdownShown((prev) => {
      return !prev;
    });
  }

  function handleUserSelection(userID) {
    setUserIdDomainId((prev) => {
      return [...prev, { userID: userID, domainID: domainID }];
    });
  }

  function shareUserDomainID(e) {
    e.preventDefault();
    //Need to call api here
  }
  return (
    <aside className="min-h-screen z-50 bg-black/80 absolute inset-0 flex flex-row justify-center  items-start p-10">
      <form className="p-5 text-white grow-0 md:w-1/2 w-full  bg-white/20 backdrop-blur-lg rounded-lg flex flex-col gap-8">
        <legend className="flex flex-row justify-between items-center text-2xl space-x-10">
          <span>Share with: </span>
          <span
            onClick={closeShareDomainModal}
            className="cursor-pointer hover:text-black"
          >
            <IoCloseCircleOutline />
          </span>
        </legend>
        <button
          onClick={toggleDropdown}
          className="cursor-pointer border rounded-lg hover:border-none p-2 w-full flex flex-row items-center justify-between tracking-widest hover:bg-black"
        >
          <span className="flex flex-row justify-center w-full">
            <span>User list</span>
          </span>
          <span>
            {isDropdownShown ? <IoIosArrowDropdown /> : <IoIosArrowDropup />}
          </span>
        </button>
        {isDropdownShown && (
          <div className=" overflow-auto h-34 border">
            {userList.map((user) => {
              return (
                <div
                  onChange={() => {
                    handleUserSelection(user._id);
                  }}
                  key={user._id}
                  className=" px-2 hover:bg-gray-500 border cursor-pointer w-full flex flex-row gap-3"
                >
                  <input type="checkbox" name={user.name} id={user.name} />
                  <label
                    className=" p-2 w-full flex cursor-pointer"
                    htmlFor={user.name}
                  >
                    {user.name}
                  </label>
                </div>
              );
            })}
          </div>
        )}
        <div className="flex flex-row justify-center">
          <button
            onClick={shareUserDomainID}
            className="cursor-pointer p-1 px-20 rounded-sm bg-[#3b387f] hover:bg-[#4c45bb]"
            type="submit"
          >
            Share
          </button>
        </div>
      </form>
    </aside>
  );
};
