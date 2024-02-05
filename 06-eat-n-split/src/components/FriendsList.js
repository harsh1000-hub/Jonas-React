import Button from "./Button";

// FriendList Component
export default function FriendsList({
  friends,
  onSelectionFriend,
  currentlySelectedFriend,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelectionFriend={onSelectionFriend}
          currentlySelectedFriend={currentlySelectedFriend}
        />
      ))}
    </ul>
  );
}

// Specific friend component
function Friend({ friend, onSelectionFriend, currentlySelectedFriend }) {
  const isSelectedFriend = friend.id === currentlySelectedFriend?.id;

  return (
    <li className={isSelectedFriend ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 ? (
        <p className="red">
          You owe {friend.name} Rs. {Math.abs(friend.balance)}
        </p>
      ) : friend.balance === 0 ? (
        <p>You and {friend.name} are even</p>
      ) : (
        <p className="green">
          {friend.name} owe you Rs. {friend.balance}
        </p>
      )}
      <Button onClick={() => onSelectionFriend(friend)}>
        {isSelectedFriend ? "Close" : "Select"}
      </Button>
    </li>
  );
}
