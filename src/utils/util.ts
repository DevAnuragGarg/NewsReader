export const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);

  // Get parts of the date
  const day = date.getDate();
  const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
  const month = date.toLocaleDateString('en-US', { month: 'short' });
  const year = date.getFullYear();

  // Add ordinal suffix to day
  const suffix = (n: number): string => {
    if (n >= 11 && n <= 13) return 'th';
    switch (n % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  return `${weekday}, ${day}${suffix(day)} ${month} ${year}`;
};
