interface CardProps {
  children: React.ReactNode;
  variant?: "user" | "bot";
  maxWidth?: "sm" | "md" | "lg" | "xl";
  className?: string;
  bgColor?: string;
  textColor?: string;
}

const maxWidthClasses = {
  xs: "max-w-[80%]",
  sm: "max-w-[80%]",
  md: "max-w-[80%]",
  lg: "max-w-[80%]",
  xl: "max-w-[85%]",
};

export function Card({
  children,
  variant = "bot",
  maxWidth = "",
  className = "",
  bgColor,
  textColor,
}: CardProps) {
  return (
    <div
      className={`rounded-lg  dark:bg-neutral-800 dark:text-white dark:border-neutral-700 border px-2 py-2 ${
        variant === "user"
          ? "bg-neutral-200 border-neutral-300"
          : "bg-white shadow-sm dark:shadow-sm"
      } ${bgColor}`}
    >
      {children}
    </div>
  );
}
