function Button({filteredTea}){
    return(
        <div className="cont-btn">
                <button className="button" onClick={()=> filteredTea('black')}>Black Tea</button>
                <button className="button" onClick={()=> filteredTea('green')}>Green Tea</button>
                <button className="button" onClick={()=> filteredTea('red')}>Red Tea</button>
                <button className="button" onClick={()=> filteredTea('gift')}>Gift Set</button>
        </div>
    )
}

export default Button;