import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUsersList } from "../store/actions";
import UsersList from "./UsersList";
import styled from 'styled-components';
import {MdError} from 'react-icons/md'

const Error = styled.div `
  font-family: sans-serif;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 4fr;
  justify-content: center;
  align-items: center;
  font-size: 4em;
  background-color: red;
  color: white;
  >svg {
    margin: 0 auto;
  }
  >span {
    text-align: center;
  }

`


class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getUsersList();
    
  }

  openTabInNewWindow = url => {
    return window.open(url, "_blank");
  };
  render() {
    return (
      <div className="App">
        {!this.props.error.status ?
        <UsersList
          users={this.props.users}
          fullUserInfo={this.props.fullUserInfo}
          totalStars={this.props.totalStars}
        />
        : <Error><MdError /><span>{this.props.error.error}</span></Error>}
      </div>
      
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    fullUserInfo: state.fullUserInfo,
    totalStars: state.totalStars,
    error: state.error
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getUsersList,
      
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
