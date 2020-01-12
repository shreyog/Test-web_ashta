import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
 
class InputFieldTest extends Component {
constructor(props)
{
    super(props);
    this.state = {
        value: 0
    }
}
onChangeHandler = name => event => {
    this.setState({[name]: event.target.value})
    this.props.inputFieldValue(this.state);

}
render(){
    return (
        <TextField 
        type="number"
        onInput={(e)=>{
            e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,1)
            }}
        onChange = {this.onChangeHandler('value')}
        />
    )
}
}

export default InputFieldTest