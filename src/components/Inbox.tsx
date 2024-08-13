import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbReload } from "react-icons/tb";
import MailReadingSection from "./MailReadingSection";

export default function Inbox() {
  return (
    <div className="flex flex-row mt-16 ml-12">
      <div className="border-r-2 h-full overflow-y-scroll no-scrollbar">
        <div className="px-4 pt-4 flex justify-between">
          <div className="px-4 ">
            <div className="text-2xl py-3 font-semibold flex items-center">
              All Inbox(s)
            </div>
            <div className="dark:text-white text-black font-bold">
              <span className="text-[#7a7878] font-normal">
                Inboxes selected
              </span>
            </div>
          </div>
          <div className="p-3 mt-3 dark:bg-[#202122] bg-white border border-gray-200 dark:border-gray-800 mr-4 rounded-xl h-min cursor-pointer">
            <TbReload className="text-black dark:text-white" />
          </div>
        </div>
        <div className="my-4 px-8">
          <div className="relative">
            <input
              placeholder=" Search"
              className="w-full dark:bg-[#1d2126] bg-[#e9e9e9] rounded-md p-1 pl-8 border dark:border-[#ffffff62] border-[#d6d6d6ec]"
            />
            <CiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
          <div className="flex justify-between py-4">
            <div className="dark:text-white text-black">
              <span className="dark:bg-[#1e2022] bg-[#fffcfc] text-[#131c3e] px-2 py-1 rounded-3xl"></span>
              New Replies
            </div>
            <div className="flex items-center dark:text-white text-black ">
              Newest <RiArrowDropDownLine className="ml-3 text-xl" />
            </div>
          </div>
        </div>
      </div>

      <MailReadingSection />
    </div>
  );
}
