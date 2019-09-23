import React, {useState} from 'react';
import './BreedInput.css';

const BreedInput = ({updateBreed}) => {
    const [breed, setBreed] = useState('')

    const handleOnChange = (event) => {
        setBreed(event.target.value)
    }
    
    const handleUpdateBreed = (event) => {
        event.preventDefault();
        updateBreed(breed);
    }

    return ( 
            <form onSubmit={handleUpdateBreed}>
                <input className="BreedInput-input" type="text" value={breed} onChange={handleOnChange}/>
                <button className="BreedInput-button" type="submit">Search breed</button>
            </form>
    );
}

export default BreedInput;