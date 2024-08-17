import { useState } from "react";

import { VscCircleFilled } from "react-icons/vsc";
import { SlArrowDown } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiReplyFill } from "react-icons/ri";

import RecentMail from "./RecentMail";
import ReplyMail from "./ReplyMail";
import LeadDetails from "./LeadDetails";
import Activites from "./Activites";
import MoveMenu from "./MoveMenu";

export default function MailReadingSection({ mail }: any) {
  const [showReplyPopUp, setShowReplyPopUp] = useState(false);

  function replyButtonhandler() {
    setShowReplyPopUp((prev) => !prev);
  }

  return (
    <>
      {mail ? (
        <>
          <div className="flex-grow">
            <div className="overflow-y-scroll no-scrollbar  h-full">
              <Headerbar />
              <RecentMail mail={mail} />
              {showReplyPopUp ? (
                <ReplyMail onClose={replyButtonhandler} />
              ) : (
                <div className="flex flex-col justify-between min-h-screen p-5">
                  <div className="flex items-end align-bottom justify-between">
                    <button
                      className="bg-gradient-to-r from-[#6d77ad] to-[#011da8fc] px-5 py-2 rounded-md flex  justify-center items-center cursor-pointer w-38 text-xl text-white"
                      onClick={replyButtonhandler}
                    >
                      <RiReplyFill size="1em" />
                      Reply
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="bg-white dark:bg-stone-950 dark:border-[#202124] border-[#ebe9e9] overflow-y-scroll no-scrollbar px-2 border-l-2 h-full">
              <LeadDetails />
              <Activites />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

function Headerbar() {
  return (
    <div className="border-b-2 dark:border-[#33383F] border-[#E0E0E0] w-full flex justify-between px-8 py-4 bg-white dark:bg-stone-950">
      <div>
        <div className="dark:text-white text-black text-lg">Orlando</div>
        <div className="dark:text-[#FFFFFF66] text-[#343A40B2] text-sm">
          orladom@gmail.com
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <div className="flex dark:bg-[#1F1F1F] bg-white border dark:border-[#343A40] items-center text-black dark:text-white rounded-md py-1 px-3 text-sm">
          <VscCircleFilled className="text-orange-500 text-xl mr-2" />
          Meeting Completed
          <SlArrowDown className="ml-2" />
        </div>
        <MoveMenu />
        <div className="dark:bg-[#1F1F1F] border bg-white text-black dark:text-white  dark:border-[#343A40] rounded-md pt-2 pb-3 px-3 text-sm">
          <GiHamburgerMenu />
        </div>
      </div>
    </div>
  );
}
