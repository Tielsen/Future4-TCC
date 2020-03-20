import React from 'react'
import styled from 'styled-components'
import Aper from "../../../img/bg-header.jpg"


const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 20vw;
    font-size: 3vh;
    color: white;
    background-image: url(${Aper});
    background-size: cover;
`


const Top = () => {

    return (
        <MainContainer>
            <p>Details Page</p>
        </MainContainer>

    )
}


export default Top