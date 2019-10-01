import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom"
import freeee from './freeee.png'
import freeee_logo from './freeee_logo.png'
import new_tag from './new_tag.png'
const tempAvatar = 'https://firebasestorage.googleapis.com/v0/b/novels-a5884.appspot.com/o/temp%2Ftemp.png?alt=media&token=a4d36af6-f5e8-49ad-b9c0-8b5d4d899c0d'



const Contents_Box = (data) => {
  var list = [];
  for(var i in data){
    list.push(
      <Link to = {`/detail/${data[i].id}`} style={{ textDecoration: 'none' }} >
        <Probox>
          <ImagePhoto src={data[i].image}/> 
          <Comp_about_box>
            <Tag src={data[i].tag}/> 
            <Texttitle>{data[i].content_title}</Texttitle>
            <Comp_profile>
              <Proimg src={data[i].logo}/>
              <Textname>{data[i].company_name}</Textname>
            </Comp_profile>
          </Comp_about_box>
        </Probox>
      </Link>
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
    list_square:[
        {
        image:freeee,
        tag:new_tag,
        logo:freeee_logo,
        content_title:"会社を伸ばす攻めのバックオフィスクラウドERP",
        company_name:"freeee 株式会社",
        },
        {
          image:tempAvatar,
          tag:new_tag,
          content_title:"インドアセールスの設計の仕方",
          company_name:"Gifts Japan",
        },
        {
          image:freeee,
          tag:new_tag,
          content_title:"会社を伸ばす攻めのバックオフィスクラウドERP",
          company_name:"freeee 株式会社",
          },
      ]
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
  width:  50px;       
  height: 50px; 
  position: relative;
  margin-right: 15px;
`;

const ImagePhoto = styled.img`
  height: 200px;
  position: relative;
`;

const Tag = styled.img`
  display: block;
  height: 30px;
  position: relative;
`;

const List_container = styled.div`
  width: 70%;
  margin: auto;
`;
const Texttitle = styled.p`
  font-size: 25px;
  position: relative;
  color: #000;
  font-weight:bold; 
`;
const Textname = styled.p`
  font-size: 20px;
  display: flex;
  align-items: center;
  height: 50px;
  position: relative;
  color: #000;
`;
const Probox = styled.div`
  margin: 20px auto 40px;
  padding: 40px;
  border-bottom: solid #ddd;
  width: 60%;
  text-align:center;
  display: block;
  &:hover {
    background-color: #eee;
    color: white;
    text-decoration: none;}
`;

const Comp_profile = styled.div`
  display: inline-box;
`;

const Comp_about_box = styled.div`
width: 80%;
margin: 20px auto 0px;
text-align:left;
`;

export default ProList;
