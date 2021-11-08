import React from 'react'
import './MenuItem.css'
const MenuItem = (props) => {


    return (
        <div className="MenuItem-container"  >
            <ul>
                <a href={props.path}>
                <li>
                    {props.icon}
                    {props.label}
                    <label className="iconRight" >{props.iconRight}</label>
                </li>
                </a>
            </ul>
        </div>
    )
}

export default MenuItem
