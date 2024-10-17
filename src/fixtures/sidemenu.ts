import { CalendarIcon } from "../assets/icons/calendarIcon";
import { HomeIcon } from "../assets/icons/homeIcon";
import { MessageIcon } from "../assets/icons/messageIcon";
import { NotificationIcon } from "../assets/icons/notificationIcon";
import { ReportIcon } from "../assets/icons/reportIcon";
import { SettingsIcon } from "../assets/icons/settingsIcon";
import { UserPlusIcon } from "../assets/icons/userPlusIcon";
import { ISideMenuItem } from "../interfaces/sidemenu";

export const menuItems: ISideMenuItem[] = [
    {
        id: 1,
        name: "Home",
        link: "/home",
        icon: HomeIcon,
    },
    {
        id: 2,
        name: "Events",
        link: "/events",
        icon: CalendarIcon,
    },
    {
        id: 3,
        name: "Speakers",
        link: "/speakers",
        icon: UserPlusIcon,
    },
    {
        id: 4,
        name: "Reports",
        link: "/reports",
        icon: ReportIcon,
    },
    {
        id: 5,
        name: "Notifications",
        link: "/notifications",
        icon: NotificationIcon,
    },
    {
        id: 6,
        name: "Messages",
        link: "/messages",
        icon: MessageIcon,
    },
    {
        id: 7,
        name: "Settings",
        link: "/settings",
        icon: SettingsIcon,
    }
];