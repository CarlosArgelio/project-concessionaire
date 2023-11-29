import { generateManyCards } from "../../data/CardsData";
import CardConcessionaire from "../CardConcessionaire";
import "./CardList.css";


const data = generateManyCards(12);

function CardListConcessionaire () {
    return (
        <>
            <div className='CardList'>
                {data.map((card) => (
                    <CardConcessionaire {...card} />
                ))}
            </div>
        </>
    )
}

export { CardListConcessionaire }