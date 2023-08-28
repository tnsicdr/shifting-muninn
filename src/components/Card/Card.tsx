import { ComponentChildren } from "preact";

interface CardProps {
  children?: ComponentChildren;
  className?: string;
}

function Card({ children, className }: CardProps) {
  return <div className={className}>{children}</div>;
}

export default Card;
