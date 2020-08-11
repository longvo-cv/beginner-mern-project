import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
class createExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/').then((res) => {
      if (res.data.length > 0) {
        this.setState({
          users: res.data.map((user) => user.username),
          username: res.data[0].username
        });
      }
    });
  }

  onChangeUsername(event) {
    this.setState({
      username: event.target.value
    });
  }
  onChangeDescription(event) {
    this.setState({
      description: event.target.value
    });
  }
  onChangeDuration(event) {
    this.setState({
      duration: event.target.value
    });
  }
  onChangeDate(date) {
    this.setState({
      date: date
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    };
    console.log(exercise);
    axios.post('http://localhost:5000/exercises/add', exercise).then((res) => {
      console.log(res.data);
    });
    window.location = '/';
  }
  render() {
    return (
      <div>
        <h3>New Exercise</h3>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label>Username: </label>
            <select
              ref='userInput'
              required
              className='form-control'
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map(function(user) {
                //for each user in array, return this
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className='form-group'>
            <label>Description: </label>
            <input
              type='text'
              required
              className='form-control'
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className='form-group'>
            <label>Duration: </label>
            <input
              type='text'
              required
              className='form-control'
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>
          <div className='form-group'>
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>
          <div className='form-group'>
            <input
              type='submit'
              value='New Exercise'
              className='btn btn-primary'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default createExercise;
