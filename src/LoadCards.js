import React from 'react';
import axios from 'axios';
import ProfileCardList from './ProfileCardList';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      // this returns just a super basic list
      // <ul>
      //   {
      //     this.state.persons
      //       .map(person =>
      //         <li key={person.id}>{person.name}</li>
      //       )
      //   }
      // </ul>
      <ProfileCardList profiles={this.state.persons} columns={5} />
    )
  }
}
