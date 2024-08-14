import { Nav } from "./Nav/Nav"
import { HeroText } from "./HeroText/HeroText"
import style from './Header.module.scss'
import background from '../../assets/hero.jpg'

export function Header(){
    return(
        <header className={style.HeaderStyling} >
        <Nav/>
        <h1>Under the Moon</h1>
        <HeroText/>
        </header>

    )
}