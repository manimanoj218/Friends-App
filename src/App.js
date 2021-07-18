import "./App.css";
import { useState, useEffect } from "react";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import Search from "./components/Search";

function App() {
  const [friends, setFriends] = useState([
    {
      name: "Manoj",
      tagline: "is your friend",
      isCloseFriend: false,
    },
    {
      name: "Akhil",
      tagline: "is your friend",
      isCloseFriend: false,
    },
    {
      name: "Phani",
      tagline: "is your friend",
      isCloseFriend: false,
    },
    {
      name: "Mohan",
      tagline: "is your friend",
      isCloseFriend: false,
    },
    {
      name: "User1",
      tagline: "is your friend",
      isCloseFriend: false,
    },
    {
      name: "User2",
      tagline: "is your friend",
      isCloseFriend: false,
    },
    {
      name: "User3",
      tagline: "is your friend",
      isCloseFriend: false,
    },
    {
      name: "User4",
      tagline: "is your friend",
      isCloseFriend: false,
    },
    {
      name: "User5",
      tagline: "is your friend",
      isCloseFriend: false,
    },
    {
      name: "User6",
      tagline: "is your friend",
      isCloseFriend: false,
    },
    {
      name: "User7",
      tagline: "is your friend",
      isCloseFriend: false,
    },
    {
      name: "User8",
      tagline: "is your friend",
      isCloseFriend: false,
    },
  ]);

  const [page, setPage] = useState(1);
  const [perPage] = useState(4);
  const [data, setFriendPages] = useState([]);

  const handleUserFavourite = (index) => {
    const newFriends = [...data];
    newFriends[index].isCloseFriend = !newFriends[index].isCloseFriend;
    let values = newFriends.sort((a, b) => {
      return b.isCloseFriend - a.isCloseFriend;
    });
    setFriendPages(values);
  };

  const deleteUser = (index) => {
    const newFriends = friends.filter((fri, i) => i !== index);
    setFriends(newFriends);
  };

  const addFriendContact = (friend) => {
    let obj = {
      name: "",
      tagline: "is your friend",
      isCloseFriend: false,
    };
    obj.name = friend;
    setFriends([obj, ...friends]);
  };

  const nextPage = () => {
    setPage((page) => page + 1);
  };

  const prevPage = () => {
    setPage((page) => page - 1);
  };

  const paginate = (array, page_size, page_number) => {
    let data = array.slice(
      (page_number - 1) * page_size,
      page_number * page_size
    );
    let values = data.sort((a, b) => {
      return b.isCloseFriend - a.isCloseFriend;
    });
    setFriendPages(values);
  };

  const searchedData = (value) => {
    if (value !== "") {
      let userData = friends
        .filter((item) => item.name.toLowerCase().includes(value))
        .sort(
          (a, b) =>
            a.name.toLowerCase().indexOf(value.toLowerCase()) -
            b.name.toLowerCase().indexOf(value.toLowerCase())
        );
      if (userData.length > 0) {
        setFriendPages(userData);
      } else {
        alert("No Data is Available");
        return;
      }
    } else {
      paginate(friends, perPage, page);
    }
  };

  useEffect(() => {
    const friendsData = [...friends];
    paginate(friendsData, perPage, page);
  }, [page, friends, perPage]);

  return (
    <div className="App">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card">
              <div
                className="card-header py-1 px-2"
                style={{ backgroundColor: "#4cab6e" }}
              >
                <div className="d-flex align-items-center justify-content-between">
                  <h6 className="text-left mb-0">Friends List</h6>
                  <Search handleSearch={searchedData} />
                </div>
              </div>
              <div
                className="card-body p-1"
                style={{ backgroundColor: "#282a35" }}
              >
                <AddFriend handleUserName={addFriendContact} />
                <FriendsList
                  friends={data}
                  getUserFavourite={handleUserFavourite}
                  handleUserDelete={deleteUser}
                />
              </div>
              <div
                className="card-footer py-1"
                style={{ backgroundColor: "#4cab6e" }}
              >
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    disabled={page <= 1}
                    className="btn btn-sm btn-dark"
                    onClick={prevPage}
                  >
                    prev
                  </button>
                  &nbsp;
                  <button
                    type="button"
                    onClick={nextPage}
                    disabled={page * perPage >= friends.length}
                    className="btn btn-sm btn-dark"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
