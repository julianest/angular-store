import { TimeAgoPipe } from './time-ago.pipe';

describe('TimeAgoPipe', () => {
  let pipe: TimeAgoPipe;

  beforeEach(() => {
    pipe = new TimeAgoPipe();
  });

  it('should return "Just now" for the current time', () => {
    const result = pipe.transform(new Date());
    expect(result).toBe('Just now.');
  });

  it('should return "1 Hour ago." for 1 hour ago', () => {
    const oneHourAgo = new Date();
    oneHourAgo.setHours(oneHourAgo.getHours() - 1);
    const result = pipe.transform(oneHourAgo);
    expect(result).toBe('1 Hour ago.');
  });

  it('should return "2 Hours ago." for 2 hours ago', () => {
    const twoHoursAgo = new Date();
    twoHoursAgo.setHours(twoHoursAgo.getHours() - 2);
    const result = pipe.transform(twoHoursAgo);
    expect(result).toBe('2 Hours ago.');
  });

  it('should return "1 Day ago." for 1 day ago', () => {
    const oneDayAgo = new Date();
    oneDayAgo.setDate(oneDayAgo.getDate() - 1);
    const result = pipe.transform(oneDayAgo);
    expect(result).toBe('1 Day ago.');
  });

  it('should return "2 Days ago." for 2 days ago', () => {
    const twoDaysAgo = new Date();
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
    const result = pipe.transform(twoDaysAgo);
    expect(result).toBe('2 Days ago.');
  });

  it('should return "1 Month ago." for 1 month ago', () => {
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    const result = pipe.transform(oneMonthAgo);
    expect(result).toBe('1 Month ago.');
  });

  it('should return "2 Months ago." for 2 months ago', () => {
    const twoMonthsAgo = new Date();
    twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2);
    const result = pipe.transform(twoMonthsAgo);
    expect(result).toBe('2 Months ago.');
  });

  it('should return "1 Year ago." for 1 year ago', () => {
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    const result = pipe.transform(oneYearAgo);
    expect(result).toBe('1 Year ago.');
  });

  it('should return "2 Years ago." for 2 years ago', () => {
    const twoYearsAgo = new Date();
    twoYearsAgo.setFullYear(twoYearsAgo.getFullYear() - 2);
    const result = pipe.transform(twoYearsAgo);
    expect(result).toBe('2 Years ago.');
  });

  it('should throw an error for invalid dates', () => {
    expect(() => pipe.transform('invalid-date')).toThrowError('Fecha no válida');
  });
});
