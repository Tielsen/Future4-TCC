import React, {Component} from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {connect} from "react-redux";
import {signUp} from "../../../actions/general";


const FormContainer = styled.form`
  display: grid;
  align-items: center;
  gap: 10px;
  width: 250px;
`

class SignupForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      username: '',
      password: ''
    }
  }

  onSubmitForm = async (event) => {
    event.preventDefault()
    const {email, username, password} = this.state

    const data = {
      email,
      username,
      password
    }

    this.props.signUp(data)
  }

  onChangeInputs = (event) => {
    const {name, value} = event.target

    this.setState({[name]: value})
  }

  render() {
    const {email, username, password} = this.state

    return (
      <FormContainer onSubmit={this.onSubmitForm}>
        <TextField onChange={this.onChangeInputs} name={'email'} value={email} size={'small'} label="Email" variant="outlined" type={'email'}/>
        <TextField onChange={this.onChangeInputs} name={'username'} value={username} size={'small'} label="Username" variant="outlined" />
        <TextField onChange={this.onChangeInputs} name={'password'} value={password} size={'small'} label="Password" variant="outlined" type={'password'}/>
        <Button type={'submit'} variant="contained" color={'primary'}>Sign up</Button>
        <p>By signing up, you agree to our terms of service.</p>
      </FormContainer>
    )
  }
}

const mapDispatchToProps = dispatch => ({
    signUp: data => dispatch(signUp(data))
});

export default connect(null, mapDispatchToProps)(SignupForm)
