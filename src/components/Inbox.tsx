import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbReload } from "react-icons/tb";
import MailReadingSection from "./MailReadingSection";
import axios from "axios";
import { useLocation } from "react-router-dom";
import LoadMails from "./LoadMails";

const url: string = process.env.REACT_APP_API_BASE_URL ?? "";
const list_all_path = "/onebox/list";

export default function Inbox() {
  const [fetchedData, setFetchedData] = useState([]);
  const [currentMail, setCurrentMail] = useState();

  const search = useLocation().search;
  const token = new URLSearchParams(search).get("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  useEffect(() => {
    axios.get(url + list_all_path).then((response) => {
      setFetchedData(response.data.data);
      console.log(`Fetched data is ${JSON.stringify(response.data.data)}`);
      setCurrentMail(response.data.data[0]);
    });
  }, []);

  function showSelectedMail(id: number) {
    const currentEmail = Object.values(fetchedData).find(
      (mail) => mail["threadId"] === id
    );
    setCurrentMail(currentEmail);
    console.log("currentmail ", currentMail);
  }

  return (
    <div className="flex flex-row mt-16 ml-12 h-screen dark:bg-[#1d2126] bg-[#e9e9e9]  text-black dark:text-white ">
      <div className="border-r-2 border-[#e0dfdf] h-full overflow-y-scroll no-scrollbar  bg-slate-50 dark:bg-gray-950 dark:border-[#373636]">
        <InboxHeader />
        {fetchedData &&
          fetchedData.map((email: any) => (
            <LoadMails
              key={email.id}
              threadId={email.threadId}
              fromEmail={email.fromEmail}
              subject={email.subject}
              userSelectedMail={showSelectedMail}
            />
          ))}
      </div>
      <MailReadingSection mail={currentMail} />
    </div>
  );
}

function InboxHeader() {
  return (
    <>
      <div className="px-4 pt-4 ml-4 flex justify-between">
        <div>
          <div className="text-2xl text-blue-700 font-semibold">
            All Inbox(s)
          </div>
          <div className="dark:text-[#7a7878] text-[#7a7878] font-normal">
            Inboxes selected
          </div>
        </div>
        <div className="w-8 p-2 m-3  bg-white border-gray-200 dark:bg-slate-500 mr-4 rounded-lg cursor-pointer">
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
          <div className="dark:text-white text-black ">
            <span className="dark:bg-[#1e2022] bg-[#c1bebe] text-blue-800 px-2 py-1  rounded-3xl">
              28
            </span>
            <span className="ml-2"> New Replies</span>
          </div>
          <div className="flex items-center dark:text-white text-black ">
            Newest <RiArrowDropDownLine className="ml-3 text-xl" />
          </div>
        </div>
      </div>
    </>
  );
}
