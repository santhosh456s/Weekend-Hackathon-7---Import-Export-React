import React, { Component, useState } from "react";
import '../styles/App.css';
import Heading from './Heading';
import SubHeading from './subheading';
import InputQuery from './InputQuery';
import SubmitButton from './SubmitButton';
const App = () => {
  return (
    <div id="main">
      <Heading />
      <InputQuery  />
      <SubHeading />
      <SubmitButton />
    </div>
  )
}
export default App;


