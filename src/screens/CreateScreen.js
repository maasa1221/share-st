import React from 'react';
import {Link} from "react-router-dom"
import styled from 'styled-components';
import Header from '../components/Header';
const tempAvatar = 'https://firebasestorage.googleapis.com/v0/b/novels-a5884.appspot.com/o/temp%2Ftemp.png?alt=media&token=a4d36af6-f5e8-49ad-b9c0-8b5d4d899c0d'

class CreateScreen extends React.Component {
  
  render() {
    return (
      <div >
        <Header />

        <p >
        提供方法
        </p>
        <Proimg src={tempAvatar}/>  
        <input 
          type="file"
          id="avatar" 
          name="avatar"
          accept="image/png, image/jpeg"
       />
        <p >
        プラン名
        </p>
        <input
          placeholder="名前"
          />
        <p >
        会社名
        </p>
        <input
          placeholder="例:170"
        />
        <p >
        価格
        </p>
        <input
          placeholder="例:22"
        />
        <p >
        提供方法
        </p>
        <input
          placeholder="例:22"
        />
        <p >
        詳細
        </p>
        <input
          placeholder="例:22"
        />
        
       <button>
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
