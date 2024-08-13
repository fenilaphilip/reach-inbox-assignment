import SideNavbar from "../components/SideNavbar";
import Topbar from "../components/Topbar";
import Inbox from "../components/Inbox";

export default function OneboxList() {
  return (
    <div className="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
      <div className="flex-row w-screen">
        <SideNavbar />
        <div className="flex-col">
          <Topbar />
          <Inbox />
        </div>
      </div>
    </div>
  );
}
