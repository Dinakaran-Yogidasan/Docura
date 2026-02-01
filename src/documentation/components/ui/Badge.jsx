/* eslint-disable react/prop-types */
const Badge = ({
  variant = "default",
  size = "md",
  children,
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center rounded-full font-medium ring-1 ring-inset";

  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
  };

  const variants = {
    default:
      "bg-slate-100 text-slate-600 ring-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700",
    outline:
      "bg-transparent text-slate-700 ring-slate-300 dark:text-slate-200 dark:ring-slate-600",
  };

  const chosenVariant = variants[variant] || variants.default;
  return (
    <span
      className={`${baseStyles} ${sizes[size]} ${chosenVariant} ${className}`}
    >
      {children}
    </span>
  );
};
export default Badge;
