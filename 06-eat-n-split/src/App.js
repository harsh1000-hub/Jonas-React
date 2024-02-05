import { useState } from "react";
import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import Button from "./components/Button";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  // create a state for Show FormAddFriend
  const [showAddFriend, setShowAddFriend] = useState(false);

  // create a common state that is used in FriendsList and FormAddFriend component
  const [friends, setFriends] = useState(initialFriends);

  // create a common state that is used in FriendList and Split Bill
  const [selectedFriend, setSelectedFriend] = useState(null);

  // update the state for setShowAddFriend
  function handleSetShowAddFriend() {
    setShowAddFriend((item) => !item);
  }

  // handleSetFriends function
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    // after the submitting the form then change the state of showAddFriend to false so that form will hide
    setShowAddFriend(false);
  }

  // update the state for setSelectedFriend
  function handleSelectedFriend(friend) {
    setSelectedFriend((currentSelectedFriend) =>
      currentSelectedFriend?.id === friend.id ? null : friend
    );
    setShowAddFriend(false);
  }

  // handleSplitBill function
  function handleSplitBill(value) {
    // console.log(value);
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    // reset the selectedFriend state after split operation done
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelectionFriend={handleSelectedFriend}
          currentlySelectedFriend={selectedFriend}
        />
        {showAddFriend === true && (
          <FormAddFriend onAddFriend={handleAddFriend} />
        )}
        <Button onClick={handleSetShowAddFriend}>
          {/* below conditional rendering if showAddFriend is false then show AddFriend and otherwise show Close*/}
          {showAddFriend === false ? "Add Friend" : "Close"}
        </Button>
      </div>
      {selectedFriend !== null && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
      {/* above line conditionally render the FormSplitBoll when user click on select a particular friends */}
    </div>
  );
}

export default App;
