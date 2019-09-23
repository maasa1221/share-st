import React from 'react';
import styled from 'styled-components';
import logo from './logo.png'
import {Link} from "react-router-dom"
class Header extends React.Component {
    render() {
      return (
        <div >
          <Headimg src= {logo} />  
          <botton>
              <Link to = {`/list`}> ログイン</Link>
          </botton>
          <botton>
              <Link to = {`/list`}> 新規登録</Link>
          </botton>
          <p></p>
        </div>
      );
    }
  }
  
  const Headimg = styled.img`
    margin: 10px
    height: 50px; 
    `;
  
  export default Header;
  