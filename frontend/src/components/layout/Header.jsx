import React from 'react'
import "./Header.css"
const Header = (props) => {
    return (
        <header className="header-container">
            <h1 className="title-header">{props.title}</h1>
            <h4 className="v-header">{props.version}</h4>
        </header>


    )
}

export default Header
