import styled from "@emotion/styled";

const Container = styled.div`
  width: 282px;
  height: 124px;
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: center;
  text-align: center;
  //   margin-top: 3px;
`;

const Title = styled.div`
  width: 282px;
  height: 86px;

  font-style: normal;
  font-weight: 700;
  font-size: 72px;
  line-height: 120%;

  text-align: center;
  letter-spacing: -0.03em;
`;

const Subtitle = styled.div`
  width: 209px;
  height: 38px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 120%;
  letter-spacing: 0.8px;
`;

export const Panelname = ({ title, subtitle }: any) => {
  return (
    <Container>
      <Title className="text-default-600 dark:text-[#f3f3f3]">{title}</Title>
      <Subtitle className="text-default-400 dark:text-[#757575]">
        {subtitle}
      </Subtitle>
    </Container>
  );
};
