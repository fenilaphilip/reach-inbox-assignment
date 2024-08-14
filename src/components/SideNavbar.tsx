import NavItem from "./NavItem";

import { CiSearch } from "react-icons/ci";
import { BsFillInboxFill } from "react-icons/bs";
import { TiHome } from "react-icons/ti";
import { IoMdMail } from "react-icons/io";
import { IoIosSend } from "react-icons/io";

export default function SideNavbar({
  tabSelected,
}: {
  tabSelected: (path: string) => void;
}) {
  return (
    <div className="flex flex-col justify-between p-4 dark:bg-[#101113] bg-white h-screen w-14  items-center py-6 border-r-2 dark:border-[#343A40] border-[#E0E0E0] left-0 top-0 fixed z-10">
      <div className="rounded-xl">
        <img
          src="./Logo.png"
          className="h-8 rounded-xl object-left overflow-visible"
          alt="Logo"
        />
      </div>
      <div className="flex flex-col justify-between">
        <NavItem btName="home" path="/" userOpenedTab={tabSelected}>
          <TiHome />
        </NavItem>
        <NavItem btName="search" path="/search" userOpenedTab={tabSelected}>
          <CiSearch />
        </NavItem>
        <NavItem btName="inbox" path="/inbox" userOpenedTab={tabSelected}>
          <IoMdMail />
        </NavItem>
        <NavItem btName="mail" path="/mail" userOpenedTab={tabSelected}>
          <BsFillInboxFill />
        </NavItem>
        <NavItem btName="send" path="/send" userOpenedTab={tabSelected}>
          <IoIosSend />
        </NavItem>
      </div>
      <div className="text-white bg-amber-400 p-2 rounded-full">FP</div>
    </div>
  );
}
