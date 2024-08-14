import classes from "./header.module.css";

export default function Header() {
  return (
    <header className={classes.header}>
      <div className="flex flex-wrap mt-40">
        <img
          src="./CompanyName.png"
          alt="companyName"
          className="w-full h-16"
        />
      </div>
    </header>
  );
}
