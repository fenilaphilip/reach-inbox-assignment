import { SlArrowDown } from "react-icons/sl";

export default function MoveMenu() {
  return (
    <>
      <div className="dark:bg-[#1F1F1F] flex items-center text-black dark:text-white border bg-white dark:border-[#343A40] rounded-md py-2 px-3 text-sm">
        Move <SlArrowDown className=" ml-2" />
      </div>
    </>
  );
}
