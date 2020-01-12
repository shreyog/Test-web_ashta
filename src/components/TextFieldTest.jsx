import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types';
 
class TextFieldTest extends Component {
constructor(props)
{
    super(props)
}
render(){
    return (
        <TextField 
        type="text"
        value={this.props.data}
        />
    )
}
}

TextFieldTest.propTypes = {
    data: PropTypes.string.isRequired
  }

TextFieldTest.defaultProps = {
    data: "N.A"
}

export default TextFieldTest