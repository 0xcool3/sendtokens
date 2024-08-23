import styled from "@emotion/styled";

const Container = styled.div`
  width: 256px;
  height: 54px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 10px;
  margin-bottom:6px;
`;

const Role = styled.div`
  width: 224px;
  height: 20px;

  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 140%;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

//   letter-spacing: 0.1px;
`;

const Name = styled.div`
  width: 224px;
  height: 22px;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

   
`;

export const Username = ({ role, name }: any) => {
  return (
    <Container>
      <Role className="text-default-400 dark:text-[#b9b9b9]">{role}</Role>
      <Name className="text-default-600 dark:text-[#ffffff]">{name}</Name>
    </Container>
  );
};
