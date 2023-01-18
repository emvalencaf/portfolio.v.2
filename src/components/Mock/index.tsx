import * as Styled from "./styles";

export type MockProps = {
  title?: string;
};

const Mock = ({ title = "Change-me" }: MockProps) => {
  return (
    <Styled.Wrapper>
      <h1>{title}</h1>
    </Styled.Wrapper>
  );
};

export default Mock;
