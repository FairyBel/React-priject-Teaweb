function Catalog({useCatalog}){
        
    return (<div className='container'>
            
      {useCatalog.map((element =>{
          const {id, name, description, price, image} = element;
          console.log(element);
          return(<div key={id} className='cont-catalog'>
            
            <div>  
                <img src={`./${image}.jpg`} className='catalogPic' alt='tea'/>
              </div>
              <div className='catalog-info'>
                <h3>{id}-{name}</h3>
                <p>{description}</p>
                <h4>${price}</h4>
              </div>
              <div className="cont-btn">
                 <button className="btn-catalog">В корзину</button>
              </div>
              </div>   
           
          )
          
      }))}
      
      </div>
    )
}

export default Catalog;