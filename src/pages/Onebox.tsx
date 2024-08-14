import { useState } from "react";

import SideNavbar from "../components/SideNavbar";
import Topbar from "../components/Topbar";
import Inbox from "../components/Inbox";
import DefaultView from "../components/DefaultView";

export default function OneboxList() {
  const [view, setView] = useState("");

  return (
    <div className="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
      <div className="flex-row w-screen">
        <SideNavbar tabSelected={setView} />
        <div className="flex-col">
          <Topbar />
          {view === "" && <DefaultView />}
          {view === "/" && <DefaultView />}
          {view === "/search" && <DefaultView />}
          {view === "/mail" && <DefaultView />}
          {view === "/inbox" && <Inbox />}
          {view === "/send" && <DefaultView />}
        </div>
      </div>
    </div>
  );
}
