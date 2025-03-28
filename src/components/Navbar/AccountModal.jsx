export const AccountModal = ({ changePassword, logout, currLoggedInUser }) => {
  return (
    <div
      className="absolute top-11 right-5  flex flex-col gap-5 rounded-lg w-62 z-50 p-5 bg-white/90 backdrop-blur-lg shadow-lg
                "
    >
      <h3 className="font-bold text-2xl">Account details</h3>
      <p className="flex flex-row flex-wrap gap-3 justify-start hover:bg-gray-200 p-1">
        <span className="w-12 font-bold">User:</span>
        <span>{currLoggedInUser.name}</span>
      </p>
      <p className="flex flex-row flex-wrap gap-3 justify-start hover:bg-gray-200 p-1">
        <span className="w-12 font-bold">Email:</span>
        <span>{currLoggedInUser.email}</span>
      </p>
      <button
        onClick={changePassword}
        className="  
                    bg-[var(--theme-primary-color)] w-full self-center text-white p-1 rounded-sm cursor-pointer shadow-lg hover:bg-[var(--theme-primary-hover-color)] mt-2
                    "
      >
        Change password
      </button>
      <button
        onClick={logout}
        className="cursor-pointer bg-[var(--theme-secondary-color)] text-white p-1 rounded-lg hover:bg-[var(--theme-secondary-hover-color)]"
      >
        Log out
      </button>
    </div>
  );
};
