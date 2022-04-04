import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  border-top-left-radius:4px;
  border-top-right-radius:4px;
`;

const Announcement = () => {
  return <Container>30 Day Convenience Fee Free For Rafer* </Container>;
};

export default Announcement;