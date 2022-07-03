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
      newList.push(item)
    }
  });

  return newList;
};
