import React, { useContext }  from "react";
import { Link } from "react-router-dom";
import pngwing from "../../img/pngwing.com.png";
import { Context } from "../store/appContext";


export const Navbar = () => {
const {store, actions } = useContext(Context);
const {favoritos} = store;


	return ( 
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ms-4"><img src={pngwing}/></span>
			</Link>
			<div className="ml-auto">
				
			<div class="dropdown me-5">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Favoritos
<span>{store.favoritos.length} 
	</span>	

  </button>
  <ul className="dropdown-menu">
							{store.favoritos.length == 0 ? "Vacio" : favoritos.map((item) => {
								return (
									<li>
										<a onClick={ () => actions.deleteFavorito(item) } className="dropdown-item">
											{item} ❌
										</a>
									</li>
								)
							})}
						</ul>
</div>
				
			</div>
		</nav>
	);
};
