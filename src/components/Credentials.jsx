import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "../utils/constant";
import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";

export const Credentials = () => {
  const [userDetails, setUserDetails] = useState({});
  const [domains, setDomains] = useState([]);

  const credentialData = useSelector((state) => {
    return state.addCredential;
  });

  async function getData() {
    const response = await axios.get(`${baseURL}/v1/userDomains`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    if (response.status === 200 && response.data.statusCode === 200) {
      setDomains(response.data.posts[0].domains);
    }
  }

  useEffect(() => {
    getData();
  }, [domains]);

  const credentialElement = domains.map((item, index) => {
    return <TableBody item={item} index={index} />;
  });

  return (
    <div
      className={
        "flex flex-row justify-center mx-5  border rounded-lg shadow-lg "
      }
    >
      <div className="overflow-y-auto h-82 relative w-full  flex flex-col items-stretch">
        <table>
          <TableHeader />
          <tbody>{credentialElement}</tbody>
        </table>
      </div>
    </div>
  );
};
