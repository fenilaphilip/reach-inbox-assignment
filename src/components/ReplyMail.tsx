import { IoMdCloseCircleOutline } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaEye } from "react-icons/fa";

export default function ReplyMail({ onClose }: { onClose: () => void }) {
  return (
    <div className=" mx-5 w-2/2 h-2/4 rounded-lg border border-[#41464B]">
      <div className="flex justify-between items-center px-4 rounded-t-lg py-2 border-b bg-[#b0b0b0] border-[#41464B]">
        <div className="pl-4 text-sm">Reply</div>
        <div onClick={() => onClose()}>
          <IoMdCloseCircleOutline className="text-xl cursor-pointer" />
        </div>
      </div>
      <div className="flex text-sm py-2 border-b border-[#41464B] pl-8">
        <div className="text-[#1a1a1a]">To :</div>
        <input
          className="bg-transparent ml-4"
          placeholder="Recipient's Email"
          name="to"
          // value=
          // onChange=
        />
      </div>

      <div className="flex text-sm py-2 border-b border-[#41464B] pl-8">
        <div className="text-[#1a1a1a]">From :</div>
        <input
          className="bg-transparent ml-4"
          placeholder="Your Email"
          name="from"
          // value=
          // onChange=
        />
      </div>

      <div className="flex text-sm py-2 border-b border-[#41464B] pl-8">
        <div className="text-[#1a1a1a]">Subject :</div>
        <input
          className="bg-transparent ml-4"
          placeholder="Subject"
          name="subject"
          // value=
          // onChange=
        />
      </div>

      <div className="flex text-sm py-2 border-b border-[#41464B] px-4 pr-8 pt-8 h-2/3">
        <textarea
          className="bg-transparent ml-4 w-full h-full"
          placeholder="Message Body"
          name="body"
          // value=
          // onChange=
        />
      </div>
      <div className="flex space-x-8 items-center m-2 ml-4 ">
        <div className="bg-blue-700 px-5 py-2 rounded-md flex items-center cursor-pointer">
          Send
          <TiArrowSortedDown className="ml-4" />
        </div>
        <div className="flex items-center text-[#ADADAD]">
          <AiFillThunderbolt className="mr-3" />
          Variables
        </div>
        <div className="flex items-center text-[#ADADAD]">
          <FaEye className="mr-3" />
          Preview Email
        </div>
      </div>
    </div>
  );
}
