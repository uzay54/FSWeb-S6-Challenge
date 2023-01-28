import React, {useState, useEffect} from "react";
import axios from "axios";
import Karakter from './components/Karakter';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [karakterler, setKarakaterler] = useState(null);
  const [istek, setIstek] = useState(false);
  useEffect(() => {
    axios.get("https://swapi.dev/api/people/").then((res) => {
      setKarakaterler(res.data);
    });
  },[istek]);
  const [bilgiID, setBilgiID] = useState(-1);
  console.log(karakterler);
  
  return (
    <div className="App">
      <h1 className="Header">Star Wars Karakterler</h1>
      <div className="karakterlerContainer">
      {
          karakterler!==null ? (
            karakterler.map((karakter,index) => (
              <Karakter  
              karakter={karakter}
              karakterID={index}
              bilgiID={bilgiID}
              setBilgiID={setBilgiID} 
              key={index}
              />
            ))
          )
          : <p id="gecikmeMesaj">Güncelle Tuşuna Basın</p>
      }
      </div>
      
      <button id="guncelleButton" onClick={()=>{setIstek(!istek);setBilgiID(-1)}}>Karakterleri Güncelle</button>
    </div>
  );
}

export default App;