import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//React icons:
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";

//Constants:
import { baseURL } from "../utils/constant.js";

export const Login = () => {
  const navigate = useNavigate();
  const [isShown, setIsShown] = useState(false);
  const [token, setToken] = useState("");
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  function toggleShown() {
    setIsShown((prevState) => {
      return !prevState;
    });
  }

  function handleInputChange(e) {
    setLoginDetails((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  async function getData(e) {
    e.preventDefault();
    const response = await axios.post(`${baseURL}/v1/login`, loginDetails);
    if (response.data.statusCode === 201 && response.status === 200) {
      localStorage.setItem("currUserID", JSON.stringify(response.data.id));
      setToken(() => {
        const token = JSON.stringify(response.data.token);
        localStorage.setItem("token", token);
        return token;
      });
    }
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, [token]);

  return (
    <main className="login-wallpaper min-h-screen flex flex-row items-center justify-center ">
      <article className="p-2 sm:p-5 sm:w-1/2 sm:px-15  md:px-21 rounded-lg bg-gray-300/50 backdrop-blur-sm shadow-lg">
        <form className="flex flex-col gap-3 w-full">
          <div>
            <h1 className="text-4xl font-bold">Log in</h1>
            <p className="tracking-widest text-lg">
              Welcome back!<span className="text-2xl">👋 </span>
            </p>
          </div>
          <div className="flex flex-col gap-1 ">
            <label htmlFor="email">Email:</label>
            <div className="relative">
              <div className="absolute translate-y-[-50%] top-[50%] text-lg left-2 text-[#3b387f]">
                <MdEmail />
              </div>
              <input
                autoFocus
                autoComplete="off"
                placeholder="username@example.com"
                onChange={handleInputChange}
                value={loginDetails.email}
                className="border p-2 px-8 rounded-sm w-full focus:border-[#3b387f] focus:border-2 focus:outline-none"
                type="text"
                name="email"
                id="email"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password:</label>
            <div className="relative">
              <div className="absolute translate-y-[-50%] top-[50%] text-lg left-2 text-[#3b387f]">
                <RiLockPasswordFill />
              </div>
              <input
                onChange={handleInputChange}
                autoComplete="off"
                placeholder="************"
                value={loginDetails.password}
                className="border p-2 px-8 rounded-sm w-full  focus:border-[#3b387f] focus:border-2 focus:outline-none"
                type={isShown ? "text" : "password"}
                name="password"
                id="password"
              />
              <div
                className="absolute top-[50%] right-2 translate-y-[-50%] cursor-pointer text-lg text-[#3b387f]"
                onClick={toggleShown}
              >
                {isShown ? <FaRegEyeSlash /> : <FaRegEye />}
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <input
              className="bg-transparent "
              type="checkbox"
              name="rememberMe"
              id="rememberMe"
              defaultChecked={true}
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <button
            className="bg-[#3b387f] w-[70%] self-center text-white p-1 rounded-sm cursor-pointer shadow-lg hover:bg-[#4c45bb] mt-2"
            type="submit"
            onClick={getData}
          >
            Login
          </button>
          <legend>
            <p className="text-sm text-center">
              Don't have an account? <br />
              <a className="hover:text-[#4c45bb] underline " href="">
                Sign up
              </a>
            </p>
          </legend>
        </form>
        <address className=" mt-5 flex flex-row text-2xl text-[#3b387f] justify-around ">
          <a
            className="hover:text-black hover:shadow-2xl"
            href="https://www.x.com"
            target="_blank"
          >
            <RiTwitterXFill />
          </a>
          <a
            className="hover:text-black hover:shadow-2xl"
            href="https://www.facebook.com"
            target="_blank"
          >
            <FaFacebookF />
          </a>
          <a
            className="hover:text-black hover:shadow-2xl"
            href="https://www.instagram.com"
            target="_blank"
          >
            <FiInstagram />
          </a>
          <a
            className="hover:text-black hover:shadow-2xl"
            href="https://www.linkedin.com"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
        </address>
      </article>
    </main>
  );
};
