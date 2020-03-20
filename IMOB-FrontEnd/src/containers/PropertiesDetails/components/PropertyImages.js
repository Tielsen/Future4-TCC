import React, {useState} from 'react'
import styled from 'styled-components'
import {connect} from "react-redux";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Aper from "../../../img/bg-header.jpg"


const MainContainer = styled.div`
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    height: 40vw;
    width: 50vw;
    background-size: cover;
`


const PropertyCard = (props) => {

    const [value, setValue] = useState(0)

    const image = props.Image[value]

    const icon = props.Image.map(image => {
        return <BottomNavigationAction icon={<FiberManualRecordIcon   style={{ fontSize: 15,  }}/>} />
    })

    return (
        <MainContainer style={{backgroundImage: `url(${image})`}}>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
            >
                {icon}
            </BottomNavigation>
        </MainContainer>
    )
}

const mapStateToProps = state =>{
    return({
        Image: state.properties.details.image
    })
}

export default connect(mapStateToProps, null)(PropertyCard)