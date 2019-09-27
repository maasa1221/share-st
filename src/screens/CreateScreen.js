import React from 'react';
import {Link} from "react-router-dom"
import styled from 'styled-components';
import Header from '../components/Header';
const tempAvatar = 'https://firebasestorage.googleapis.com/v0/b/novels-a5884.appspot.com/o/temp%2Ftemp.png?alt=media&token=a4d36af6-f5e8-49ad-b9c0-8b5d4d899c0d'

class CreateScreen extends React.Component {
  
  render() {
    return (
      <Create_contena>
        <Header />
        <p >
        提供方法
        </p>
        <p >
        イメージ画像
        </p>
        <Proimg src={tempAvatar}/><br/>
        <input 
          type="file"
          id="avatar" 
          name="avatar"
          accept="image/png, image/jpeg"
       />
       <br/>
        <Input_box>
          <p >
          プラン名：
          </p>
          <input
            placeholder="名前"
          />
        </Input_box>
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
        <br/>
       <button>
        <Link to={`/home`}>作成</Link>
       </button>
      </Create_contena>
    );
  }
}

const Proimg = styled.img`
border-radius: 50%; 
width:  150px;       
height: 150px; 
`;
const Create_contena = styled.div`
text-align: center;

`;

const Input_box = styled.div`
display: inline-box;
margin: 50px;
padding: auto;
`;


export default CreateScreen
