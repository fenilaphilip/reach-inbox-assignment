import { DUMMY_LEADDETAILS } from "../DummyData";

export default function LeadDetails() {
  return (
    <>
      <h3 className="mt-2 dark:bg-[#1d2126] bg-[#e9e9e9]  text-black dark:text-white rounded-lg py-3 px-4">
        Lead Details
      </h3>
      <div className="px-6 pe-6 my-10 space-y-6 dark:text-white text-[#0d0e0f]">
        {Object.entries(DUMMY_LEADDETAILS).map(([key, value]) => {
          return (
            <div className="flex justify-between text-sm" key={key}>
              <div className="p-2">{key}</div>
              <div className="p-2 dark:text-[#B9B9B9]">{value}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
