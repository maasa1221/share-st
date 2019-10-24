import React from 'react';
import {Link} from "react-router-dom"
import styled from 'styled-components';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

class CreateScreen extends React.Component {
  
  render() {
    return (
      <div >
        <Header />
        <Sidebar /> 
      </div>
    );
  }
}



export default CreateScreen
