import { AddCredential } from "../components/AddCredential";
import { Credentials } from "../components/Credentials";
import { Navbar } from "../components/Navbar";
export const Dashboard = () => {
  return (
    <main>
      <Navbar />
      <AddCredential />
      <Credentials />
    </main>
  );
};
