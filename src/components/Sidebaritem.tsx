import { ReactElement } from "react";

export function Sidebaritem({ text, icon }: {
    text: string,
    icon: ReactElement
}) {
    return (
        <div className="flex items-center hover:bg-black rounded-2xl transition-all duration-300  hover:text-white text-black cursor-pointer">
            <div className="p-1">
                {icon}
            </div>
            <div className="p-1">
                {text}
            </div>
        </div>
    );
}