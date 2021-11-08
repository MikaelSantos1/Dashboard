import React,{useState} from 'react'
import './Menu.css'
import MenuItem from './MenuItem'
import MenuTree from './MenuTree'
import { FaChartPie , FaDollarSign,FaArrowLeft,FaArrowDown,FaEdit} from 'react-icons/fa';
const Menu = (props) => {
    const [subMenu,setSubMenu]= useState(false)

    const handleMenu=(subMenu)=>{
         setSubMenu(!subMenu)
    }
    return (
        <div className="menu-container">
            <div className="title-container">
                <label className="iconlabel">{props.icon}</label>
                <h1 className="menu-title">{props.title} </h1>
            </div>
            
             <MenuItem label="Dashboard" icon={<FaChartPie/>} path="/" />
             <MenuTree label="Cadastro" icon={<FaEdit/>} setMenu={handleMenu} subMenu={subMenu} iconRight={subMenu?<FaArrowDown/>:<FaArrowLeft/>}/>
             {subMenu?(<MenuItem label="Ciclo de pagamento" icon={<FaDollarSign/>} path="/BillingCycle"/>):<> </>}
             
        </div>

    )
}

export default Menu
