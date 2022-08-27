import React, { useEffect, useState, FC } from 'react';

import { useAppDispatch } from '@store/store';
import { NotifierTypes } from '@constants/common';
import { NotifierProps } from './types';

const Notifier: FC<NotifierProps> = props => {
  const { id, notification, hideNotifier } = props;

  const [progressWidth, setprogressWidth] = useState<number>(0);
  const [animate, setAnimate] = useState<string>('animate-slide-to-left');

  const { message, type } = notification;

  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      setprogressWidth(100);
    }, 10);

    setTimeout(() => {
      setAnimate('animate-slide-to-right');
    }, 5010);

    setTimeout(() => {
      dispatch(hideNotifier(id));
    }, 5800);
  }, []);

  const getNotificationIcon = () => {
    switch (type) {
      case NotifierTypes.LINKERROR:
      case NotifierTypes.SYNCERROR:
      case NotifierTypes.ERROR:
        return '/images/Error.gif';

      case NotifierTypes.LOADING:
        return '/images/Loader.gif';

      case NotifierTypes.DELETE:
        return '/images/Delete.gif';

      case NotifierTypes.SUCCESS:
        return '/images/Success.gif';

      default:
        return '/images/Loader.gif';
    }
  };

  const getNotifierClass = (propertyType: string) => {
    if (
      type === NotifierTypes.LINKERROR ||
      type === NotifierTypes.SYNCERROR ||
      type === NotifierTypes.ERROR
    ) {
      if (propertyType === 'bg') return 'bg-coralRed';
      if (propertyType === 'border') return 'border-coralRed';
    }

    if (
      type === NotifierTypes.LOADING ||
      type === NotifierTypes.SUCCESS ||
      type === NotifierTypes.DELETE
    ) {
      if (propertyType === 'bg') return 'bg-greenHaze';
      if (propertyType === 'border') return 'border-greenHaze';
    }
  };

  return (
    <div
      className={`flex relative flex-row flex-wrap items-center p-4 mt-2 min-w-[200px]
      min-h-[75px] text-[12px] sm:text-sm bg-white rounded-md border-[2px]
      ${getNotifierClass('border')}
      ${animate}`}>
      <img
        src={getNotificationIcon()}
        alt=""
        className="w-[30px] h-[30px] rounded-[50%]"
      />
      <div className="flex flex-wrap mx-4 w-[200px] break-normal sm:w-[320px]">
        {message}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200 rounded-md" />
      <div
        id={id}
        style={{ width: `${progressWidth}%` }}
        className={`absolute bottom-0 left-0 h-1 ${getNotifierClass('bg')}
        rounded-md transition-all duration-[5000ms] ease`}
      />
    </div>
  );
};

export default Notifier;
