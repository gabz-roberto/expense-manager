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

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <C.Containder>
      <C.Header>
        <C.HeaderTitle>Sistema Financeiro</C.HeaderTitle>
      </C.Header>
      <C.Body>
        <Info currentMonth={currentMonth} />

        <Table list={filteredList} />
      </C.Body>
    </C.Containder>
  );
}

export default App;
