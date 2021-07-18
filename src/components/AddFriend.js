import React, { useState } from "react";

const AddFriend = ({ handleUserName }) => {
  const [name, setName] = useState("");

  const addFriend = (e) => {
    e.preventDefault();
    if (name !== "" && name !== undefined) {
      handleUserName(name);
      setName("");
    } else {
      alert("Name is reqired");
      return;
    }
  };
  return (
    <form onSubmit={addFriend}>
      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-sm"
          placeholder="Enter Name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </form>
  );
};

export default AddFriend;
