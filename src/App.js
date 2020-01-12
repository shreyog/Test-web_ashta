import React, { Component } from 'react';
import logo from './logo.svg';
import TestButton from './components/ButtonTest'
import CheckBoxTest from './components/CheckBoxTest'
import TextFieldTest from './components/TextFieldTest'
import InputFieldTest from './components/InputFieldTest'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
// import './App.css';

class App extends Component {
  constructor(props)
  {
    super(props)
    this.state = {
      text: '',
      value: 0
    }
  }
  
  inputFieldValue = (data) => {
    console.log(Number(data.value))
    this.setState({value: Number(data.value)})
  }

  onSubmitHandler = (datas) => {
    

  }
  onCheckedStatus = (data) => {
    console.log(data)
  }

  render() {
  return (
    <div className="App">
      <Grid container>
        <Grid container direction="row">
        <Grid style={{marginLeft: "250px"}}>
          <h1 >Test</h1>
          </Grid>
        </Grid>
      <Grid item style={{marginLeft: "20px"}}>
      <CheckBoxTest onCheckBoxChangeHandler={(data) => this.onCheckedStatus(data)}/>
      </Grid>
      <Grid item style={{marginLeft: "20px"}}>
      <InputFieldTest inputFieldValue={(data) => this.inputFieldValue(data)}/>
      </Grid>
      <Grid item style={{marginLeft: "20px"}}>
      <TextFieldTest/>
      </Grid>
      <Grid item style={{marginLeft: "20px"}}>
      <TestButton  sendvalue={this.state.value}/>
      </Grid>

      </Grid>
    </div>
  );
  }
}

export default App;
