import Link from "next/link";

const baseClassName =
  "group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-primary px-6 font-medium text-dark shadow-[0_4px_12px_rgba(65,242,118,0.25)] transition duration-500 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(15,42,31,0.24)] active:translate-y-0";

function ButtonContent({ children, showIcon }) {
  if (!showIcon) {
    return <span className="relative inline-flex items-center">{children}</span>;
  }

  return (
    <span className="relative inline-flex -translate-x-0 items-center transition group-hover:-translate-x-6">
      <span className="absolute translate-x-0 opacity-100 transition group-hover:-translate-x-6 group-hover:opacity-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          color="currentColor"
          fill="none"
          stroke="#141B34"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7.64584 15.7108C7.23279 14.8966 7 13.9755 7 13C7 9.78484 9.5 7.5 13 7C17.0817 6.4169 18.8333 4.16667 20 3C23.5 16 17 19 13 19C11.9071 19 10.8825 18.7078 10 18.1973" />
          <path d="M3 21C3.5 18 5.45791 16.1355 10 15C13.2167 14.1958 15.4634 12.1791 17 10.0549" />
        </svg>
      </span>
      <span className="pl-8">{children}</span>
      <span className="absolute right-0 translate-x-12 opacity-0 transition group-hover:translate-x-6 group-hover:opacity-100">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
        >
          <path
            d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </span>
  );
}

export default function Button({
  href = "/",
  as = "link",
  showIcon = true,
  children,
  className = "",
  ...props
}) {
  const classes = `${baseClassName} ${className}`.trim();

  if (as === "button") {
    return (
      <button className={classes} {...props}>
        <ButtonContent showIcon={showIcon}>{children}</ButtonContent>
      </button>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      <ButtonContent showIcon={showIcon}>{children}</ButtonContent>
    </Link>
  );
}
