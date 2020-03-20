import React, {useEffect} from 'react'
import styled from 'styled-components'
import TopBar from "../../components/TopBar";
import NavBar from "../../components/NavBar";
import {connect} from "react-redux";
import {getSales} from "../../actions/Properties";
import PropertyCard from "../../components/PropertiesCard";


const MainContainer = styled.div`
    margin-top: 0vh;
    justify-text: center;
`
const SalesContainer = styled.div`
    align-items: center;
    display: grid;
`

const SalesContainerMap = styled.div`
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr
    gap: 5vw
`

const Title = styled.h1`
    justify-self: center;
`

const Sales = (props) => {

    useEffect(() => {
        props.getSales();
    },[]);

    const sales = props.spotlight.map(property => {
        return <PropertyCard id={property.id} name={property.name} image={property.image} price={property.price} />
    })

    return (
    <MainContainer>
        <TopBar/>
        <NavBar/>
        <SalesContainer>
            <Title>Propriedes para Vender</Title>
            <SalesContainerMap>
                {sales}
            </SalesContainerMap>
        </SalesContainer>
    </MainContainer>
    )
}

const mapStateToProps = state =>{
    return({
        spotlight: state.properties.spotlight
    })
}

const mapDispatchToProps = dispatch => ({
    getSales: () => dispatch(getSales())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sales)