import { VscCircleFilled } from "react-icons/vsc";
import { IoIosSend } from "react-icons/io";

type mailProps = {
  fromEmail: string;
  subject: string;
  threadId: number;
  userSelectedMail: (id: number) => void;
};

export default function LoadMails({
  threadId,
  fromEmail,
  subject,
  userSelectedMail,
}: mailProps) {
  const mailSubject = (subject: string, wordCount: number) => {
    const words = subject.split(" ");
    if (words.length > wordCount) {
      return words.slice(0, wordCount).join(" ") + " ...";
    }
    return subject;
  };

  return (
    <div className="border-t-2 dark:border-[#ffffff25] border-[#8b8b8b64] mx-8 py-4 cursor-pointer">
      <div onClick={() => userSelectedMail(threadId)}>
        <div className="flex justify-between">
          <div className="dark:text-white text-black text-lg font-normal">
            {fromEmail}
          </div>
          <div className="dark:text-[#FCFCFC66] text-[#919EAB] font-thin pr-3">
            Mar 7
          </div>
        </div>
        <div className="py-2 dark:text-[#E1E0E0] text-gray-600 font-normal">
          {mailSubject(subject, 8)}
        </div>
        <div className="flex">
          <div className="dark:bg-[#222426] bg-[#F0F0F0] px-3 py-1 rounded-2xl text-[#57E0A6] text-sm flex items-center">
            <VscCircleFilled className="mr-1 text-lg" />
            Interested
          </div>
          <div className=" flex items-center dark:bg-[#222426] bg-[#F0F0F0] px-3 py-1 rounded-2xl dark:text-[#FFFFFF] text-black text-sm ml-2">
            <IoIosSend className="mr-1 text-lg" />
            Campaign Name
          </div>
        </div>
      </div>
    </div>
  );
}
