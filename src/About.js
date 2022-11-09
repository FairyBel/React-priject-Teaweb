import { useState } from 'react';
import { dataAbout } from './dataAbout';

function About(){

    const [story, setStory] = useState (0);
    const {id, header, pic, par} = dataAbout[story];
    

    const previousSlaid = () =>{
        setStory((story =>{
            story--;
            if(story<0){
                return dataAbout.length-1;
            }
            return story;
        }))
    }

    const nextSlaid = () =>{
        setStory ((story =>{
            story++;
            if(story>dataAbout.length-1){
                story=0;
            }
            return story
        }))
    }

    return(<div>
    <div key={id} className='cont-about'>
        <div  className='about-info'>
            <h1>{header}</h1>
            <img className='pic-about' src={`./${pic}.jpg`} alt='tealeaves'/>
            <p className='par-benefits'>{par}</p>
        
       </div>
       
        </div>
        <div className='cont-btn'>
            <button className="btn-about" onClick={previousSlaid}>Назад</button>
            <button className="btn-about" onClick={nextSlaid}>Вперед</button>
        </div>
        </div>
        )
}
export default About;