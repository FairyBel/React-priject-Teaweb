import firstPic from './firstImage.jpg';


function FirstPage (){

return(<div className="container">
    <div className='first-cont'>
        <h1 className='header'>Эксклюзивный чай с лучших плантаций Индии и Китая</h1>
        <h4 className='par-first'>Выбирайте для себя и своих близких чай высочайшего качества, с изысканными вкусами и лечебными свойствами.</h4>
        <button className='btn-first'>Заказать</button>
    </div>
        <img className='firstPic' src={firstPic} alt='teacup'/>

   





    </div>
)

}
export default FirstPage;