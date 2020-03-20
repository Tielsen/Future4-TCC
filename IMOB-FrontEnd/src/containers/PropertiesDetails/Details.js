import React from 'react'
import styled from 'styled-components'
import TopBar from "../../components/TopBar";
import NavBar from "../../components/NavBar";
import Top from "./components/Top";
import {connect} from "react-redux";
import DataContainer from "./components/DataContainer";
import PropertyImages from "./components/PropertyImages";
import Typography from "@material-ui/core/Typography";
import DescriptionTable from "./components/DescriptionTable";



const MainContainer = styled.div`
    margin-top: 0vh;
`
const NameContainer = styled.div`
    display: flex;
    width: 100vw;
    align-items:center;
    justify-content:center;
    font-size: 140%;
    margin-top: 3vh;
`

const DetailsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3vw;
    width: 100vw;
    height: 40vw;
    margin: 3vh 5vw;
`

const DescriptionContainer = styled.div`
    margin: 3vh 5vw;
`

const TableContainer = styled.div`
    width: 50vw;
`



const Details = (props) => {
    return (
        <MainContainer>
            <TopBar/>
            <NavBar/>
            <Top/>
            <NameContainer>
                <p>{props.Name}</p>
            </NameContainer>
            <DetailsContainer>
                <PropertyImages/>
                <DataContainer/>
            </DetailsContainer>
            <DescriptionContainer>
                <h3>Description</h3>
                <Typography>{props.description}</Typography>
                <TableContainer>
                    <DescriptionTable></DescriptionTable>
                </TableContainer>

            </DescriptionContainer>

        </MainContainer>
    )
}

const mapStateToProps = state =>{
    return({
        Name: state.properties.details.name,
        description: state.properties.details.description,
    })
}

export default connect(mapStateToProps, null)(Details)
