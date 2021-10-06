import React, { useState } from 'react'
import { AdditionalSidebar, SidebarComponent } from '../'
import './style.css'



const DATA = [
    { label: "First Amendmend " },
    { label: "Second Amendmend " },
    { label: "Third Amendmend " },
    { label: "Fourth Amendmend " },
    { label: "Fifth Amendmend " },
    { label: "Sixth Amendmend " }]

const Sidebar = props => {
    const [showsidebar, setShowsidebar] = useState()
    const [selectedData,setSelectedData] = useState("")
    const onClickImage = (label,override=false) => {
        if(override){
            setSelectedData("")
            setShowsidebar(false)
        }
        if(selectedData===label || selectedData === ""){
            if(selectedData==='') {setSelectedData(label)}
            else{
                setSelectedData("")

            }
            setShowsidebar(showsidebar => { return !showsidebar })
        }
        else{
            setSelectedData(label)

        }
    }
    return (
        <div className="sidebar-container" >
            {DATA.map(item => {
                return (
                    <SidebarComponent {...item} selectedComponent={selectedData===item.label} onClick={() => onClickImage(item.label)} />
                )
            })}
            <AdditionalSidebar 
            onClick={()=>onClickImage("",true)}
            visible={showsidebar} data={selectedData} />
            {/* <button onClick={()=>setShowsidebar(!showsidebar)}>asdasd</button> */}
        </div>
    )
}


export { Sidebar }