import React, { FC, SVGProps } from 'react';

import useScreenDimensions from '@hooks/useScreenDimensions';

type ButtonProps = {
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  label?: string;
  labelClass?: string;
  iconClass?: string;
  Icon?: FC<SVGProps<SVGElement>>;
  disabled?: boolean;
  breakpoint?: number;
  type?: 'button' | 'submit' | 'reset';
  showMainViewButton?: boolean;
  iconStroke?: string;
  dataTestId?: string;
};

const Button: FC<ButtonProps> = ({
  className = '',
  onClick = () => null,
  label,
  labelClass,
  iconStroke = '',
  iconClass,
  Icon,
  disabled = false,
  breakpoint = 0,
  showMainViewButton = false,
  type = 'button',
  dataTestId = 'button'
}) => {
  const { isMobileView, screenWidth } = useScreenDimensions();

  return (
    <button
      type={type}
      className={`text-sm p-2 rounded-md hover:opacity-90 disabled:opacity-70 ${className}`}
      onClick={onClick}
      disabled={disabled}
      data-testid={dataTestId}>
      {(screenWidth < breakpoint || isMobileView) && !showMainViewButton ? (
        <div className="flex flex-row justify-center items-center">
          {Icon ? (
            <Icon stroke={iconStroke} />
          ) : (
            <p className={labelClass}>{label}</p>
          )}
        </div>
      ) : (
        <div className="flex flex-row justify-center items-center">
          {Icon && <Icon className={iconClass} stroke={iconStroke} />}
          {label && (
            <span className={`${Icon ? 'ml-2.5' : ''} ${labelClass}`}>
              {label}
            </span>
          )}
        </div>
      )}
    </button>
  );
};

export default Button;
