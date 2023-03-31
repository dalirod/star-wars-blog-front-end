import React, { useState,useContext,useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Tarjeta_planets = (props) =>{
const [tarjeta_planets, setTarjeta_planets] = useState([]);
  
const params=useParams()  
const { store, actions } = useContext(Context);
console.log(params)

const planet = store.planets2.find((planet) => planet.uid == params.id)
return(
<>
<div className="container">
      <div className="row">
        <div className="col">
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
            className=""
            alt=""
          />
        </div>
        <div className="col">
          <h1>{planet.properties.name}</h1>
          <p>{}</p>
        </div>
      </div>
      <div className="text-danger">
        <hr></hr>
        <div className="row"> 
            <div className="col">
                <p className="fw-bold">Name</p>
                <p>{planet.properties.name}</p>
            </div>
            <div className="col">
                <p className="fw-bold">Climate</p>
                <p>{planet.properties.climate}</p>
            </div>
            <div className="col">
                <p className="fw-bold">Population</p>
                <p>{planet.properties.population}</p>
            </div>
            <div className="col">
                <p className="fw-bold">Rotation Period</p>
                <p>{planet.properties.rotation_period}</p>
            </div>
            <div className="col">
                <p className="fw-bold">Orbital Period</p>
                <p>{planet.properties.orbital_period}</p>
            </div>
            <div className="col">
                <p className="fw-bold">Diameter</p>
                <p>{planet.properties.diameter}</p>
            </div>
        </div>
      </div>
    </div>   
            
            
                

</>

)
}