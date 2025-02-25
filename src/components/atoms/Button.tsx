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
  const baseStyles = "flex px-10 py-3 rounded-full transition gap-10";

  const variantStyles = {
    login:
      "bg-spotifyGreen text-black hover:bg-spotifyGreenLight rounded-full py-3 font-bold  hover:scale-105",
    social:
      "bg-grayDark border border-grayLight text-white hover:border-white rounded-full font-bold",
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
      {icon && <span className="text-2xl">{icon}</span>}
      <span className="flex-1 text-center">{text}</span>
      {children}
    </button>
  );
};

export default Button;
