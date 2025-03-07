import React from 'react';

export interface ButtonProps {
    text?: string;
    onClick?: () => void;
    variant: "primary" | "secondary";
    size?: "sm" | "lg" | "md";
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    fullwidth?: boolean; 
}

const variantClasses = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-200 text-purple-400"
}

const sizeClasses = {
    "sm": "px-2 py-1 text-sm",
    "md": "px-4 py-2 text-md",
    "lg": "px-6 py-3 text-lg"
}

export const Button = (props: ButtonProps) => {
    const { text, onClick, variant, size = "md", startIcon, endIcon, fullwidth } = props;

    return (
        <button
            onClick={onClick}
            className={`${variantClasses[variant]} ${sizeClasses[size]} ${fullwidth ? "w-full" : ""} flex items-center justify-center rounded-2xl gap-1.5 cursor-pointer`}
        >
            {startIcon && <span className="start-icon">{startIcon}</span>}
            {text}
            {endIcon && <span className="end-icon">{endIcon}</span>}
        </button>
    );
};
