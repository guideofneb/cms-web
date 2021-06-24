import { RiSettings3Line } from 'react-icons/ri';
import styled from 'styled-components';

const SettingsButton = ({ onClick }) => {
    return <SettingsButtonWrapper onClick={onClick}>
        <RiSettings3Line size={24} />
    </SettingsButtonWrapper>
}

const SettingsButtonWrapper = styled.div`
margin-right: 6px;
height:48px;
width:48px;
padding: 12px;
border-radius: 50%;
cursor: pointer;
transition-duration: 100ms;
&:hover{
background-color: #E4E6EB;
}
`
export default SettingsButton;