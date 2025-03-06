import React from 'react';

export interface ButtonProps {
    text?: string;
    onClick?: () => void;
    variant: "primary" | "secondary";
    size?: "sm" | "lg" | "md";
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
}

const variantClasses = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-200 text-purple-400"
}

export const Button = (props: ButtonProps) => {
    const { text, onClick, variant, size, startIcon, endIcon  } = props;

    return (
        <div className='flex '>
            <button onClick={onClick}  className={ `${variantClasses[variant]} ${size} flex items-center justify-center rounded-2xl text-white px-4 py-2 gap-1.5 text-center cursor-pointer `}
            >
            {startIcon && <span className="start-icon">{startIcon}</span>}
            {text}
            {endIcon && <span className="end-icon">{endIcon}</span>}
            </button>
            
        </div>
    );
};
