import React from 'react'
import styled from 'styled-components'
import {connect} from "react-redux";
import TodayIcon from '@material-ui/icons/Today';



const MainContainer = styled.div`
   display: grid;
   grid-template-rows: auto 1fr auto;
   height: 100%;
   
`
const DetailsText = styled.p`
    color: #9b9b9b;
`

const PriceText = styled.p`
    font-size: 150%;
    font-weight: 900;
`

const DataContainer = (props) => {

    return (
        <MainContainer>
            <div>
                <TodayIcon/>
                <p>{props.date}</p>
            </div>
            <DetailsText>{props.sq} m² - {props.bedrooms} bedrooms - {props.bathrooms} bathrooms</DetailsText>
            <PriceText>${props.price}{props.type === 'sale'? '': '/mon' }</PriceText>
        </MainContainer>
    )
}

const mapStateToProps = state =>{
    return({
        date: state.properties.details.date,
        sq: state.properties.details.sq,
        bedrooms: state.properties.details.bedrooms,
        bathrooms: state.properties.details.bathrooms,
        type: state.properties.details.type,
    })
}

;

export default connect(mapStateToProps, null)(DataContainer)