import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  icon?: ReactNode;
}

export function Button({
  variant = "primary",
  icon,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-bold transition-colors hover:cursor-pointer";

  const variants = {
    primary: "bg-lime-300 text-black hover:bg-lime-400",
    secondary: "bg-neutral-700 text-white hover:bg-neutral-600",
    outline:
      "border border-neutral-500 text-white bg-transparent hover:bg-neutral-800",
  };

  return (
    <button
      {...props}
      className={clsx(baseStyles, variants[variant], className)}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {children}
    </button>
  );
}
