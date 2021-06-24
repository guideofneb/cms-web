import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding : 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
}

.dashboard-label{
    font-weight: 700;
    font-size: 18px;
    color: #9e9e9e;
}

.overview-row{
    margin : 2px 0px 2px 0px;
    display:flex;
    align-items: center;
    font-size: 18px;
    padding:8px;
    border-radius:10px;
    cursor: pointer;
    user-select: none;
    &:hover{
         background-color: #E4E6EB;
    }
}

.sidebar-item-label{
    padding-left: 4px;
}

.sidebar-dashboard-wrapper{
padding-top: 10px;
}

.sidebar-dashboard-items-wrapper{
    padding-top:8px
}

`;

export default GlobalStyle;