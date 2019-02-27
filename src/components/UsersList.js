import React, { Component } from "react";
import UserCard from "./UserCard"
import styled from 'styled-components';


const StyledUsersList = styled.ul`
margin: 0;
padding: 0;
    padding-inline-start: 0;
    list-style-type: none;
`

export default class UsersList extends Component {
  render() {
    return (
        <StyledUsersList><UserCard fullUserInfo={this.props.fullUserInfo} totalStars={this.props.totalStars}/></StyledUsersList>
    );
  }
}

