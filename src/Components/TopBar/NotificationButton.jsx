import { RiNotification2Line } from 'react-icons/ri';
import styled from 'styled-components';

const NotificationButton = ({ onClick }) => {
    return <NotificationButtonWrapper onClick={onClick}>
        <RiNotification2Line size={24} />
    </NotificationButtonWrapper>
}

const NotificationButtonWrapper = styled.div`
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
export default NotificationButton;