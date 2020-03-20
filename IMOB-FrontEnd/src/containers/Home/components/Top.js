import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import image1 from '../../../img/home-img-09-370x250.jpg'
import image2 from '../../../img/single-property-page-01-770x510.jpg'
import image3 from '../../../img/single-property-page-03-770x510.jpg'
import {push} from "connected-react-router";
import {routes} from "../../Router/Router";
import {setPositionImage, setPositionNav} from "../../../actions/general";
import {connect} from "react-redux";


const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100vw;
    height: 30vw;
    font-size: 3vh;
    color: white;
    background-size: cover;
`


const BottomNavigationt = styled(BottomNavigation)`
    background-color: rgba(0,0,0,0);
`

const BottomNavigationActiont = styled(BottomNavigationAction)`

`


const Top = (props) => {
    const image = props.positionImage === 1? image1: props.positionImage === 2? image2: image3

    return (
        <MainContainer style={{backgroundImage: `url(${image})`}}>
            <BottomNavigationt
                value={props.positionImage}
                onChange={(event, newValue) => {
                        switch (newValue) {
                            case 1:
                                props.setPositionImage(newValue)
                                break
                            case 2:
                                props.setPositionImage(newValue)
                                break
                            case 3:
                                props.setPositionImage(newValue)
                                break
                        }
                    }}
            >
                <BottomNavigationActiont icon={<FiberManualRecordIcon value={1}  style={{ fontSize: 15,  }}/>} />
                <BottomNavigationActiont icon={<FiberManualRecordIcon value={2}  style={{ fontSize: 15,  }}/>} />
                <BottomNavigationActiont icon={<FiberManualRecordIcon value={3}  style={{ fontSize: 15,  }}/>} />
            </BottomNavigationt>
        </MainContainer>
    )
}

const mapStateToProps = state =>{
    return({
        positionImage: state.general.positionImage
    })
}


const mapDispatchToProps = dispatch => ({
    setPositionImage: positionImage => dispatch(setPositionImage(positionImage))
});

export default connect(mapStateToProps, mapDispatchToProps)(Top)