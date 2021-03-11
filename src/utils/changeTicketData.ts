export const getDate = (date: Date): string => {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month =
    newDate.getMonth() < 10 ? `0${newDate.getMonth()}` : newDate.getMonth();
  const day =
    newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate();
  const hours =
    newDate.getHours() < 10 ? `0${newDate.getHours()}` : newDate.getHours();
  const minutes =
    newDate.getMinutes() < 10
      ? `0${newDate.getMinutes()}`
      : newDate.getMinutes();
  return `${day}.${month}.${year} - ${hours}:${minutes}`;
};

export const getDuration = (time: number): string => {
  let hours: number | string = Math.floor(time / 60);
  hours = hours < 10 ? `0${hours}` : hours;

  let minutes: number | string = Math.floor((time / 60 - Number(hours)) * 100);
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  
  return `${hours}ч ${minutes}м`;
};

export const getStops = (stops: number): string => {
  switch (stops) {
    case 1:
      return `${stops} пересадка`;
    case 2:
    case 3:
    case 4:
      return `${stops} пересадки`;
    default:
      return `${stops} пересадок`;
  }
};

export const changePrice = (price: number): string => {
  if (price > 1000) {
    const thousand = Math.floor(price / 1000);
    const lessThousand = price - (thousand * 1000);
    return `${thousand} ${lessThousand < 10 ? '00'+lessThousand : lessThousand < 100 ? '0'+lessThousand : lessThousand}`;
  }
  return `${price}`;
}