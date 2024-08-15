import ThemeToggle from "./ThemeToggle";
import Workspace from "./Workspace";

export default function Topbar() {
  return (
    <div className="h-16 w-screen fixed pl-14 pr-10 ml-4 top-0 flex justify-between items-center bg-white  dark:bg-[#1F1F1F]  text-[#5B5F66] dark:text-white border-b-2  border-[#E0E0E0]  dark:border-[#343A40]">
      <div className="text-bold font-semibold text-2xl">Onebox</div>
      <div className="flex justify-items-end">
        <ThemeToggle />
        <Workspace />
      </div>
    </div>
  );
}
