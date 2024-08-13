import defaultImg from "../assests/defaultImg.svg";

export default function DefaultView() {
  return (
    <div className="h-screen w-screen flex justify-center flex-col dark:text-white text-[#5B5F66] bg-[#ECEFF3] dark:bg-black  items-center">
      <div>
        <img src={defaultImg} alt="An opened mail" />
      </div>
      <div className="text-2xl my-8">
        It’s the beginning of a legendary sales pipeline
      </div>
      <div className="dark:text-[#ffffff] text-[#010101]">
        When you have inbound E-mails you’ll see them here
      </div>
    </div>
  );
}
