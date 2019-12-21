export const formatTime = (seconds) => {
  if (seconds === undefined || typeof seconds === 'string' || typeof seconds === 'function') {
    return null;
  }

  if (seconds < 0) {
    return null;
  }

};
