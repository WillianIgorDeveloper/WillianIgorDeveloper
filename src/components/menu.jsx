import { List, X } from 'phosphor-react'
import { useState } from 'react'

import style from './menu.module.scss'

export default function Menu () {

    const [menuState, setMenuState] = useState({})
    const handleMenuState = () => {
        menuState === style.open ? setMenuState({}) : setMenuState(style.open)
    }


    return (
        <header>
            <nav className={`${style.nav} ${menuState}`}>
                <div className={style.iconContainer}>
                    <List className={style.list} onClick={handleMenuState} />
                    <X className={style.x} onClick={handleMenuState} />
                </div>
                <ul>
                    <li onClick={handleMenuState}><a href="#Home">Home</a></li>
                    <li onClick={handleMenuState}><a href="#Projects">Projetos</a></li>
                    <li onClick={handleMenuState}><a href="#About">Sobre</a></li>
                    <li onClick={handleMenuState}><a href="#Contact">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}