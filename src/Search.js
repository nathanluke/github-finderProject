import React, { Component } from "react";
import PropTypes from "prop-types";

export class search extends Component {
  state = {
    text: ""
  };

  static propTypes = {
    SearchUsers: PropTypes.func.isRequired,
    ClearUsers: PropTypes.func.isRequired,
    ShowClear: PropTypes.bool.isRequired,
    setAlert:PropTypes.func.isRequired
  };

  onSubmit = event => {
    event.preventDefault();
    if(this.state.text === '') {
      this.props.setAlert('oops! you did not enter anything', 'light');

    } else {

      this.props.SearchUsers(this.state.text);
      this.setState({ text: "" });

      }
  };

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });
  render() {
    const { ShowClear,ClearUsers } = this.props;

    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="search users..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="search"
            className="btn btn-dark btn-block"
          />
        </form>
        {ShowClear && (
          <button
            className="btn btn-light btn-block"
            onClick={ClearUsers}
          >
            clear
          </button>
        )}
      </div>
    );
  }
}

export default search;
