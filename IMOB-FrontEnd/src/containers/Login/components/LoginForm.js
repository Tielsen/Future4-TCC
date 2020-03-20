import React, {Component, useState} from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {login, setPositionImage} from "../../../actions/general";
import {connect} from "react-redux";

const FormContainer = styled.form`
  display: grid;
  align-items: center;
  gap: 10px;
  width: 250px;
  margin-top: 20px;
`

const LoginForm = (props) => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  })

  const {email, password} = formValues

  const onSubmitForm = async (event) => {
    event.preventDefault()
    props.login(email, password)
  }

  const onChangeInputs = (event) => {
    const {name, value} = event.target

    setFormValues({...formValues, [name]: value})
  }

  return (
    <FormContainer onSubmit={onSubmitForm}>
      <TextField onChange={onChangeInputs} name={'email'} value={email} size={'small'} label="Email" variant="outlined" type={'email'}/>
      <TextField onChange={onChangeInputs} name={'password'} value={password} size={'small'} label="Password" variant="outlined" type={'password'}/>
      <Button type={'submit'} variant="contained" color={'primary'}>Login</Button>
    </FormContainer>
  )
}

const mapDispatchToProps = dispatch => ({
    login: (email, password) => dispatch(login(email, password))
});

export default connect(null, mapDispatchToProps)(LoginForm)
