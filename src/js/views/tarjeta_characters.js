import React, { useState,useContext,useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Tarjeta_characters = (props) =>{
const [tarjeta_characters, setTarjeta_characters] = useState([]);
  
const params=useParams()  
const { store, actions } = useContext(Context);
console.log(params)

const character = store.characters2.find((character) => character.uid == params.id)

return(
<>

<div className="container">
      <div className="row">
        <div className="col">
          <img
             src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
          
            className=""
            alt=""
          />
        </div>
        <div className="col">
          <h1>{character.properties.name}</h1>
          <p>{character.description}</p>
        </div>
      </div>
      <div className="text-danger">
        <hr></hr>
        <div className="row"> 
            <div className="col">
                <p className="fw-bold">Name</p>
                <p>{character.properties.name}</p>
            </div>
            <div className="col">
                <p className="fw-bold">Birth Year</p>
                <p>{character.properties.birth_year}</p>
            </div>
            <div className="col">
                <p className="fw-bold">Gender</p>
                <p>{character.properties.gender}</p>
            </div>
            <div className="col">
                <p className="fw-bold">Height</p>
                <p>{character.properties.height}</p>
            </div>
            <div className="col">
                <p className="fw-bold">Skin Color</p>
                <p>{character.properties.skin_color}</p>
            </div>
            <div className="col">
                <p className="fw-bold">Eye Color</p>
                <p>{character.properties.eye_color}</p>
            </div>
        </div>
      </div>
    </div>







</>

)
}