import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "../utils/constant";
import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";
import { useDispatch, useSelector } from "react-redux";
import { setDomains } from "../redux/slice/domainsSlice";
import { FaSearch } from "react-icons/fa";
export const Credentials = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const domains = useSelector((state) => {
    return state.domains;
  });
  const data = useSelector((state) => {
    return state.addCredential;
  });

  const getData = async () => {
    const response = await axios.get(`${baseURL}/v1/userDomains`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    if (response.status === 200 && response.data.statusCode === 200) {
      dispatch(setDomains([...response.data.posts[0].domains]));
    }
  };

  useEffect(() => {
    getData();
  }, [data]);

  function searchUserName(searchQuery) {
    // const searchQuery = "honey";
    if (!searchQuery) {
      getData();
    } else {
      dispatch(
        setDomains([
          ...domains.filter((item) => {
            if (
              item.userName.toLowerCase().includes(searchQuery.toLowerCase())
            ) {
              return true;
            }
          }),
        ])
      );
    }
  }

  const credentialElement = domains.map((item, index) => {
    return <TableBody key={item._id} item={item} index={index} />;
  });

  return (
    <div
      className={
        "flex flex-row justify-center mx-5  border rounded-lg shadow-lg "
      }
    >
      <div className="overflow-y-auto h-82 relative w-full  flex flex-col items-stretch">
        <div className="relative rounded-lg">
          <div className="absolute text-2xl  top-1/2 -translate-y-1/2 pl-2">
            <FaSearch />
          </div>
          <input
            className="p-2 w-full pl-10 rounded-lg"
            type="search"
            placeholder="Search usernames"
            onChange={(e) => {
              setSearchQuery(e.target.value);
              searchUserName(e.target.value);
            }}
          />
        </div>
        <table>
          <TableHeader domains={domains} />
          <tbody>{credentialElement}</tbody>
        </table>
      </div>
    </div>
  );
};
