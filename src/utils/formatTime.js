export const formatTime = (arg) => {
  if (arg === undefined || typeof arg === 'string' || typeof arg === 'function' || arg < 0) {
    return null;
  } else {
    const seconds = Math.floor(arg % 60).toString();
    const minutes = Math.floor((arg / 60) % 60).toString();
    const hours = Math.floor(arg / 3600).toString();
    return hours.padStart(2, '0') + ':' + minutes.padStart(2,'0') + ':' + seconds.padStart(2, '0');
  }

};
