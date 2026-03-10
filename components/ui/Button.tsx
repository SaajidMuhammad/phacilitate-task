"use client";

import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type BaseProps = {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles = {
  primary:
    "bg-[var(--green)] text-white hover:bg-[var(--green-light)]",
  outline:
    "border border-[var(--border)] text-[var(--text-primary)] bg-white hover:bg-[var(--sage)]",
  ghost:
    "text-[var(--text-secondary)] hover:text-[var(--green)]",
} as const;

const sizeStyles = {
  sm: "px-5 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-base",
} as const;

export const Button = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) => {
  const baseClasses = [
    "inline-flex items-center justify-center font-medium",
    "rounded-[var(--radius-full)] cursor-pointer",
    "transition-all duration-200 ease-out",
    "hover:scale-[1.02] active:scale-[0.98]",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--green)]",
    "min-h-[44px] select-none whitespace-nowrap",
    variantStyles[variant],
    sizeStyles[size],
    className,
  ].join(" ");

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <a href={href} className={baseClasses} {...rest}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={baseClasses} {...buttonProps}>
      {children}
    </button>
  );
};
