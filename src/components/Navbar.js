import { MoreVertOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useNavigate } from 'react-router'


const Container = styled.div`
  background-color:goldenrod;
  height:60px;
  box-shadow: 0 0 12px whitesmoke;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;


const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px",marginLeft:"3rem" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  font-weight: bold;
  cursor: pointer;
  ${mobile({ fontSize: "12px", marginLeft: "4rem" })}
`;

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Left>
         <MoreVertOutlined/>
        </Left>
        <Center>
        <Logo>BIDULOG.</Logo>
        </Center>
        <Right>
           <MenuItem  onClick={()=>navigate('/Loginpage')}>SIGN IN</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;