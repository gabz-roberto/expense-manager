import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 5px #aaa;
  border-radius: 20px;
  margin-top: -40px;
`;

export const Months = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const MonthArrow = styled.div`
  height: 40px;
  width: 40px;
  background-color: #620300;
  border-radius: 50%;
  color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const MonthTitle = styled.div`
  flex: 1;
  text-align: center;
`;

export const Resume = styled.div`
  flex: 2;
  display: flex;
`;
