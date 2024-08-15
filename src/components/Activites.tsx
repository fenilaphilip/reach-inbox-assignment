import { DUMMY_ACTIVITES } from "../data";
import { IoIosMail } from "react-icons/io";

export default function Activites() {
  return (
    <>
      <h3 className="mt-2 dark:bg-[#1d2126] bg-[#e9e9e9]  text-black dark:text-white rounded-lg py-3 px-4">
        Activities
      </h3>
      <div className="px-6 pe-6 mt-2 mb-2">
        <h6 className="flex  text-black dark:text-white">Campaign Name</h6>
        <div className="my-4 text-sm px-2 text-black dark:text-white">
          3 Steps | 5 Days in Sequence
        </div>
        <div className="flex flex-col my-4 p-2">
          {DUMMY_ACTIVITES.map((data, index) => {
            return (
              <div
                key={index}
                className="my-2 text-black dark:text-white flex flex-row"
              >
                <div className="my-2 mr-2">
                  <IoIosMail size="2em" />
                </div>
                <div>
                  Step {index + 1}: {data.heading}
                  <div className="text-[#212121] text-sm flex items-center ">
                    <data.activityIcon /> {data.activity} {data.timeline}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
