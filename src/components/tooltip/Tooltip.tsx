import React, { FC, useLayoutEffect, useRef, useState } from 'react';

import { TooltipProps } from './types';

const Tooltip: FC<TooltipProps> = props => {
  const {
    backgroundColor = 'white',
    children,
    body,
    onHover = true,
    onTop = false,
    visibility = false,
    tooltipRef,
    outerClass = '',
    innerClass = 'mt-6',
    contentNoWrap = true
  } = props;

  const [tooltipClass, setTooltipClass] = useState({});
  const ref = useRef(null);

  useLayoutEffect(() => {
    const { current } = ref;

    const overflowStyleChange = () => {
      const curr = current.getBoundingClientRect();
      if (curr.left < 0) {
        const val = { marginLeft: `${-(curr.left - 25)}px` };
        setTooltipClass(val);
      } else {
        setTooltipClass({});
      }
    };

    if (current !== null) {
      overflowStyleChange();
    }
  }, [ref, visibility]);

  const handleOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <div
      ref={tooltipRef}
      className={`group flex relative flex-col items-center ${outerClass} cursor-default`}
      onClick={handleOnClick}>
      {children}
      {onTop && (
        <div
          className={`${onHover ? 'group-hover:flex' : ''}
          ${!onHover && visibility ? 'flex' : 'hidden'}
        absolute bottom-0 flex-col items-center mb-6 will-change-[filter]
        drop-shadow-[0_2px_2px_rgba(0,0,0,0.20)] z-10`}>
          <span
            className={`relative z-20 p-2 text-xs leading-none text-white ${
              contentNoWrap ? 'whitespace-nowrap' : ''
            }
        whitespace-nowrap bg-${backgroundColor} rounded-md shadow-lg`}>
            {body}
          </span>
          <div
            className={`-mt-2 w-4 h-4 bg-${backgroundColor} rotate-45`}></div>
        </div>
      )}
      {!onTop && (
        <div
          className={`${onHover ? 'group-hover:flex' : ''}
          ${!onHover && visibility ? 'flex' : 'hidden'}
        absolute top-0 flex-col-reverse items-center will-change-[filter] ${innerClass} 
        drop-shadow-[4px_4px_4px_rgba(0,0,0,0.20)] z-10`}
          style={tooltipClass}
          ref={ref}>
          <span
            className={`relative z-20 p-2 -mt-2 text-xs leading-none
        text-white ${
          contentNoWrap ? 'whitespace-nowrap' : ''
        } bg-${backgroundColor} rounded-md`}>
            {body}
          </span>
          <div className={`mt-1 w-4 h-4 bg-${backgroundColor} rotate-45`}></div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
