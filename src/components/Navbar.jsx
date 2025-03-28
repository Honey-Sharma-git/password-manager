import { useNavigate } from "react-router-dom";
import { useState } from "react";
//Components:
import { AccountModal } from "./Navbar/AccountModal";
import { ChangePassword } from "./Navbar/ChangePassword";
//Constants:
import { baseURL } from "../utils/constant";
//React icons:
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import axios from "axios";

export const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNewPassShown, setIsNewPassShown] = useState(false);
  const [isConfirmPassShown, setIsConfirmPassShown] = useState(false);
  const [isAccountShown, setIsAccountShown] = useState(false);
  const [isChangePassShown, setChangePassShown] = useState(false);
  const [currLoggedInUser, setCurrLoggedInUser] = useState({});
  const navigate = useNavigate();

  function toggleDarkMode() {
    setIsDarkMode((prev) => {
      return !prev;
    });
  }
  function toggleAccountShown() {
    setIsAccountShown((prev) => {
      return !prev;
    });
  }
  function toggleNewPassShown() {
    setIsNewPassShown((prev) => {
      return !prev;
    });
  }
  function toggleConfirmPassShown() {
    setIsConfirmPassShown((prev) => {
      return !prev;
    });
  }
  function changePassword() {
    setIsAccountShown(false);
    setChangePassShown((prev) => {
      return !prev;
    });
  }
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("currUserID");
    navigate("/");
  }
  async function getLoggedInUser() {
    const response = await axios.get(
      `${baseURL}/v1/user?_id=${JSON.parse(
        localStorage.getItem("currUserID")
      )}`,
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      }
    );
    if (response.status === 200) {
      setCurrLoggedInUser(...response.data.posts);
    }
  }
  return (
    <>
      <header className="flex flex-row justify-center  p-2 bg-black drop-shadow-lg relative z-50 ">
        <h1 className="text-white text-3xl mx-auto w-full font-medium ">
          DASHBOARD
        </h1>
        <button
          onClick={toggleDarkMode}
          className="text-white text-2xl mr-5 cursor-pointer"
        >
          {isDarkMode ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
        </button>
        <nav className="flex space-x-4 ">
          <button
            onClick={() => {
              toggleAccountShown();
              getLoggedInUser();
            }}
            className="cursor-pointer hover:underline  hover:font-bold rounded-full p-2 hover:bg-gray-800  text-2xl"
          >
            {isAccountShown ? (
              <div className="text-[#4c45bb]">
                <FaUserAlt />
              </div>
            ) : (
              <div className="text-white">
                <FaUserAlt />
              </div>
            )}
          </button>
        </nav>

        {isAccountShown && (
          <AccountModal
            changePassword={changePassword}
            logout={logout}
            currLoggedInUser={currLoggedInUser}
          />
        )}
      </header>

      {isChangePassShown && (
        <ChangePassword
          setChangePassShown={setChangePassShown}
          isNewPassShown={isNewPassShown}
          toggleNewPassShown={toggleNewPassShown}
          isConfirmPassShown={isConfirmPassShown}
          toggleConfirmPassShown={toggleConfirmPassShown}
        />
      )}
    </>
  );
};
