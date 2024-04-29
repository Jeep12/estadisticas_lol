import './Card.css';
import { useState } from 'react';


export const Card = () => {
    
    //USE STATE
    const [number,setNumber] = useState(0);// el 0 es el valor inicial de la variable contador
    const sumar = ()=>{
            setNumber(number+1);
    }
    

    return (
        <div className="card">
            <h1>esto es un titulo</h1>
            <p><button id='juan'>Juan</button></p>
            <p>{number}</p>
            <button onClick={sumar}>SUMAR</button>
        </div>)
}