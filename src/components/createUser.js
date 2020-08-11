import React, { Component } from 'react';
import axios from 'axios'
export class createUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: ''
    };
  }
  onChangeUsername(event) {
    this.setState({
      username: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const user = {
      username: this.state.username
    };

    console.log(user);
    axios.post('http://localhost:5000/users/add',user)
    .then((res) => {
        console.log(res.data)
    })
    this.setState({ username: '' });
  }
  render() {
    return (
      <div>
        <h3>Create new user</h3>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label>Username: </label>
            <input
              type='text'
              required
              className='form-control'
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className='form-group'>
            <input
              type='submit'
              value='Create user'
              className='btn btn-primary'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default createUser;
