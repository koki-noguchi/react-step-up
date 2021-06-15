import { memo } from "react";
import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { Input } from "../atoms/input/Input";

export const SearchInput = memo(() => {
  console.log("SearchInput");
  return (
    <SContainer>
      <SButtonWrapper>
        <Input placeholder="検索条件を入力してください" />
        <SecondaryButton>検索</SecondaryButton>
      </SButtonWrapper>
    </SContainer>
  );
});

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;
