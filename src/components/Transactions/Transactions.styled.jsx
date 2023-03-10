import styled from '@emotion/styled';

    export const TransactionsTable = styled.table`
  margin: 30px auto;
  width: 600px;
  border-radius: 4px;
  background-color: rgb(255, 255, 255);
  text-align: center;
  table-layout: fixed;
  border: 1px solid #eee;
  outline: 3px solid #ffd300;
  padding: 15px;`

export const TransactionTh = styled.th`
  padding: 7px;`
  

export const TransactionValues = styled.td`
   text-transform: capitalize;
	border: none;
	border-top: 3px solid #fff;
	border-bottom: 3px solid #fff;
    `

export const TransactonTableRow = styled.tr`
background-color: #fff;
&:nth-of-type(even) {
background-color: #f3f14f;
    `

export const TableHeader = styled.thead`
  color: #0b0d0a;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 800;
  line-height: 30px;
  background-color: #ffd300;
      `

export const TableBody = styled.tbody`
    font-size: 15px;
    font-weight: 300;
    line-height: 30px;
    `