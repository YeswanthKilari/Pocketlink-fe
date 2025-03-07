import { ReactElement } from "react";

export function SidebarItem({ text, icon }: { text: string; icon: ReactElement }) {
    return (
        <div className="flex items-center gap-2 p-3 hover:bg-black rounded-2xl transition-all duration-300 hover:text-white text-black cursor-pointer">
            <div className="text-lg">{icon}</div>
            <div className="font-medium">{text}</div>
        </div>
    );
}
