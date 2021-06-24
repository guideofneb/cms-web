import React from 'react'
import TopBar from './Components/TopBar/TopBar'
import SideBar from './Components/SideBar/SideBar'
import styled from 'styled-components';
import Body from './Components/Body/Body';

function App() {
    return (
        <>
            <TopBar></TopBar>
            <SideBarAndBody>
                <SideBar />
                <Body />
            </SideBarAndBody>

        </>
    )
}

const SideBarAndBody = styled.div`
display: flex;
`
export default App
