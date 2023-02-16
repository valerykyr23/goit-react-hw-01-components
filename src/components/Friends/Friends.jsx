import PropTypes from 'prop-types';
import css from "./Friends.module.css";
import { FriendListItem } from "./FriendListItem";


export const FriendList = ({ friends }) => {

    
  return <div className={css.friends}>
    
    <ul className={css.friendList}>
        {friends.map((item) => (
          <FriendListItem
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          key={item.id}/>
        ))}
    </ul>
    
   </div>
}    


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
      

