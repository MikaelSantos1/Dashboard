import React from 'react'

const MenuTree = (props) => {
    return (
        <div className="MenuItem-container" onClick={() => props.setMenu(props.subMenu)} >
            <ul>
                <li>
                    {props.icon}
                    {props.label}
                    <label className="iconRight" >{props.iconRight}</label>
                </li>
            </ul>



        </div>
    )
}

export default MenuTree
