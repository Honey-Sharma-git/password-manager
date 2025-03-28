import { FaShareAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdUpdate } from "react-icons/md";
import { Password } from "./Password";
import { baseURL } from "../utils/constant";
import axios from "axios";
import { addCredential } from "../redux/slice/addCredentialSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { showDomainShareModal } from "../redux/slice/shareDomainModalSlice";
import { shareDomainID } from "../redux/slice/shareDomainModalSlice";

export const TableBody = ({ item, index }) => {
  const [isShareDomainShown, setIsShareDomainShown] = useState(false);
  const dispatch = useDispatch();
  async function deleteDomain(itemID) {
    const answer = window.confirm("Do you really want to delete?");
    if (answer) {
      const response = await axios.post(
        `${baseURL}/v1/deleteDomain`,
        { id: itemID },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );
      dispatch(addCredential());
    }
  }
  async function updatePassword(itemID) {
    try {
      const answer = confirm("Do you wish to update password?");
      if (answer) {
        const response = await axios.post(
          `${baseURL}/v1/changeDomain`,
          {
            id: itemID,
            password: nanoid(),
          },
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(
                localStorage.getItem("token")
              )}`,
            },
          }
        );
        if (response.status === 200) {
          dispatch(addCredential());
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  function shareDomain(domainID) {
    setIsShareDomainShown((prev) => {
      return !prev;
    });
    dispatch(showDomainShareModal());
    dispatch(shareDomainID(domainID));
  }

  return (
    <tr key={item._id}>
      <td className="text-left border py-2 px-2 text-black ">{index}</td>
      <td className="text-left border py-2 px-2 text-black ">
        {item.userName}
      </td>
      <td className="text-left border py-2 px-2 text-black ">
        <Password item={item} />
      </td>
      <td className="text-left border py-2 px-2 text-black ">
        <a
          className="text-black hover:text-blue-800 underline
"
          href={item.domain}
        >
          {item.domain}
        </a>
      </td>
      <td className=" border items-center  text-2xl text-center py-2 px-2 text-black ">
        <div className="flex flex-row justify-evenly">
          <button
            onClick={() => {
              shareDomain(item._id);
            }}
          >
            <FaShareAlt className="hover:text-[var(--theme-secondary-hover-color)] text-[var(--theme-secondary-color)] cursor-pointer" />
          </button>
          <button
            onClick={() => {
              deleteDomain(item._id);
            }}
          >
            <MdDelete className="hover:text-[var(--theme-secondary-hover-color)] text-[var(--theme-secondary-color)] cursor-pointer" />
          </button>
          <button
            onClick={() => {
              updatePassword(item._id);
            }}
          >
            <MdUpdate className="hover:text-[var(--theme-secondary-hover-color)] text-[var(--theme-secondary-color)] cursor-pointer" />
          </button>
        </div>
      </td>
    </tr>
  );
};
