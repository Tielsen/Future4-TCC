import React, {useEffect} from 'react'
import styled from 'styled-components'
import TopBar from "../../components/TopBar";
import NavBar from "../../components/NavBar";
import {connect} from "react-redux";
import {getSpotlight} from "../../actions/Properties";
import SpotlightCard from "./components/SpotlightCard";
import Top from "./components/Top";

const MainContainer = styled.div`
    margin-top: 0vh;
    justify-text: center;
`

const SpotlightContainer = styled.div`
    display: grid;
    align-items: center;
`

const SpotlightContainerMap = styled.div`
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr
    gap: 5vw
`

const Title = styled.h1`
    justify-self: center;
`

const Home = (props) => {

    useEffect(() => {
        props.getSpotlight();
    },[]);

    const spotlight = props.spotlight.map(property => {
        return <SpotlightCard id={property.id} name={property.name} image={property.image} price={property.price} />
    })

    return (
    <MainContainer>
        <TopBar/>
        <NavBar/>
        <Top/>
        <SpotlightContainer>
            <Title>Propriedes em Destaque</Title>
            <SpotlightContainerMap>
                {spotlight}
            </SpotlightContainerMap>
        </SpotlightContainer>
    </MainContainer>
    )
}

const mapStateToProps = state =>{
    return({
        spotlight: state.properties.spotlight
    })
}

const mapDispatchToProps = dispatch => ({
    getSpotlight: () => dispatch(getSpotlight())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)
