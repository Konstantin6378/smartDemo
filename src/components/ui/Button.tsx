import clsx from 'clsx';
import React from 'react';

type ButtonType = {
  children: React.ReactNode;
  type?: 'reset' | 'submit' | 'button' | undefined;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button(props: ButtonType) {
  const { onClick, disabled, children, type, className, ...rest } = props;
  const classes = clsx(className);
  return (
    <button disabled={disabled} type={type} onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
}
