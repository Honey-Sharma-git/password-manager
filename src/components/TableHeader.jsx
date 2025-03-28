import { useState } from "react";
import { HiOutlineSortAscending } from "react-icons/hi";
import { HiOutlineSortDescending } from "react-icons/hi";
export const TableHeader = () => {
  const [isSort, setIsSort] = useState(false);
  function toggleSort() {
    setIsSort((prev) => {
      return !prev;
    });
  }
  return (
    <thead className="sticky top-0 bg-[#4c45bb] text-white z-10">
      <tr>
        <th
          onClick={toggleSort}
          className="px-4 py-1 text-left border cursor-pointer hover:bg-[#3b387f]"
        >
          <div className="flex flex-row items-center justify-between">
            <span> Index</span>
            <span>
              {isSort ? (
                <HiOutlineSortAscending />
              ) : (
                <HiOutlineSortDescending />
              )}
            </span>
          </div>
        </th>
        <th
          onClick={() => {
            toggleSort();
          }}
          className="px-4 py-1 text-left border cursor-pointer hover:bg-[#3b387f]"
        >
          <div className="flex flex-row items-center justify-between">
            <span> User Name</span>
            <span>
              {isSort ? (
                <HiOutlineSortAscending />
              ) : (
                <HiOutlineSortDescending />
              )}
            </span>
          </div>
        </th>
        <th
          onClick={toggleSort}
          className="px-4 py-1 text-left border cursor-pointer hover:bg-[#3b387f]"
        >
          <div className="flex flex-row items-center justify-between">
            <span> Password</span>
            <span>
              {isSort ? (
                <HiOutlineSortAscending />
              ) : (
                <HiOutlineSortDescending />
              )}
            </span>
          </div>
        </th>
        <th
          onClick={toggleSort}
          className="px-4 py-1 text-left border cursor-pointer hover:bg-[#3b387f]"
        >
          <div className="flex flex-row items-center justify-between">
            <span> Domains</span>
            <span>
              {isSort ? (
                <HiOutlineSortAscending />
              ) : (
                <HiOutlineSortDescending />
              )}
            </span>
          </div>
        </th>
        <th
          onClick={toggleSort}
          className="px-4 py-1 text-left border cursor-pointer hover:bg-[#3b387f]"
        >
          <div className="flex flex-row items-center justify-between">
            <span> Actions</span>
            <span>
              {isSort ? (
                <HiOutlineSortAscending />
              ) : (
                <HiOutlineSortDescending />
              )}
            </span>
          </div>
        </th>
      </tr>
    </thead>
  );
};
