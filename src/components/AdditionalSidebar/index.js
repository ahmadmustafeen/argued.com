import React from 'react'
import './style.css'
import {SidebarComponent} from '../'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { theme } from '../../constants/theme'


const AdditionalSidebar = props => {
    const {
        data,
        visible,
        onClick
    } = props
    console.log(data,"data")
    return(
        <div className="Additionalsidebar-container" style={{display:visible?"flex":"none"}}>
            <div style={{width:'90%',paddingTop:'20px',display:'flex',justifyContent:'flex-end'}}>
              <FontAwesomeIcon icon={faChevronCircleLeft} 
              color={theme.fontColor.darkBlue}  
              onClick={onClick}
              />
                

            </div>
            {
                data?.map(item=>{
                    return(
                        <SidebarComponent {...item}/>
                    )
                })
            }
        </div>
    )
}


export  {AdditionalSidebar}