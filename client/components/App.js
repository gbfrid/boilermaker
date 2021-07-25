import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.username);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input name='username' type="text" value={this.state.value} onChange={this.handleChange} />
        </label>

        <label>
          Password:
          <input name='password' type="password" value={this.state.value} onChange={this.handleChange} />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
