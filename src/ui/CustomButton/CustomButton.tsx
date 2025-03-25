import { ReactNode } from 'react';
import classNames from 'classnames';
import classes from './CustomButton.module.scss';

interface CustomButtonProps {
  className?: string;
  text: string;
  svg?: ReactNode;
  onClick?: () => void;
}

const CustomButton = ({ className, text, svg, onClick }: CustomButtonProps) => {
  return (
    <button
      className={classNames(classes.button, className && classes[className])}
      onClick={onClick}
    >
      {svg}
      {text}
    </button>
  );
};

export default CustomButton;
