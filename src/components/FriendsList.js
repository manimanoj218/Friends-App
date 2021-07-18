import React from "react";
import "../App.css";

const FriendsList = ({ friends, getUserFavourite, handleUserDelete }) => {
  const handleFriendCloseOrRemove = (type, index) => {
    if (type === "isClose") {
      getUserFavourite(index);
    } else {
      handleUserDelete(index);
    }
  };

  return (
    <div>
      <ul className="list-group list-group-flush">
        {friends && friends.length > 0
          ? friends.map((friend, index) => (
              <li
                key={index}
                style={{
                  backgroundColor: "#282a35",
                }}
                className="list-group-item py-1 px-3 shadow-lg"
              >
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="m-0 friend-name text-left whiteColor">
                      {friend.name}
                    </p>
                    <p className="m-0 friend-tagline text-left">
                      {friend.tagline}
                    </p>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-sm py-1 px-2"
                      onClick={() =>
                        handleFriendCloseOrRemove("isClose", index)
                      }
                    >
                      <i
                        className={`whiteColor ${
                          friend.isCloseFriend ? "fas fa-star" : "far fa-star"
                        }`}
                      ></i>
                    </button>
                    &nbsp;
                    {/* onClick={() => handleFriendCloseOrRemove("delete", index)} */}
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-sm py-1 px-2"
                      onClick={(e) =>
                        window.confirm(
                          "Are you sure you wish to delete this item?"
                        ) && handleFriendCloseOrRemove("delete", index)
                      }
                    >
                      <i className="fas fa-trash-alt whiteColor"></i>
                    </button>
                  </div>
                </div>
              </li>
            ))
          : "No Friends Data"}
      </ul>
    </div>
  );
};

export default FriendsList;
