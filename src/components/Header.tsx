import classes from "./header.module.css";

export default function Header() {
  return (
    <header className={classes.header}>
      <div className="flex flex-wrap ">
        <img src="./LogoImg.png" alt="logo" className="w-full h-16" />
      </div>
    </header>
  );
}
