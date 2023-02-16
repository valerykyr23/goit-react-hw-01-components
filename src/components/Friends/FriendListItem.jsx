import PropTypes from 'prop-types';
import { StatusItem, FriendAvatar,FriendName,FriendsListItem} from "./Friends.styled";

export const FriendListItem = ({ avatar, name, isOnline}) => {

    return <FriendsListItem>
            <StatusItem status={isOnline}>
            </StatusItem>
            <FriendAvatar src={avatar} alt={name} />
            <FriendName>{name}</FriendName>
          </FriendsListItem>
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

