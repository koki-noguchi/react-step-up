import styled from "styled-components";
import React, { memo, useContext } from "react";
import { UserContext } from "../../provider/UserProvider";

export const UserNameWithImage = memo((props) => {
  console.log("UserNameWithImage");
  const { image, name } = props;
  const { userInfo } = useContext(UserContext);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SContainer>
      <Simg height={160} width={160} src={image} alt={name}></Simg>
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;

const Simg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0px;
  color: #40514e;
`;

const SEdit = styled.span`
  color: #aaa;
  text-decoration: underline;
`;
