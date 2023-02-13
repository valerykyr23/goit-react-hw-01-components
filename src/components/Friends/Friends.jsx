import PropTypes from 'prop-types';
import css from "./Friends.module.css";


export const FriendList = ({ friends }) => {
    console.log(friends)
    
    return <div className={css.friends}> <ul className={css.friendList}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li className={css.item} key={id}>
            <span className={isOnline ? css.online : css.offline}>
              {isOnline}
            </span>
            <img className={css.avatar} src={avatar} alt={name} />
            <p className={css.name}>{name}</p>
          </li>
        ))}
      </ul>
   </div>
}    

      

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
}


