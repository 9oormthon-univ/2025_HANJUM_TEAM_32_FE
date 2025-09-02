interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  iconPosition?: "left" | "right";
  icons?: React.ReactNode;
}

export default function Button({
  children,
  onClick,
  iconPosition,
  className,
  type,
  disabled,
  icons = null,
}: ButtonProps) {
  const base = "rounded-[10px] p-2 cursor-pointer"; 
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`${base} ${className}`}
    >
      {iconPosition === "left" && icons}
      {children}
      {iconPosition === "right" && icons}
    </button>
  );
}
