import { useState } from "react";

import SideNavbar from "../components/SideNavbar";
import Topbar from "../components/Topbar";
import Inbox from "../components/Inbox";
import DefaultView from "../components/DefaultView";

export default function OneboxList() {
  const [view, setView] = useState("");

  return (
    <>
      <Topbar />
      <SideNavbar tabSelected={setView} />
      {view === "" && <DefaultView />}
      {view === "/" && <DefaultView />}
      {view === "/search" && <DefaultView />}
      {view === "/mail" && <Inbox />}
      {view === "/inbox" && <Inbox />}
      {view === "/send" && <Inbox />}
      {view === "/categories" && <DefaultView />}
      {view === "/usage" && <DefaultView />}
    </>
  );
}
