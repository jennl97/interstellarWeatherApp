import React, { useState } from "react";
import styled from "styled-components";

//Styled Components
const DropDownContainer = styled("div")`
width: 80%;
margin: 0 auto;
`;

const DropDownHeader = styled("div")`
margin-bottom: 0.8em;
padding: 0.4em 2em 0.4em 1em;
box-shadow: 0 2px 3px #00699480;
font-weight: 500;
font-size: 1.3em;
color: #000;
background: #fff;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
padding-left: 1em;
background: #00699480;
border: 1px solid #00699480;
box-sizing: border-box;
color: #fff;
font-weight: 400;
font-size: 1.2em;
&:first-child{
    padding-top: 0.8em;
}
`;

const ListItem = styled("li")`
list-style: none;
margin-bottom: 0.8em;
`;

function Dropdown(){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
    <DropDownContainer>
    <DropDownHeader onClick={toggle}>Select Planet To Visit</DropDownHeader>
    {isOpen && (
  <DropDownListContainer>
  <DropDownList>
    <ListItem>Mercury</ListItem>
    <ListItem>Venus</ListItem>
    <ListItem>Earth</ListItem>
    <ListItem>Mars</ListItem>
    <ListItem>Jupiter</ListItem>
    <ListItem>Saturn</ListItem>
    <ListItem>Uranus</ListItem>
    <ListItem>Neptune</ListItem>
    <ListItem>Pluto</ListItem>
  </DropDownList>
  </DropDownListContainer>
    )}
  </DropDownContainer>
    )
}

export default Dropdown;