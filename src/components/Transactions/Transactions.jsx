import PropTypes from 'prop-types';
import { TransactionsTable,TransactionValues,TransactonTableRow,TableHeader,TableBody,TransactionTh } from "./Transactions.styled";

export const TransactionHistory = ({ items }) => {
    return <TransactionsTable>
  <TableHeader>
     <tr>
                <TransactionTh>Type</TransactionTh>
                <TransactionTh>Amount</TransactionTh>
                <TransactionTh>Currency</TransactionTh>
            </tr>
  </TableHeader>

  <TableBody>
    
            {items.map(({ id, type, amount, currency }) => (
    <TransactonTableRow key={id}>
       <TransactionValues>{type}</TransactionValues>
       <TransactionValues>{amount}</TransactionValues>
       <TransactionValues>{currency}</TransactionValues>
    </TransactonTableRow>
    
    ))}
    
  </TableBody>
</TransactionsTable>
}


TransactionHistory.propTypes = {
  
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};