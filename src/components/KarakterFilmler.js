import React from "react";
function KarakterFilmler(props){
    const {filmler} = props
    return (
        <div>
            <p className="film">Movies </p>
            {
                filmler.map((film,index )=> (
                    <p className="film" key={index}> {film} </p>
                ))
            }
        </div>
        
    );
}
export default KarakterFilmler;