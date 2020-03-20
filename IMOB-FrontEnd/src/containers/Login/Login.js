import React from 'react'
import styled from 'styled-components'
import LoginForm from './components/LoginForm'
import TopBar from "../../components/TopBar";
import NavBar from "../../components/NavBar";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  position: relative;
`

const MainContainer = styled.div`
    margin-top: 0vh;
    justify-text: center;
`

const Login = () => {
  return (
      <MainContainer>
         <TopBar/>
         <NavBar/>
         <LoginContainer>
            <LoginForm/>
         </LoginContainer>
      </MainContainer>
  )
}
export default Login
