import React, { Component, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = (props) => {
    const [planets, setPlanets] = useState([]);
    const { store, actions } = useContext(Context);

return(
<>
      <div className="card-star">
      <img src={`https://starwars-visualguide.com/assets/img/planets/${props.item.uid}.jpg`} className="card-img-top" hight={80} width={150} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.item.properties.name}</h5>
          <p className="card-text">
          Population:{props.item.properties.population}
          </p>
          <p>Terrain:{props.item.properties.terrain}</p>
          <Link to={`/tarjeta_planets/${props.item.uid}`}>
          <button className="btn btn-primary me-5"> Lear more!
          </button>
          </Link>
          { store.favoritos.includes(props.item.properties.name) ? (
                <button
                  className="btn btn-outline-warning"
                  onClick={() => actions.deleteFavorito(props.item.properties.name)}
                >
                  💛
                  </button>
                ) : (
                  <button
                  className="btn btn-outline-warning"
                  onClick={() => actions.setFavorito(props.item.properties.name)}
                >
                  💛
                  </button>

                )}
        
        </div>
      </div> 
    </>

)
}


export default Planets;