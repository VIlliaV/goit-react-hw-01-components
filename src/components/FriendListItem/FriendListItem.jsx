export const FriendListItem = ({ avatar, name, isOnline }) => (
  <>
    <span className={isOnline ? 'isOnline' : ''}></span>
    <img className="avatar" src={avatar} alt={name + ' avatar'} width="48" />
    <p className="name">{name}</p>
  </>
);
