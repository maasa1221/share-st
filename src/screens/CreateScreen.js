import React from 'react';
import {Link} from "react-router-dom"
import styled from 'styled-components';
const tempAvatar = 'https://firebasestorage.googleapis.com/v0/b/novels-a5884.appspot.com/o/temp%2Ftemp.png?alt=media&token=a4d36af6-f5e8-49ad-b9c0-8b5d4d899c0d'

class CreateScreen extends React.Component {
  
  render() {
    return (
      <div >
        <p >
        名前
        </p>
        <input
          
          placeholder="名前"
          />
        <p >
        身長
        </p>
        <input
          
          placeholder="例:170"
        />
        <p >
        年齢
        </p>
        <input
          
          placeholder="例:22"
        />
        <p >
        プロフィール画像
        </p>
        <Proimg src={tempAvatar}/>  
        <input 
          type="file"
          id="avatar" 
          name="avatar"
          accept="image/png, image/jpeg"
       />
       <button name="check">
       <Link to={`/home`}>作成</Link>
        </button>
      </div>
    );
  }
}

const Proimg = styled.img`
border-radius: 50%; 
width:  150px;       
height: 150px; 
`;


export default CreateScreen
