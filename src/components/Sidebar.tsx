import { SidebarItem } from "./Sidebaritem"; 
import { TwitterIcon } from "../icons/TwitterIcon";
import { Youtube } from "../icons/Youtube";
import { Logo } from "../icons/Logo";
import { useNavigate } from "react-router-dom";

export function Sidebar() {
    const navigate = useNavigate();
    return (
        <div className="fixed left-0 top-0 h-screen w-72 border-r bg-gray-900 text-white dark:bg-gray-100 dark:text-black pl-4 pt-4">
            <div onClick={() => navigate("/dashboard")} className="flex text-2xl items-center gap-2.5 cursor-pointer">
                <Logo />
                <span className="font-semibold">Pocket Links</span>
            </div>

            <div className="pt-6 space-y-4">
                <SidebarItem text="Twitter" icon={<TwitterIcon />} />
                <SidebarItem text="YouTube" icon={<Youtube />} />
            </div>
        </div>
    );
}
