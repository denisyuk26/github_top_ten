import React from "react";
import { MdLocationOn, MdStar, MdPeopleOutline } from "react-icons/md";
import styled from "styled-components";

export default function UserCard(props) {
  return props.fullUserInfo.map(user => {
    return (
      <StyledCard key={user.data.id}>
        <Container>
          <UserAvatar src={user.data.avatar_url} alt="ava" />
          <TextContainer>
            <NameBlock>
              <UserLink href={user.data.html_url} target="_blank">
                {user.data.login}
              </UserLink>
              <UserName>{user.data.name}</UserName>
            </NameBlock>
            <Bio>{user.data.bio}</Bio>
            <IconsBlock>
              <IconsInfo>
                <MdLocationOn />
                <span>{user.data.location}</span>
              </IconsInfo>
              <IconsInfo className="stars">
                <MdStar /> <span>{user.stars}</span>
              </IconsInfo>
              <IconsInfo className="followers">
                <MdPeopleOutline />
                <span>{user.data.followers}</span>
              </IconsInfo>
            </IconsBlock>
          </TextContainer>
        </Container>
      </StyledCard>
    );
  });
}

//styles
const StyledCard = styled.li`
  border-bottom: 1px solid #00000024;
  padding-bottom: 5px;
  margin: 20px 0;
`;

const Container = styled.div`
  font-family: sans-serif;
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const UserAvatar = styled.img`
  max-width: 8vw;
  width: 100%;
  border-radius: 0.4vw;
  align-self: center;
  justify-self: center;
`;

const TextContainer = styled.div`
  display: grid;

  grid-auto-rows: minmax(0, 5vh);
  align-items: center;
`;

const NameBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

const UserLink = styled.a`
  cursor: pointer;
  margin: 0;
  font-size: 1.2em;
  color: blue;
  text-decoration: none;
`;

const UserName = styled.span`
  padding-left: 10px;
  font-size: 1em;
  padding-top: 2px;
`;

const Bio = styled.p`
  font-size: 1em;
`;
const IconsBlock = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const IconsInfo = styled.div`
  padding-right: 15px;
  max-height: 20px;
  display: flex;
  margin: 0;
  > svg {
    color: #00000070;
    font-size: 1em;
  }
  > span {
    align-self: center;
    font-size: 0.8em;
  }
`;
