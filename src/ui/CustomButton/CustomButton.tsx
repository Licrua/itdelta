import { ReactNode } from 'react';
import classNames from 'classnames';
import classes from './CustomButton.module.scss';

interface CustomButtonProps {
  type: "submit"|"reset"|"button";
  className?: string;
  text: string;
  svg?: ReactNode;
  onClick?: () => void;
}

const CustomButton = ({
  type,
  className,
  text,
  svg,
  onClick,
}: CustomButtonProps) => {
  return (
    <button
      type={type}
      className={classNames(classes.button, className && classes[className])}
      onClick={onClick}
    >
      {svg}
      {text}
    </button>
  );
};

export default CustomButton;
