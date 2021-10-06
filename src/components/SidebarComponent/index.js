import React from 'react'
import { theme } from '../../constants/theme'
import './style.css'


const SidebarComponent = props => {
    const {
        onClick,
        selectedComponent,
        label,
        selected
    } = props
    // alert(selectedComponent.toString())
    return(
        <div className="SidebarComponent-container" style={{borderWidth:selectedComponent?'50px':0,borderColor:'black'}}>
            <a className="Sidebarcomponent-imageContainer" onClick={onClick}>
                <img src={require("../../assets/testing.jpg").default} />
            </a>
            <a  className="Sidebarcomponent-textContainer" onClick={onClick}>
                <h4 style={{color:theme.fontColor.whiteText}}>{label}</h4>
            </a>
        </div>
    )
}


export  {SidebarComponent}