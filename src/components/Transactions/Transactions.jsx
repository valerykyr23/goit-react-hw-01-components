import PropTypes from 'prop-types';
import css from "./Transactions.module.css";

export const TransactionHistory = ({ items }) => {
    return <table className={css.transaction_history}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    
            {items.map(({ id, type, amount, currency }) => (
    <tr key={id}>
       <td>{type}</td>
       <td>{amount}</td>
       <td>{currency}</td>
    </tr>
    
    ))}
    
  </tbody>
</table>
}

// {friends.map(({ avatar, name, isOnline, id }) => (
//           <li className={css.item} key={id}>
//             <span className={isOnline ? css.online : css.offline}>
//               {isOnline}
//             </span>
//             <img className={css.avatar} src={avatar} alt={name} />
//             <p className={css.name}>{name}</p>
//           </li>
//         ))}