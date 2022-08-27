import { getDayFromSeconds, getTimeStringFromSeconds } from '@utils/generalUtils';
import React, { useEffect, useRef, useState } from 'react';

const CountDown = (props) => {
  const { eventStartDate } = props;
  const [remainingTime, setRemainingTime] = useState<number>();

  const interval = useRef(null);
  useEffect(() => {
    const currentTime = new Date();
    const eventStartTime = new Date(eventStartDate);
    let time = -1;
    if (currentTime < eventStartTime) {
      time = Math.floor((eventStartTime.getTime() - currentTime.getTime()) / 1000);
      setRemainingTime(time);
    } else {
      setRemainingTime(-1);
    }
  }, [eventStartDate]);

  useEffect(() => {
    interval.current = setInterval(() => {
      setRemainingTime(pcount => pcount - 1);
    }, 1000);
    return () => clearInterval(interval.current);
  }, []);

  useEffect(() => {
    if (remainingTime <= 0) clearInterval(interval.current);
  }, [remainingTime]);

  return (
    <>
      {remainingTime > 0 ? (
        <div className='text-xs font-medium text-frenchBlue'>
          {remainingTime < 86400
            ? `Starts in : ${getTimeStringFromSeconds(remainingTime, true)}`
            : `Starts in : ${getDayFromSeconds(remainingTime)}`}
        </div>
      ) : (
        <div className='text-xs font-semibold text-green-500'>
          Live Now
        </div>
      )
      }
    </>
  );
};

export default CountDown;