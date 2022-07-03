import * as C from "./styles";

import { formatMonth } from '../../helpers/dateFilter'

type Props = {
  currentMonth: string;
};

export const Info = ({ currentMonth }: Props) => {

    const handlePrevMonth = () => {}
    const handleNextMonth = () => {}

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
      <C.Resume></C.Resume>
    </C.Container>
  );
};
