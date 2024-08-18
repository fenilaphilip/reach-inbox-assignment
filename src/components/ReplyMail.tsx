import { IoMdCloseCircleOutline } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaEye } from "react-icons/fa";

export default function ReplyMail({ onClose }: { onClose: () => void }) {
  return (
    <div className=" mx-5 w-1/2 rounded-lg border border-[#41464B] fixed bottom-0 z-10 bg-slate-50 dark:bg-[#1b1c1d] ">
      <div className="flex justify-between items-center px-4 rounded-t-lg py-2 border-b bg-[#e0dede] border-[#41464B] dark:bg-[#33383F]">
        <div className="pl-4 text-sm">Reply</div>
        <div onClick={() => onClose()}>
          <IoMdCloseCircleOutline className="text-xl cursor-pointer" />
        </div>
      </div>
      <div className="flex text-sm py-2 border-b border-[#41464B] pl-8">
        <div className="text-[#1a1a1a] dark:text-white">To :</div>
        <input
          className="bg-transparent ml-4"
          placeholder="Recipient's Email"
          name="to"
          // value=
          // onChange=
        />
      </div>

      <div className="flex text-sm py-2 border-b border-[#41464B] pl-8">
        <div className="text-[#1a1a1a]  dark:text-white">From :</div>
        <input
          className="bg-transparent ml-4"
          placeholder="Your Email"
          name="from"
          // value=
          // onChange=
        />
      </div>

      <div className="flex text-sm py-2 border-b border-[#41464B] pl-8">
        <div className="text-[#1a1a1a]  dark:text-white">Subject :</div>
        <input
          className="bg-transparent ml-4"
          placeholder="Subject"
          name="subject"
          // value=
          // onChange=
        />
      </div>

      <div className="flex text-sm py-2 border-b border-[#41464B] px-4 pr-8 pt-4 h-80">
        <textarea
          className="bg-transparent ml-4 w-full h-full"
          placeholder="Hello, ..........."
          name="body"
          // value=
          // onChange=
        />
      </div>
      <div className="flex space-x-8 items-center m-2 ml-4 ">
        <div className="bg-gradient-to-r from-[#6d77ad] to-[#011da8fc] w-38 px-5 py-2 rounded-md flex items-center cursor-pointer">
          Send
          <TiArrowSortedDown className="ml-4" />
        </div>
        <div className="flex items-center text-[#2e2d2d] dark:text-[#ADADAD]">
          <AiFillThunderbolt className="mr-3" />
          Variables
        </div>
        <div className="flex items-center text-[#2e2d2d] dark:text-[#ADADAD] ">
          <FaEye className="mr-3" />
          Preview Email
        </div>
      </div>
    </div>
  );
}
