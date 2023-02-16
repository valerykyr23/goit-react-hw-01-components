import PropTypes from 'prop-types';
import { FriendsListItem,FriendStatusOnline, FriendAvatar,FriendName } from "./Friends.styled";

export const FriendListItem = ({ avatar, name, isOnline }) => {

    return <FriendsListItem>
            <FriendStatusOnline>
              {isOnline}
            </FriendStatusOnline>
            <FriendAvatar src={avatar} alt={name} />
            <FriendName>{name}</FriendName>
          </FriendsListItem>
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

/* <span className={isOnline ? css.online : css.offline}>
              {isOnline}
            </span> */

            // FriendStatusOffline,