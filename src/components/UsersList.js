import React from "react";
import UserCard from "./UserCard"
import styled from 'styled-components';


const StyledUsersList = styled.ul`
margin: 0;
padding: 0;
    padding-inline-start: 0;
    list-style-type: none;
`

export default function UsersList (props) {
    return (
        <StyledUsersList><UserCard fullUserInfo={props.fullUserInfo} totalStars={props.totalStars}/></StyledUsersList>
    );
}

