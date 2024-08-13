import { ReactNode, useState } from "react";

type NavItemProps = {
  btName: string;
  path: string;
  children?: ReactNode;
};

export default function NavItem({ btName, path, children }: NavItemProps) {
  const [userSelected, setUserSelected] = useState("/");
  const [cssStyle, setCssStyle] = useState("");

  function handleClick(btName: string, path: string) {
    setUserSelected(path);
    setCssStyle("hover:bg-orange-100");
  }

  console.log(userSelected);

  return (
    <div className="text-2xl p-2 m-2 hover:bg-orange-100  rounded-lg">
      <div className={`${cssStyle}`} onClick={() => handleClick(btName, path)}>
        {children}
      </div>
    </div>
  );
}
