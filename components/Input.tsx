import { ReactNode } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: ReactNode;
}

export function Input({ label, icon, className = "", ...props }: InputProps) {
  return (
    <div className="flex flex-col mb-5">
      {label && (
        <label htmlFor={props.id} className="font-semibold text-white mb-1">
          {label}
        </label>
      )}

      <div className="flex items-center border border-neutral-700 rounded-lg px-3 py-2 focus-within:border-lime-300 transition-colors">
        {icon && <span className="text-neutral-400 mr-2">{icon}</span>}
        <input
          {...props}
          className={`bg-transparent text-white placeholder-neutral-500 focus:outline-none flex-1 ${className}`}
        />
      </div>
    </div>
  );
}
