// Karakter bileşeniniz buraya gelecek
import React, {useState} from "react";
import KarakterBilgi from './KarakterBilgi';

function Karakter(props){
    const {karakter, karakterID, setBilgiID, bilgiID} = props;
    const [kontrol, setKontrol] = useState(false)
    
    return(
    <div className="karakterContainer">
        <h2 className="karakterIsım">{karakter.name}</h2>
        {
            (karakterID===bilgiID)
            &&
            <KarakterBilgi karakter={karakter}/>

        }
        <button className="bilgiButton" onClick={()=>
                {
                    if(kontrol===true){
                        setKontrol(false);
                        setBilgiID(-1);
                    }
                    else{
                        setBilgiID(karakterID);
                        setKontrol(true);
                    }
                }
            }>
            {
                (karakterID===bilgiID)
                ? 
                `${karakter.name} Bilgilerini Kapat`
                :
                `${karakter.name} Bilgilerini Göster`
            }
            </button> 
    </div>   
    );
}

export default Karakter;