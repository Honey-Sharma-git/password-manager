import { AddCredential } from "../components/AddCredential";
import { Credentials } from "../components/Credentials";
import { Navbar } from "../components/Navbar";
import { ShareDomainModal } from "../components/ShareDomainModal";
import { useSelector } from "react-redux";
export const Dashboard = () => {
  const shareDomain = useSelector((state) => {
    return state.showDomainShareModal;
  });
  return (
    <main>
      <Navbar />
      {shareDomain && <ShareDomainModal />}
      <AddCredential />
      <Credentials />
    </main>
  );
};
