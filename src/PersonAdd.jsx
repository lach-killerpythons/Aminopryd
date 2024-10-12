import React, {useState} from "react";
import axios from 'axios';

export default function PersonAdd() {

  let randomUserName = (input) => {
    return input + "123";
  }

  const [profile, setProfile] = useState({});


  // handleChange = event => {
  //   this.setState({ name: event.target.value, username: this.randomUserName(event.target.value) });
  // }

  const handleChange = ({ target }) => {
    const {name, value} = target;
    setProfile((prevProfile) => ({
    // ... spread operator => fill the previous state array
      ...prevProfile,
      // Computed property name -> use the string by the name variable as property key
      [name]: value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();


    // if you used the syntax above it would create a separate entry for "users"

    //axios.post(`http://localhost:3000/users`, { name: this.state.name, username: this.state.username })
    axios.post(`http://localhost:3000/users`, { name: profile.name, username: profile.username, email: profile.email })
      .then(res => {
        console.log(res);
        console.log(res.data);
        window.location.reload();
    })



  }

  return (
      <div>
        <h1>Add new person to database!🤺</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Person Name:
            <input 
            type="text" 
            name="name" 
            value={profile.name || ''}
            onChange={handleChange} />
          </label>
          <label>
            Username:
            <input 
            type="text"
            name="username"
            value={profile.username || ''}
            onChange={handleChange} />
          </label>
          <label>
            Email:
            <input 
            type="text"
            name="email"
            value={profile.email || ''}
            onChange={handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
  );
}
