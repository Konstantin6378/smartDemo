import clsx from 'clsx';
import React from 'react';

type ButtonType = {
  children: React.ReactNode;
  type?: 'reset' | 'submit' | 'button' | undefined;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  ref?: React.Ref<HTMLButtonElement>;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonType>((props, ref) => {
  const { onClick, disabled, children, type, className, ...rest } = props;
  const classes = clsx(className);

  return (
    <button disabled={disabled} ref={ref} type={type} onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
});

export default Button;
