import React, { Component } from "react";
import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import alert from "./components/layouts/alert";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    loading: false,
    users: [],
    alert: null
  };

  // this will search for the github users.
  SearchUsers = async text => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: response.data.items, loading: false });
  };
  // clear the users.
  ClearUsers = () => this.setState({ users: [], loading: false });

  // this is the alert.
  setAlert = (message, type) => {
    this.setState({ Alert: { message, type } });


    setTimeout(() => {
      this.setState({ alert : null })
    }, 5000);
  }



  render() {
    const { users, loading }= this.state;
    return (
      <div className="Apps">
        <Navbar />
        <div className="container">
          <alert alert={this.state.alert} />
          <Search
            SearchUsers={this.SearchUsers}
            ClearUsers={this.ClearUsers}
            ShowClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
