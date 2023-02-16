import PropTypes from 'prop-types';
import { TransactionsTable,TransactionsHeadRow,TransactionsLabels,TransactionValues,TransactonTableRow } from "./Transactions.styled";

export const TransactionHistory = ({ items }) => {
    return <TransactionsTable>
  <thead>
    <TransactionsHeadRow>
      <TransactionsLabels>Type</TransactionsLabels>
      <TransactionsLabels>Amount</TransactionsLabels>
      <TransactionsLabels>Currency</TransactionsLabels>
    </TransactionsHeadRow>
  </thead>

  <tbody>
    
            {items.map(({ id, type, amount, currency }) => (
    <TransactonTableRow key={id}>
       <TransactionValues>{type}</TransactionValues>
       <TransactionValues>{amount}</TransactionValues>
       <TransactionValues>{currency}</TransactionValues>
    </TransactonTableRow>
    
    ))}
    
  </tbody>
</TransactionsTable>
}


TransactionHistory.propTypes = {
  
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};