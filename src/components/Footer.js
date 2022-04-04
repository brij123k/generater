import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Room,
    Twitter,
  } from "@material-ui/icons";
  import styled from "styled-components";
  import { mobile } from "../responsive";
  
  const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    font-size: 10px;
    font-weight: bolder;
  `;
  
  
  const Logo = styled.h1``;
  const Desc = styled.p`
    margin: 20px 0px;
    
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>BIDULOG.</Logo>
          <Desc>
           Most people fail, not because of lack of
           desire, but, because of lack of commitment.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> Indraprastha
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +919910948594
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> HEALTHOO@GMAIL.COM
          </ContactItem>
        </Right>
      </Container>
    );
  };
  
  export default Footer;