import React from 'react'
import styled from 'styled-components'
import NotificationButton from './NotificationButton';
import SettingsButton from './SettingsButton';

function TopBar() {
    return (
        <TOPBAR>
            <LeftSide></LeftSide>
            <RightSide>
                <NotificationButton onClick={() => alert("THIS IS NOTIFICATION BUTTON CLICK")} />
                <SettingsButton onClick={() => alert("THIS IS SETTINGS BUTTON CLICK")} />
            </RightSide>
        </TOPBAR>
    )
}

const TOPBAR = styled.div`
height: 60px;
width: 100%;
position: sticky;
top: 0px;
padding : 6px 16px 6px 16px;
display: flex;
align-items: center;
justify-content: space-between;
background-color: white;
`

const LeftSide = styled.div`

`;

const RightSide = styled.div`
display: flex;
`;

export default TopBar
