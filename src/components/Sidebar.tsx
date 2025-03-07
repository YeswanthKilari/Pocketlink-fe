import { Sidebaritem } from "./Sidebaritem";
import { TwitterIcon } from "../icons/TwitterIcon";
import { Youtube } from "../icons/Youtube";
import { Logo } from "../icons/Logo";

export function Sidebar() {
    return (
        <div className="h-screen border-r bg-gray-100 text-white dark:text-black mr-2 w-72 pl-4 pt-4 ">
            <div className="flex text-2xl items-center gap-2.5">
                <Logo />
                Pocket links
            </div>
            <div className="pt-4 ">
                <Sidebaritem text="Twitter" icon={<TwitterIcon />} />
                <Sidebaritem text="Youtube" icon={<Youtube />} />
            </div>
        </div>
    );
}