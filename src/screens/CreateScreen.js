import React from 'react';
import {Link} from "react-router-dom"
import styled from 'styled-components';
import Header from '../components/Header';
import HorizontalLabelPositionBelowStepper from '../components/Stepper';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const tempAvatar = 'https://firebasestorage.googleapis.com/v0/b/novels-a5884.appspot.com/o/temp%2Ftemp.png?alt=media&token=a4d36af6-f5e8-49ad-b9c0-8b5d4d899c0d'


function getSteps() {
  return ['イメージ画像選択', '会社詳細', '提供詳細'];
}



const steps = getSteps();


class CreateScreen extends React.Component {
  
  
  

  render() {
    
    

    return (
      <div>
        <Header />
        <HorizontalLabelPositionBelowStepper />
      </div>
    );
  }
}



export default CreateScreen
