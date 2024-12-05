interface CardProps {
  children: React.ReactNode;
  variant?: "user" | "bot";
  maxWidth?: "sm" | "md" | "lg" | "xl";
  className?: string;
  bgColor?: string;
  textColor?: string;
}

export function Card({ children, variant = "bot", bgColor }: CardProps) {
  return (
    <div
      className={`rounded-lg  dark:bg-neutral-800 dark:text-white dark:border-neutral-700 border p-2 ${
        variant === "user"
          ? "bg-neutral-200 border-neutral-300"
          : "bg-white shadow-sm dark:shadow-sm"
      } ${bgColor}`}
    >
      {children}
    </div>
  );
}
