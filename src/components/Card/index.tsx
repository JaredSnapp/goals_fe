import { ReactNode } from "react"

interface cardProps {
  className?: string,
  children?: ReactNode,
  onClick?: () => void,
}

export function Card({className, children, onClick}: cardProps) {
  return (
    <div className={`bg-white shadow-md rounded-xl ${className}`} onClick={onClick} >
      {children}
    </div>
  )
};