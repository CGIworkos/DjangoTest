import React from 'react';

class UsersList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {users: []};
    this.headers = [
      { key: 'id', label: 'ID' },
      { key: 'name', label: 'Name' },
      { key: 'email', label: 'Email' },
      { key: 'address', label: 'Address' }
    ];
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json();
      }).then(result => {
      this.setState({
        users:result
      });
    });
  }
  render() {
    return (
      <table>
        <thead>
        <tr>
          {
            this.headers.map(function(h) {
              return (
                <th key = {h.key}>{h.label}</th>
              )
            })
          }
        </tr>
        </thead>
        <tbody>
        {
          this.state.users.map(function(item, key) {
            return (
              <tr key = {key}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address.street} {item.address.suite} {item.address.city} {item.address.zipcode}</td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    )
  }
}

export default UsersList;