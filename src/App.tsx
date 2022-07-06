import { useEffect, useState } from "react";

import * as C from "./App.styles";
import { Item } from "./types/Item";
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { items } from "./data/items";

import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter";
import { Table } from "./components/Tables/Table";
import { Info } from "./components/Info/Info";

function App() {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let inputCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        inputCount += filteredList[i].value;
      }
    }

    setIncome(inputCount);
    setExpenses(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  return (
    <C.Containder>
      <C.Header>
        <C.HeaderTitle>Sistema Financeiro</C.HeaderTitle>
      </C.Header>
      <C.Body>
        <Info
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expenses={expenses}
        />

        <Table list={filteredList} />
      </C.Body>
    </C.Containder>
  );
}

export default App;
