import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [isShown, setIsShown] = useState(false);
  const navigate = useNavigate();
  function toggleShown() {
    setIsShown((prev) => {
      return !prev;
    });
  }
  function logout() {
    localStorage.removeItem("token");
    navigate("/");
  }
  return (
    <header className="flex flex-row justify-end p-2 relative">
      <nav>
        <button
          onClick={toggleShown}
          className="cursor-pointer hover:underline hover:font-bold"
        >
          My Account
        </button>
      </nav>

      {isShown && (
        <div className="absolute top-10 bg-amber-300 p-5 flex flex-col gap-5">
          <p>
            <span>User:</span> <span>usernotfound</span>
          </p>
          <p>
            <span>Status:</span> <span>Online</span>
          </p>
          <button
            onClick={logout}
            className="cursor-pointer bg-black text-white p-1 rounded-lg"
          >
            Log out
          </button>
        </div>
      )}
    </header>
  );
};
