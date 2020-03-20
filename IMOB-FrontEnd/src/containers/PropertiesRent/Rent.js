import React, {useEffect} from 'react'
import styled from 'styled-components'
import TopBar from "../../components/TopBar";
import NavBar from "../../components/NavBar";
import {connect} from "react-redux";
import {getRents} from "../../actions/Properties";
import PropertyCard from "../../components/PropertiesCard";


const MainContainer = styled.div`
    margin-top: 0vh;
    justify-text: center;
`
const RentsContainer = styled.div`
    align-items: center;
    display: grid;
`

const RentsContainerMap = styled.div`
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr
    gap: 5vw
`

const Title = styled.h1`
    justify-self: center;
`

const Rend = (props) => {

    useEffect(() => {
        props.getRents();
    },[]);

    const rents = props.spotlight.map(property => {
        return <PropertyCard id={property.id} name={property.name} image={property.image} price={property.price} />
    })

    return (
    <MainContainer>
        <TopBar/>
        <NavBar/>
        <RentsContainer>
            <Title>Propriedes para Alugar</Title>
            <RentsContainerMap>
                {rents}
            </RentsContainerMap>
        </RentsContainer>
    </MainContainer>
    )
}

const mapStateToProps = state =>{
    return({
        spotlight: state.properties.spotlight
    })
}

const mapDispatchToProps = dispatch => ({
    getRents: () => dispatch(getRents())
});

export default connect(mapStateToProps, mapDispatchToProps)(Rend)
