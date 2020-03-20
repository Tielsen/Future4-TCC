import React from 'react'
import styled from 'styled-components'
import {push} from "connected-react-router";
import {connect} from "react-redux";
import {getDetails} from "../actions/Properties";
import {routes} from "../containers/Router/Router";


const MainContainer = styled.div`
    border-radius: 3px;
    color: white;
    height: 10vw;
    width: 20vw;
`

const PropertyCard = (props) => {

    const goDetails = () => {
        props.getDetails(props.id)
        props.goToDetails()
    }
    return (
        <MainContainer onChick={goDetails} style={{ backgroundImage: `url(${props.image})` }}>
            <p>{props.name}</p>
            <p>R$ {props.price}</p>
        </MainContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    getDetails: id => dispatch(getDetails(id)),
    goToDetails: () => dispatch(push(routes.details)),

});

export default connect(null, mapDispatchToProps)(PropertyCard)