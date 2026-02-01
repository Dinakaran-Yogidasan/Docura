/* eslint-disable react/prop-types */

const VARIANTS = {
  primary:
    "bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-md shadow-sm",
  secondary:
    "bg-slate-100 hover:bg-slate-200 text-slate-900 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 rounded-md",
  ghost:
    "bg-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200",
  icon: "text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300 bg-transparent",
};

const SIZES = {
  sm: "text-xs px-2 py-1",
  md: "text-sm px-4 py-2",
  lg: "text-base px-6 py-3",
  icon: "p-2",
};

function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  type = "button",
  disabled = false,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center transition-colors duration-200 focus:outline-none";
  const chosenVariant = VARIANTS[variant] ?? VARIANTS.primary;
  const chosenSize = SIZES[size] ?? SIZES.md;
  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed hover:none"
    : "";

  const merged = `${base} ${chosenVariant} ${chosenSize} ${className} ${disabledStyles}`;

  return (
    <button
      type={type}
      className={merged}
      disabled={disabled}
      {...props}
      {...(variant === "icon" && typeof children === "string"
        ? { "aria-label": children }
        : {})}
    >
      {children}
    </button>
  );
}

export default Button;
