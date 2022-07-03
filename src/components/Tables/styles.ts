import styled from "styled-components";

export const Table = styled.table`
    margin-top: 15px;
    width: 100%;
    background-color: #eee;
    padding: 20px 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px, #999;
`;

export const TableHeadColumn = styled.th<{width?: number}>`
    width: ${props => props.width ? `${props.width}px` : 'auto'};
    text-align: left;
    padding: 12px 0;
`;

