import { Item } from "../types/Item";

export const getCurrentMonth = () => {
  let now = new Date();
  let date = `${now.getFullYear()}-${now.getMonth() + 1}`;
  return date;
};

export const filterListByMonth = (fullList: Item[], date: string): Item[] => {
  let newList: Item[] = [];
  let [year, month] = date.split("-");

  fullList.forEach((item) => {
    if (
      item.date.getFullYear() === parseInt(year) &&
      item.date.getMonth() + 1 === parseInt(month)
    ) {
      newList.push(item);
    }
  });

  return newList;
};

const addZero = (num: number): string => (num < 10 ? `0${num}` : `${num}`);

export const formatDate = (date: Date): string => {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  return `${addZero(day)}/${addZero(month)}/${year}`;
};

export const formatMonth = (currentMonth: string): string => {
  let [year, month] = currentMonth.split("-");
  let months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return `${months[parseInt(month) - 1]} de ${year}`
};
