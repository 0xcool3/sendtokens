import styled from "@emotion/styled";

const Container = styled.div<any>`
  width: ${(props) => props.width || "200px"};
  height: ${(props) => props.height || "30px"};
  margin-top: ${(props) => props.mt || "7px"};
  font-family:"Source Han Sans Old Style";
`;

export const ButtonContainer = (props: any) => {
  return (
    <Container width={props.width} height={props.height} mt={props.mt}>
      {props.children}
    </Container>
  );
};
