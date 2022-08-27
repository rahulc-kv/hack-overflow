export const getTimeStringFromSeconds = (
  seconds: number,
  showHour: boolean = false
) => {
  const hour = Math.floor(seconds / 3600);
  const minute = Math.floor((seconds - hour * 3600) / 60);
  const sec = seconds - hour * 3600 - minute * 60;

  if (showHour)
    return (
      (hour < 10 ? '0' + hour : hour) +
      ':' +
      (minute < 10 ? '0' + minute : minute) +
      ':' +
      (sec < 10 ? '0' + sec : sec)
    );
  return (
    (minute < 10 ? '0' + minute : minute) + ':' + (sec < 10 ? '0' + sec : sec)
  );
};

export const getDayFromSeconds = (seconds: number) =>{
  const day = Math.floor(seconds/ 86400);
  return day > 1 ? `${day} days` : `${day} day`;
};