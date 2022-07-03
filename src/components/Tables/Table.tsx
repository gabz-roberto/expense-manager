import { Item } from "../../types/Item";

import * as C from "./styles";

import { TableData } from '../TableData/TableData'

type Props = {
  list: Item[];
}

export const Table = ({ list }: Props) => {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
          <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
          <C.TableHeadColumn>Título</C.TableHeadColumn>
          <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, i) => (
          <TableData key={i} item={item}/>
        ))}
      </tbody>
    </C.Table>
  );
};