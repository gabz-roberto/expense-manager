import * as C from "./styles";

import { Item } from "../../types/Item";
import { formatDate } from '../../helpers/dateFilter'
import { categories } from '../../data/categories'

type Props = {
  item: Item;
};

export const TableData = ({ item }: Props) => {
  return (
    <C.TableRow>
      <C.TableData>{formatDate(item.date)}</C.TableData>
      <C.TableData>
        <C.Category color={categories[item.category].color}>
            {categories[item.category]?.title}
        </C.Category>
      </C.TableData>
      <C.TableData>{item.title}</C.TableData>
      <C.TableData>
        <C.Value color={categories[item.category].expense ? '#DB1917' : '#00EB3B'}>
            R$ {item.value}
        </C.Value>
      </C.TableData>
    </C.TableRow>
  );
};
