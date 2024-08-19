import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { MdExpand } from "react-icons/md";
import { DateFormatter } from "unix-date-formatter/date";
import OneboxApi, { Mail } from "../OneboxAPI";

export default function RecentMail({ mail }: any) {
  const [showAllReply, setShowAllReply] = useState(false);
  const [allReplies, setAllreplies] = useState<Array<Mail>>([]);

  const search = useLocation().search;
  const token = new URLSearchParams(search).get("token");

  useEffect(() => {
    const oneBoxApi = new OneboxApi(token);
    async function loadReplies() {
      setAllreplies(await oneBoxApi.getAllReplies(mail.threadId));
    }
    setShowAllReply(false);

    loadReplies();
  }, [mail, token]);

  function viewReplyBtnHandler(id: number) {
    setShowAllReply(!showAllReply);
  }

  return (
    <>
      {!showAllReply && (
        <Message
          when={mail.sentAt}
          subject={mail.subject}
          fromWho={mail.fromEmail}
          toWhom={mail.toEmail}
          sentAt={mail.sentAt}
          message={mail.body}
        />
      )}

      {showAllReply && (
        <>
          {allReplies.map((message) => {
            return (
              <Message
                when={message.sentAt}
                subject={message.subject}
                fromWho={message.fromEmail}
                toWhom={message.toEmail}
                sentAt={message.sentAt}
                message={message.body}
              />
            );
          })}
        </>
      )}

      {allReplies.length >= 2 && (
        <div className="py-8 mx-8 relative flex justify-center items-center">
          <div className="h-[2px] w-full bg-[#E0E0E0] dark:bg-[#33383F]"></div>
          <div className="absolute flex justify-center items-center">
            <div
              onClick={() => viewReplyBtnHandler(mail.threadId)}
              className="dark:bg-[#171819] bg-[#e9e8e8] text-black dark:text-white px-4 py-1 text-sm flex items-center space-x-1"
            >
              <MdExpand className="mr-3 text-xl text-[#726f6f]" />
              {!showAllReply ? (
                <>
                  <span>View all</span>
                  <span className="text-blue-800 text-sm mx-2 font-bold">
                    {allReplies.length}
                  </span>
                  <span>replies</span>
                </>
              ) : (
                <div>See less replies</div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

type messageProps = {
  when: string;
  subject: string;
  fromWho: string;
  toWhom: string;
  sentAt: string;
  message: string;
};
function Message({
  when,
  subject,
  fromWho,
  toWhom,
  sentAt,
  message,
}: messageProps) {
  return (
    <div className="flex flex-col-reverse">
      <div className="dark:bg-[#141517] bg-[#ebe8e8fb] border border-[#d7d4d4da] dark:border-[#343A40] mx-8 rounded-md my-3">
        <div className="p-4">
          <div className="flex justify-between py-4">
            <div className="space-y-2">
              <div className="font-bold dark:text-white text-black ">
                {subject}
              </div>
              <div className="dark:text-[#AEAEAE] text-[#637381] text-sm">
                from:{fromWho}
              </div>
              <div className="dark:text-[#AEAEAE] text-[#637381] text-sm">
                to: {toWhom}
              </div>
            </div>
            <div className="text-sm dark:text-[#7F7F7F] text-[#637381]">
              {new DateFormatter(sentAt).formatDateAndTime(
                "Asia/Kolkata",
                "en-IN"
              )}
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: `${message}` }} />
        </div>
      </div>
      <div className="py-8 mx-8 relative flex justify-center items-center">
        <div className="h-[2px] w-full dark:bg-[#26282b] bg-[#d7d4d4da]"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="dark:bg-[#171819] bg-[#d1d1d1]  px-4 py-1 text-sm text-black dark:text-white">
            {new DateFormatter(sentAt).formatDateAndTime(
              "Asia/Kolkata",
              "en-IN"
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
