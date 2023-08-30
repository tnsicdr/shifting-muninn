import { ComponentChildren } from "preact";
import classes from "./Card.module.css";
import clsx from "clsx";

interface CardProps {
  children?: ComponentChildren;
  className?: string;
}

function Card({ children, className }: CardProps) {
  return <div className={clsx(classes.container, className)}>{children}</div>;
}

export default Card;
