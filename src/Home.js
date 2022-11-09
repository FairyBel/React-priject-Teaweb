import { useState } from 'react';
import { data } from './data';
import './App.css';
import Catalog from './Catalog';
import Button from './Button';

function Home(){

    const[tea, setTea] = useState(data);
    
    const choosenTea = (searchItem) =>{
        const newTea = data.filter(element => element.searchItem === searchItem);
        console.log(newTea)
        setTea(newTea);
    }


    return (<div>
        <div className='cont-header'>
            <h1>Большой ассортимент чая Индии и Китая!</h1>
        </div>
        <Button  filteredTea = {choosenTea}/>
        <Catalog useCatalog={tea} />


       


    </div>
    )
    
}


export default Home;