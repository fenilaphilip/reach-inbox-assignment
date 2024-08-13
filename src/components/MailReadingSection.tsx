import LeadDetails from "./LeadDetails";
import Activites from "./Activites";

export default function MailReadingSection() {
  return (
    <>
      <div className="flex-grow">Hello world </div>
      <div>
        <div className="bg-white dark:bg-black dark:border-[#33383F] border-[#E0E0E0] h-full overflow-y-scroll no-scrollbar px-2 border-l-2">
          <LeadDetails />
          <Activites />
        </div>
      </div>
    </>
  );
}
