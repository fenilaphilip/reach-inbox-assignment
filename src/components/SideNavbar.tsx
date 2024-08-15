import { NAV_ITEMS } from "../data";
import Logo from "../assests/Logo.png";

export default function SideNavbar({
  tabSelected,
}: {
  tabSelected: (path: string) => void;
}) {
  return (
    <div className="flex flex-col justify-between p-4 dark:bg-[#101113] bg-white h-screen w-16  items-center border-r-2 dark:border-[#343A40] border-[#E0E0E0] left-0 top-0 fixed z-10">
      <div>
        <img
          src={Logo}
          className="h-8 rounded-xl object-left overflow-visible ml-3 mb-10"
          alt="Logo"
        />
        <div className="pt-5 text-[#5a5a67]">
          {NAV_ITEMS.map((item) => {
            return (
              <div
                key={item.btnCalled}
                className="text-2xl p-2 m-2 hover:bg-orange-100 rounded-lg"
                title={item.btnCalled}
                onClick={() => tabSelected(item.path)}
              >
                {<item.icon />}
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-white bg-green-800 px-3 py-2 rounded-full">FP</div>
    </div>
  );
}
