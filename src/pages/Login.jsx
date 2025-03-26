import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [isShown, setIsShown] = useState(false);
  const [token, setToken] = useState("");
  const [loginDetails, setLoginDetails] = useState({
    email: "virat@gmail.com",
    password: "12345678",
  });
  const baseURL = "http://domainshare.sublimitysoft.com";
  function handleInputChange(e) {
    setLoginDetails((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  function toggleShown() {
    setIsShown((prevState) => {
      return !prevState;
    });
  }

  async function getData(e) {
    e.preventDefault();
    const response = await axios.post(`${baseURL}/v1/login`, loginDetails);
    if (response.data.statusCode === 201 && response.status === 200) {
      setToken(() => {
        const token = JSON.stringify(response.data.token);
        localStorage.setItem("token", token);
        return token;
      });
    }
  }
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, [token]);
  return (
    <main className="login-wallpaper min-h-screen grid place-content-center ">
      <article className="p-18 px-42 rounded-lg bg-gray-300/50 backdrop-blur-xs shadow-lg">
        <form className="flex flex-col gap-5 w-76">
          <h1 className="text-2xl font-bold">Login</h1>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email:</label>
            <input
              onChange={handleInputChange}
              value={loginDetails.email}
              className="border p-1 px-2 rounded-sm"
              type="text"
              name="email"
              id="email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password:</label>
            <div className="relative">
              <input
                onChange={handleInputChange}
                value={loginDetails.password}
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
            onClick={getData}
          >
            Login
          </button>
        </form>
      </article>
    </main>
  );
};
