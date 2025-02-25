import React from "react";

interface InputProps {
  type?: "text" | "password" | "email";
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  icon?: React.ReactNode;
  variant?: "auth" | "playlist" | "search";
}

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
  icon,
  variant = "auth",
}) => {
  const baseStyles =
    "w-full px-4 py-2 rounded-md focus:outline-white flex items-center gap-2";

  const variantStyles = {
    auth: "border border-grayLight rounded-sm text-white",
    playlist:
      "bg-gray-700 text-white border-2 border-green-500 focus:border-green-400",
    search: "bg-gray-900 text-white border border-gray-700 rounded-full px-5",
  };

  return (
    <div
      className={`relative flex items-center ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="absolute left-3">{icon}</span>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${baseStyles} ${icon ? "pl-10" : ""} bg-transparent`}
      />
    </div>
  );
};

export default Input;
