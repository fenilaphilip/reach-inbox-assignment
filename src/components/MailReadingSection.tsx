import { VscCircleFilled } from "react-icons/vsc";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

import LeadDetails from "./LeadDetails";
import Activites from "./Activites";

export default function MailReadingSection({ mail }: any) {
  return (
    <>
      {mail ? (
        <>
          <div className="flex-grow">
            <div className="overflow-y-scroll no-scrollbar  h-full">
              <header className="border-b-2 dark:border-[#33383F] border-[#E0E0E0] w-full flex justify-between px-8 py-4">
                <div>
                  <div className="dark:text-white text-black text-lg">
                    Orlando
                  </div>
                  <div className="dark:text-[#FFFFFF66] text-[#343A40B2] text-sm">
                    orladom@gmail.com
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex dark:bg-[#1F1F1F] bg-white border dark:border-[#343A40] items-center text-black dark:text-white rounded-md py-2 px-3 text-sm">
                    <VscCircleFilled className="text-orange-500 text-xl" />{" "}
                    Meeting Completed{" "}
                    <RiArrowDropDownLine className="ml-2" size="2em" />
                  </div>
                  <div className="dark:bg-[#1F1F1F] flex items-center text-black dark:text-white border bg-white dark:border-[#343A40] rounded-md py-2 px-3 text-sm">
                    Move <RiArrowDropDownLine className="ml-2" size="2em" />
                  </div>
                  <div className="dark:bg-[#1F1F1F] border bg-white text-black dark:text-white  dark:border-[#343A40] rounded-md py-2 px-3 text-sm">
                    <GiHamburgerMenu />
                  </div>
                </div>
              </header>
              <div className="py-8 mx-8 relative flex justify-center items-center">
                <div className="h-[2px] w-full dark:bg-[#26282b] bg-[#d7d4d4da]"></div>
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="dark:bg-[#171819] bg-[#d1d1d1]  px-4 py-1 text-sm text-black dark:text-white">
                    Today
                  </div>
                </div>
              </div>
              <div className="dark:bg-[#141517] bg-[#ebe8e8fb] border border-[#d7d4d4da] dark:border-[#343A40] mx-8 rounded-md my-3">
                <div className="p-4">
                  <div className="flex justify-between py-4">
                    <div className="space-y-2">
                      <div className="font-bold dark:text-white text-black ">
                        {mail.subject}
                      </div>
                      <div className="dark:text-[#AEAEAE] text-[#637381] text-sm">
                        from:{mail.fromEmail}
                      </div>
                      <div className="dark:text-[#AEAEAE] text-[#637381] text-sm">
                        to: {mail.toEmail}
                      </div>
                    </div>
                    <div className="text-sm dark:text-[#7F7F7F] text-[#637381]">
                      20 june 2022 : 9:16AM
                    </div>
                  </div>
                  <div>{mail.body.replace(/<[^>]+>/g, "")}</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white dark:bg-black dark:border-[#202124] border-[#ebe9e9] h-full overflow-y-scroll no-scrollbar px-2 border-l-2">
              <LeadDetails />
              <Activites />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
