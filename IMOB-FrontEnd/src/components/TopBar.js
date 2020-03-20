import React from 'react'
import styled from 'styled-components'
import DraftsIcon from '@material-ui/icons/Drafts';
import PhoneIcon from '@material-ui/icons/Phone';
import { push } from "connected-react-router";
import {connect} from "react-redux"
import {routes} from "../containers/Router/Router";

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 5vw;
  width: 90vw;
`

const LeftContainer = styled.div`
  display: flex;
  font-size: 1.6vw;
  color: #9b9b9b;
  align-items: center;
  justify-content: space-between;
  width: 12vw;
`

const RightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1vw;
  width: 23vw;
`
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  color: #9b9b9b;
`



const TopBar = (props) => {

    const goLogin = () => {
        props.goToLogin()
    }
     const goSignUp = () => {
        props.goToSignUp()
    }
  return (
      <MainContainer>
          <LeftContainer>
              <button onClick={() => goLogin()}>Log in</button>
              <a onClick={() => goSignUp()}>Register</a>
          </LeftContainer>
          <RightContainer>
              <IconContainer>
                  <DraftsIcon/>
                  <edit>info@imob.net</edit>
              </IconContainer>
               <IconContainer>
                  <PhoneIcon/>
                  <p>+55 (XX) XXXXX-XXXX</p>
              </IconContainer>
          </RightContainer>
      </MainContainer>
  )
}


const mapDispatchToProps = dispatch => ({
  goToLogin: () => dispatch(push(routes.login)),
  goToSignUp: () => dispatch(push(routes.signup))
});

export default connect(null, mapDispatchToProps)(TopBar)
