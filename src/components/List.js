import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom"
const tempAvatar = 'https://firebasestorage.googleapis.com/v0/b/novels-a5884.appspot.com/o/temp%2Ftemp.png?alt=media&token=a4d36af6-f5e8-49ad-b9c0-8b5d4d899c0d'

class ProList extends React.Component {
  render() {
    return (
      <List_container>
        <Probox>
        <Proimg src={tempAvatar}/>  
        <Texttitle>インドアセールスの設計の仕方</Texttitle>
        <Textname>Gifts Japan</Textname>
        </Probox>

        <Probox>
        <Proimg src={tempAvatar}/>  
        <Texttitle>インドアセールスの設計の仕方</Texttitle>
        <Textname>Gifts Japan</Textname>
        </Probox>

        <Probox>
        <Proimg src={tempAvatar}/>  
        <Texttitle>インドアセールスの設計の仕方</Texttitle>
        <Textname>Gifts Japan</Textname>
        </Probox>
      </List_container>
    );
  }
}

const Proimg = styled.img`
  border-radius: 50%; 
  width:  150px;       
  height: 150px; 
  position: relative;
`;
const List_container = styled.div`
  width: 80%;
  margin: auto;
`;
const Texttitle = styled.p`
  font-size: 25px;
  position: relative;
`;
const Textname = styled.p`
  font-size: 20px;
  position: relative;
`;
const Probox = styled.div`
  margin: 10px;
  padding: 5px;
  border: solid #ddd;
  width: 30%;
  text-align:center;
  display: inline-block;
`;


export default ProList;
