import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  textOnly?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, textOnly, className, ...props }) => {
  let cssClasses = textOnly ? 'text-button' : 'button';
  cssClasses += ' ' + (className || '');

  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
