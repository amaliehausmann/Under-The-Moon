import style from './TwoCards.module.scss'

export function TwoCards(){
    return(
        <section className={style.sectionStyling}>
            <div className={style.firstDivStyling}>
                <div>
                    <h4>One 2 One</h4>
                    <p>Lorem ipsum dolor sit amet consectetur. Nunc pellentesque senectus aliquam ipsum. Sed mauris posuere odio nisl in. Massa vitae faucibus imperdiet facilisi pulvinar maecenas platea purus pulvinar. Lacinia imperdiet nisi nunc vel ut convallis a est scelerisque.</p>
                    <button>BOOK TID</button>
                </div>
            </div>
            <div className={style.secondDivStyling}>
                <div>
                    <h4>Loyalty Free</h4>
                    <p>Lorem ipsum dolor sit amet consectetur. Nunc pellentesque senectus aliquam ipsum. Sed mauris posuere odio nisl in. Massa vitae faucibus imperdiet facilisi pulvinar maecenas platea purus pulvinar. Lacinia imperdiet nisi nunc vel ut convallis a est scelerisque.</p>
                    <button>LÆS MERE</button>
                </div>
            </div>
        </section>
    )
}