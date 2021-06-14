import styled from "styled-components";
import React from "react";

export const UserNameWithImage = (props) => {
  const { image, name, isAdmin } = props;
  return (
    <SContainer>
      <Simg height={160} width={160} src={image} alt={name}></Simg>
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
};

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