import { ReactNode } from "react";


interface ButtonProps {
    onClick?: () => void;
    children?: ReactNode;
}

export function Button({
    onClick,
    children
}: ButtonProps) {
    return (
        <button 
        className={"px-4 py-1 rounded border bg-white"}
        onClick={onClick}>{children}</button>
    )
}