import styled from "styled-components";

export const Container = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: center;
  background: ${(props) => props.back};
  padding: 30px;
  /* max-width: 1200px; */
`;

export const InnerContainer = styled.div`
  width: 100%;
  /* height: 100vh; */
  max-width: 1200px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
`;

export const Title = styled.h2`
  color: #20b2aa;
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 20px;
`;
