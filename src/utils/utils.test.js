import { formatTime } from './formatTime';

describe('utils', () => {
  describe('formatTime', () => {
    it('should return null if there is no arg', () => {
      expect(formatTime()).toBe(null);
    });

    it('should return null if arg is not a number', () => {
      expect(formatTime('abc')).toBe(null);
      expect(formatTime(() => {})).toBe(null);
    });
  });
});
