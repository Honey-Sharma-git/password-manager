import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "../utils/constant";
import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";
import { useDispatch, useSelector } from "react-redux";
import { setDomains } from "../redux/slice/domainsSlice";

export const Credentials = () => {
  const dispatch = useDispatch();
  const domains = useSelector((state) => {
    return state.domains;
  });
  const [userDetails, setUserDetails] = useState({});
  // const [domains, setDomains] = useState([]);

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

  console.log(
    domains.toSorted((a, b) => {
      let x = a.userName.toLowerCase();
      let y = b.userName.toLowerCase();
      if (x > y) {
        return 1;
      }
      if (x < y) {
        return -1;
      }
      return 0;
    })
  );

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
        <table>
          <TableHeader />
          <tbody>{credentialElement}</tbody>
        </table>
      </div>
    </div>
  );
};
