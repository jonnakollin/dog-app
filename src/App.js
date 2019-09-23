import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Title from './components/Title/Title';
import Dog from './components/Dog/Dog';
import BreedInput from './components/BreedInput/BreedInput';

function App() {
  const [dogs, setDogs] = useState([])
  const [breed, setBreed] = useState('shiba')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  useEffect(() => {
    const fetchDog = async () => {
      setLoading(true)
      try {
        const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images`)
        setDogs(response.data.message)
      } catch(error) {
        setError('ERROR')
      } finally {
        setLoading(false)
      }
    }
    fetchDog()
  }, [breed])

  const updateBreed = (newBreed) => {
    setBreed(newBreed);
  }

  return (
    <div className="App">
      <header className="App-header">
      {loading && <Title title="Loading dogs" />}
        {error && <Title title="Error" color="red" />}
        <Title title="Henloo homans" />
        <BreedInput updateBreed={updateBreed} />
        <div className="App-container">
        {dogs && dogs.map((dog, index) => (
          <Dog key={index} apperance={dog} />
        ))}
        </div>
      </header>
    </div>
  );
}

export default App;
