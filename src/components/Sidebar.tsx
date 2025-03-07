import { SidebarItem } from "./SidebarItem";
import { TwitterIcon } from "../icons/TwitterIcon";
import { Youtube } from "../icons/Youtube";
import { Logo } from "../icons/Logo";

export function Sidebar() {
    return (
        <div className="fixed left-0 top-0 h-screen w-72 border-r bg-gray-900 text-white dark:bg-gray-100 dark:text-black pl-4 pt-4">
            {/* Logo Section */}
            <div className="flex text-2xl items-center gap-2.5">
                <Logo />
                <span className="font-semibold">Pocket Links</span>
            </div>

            {/* Sidebar Items */}
            <div className="pt-6 space-y-4">
                <SidebarItem text="Twitter" icon={<TwitterIcon />} />
                <SidebarItem text="YouTube" icon={<Youtube />} />
            </div>
        </div>
    );
}
