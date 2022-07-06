import * as C from "./styles";

import { formatMonth } from "../../helpers/dateFilter";

import { ResumeItem } from '../ResumeItem/ResumeItem';

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number,
  expenses: number;
};

export const Info = ({ currentMonth, onMonthChange, income, expenses }: Props) => {

  const handlePrevMonth = () => {
    const [year, month] = currentMonth.split("-");
    let dateNow = new Date(Number(year), Number(month) - 1, 1);
    dateNow.setMonth(dateNow.getMonth() - 1);
    onMonthChange(`${dateNow.getFullYear()}-${dateNow.getMonth() + 1}`);
  };

  const handleNextMonth = () => {
    const [year, month] = currentMonth.split("-");
    let dateNow = new Date(Number(year), Number(month) - 1, 1);
    dateNow.setMonth(dateNow.getMonth() + 1);
    onMonthChange(`${dateNow.getFullYear()}-${dateNow.getMonth() + 1}`);
  };

  return (
    <C.Container>
      <C.Months>
        <C.MonthArrow onClick={handlePrevMonth}>
          <i className="fa-solid fa-chevron-left"></i>
        </C.MonthArrow>
        <C.MonthTitle>{formatMonth(currentMonth)}</C.MonthTitle>
        <C.MonthArrow onClick={handleNextMonth}>
          <i className="fa-solid fa-chevron-right"></i>
        </C.MonthArrow>
      </C.Months>
      <C.Resume>
        <ResumeItem title={"Receitas"} value={income}/>
        <ResumeItem title={"Despesas"} value={expenses}/>
        <ResumeItem title={"Balanço"} value={income - expenses} color={(income - expenses) < 0 ? '#DB1917' : '#00EB3B'}/>
      </C.Resume>
    </C.Container>
  );
};
