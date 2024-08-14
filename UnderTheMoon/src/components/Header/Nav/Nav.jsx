import style from './Nav.module.scss'

export function Nav(){
    return(
        <nav className={style.navStyling}>
            <ul>
                <li>HJEM</li>
                <li>KONCEPTER</li>
                <li>UTM LOYALTY</li>
                <li>OM</li>
                <li>KONTAKT</li>
            </ul>
        </nav>
    )
}