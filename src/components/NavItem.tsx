import { ReactNode } from "react";

type NavItemProps = {
  btName: string;
  path: string;
  userOpenedTab: (path: string) => void;
  children?: ReactNode;
};

export default function NavItem({
  btName,
  path,
  children,
  userOpenedTab,
}: NavItemProps) {
  return (
    <div
      className="text-2xl p-2 m-2 hover:bg-orange-100  rounded-lg"
      title={btName}
      onClick={() => userOpenedTab(path)}
    >
      {children}
    </div>
  );
}
