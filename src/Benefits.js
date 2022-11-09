import { useState } from 'react';
import { dataBenefits } from './dataBenefits';

function Benefits(){
    const [benefits] = useState(dataBenefits);
    const [showText, setShowText] = useState(false);

    const showTextClick = (item) => {
        item.showMore = !item.showMore
        setShowText(!showText)
    }

    return(<div className='container'>
        <div className='cont-header'>
        <h1>Целебные свойства чая</h1>
        </div>
        <div className='cont-benefits'>
            {benefits.map((item =>{
                const{Id, title, picture, text, showMore} = item;
                return(
                      <div key={Id} className='info-benefits'>
                        <h2>{title}</h2>
                        <img src={`./${picture}.jpg`} className='benef-pic' alt='tea'/>
                        <p> {showMore ? text : text.substring(0, 200)+'...'}
                        <button className='btn-benefits' onClick={()=> showTextClick(item)}>
                            {showMore ? 'Скрыть' : 'Показать'}
                        </button>
                        </p>
                      </div>  
                )
            } ))}
        
        </div>


        <div>
            <p>Источники: www.tulasamovar.ru; https://samovartime.ru; www.freepik.com; https://drakonchai.ru</p>    
        </div>  




        </div>
    )
}

export default Benefits;