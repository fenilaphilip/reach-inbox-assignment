import { RiUserSearchFill } from "react-icons/ri";
import { BsFillInboxFill } from "react-icons/bs";
import { TiHome } from "react-icons/ti";
import { IoMdMail } from "react-icons/io";
import { FaThList } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { MdBarChart } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { IoIosMailOpen } from "react-icons/io";

export const NAV_ITEMS = [
    {
        btnCalled: "home",
        path: "/",
        icon: TiHome,
    },
    {
        btnCalled: "search",
        path: "/search",
        icon: RiUserSearchFill,
    },
    {
        btnCalled: "new mail",
        path: "/mail",
        icon: IoMdMail,
    },
    {
        btnCalled: "send mail",
        path: "/send",
        icon: IoIosSend,
    },
    {
        btnCalled: "categories",
        path: "/categories",
        icon: FaThList,
    },

    {
        btnCalled: "inbox",
        path: "/inbox",
        icon: BsFillInboxFill,
    },
    {
        btnCalled: "usage",
        path: "/usage",
        icon: MdBarChart,
    },

]


export const DUMMY_LEADDETAILS = {
    Name: "Orlando",
    "Contact No": "+54-9062827869",
    "Email ID": "orlando@gmail.com",
    Linkedin: "linkedin.com/in/timvadde/",
    "Company Name": "Reachinbox",
};

export const DUMMY_ACTIVITES = [
    {
        heading: "Email",
        activityIcon: FiSend,
        activity: "Sent",
        timeline: "3rd, Feb",
    },
    {
        heading: "Email",
        activityIcon: IoIosMailOpen,
        activity: "Opened",
        timeline: "5rd, Feb",
    },
    {
        heading: "Email",
        activityIcon: IoIosMailOpen,
        activity: "Opened",
        timeline: "5rd, Feb",
    },
    {
        heading: "Email",
        activityIcon: FiSend,
        activity: "Sent",
        timeline: "7rd, Feb",
    },
    {
        heading: "Email",
        activityIcon: IoIosMailOpen,
        activity: "Opened",
        timeline: "8rd, Feb",
    },
    {
        heading: "Email",
        activityIcon: IoIosMailOpen,
        activity: "Opened",
        timeline: "9rd, Feb",
    },
];