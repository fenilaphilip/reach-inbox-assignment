import Togglebutton from "./Togglebutton";
import WorkspaceDropdown from "./WorkspaceDropdown";

export default function Topbar() {
  return (
    <div className="h-16 w-screen fixed px-14 mx-4 top-0 flex justify-between items-center border-b-2  dark:border-indigo-800">
      <div className="text-bold font-semibold text-2xl">Onebox</div>
      <div className=" rounded-md flex justify-items-end text-xl gap-2 me-4">
        <Togglebutton />
        <WorkspaceDropdown />
      </div>
    </div>
  );
}
