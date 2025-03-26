import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
export const Login = () => {
  const [isShown, setIsShown] = useState(false);
  function toggleShown() {
    setIsShown((prevState) => {
      return !prevState;
    });
  }
  return (
    <main className="login-wallpaper min-h-screen grid place-content-center ">
      <article className="p-18 px-42 rounded-lg bg-gray-300/50 backdrop-blur-xs shadow-lg">
        <form className="flex flex-col gap-5 w-76">
          <h1 className="text-2xl font-bold">Login</h1>
          <div className="flex flex-col gap-1">
            <label htmlFor="username">Username:</label>
            <input
              className="border p-1 px-2 rounded-sm"
              type="text"
              name="username"
              id="username"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password:</label>
            <div className="relative">
              <input
                className="border p-1 px-2 rounded-sm w-full"
                type={isShown ? "text" : "password"}
                name="password"
                id="password"
              />
              <div
                className="absolute bottom-0 right-2 translate-y-[-50%] cursor-pointer text-lg"
                onClick={toggleShown}
              >
                {isShown ? <FaRegEyeSlash /> : <FaRegEye />}
              </div>
            </div>
          </div>
          <button
            className="bg-[#6c63ff] text-white p-1 rounded-sm cursor-pointer hover:bg-[#4c45bb]"
            type="submit"
          >
            Login
          </button>
        </form>
      </article>
    </main>
  );
};
