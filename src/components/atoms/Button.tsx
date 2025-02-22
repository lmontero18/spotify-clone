import React from "react";

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "login" | "social" | "link";
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = "",
  disabled = false,
  type = "button",
  variant = "login",
  icon,
  children,
}) => {
  const baseStyles =
    "px-4 py-2 rounded-md transition font-medium flex items-center justify-center gap-2";

  const variantStyles = {
    login:
      "bg-green-500 text-black hover:bg-green-600 w-full rounded-full py-3 text-lg font-bold",
    social:
      "bg-black border border-white text-white hover:bg-gray-900 w-full rounded-full py-3 font-semibold",
    link: "text-white underline hover:text-gray-400 text-sm",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {text}
      {children}
    </button>
  );
};

export default Button;
