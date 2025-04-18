import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "../Components/user.jsx";
import { Link } from "react-router-dom";

function Home() {
  const [users, SetUsers] = useState([]);

  async function fetchUsers() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    SetUsers(data);
    console.log(data);
  }
  useEffect(() => {
    setTimeout(() => {}, 500);
    fetchUsers();
  }, []);

    return (
    <div>
      {users.map((user) => (
      <Link to={`/users/${user.id}`} key={user.id} >
      <User 
      id={user.id} 
      name={user.name} 
      email={user.email} 
      username={user.username} 
      />
      </Link>
      ))}
    </div>
  );
}

export default Home;
