import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button'
import axios from 'axios'

class TestButton extends Component {

  constructor(props)
  {
    super(props)
    // this.state = {
    //   random : 'ok'
    // }
  }

  onSubmit = () => {
    console.log('it coming here');
    let value = this.props
    console.log(value.sendvalue)
    let data = {}
    data.value = value.sendvalue
    axios.post('localhost:9000/random', data)
    .then((data)=> console.log(data))
    .catch((err)=> console.log(err))
    // this.props.onSubmitHandler(this.state)
  }

  render()
  {
    return(
      <Button variant="contained" color="secondary" style={{padding: "1 rem", margin: "2 rem"}} onClick={this.onSubmit.bind(this)}>
        Submit
  </Button>
    )
  }
}

TestButton.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
}

export default TestButton;
