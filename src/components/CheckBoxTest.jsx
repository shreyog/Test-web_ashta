import React, { Component } from 'react'
import Checkbox from '@material-ui/core/Checkbox'
 
class CheckBoxTest extends Component {
constructor(props)
{
    super(props)
    this.state = {
        checked: false,
        text: ''
      }
}

onCheckBoxChangeHandler = () => (event) => {
    // console.log(this.state.checked)
    if(this.state.checked)
    {
        // console.log('its coming here');
        this.setState({checked: !this.state.checked, text: ''})
        // console.log(this.state)
        this.props.onCheckedStatus(this.state)
    } 
    else
    {
    this.setState({checked: !this.state.checked, text: 'admin'})
    // console.log(this.state)
    }
}
render(){
    return (
        <Checkbox onChange={this.onCheckBoxChangeHandler()} value={this.state.checked}/>
    )
}
}

export default CheckBoxTest