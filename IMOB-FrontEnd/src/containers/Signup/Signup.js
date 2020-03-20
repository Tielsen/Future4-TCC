import React, {Component} from 'react'
import styled from 'styled-components'
import SignupForm from './components/SignupForm'
import TopBar from "../../components/TopBar";
import NavBar from "../../components/NavBar";

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  position: relative;
  margin-top: 20px;
`

const MainContainer = styled.div`
    margin-top: 0vh;
    justify-text: center;
`

const SignUp = () => {
    return (
    <MainContainer>
        <TopBar/>
        <NavBar/>
        <SignupContainer>
            <SignupForm />
        </SignupContainer>
    </MainContainer>
    )
}

export default SignUp
