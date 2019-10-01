import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom"
const tempAvatar = 'https://firebasestorage.googleapis.com/v0/b/novels-a5884.appspot.com/o/temp%2Ftemp.png?alt=media&token=a4d36af6-f5e8-49ad-b9c0-8b5d4d899c0d'



const Contents_Box = (data) => {
  var list = [];
  for(var i in data){
    list.push(
      <Probox>
        <Link to = {`/detail/${data[i].id}`} >
        <Proimg src={data[i].image}/>  
        <Texttitle>{data[i].content_title}</Texttitle>
        <Textname>{data[i].company_name}</Textname>
        </Link>
      </Probox>
    );
  }
  return(
    <ul>
      {list}
    </ul>
  );
}

class ProList extends React.Component {

  state={
    list_square:[{
      image:tempAvatar,
      content_title:"インドアセールスの設計の仕方",
      company_name:"Gifts Japan",
    },
    {
      image:tempAvatar,
      content_title:"インドアセールスの設計の仕方",
      company_name:"Gifts Japan",
    }]
  }
  render() {
    return (
      <List_container>
        {Contents_Box(this.state.list_square)}
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
