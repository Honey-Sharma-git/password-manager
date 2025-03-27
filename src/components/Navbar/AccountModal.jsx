export const AccountModal = ({ changePassword, logout }) => {
  return (
    <div
      className="absolute top-11 right-5  flex flex-col gap-5 rounded-lg w-62 z-50 p-5 bg-gray-100/80 backdrop-blur-3xl shadow-lg
                "
    >
      <h3 className="font-bold text-2xl">Account details</h3>
      <p className="flex flex-row flex-wrap gap-3 justify-start hover:bg-gray-200 p-1">
        <span className="w-12 font-bold">User:</span>
        <span>Virat Kholi</span>
      </p>
      <p className="flex flex-row flex-wrap gap-3 justify-start hover:bg-gray-200 p-1">
        <span className="w-12 font-bold">Email:</span>
        <span>virat@gmail.com</span>
      </p>
      <button
        onClick={changePassword}
        className="  
                    bg-[#3b387f] w-full self-center text-white p-1 rounded-sm cursor-pointer shadow-lg hover:bg-[#4c45bb] mt-2
                    "
      >
        Change password
      </button>
      <button
        onClick={logout}
        className="cursor-pointer bg-black text-white p-1 rounded-lg hover:bg-gray-700"
      >
        Log out
      </button>
    </div>
  );
};
