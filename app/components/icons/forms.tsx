import classNames from "classnames";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  name?: string;
};

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={classNames(
        "flex px-3 py-2 rounded-md justify-center",
        className
      )}
    >
      {children}
    </button>
  );
}

export function PrimaryButton({ className, ...props }: ButtonProps) {
  return (
    <Button
      {...props}
      className={classNames(
        "text-white bg-primary hover:bg-primary-light",
        className
      )}
    />
  );
}
