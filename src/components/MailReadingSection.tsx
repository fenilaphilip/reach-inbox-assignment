import { useState } from "react";

import { VscCircleFilled } from "react-icons/vsc";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

import RecentMail from "./RecentMail";
import ReplyMail from "./ReplyMail";
import LeadDetails from "./LeadDetails";
import Activites from "./Activites";

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
                      className="align-bottom px-5 py-2 text-sm font-bold tracking-wide text-white bg-blue-700 rounded-full focus:outline-none"
                      onClick={replyButtonhandler}
                    >
                      Reply
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="bg-white dark:bg-black dark:border-[#202124] border-[#ebe9e9] overflow-y-scroll no-scrollbar px-2 border-l-2 h-full">
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
    <header className="border-b-2 dark:border-[#33383F] border-[#E0E0E0] w-full flex justify-between px-8 py-4">
      <div>
        <div className="dark:text-white text-black text-lg">Orlando</div>
        <div className="dark:text-[#FFFFFF66] text-[#343A40B2] text-sm">
          orladom@gmail.com
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <div className="flex dark:bg-[#1F1F1F] bg-white border dark:border-[#343A40] items-center text-black dark:text-white rounded-md py-2 px-3 text-sm">
          <VscCircleFilled className="text-orange-500 text-xl" />
          Meeting Completed
          <RiArrowDropDownLine className="ml-2" size="2em" />
        </div>
        <div
          id="dropdownMoveButton"
          data-dropdown-toggle="dropdown"
          className="dark:bg-[#1F1F1F] flex items-center text-black dark:text-white border bg-white dark:border-[#343A40] rounded-md py-2 px-3 text-sm"
        >
          Move <RiArrowDropDownLine className="ml-2" size="2em" />
        </div>
        <div
          id="dropdown"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownMoveButton"
          >
            <li>
              <a
                href="https://"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Mark as unread
              </a>
            </li>
            <li>
              <a
                href="https://"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Edit Lead
              </a>
            </li>
            <li>
              <a
                href="https://"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Remove Lead
              </a>
            </li>{" "}
            <li>
              <a
                href="https://"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Set reminder
              </a>
            </li>{" "}
            <li>
              <a
                href="https://"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Delete
              </a>
            </li>
          </ul>
        </div>
        <div className="dark:bg-[#1F1F1F] border bg-white text-black dark:text-white  dark:border-[#343A40] rounded-md py-2 px-3 text-sm">
          <GiHamburgerMenu />
        </div>
      </div>
    </header>
  );
}
