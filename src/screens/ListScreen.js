import React from 'react';
//import styled from 'styled-components';
import Header from '../components/Header';
import List from '../components/List';
class ListScreen extends React.Component {
    state = {
    }
  
    componentWillMount() {
      
    }
  
    render() {
      return (
        <div >
          <Header />
          <div>
            <List />
          </div>
        </div>
        
      );
    }
  }
  
  
  export default ListScreen
  