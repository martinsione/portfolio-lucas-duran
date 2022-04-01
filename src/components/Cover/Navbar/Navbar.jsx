import React from 'react'
import './Navbar.css'

export default function Navbar({isScrolling}) {
function toTheTop () {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
}
    return (
        <nav className={`navbar ${isScrolling > 20 ? 'scrolling' : null}`}>
            <div>
<div className='navbar-logo' onClick={toTheTop}>Lucas Duran</div>
            </div>
        </nav>
    )
}

