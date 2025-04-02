
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  color?: string;
  children?: React.ReactNode;
}

export function Button({
    onClick,
    children,
    color,
    ...attributes
}: ButtonProps) {
    return (
        <button 
        className={`px-4 py-1 rounded border ${color ? `bg-${color}` : "bg-white"}`}
        {...attributes}
        onClick={onClick}>{children}</button>
    )
}