import PropTypes from 'prop-types';
import { FriendListItem } from "./FriendListItem";
import { FriendsContainer, FriendsList } from "./Friends.styled";


export const FriendList = ({ friends }) => {

    
  return <FriendsContainer>
    
    <FriendsList>
        {friends.map((item) => (
          <FriendListItem
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          key={item.id}/>
        ))}
    </FriendsList>
    
   </FriendsContainer>
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
      

