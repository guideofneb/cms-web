import React from 'react'
import styled from 'styled-components';
import { RiBarChart2Line, RiDashboard2Line, RiLineChartLine } from 'react-icons/ri';
function SideBar() {
    return (
        <SIDEBAR>
            <Dashboard />
            <Data />
        </SIDEBAR>
    )
}



const SIDEBAR = styled.div`
top: 60px;
position: sticky;
height: calc(100vh - 60px);
flex:1;
padding: 16px 16px 0px 16px;
`;

const Dashboard = () => {
    return <div className="sidebar-dashboard-wrapper">
        <p className="dashboard-label">Dashboard</p>
        <div className="sidebar-dashboard-items-wrapper">
            <div className="overview-row">
                <RiDashboard2Line size={24} />
                <p className="sidebar-item-label">Overview</p>
            </div>
            <div className="overview-row">
                <RiBarChart2Line size={24} />
                <p className="sidebar-item-label">Statistics</p>
            </div>
            <div className="overview-row">
                <RiBarChart2Line size={24} />
                <p className="sidebar-item-label">Earning</p>
            </div>
        </div>

    </div>

}


const Data = () => {
    return <div className="sidebar-dashboard-wrapper">
        <p className="dashboard-label">Data</p>
        <div className="sidebar-dashboard-items-wrapper">
            <div className="overview-row">
                <RiDashboard2Line size={24} />
                <p className="sidebar-item-label">Notes</p>
            </div>
            <div className="overview-row">
                <RiBarChart2Line size={24} />
                <p className="sidebar-item-label">Book Solutions</p>
            </div>
            <div className="overview-row">
                <RiBarChart2Line size={24} />
                <p className="sidebar-item-label">Pastpaper Solutions</p>
            </div>
        </div>

    </div>
}
export default SideBar
