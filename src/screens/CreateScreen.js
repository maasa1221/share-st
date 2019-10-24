import React from "react";
import Header from "../components/Header";
import Stepper from "../components/Stepper";

const tempAvatar =
  "https://firebasestorage.googleapis.com/v0/b/novels-a5884.appspot.com/o/temp%2Ftemp.png?alt=media&token=a4d36af6-f5e8-49ad-b9c0-8b5d4d899c0d";

class CreateScreen extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Stepper />
      </div>
    );
  }
}

export default CreateScreen;
