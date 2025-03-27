import axios from "axios";
import { AddCredential } from "../components/AddCredential";
import { Credentials } from "../components/Credentials";
import { Navbar } from "../components/Navbar";
import { ShareDomainModal } from "../components/ShareDomainModal";
import { useSelector } from "react-redux";
import { baseURL } from "../utils/constant";
import { useEffect, useState } from "react";
export const Dashboard = () => {
  const [userList, setUserList] = useState([]);
  const shareDomain = useSelector((state) => {
    return state.showDomainShareModal;
  });

  async function getUserList() {
    try {
      const response = await axios.get(`${baseURL}/v1/userlist`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      if (response.status === 200) {
        setUserList((prev) => {
          return [...response.data.posts];
        });
      }
    } catch (error) {
      console.log("Error in fetching userlist:", error);
    }
  }
  useEffect(() => {
    getUserList();
  }, []);
  return (
    <main className="relative">
      <Navbar />
      {shareDomain && <ShareDomainModal userList={userList} />}
      <AddCredential />
      <Credentials />
    </main>
  );
};
