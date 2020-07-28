import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import ButtonLink from './components/ButtonLink'

function Menu() {
    return (
        <nav className='Menu'>
            <Link to="/cadastro/video">
                <img className='Logo' src={Logo} alt='RenanFlix Logo' />
            </Link>
            <ButtonLink as={Link} className='ButtonLink' to="/cadastro/video">
                Novo Video
            </ButtonLink>
        </nav>
    )
}

export default Menu;