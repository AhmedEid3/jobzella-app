export default function formatDate(date: string) {
  const dateObj = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
  };

  return dateObj.toLocaleString(undefined, options);
}
