import PropTypes from 'prop-types';
import { ProfileContainer,ProfileDescription,ProfileAvatar, ProfileName, ProfileTag,ProfileLocation,UserStats,UserStatsItem,StatsQuantity,StatsLabel } from "./Profile.styled";


export const Profile = ({ username, tag, location, avatar, stats }) => {
    return <ProfileContainer>
  <ProfileDescription>
    <ProfileAvatar
      src={avatar}
      alt="User avatar"
    />
            <ProfileName>{username}</ProfileName>
            <ProfileTag>{tag}</ProfileTag>
            <ProfileLocation>{location}</ProfileLocation>
  </ProfileDescription>

  <UserStats>
    <UserStatsItem>
      <StatsLabel>Followers</StatsLabel>
      <StatsQuantity>{stats.followers}</StatsQuantity>
    </UserStatsItem>
    <UserStatsItem>
      <StatsLabel>Views</StatsLabel>
      <StatsQuantity>{stats.views}</StatsQuantity>
    </UserStatsItem>
    <UserStatsItem>
      <StatsLabel>Likes</StatsLabel>
      <StatsQuantity>{stats.likes}</StatsQuantity>
    </UserStatsItem>
  </UserStats>
</ProfileContainer>
}


Profile.propTypes = {

    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  
};