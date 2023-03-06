import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(
      ({
        avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
        name,
        isOnline,
        id,
      }) => (
        <li key={id}>
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          ></FriendListItem>
        </li>
      )
    )}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
