import './App.css';
import {useEffect, useState} from 'react';
import woman from './woman.jpg';

function App() {

const [hobby, setHobby] = useState('');

useEffect(() => {

  getHobby()

},[])



const getHobby = async() => {
  const responce = await fetch('http://www.boredapi.com/api/activity/');
  const data = await responce.json();
  setHobby(data)
}

  return (
    <div className="App">
      
        <h2 class="animate__animated animate__slideInUp">What I want to do?</h2>
      
      <img src={woman} alt="bored woman" width='350px'/>

      <h1 class="animate__animated animate__backInLeft">{hobby.activity}</h1>
      <button onClick={getHobby}>WOW and maybe something else? (click)</button>
    </div>
  
  );
}

export default App;
