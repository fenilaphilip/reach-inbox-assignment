import { MdExpand } from "react-icons/md";
import { DateFormatter } from "unix-date-formatter/date";

export default function RecentMail({ mail }: any) {
  return (
    <>
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
                {mail["subject"]}
              </div>
              <div className="dark:text-[#AEAEAE] text-[#637381] text-sm">
                from:{mail["fromEmail"]}
              </div>
              <div className="dark:text-[#AEAEAE] text-[#637381] text-sm">
                to: {mail["toEmail"]}
              </div>
            </div>
            <div className="text-sm dark:text-[#7F7F7F] text-[#637381]">
              {new DateFormatter(mail["sentAt"]).formatDateAndTime(
                "Australia/Sydney",
                "en-AU"
              )}
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: `${mail.body}` }} />
        </div>
      </div>
      <div className="py-8 mx-8 relative flex justify-center items-center">
        <div className="h-[2px] w-full bg-[#E0E0E0] dark:bg-[#33383F]"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="dark:bg-[#171819] bg-[#E0E0E0] text-black dark:text-white px-4 py-1 text-sm flex items-center space-x-1">
            <MdExpand className="mr-3 text-xl text-[#AEAEAE]" />
            <span>View all</span>
            <span className="text-[#33383F]"> 4 </span>
            <span>replies</span>
          </div>
        </div>
      </div>
    </>
  );
}
