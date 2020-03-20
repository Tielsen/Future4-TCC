import React from 'react'
import styled from 'styled-components'
import { push } from "connected-react-router";
import {connect} from "react-redux"
import {routes} from "../containers/Router/Router";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {setPositionNav} from "../actions/general";

const MainContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  margin: 0;
  align-items: center;
  width: 100vw;
  background-color: white;
`

const LeftContainer = styled.div`
  font-size: 1.7vw;
  margin: 0 5vw;
`

const RightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 2vw;
  width: auto;
`

const APe = styled(BottomNavigation)`
  width: 50vw;
`

const NavBar = (props) => {

    const goHome = () => {
        props.setPositionNav(1)
        props.goToHome()
    }

    const goSale = () => {
        props.setPositionNav(2)
        props.goToSale()
    }

    const goRent = () => {
        props.setPositionNav(3)
        props.goToRent()
    }


  return (
      <MainContainer>
          <LeftContainer>
              <p>IMOB</p>
          </LeftContainer>
          <RightContainer>
                <APe
                    value={props.positionNav}
                    onChange={(event, newValue) => {
                        switch (newValue) {
                            case 1:
                                goHome()
                                break
                            case 2:
                                goSale()
                                break
                            case 3:
                                goRent()
                                break
                        }
                    }}
                    showLabels
                >
                    <BottomNavigationAction onclick={() => goHome()} label="Home" value={1} />
                    <BottomNavigationAction onclick={() => goSale()} label="Sales" value={2}/>
                    <BottomNavigationAction onclick={() => goRent()} label="Rents" value={3}/>
                </APe>
          </RightContainer>
      </MainContainer>
  )
}

const mapStateToProps = state =>{
    return({
        positionNav: state.general.positionNav
    })
}


const mapDispatchToProps = dispatch => ({
    goToHome: () => dispatch(push(routes.home)),
    goToSale: () => dispatch(push(routes.sale)),
    goToRent: () => dispatch(push(routes.rent)),
    setPositionNav: positionNav => dispatch(setPositionNav(positionNav))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
