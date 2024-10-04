import React, { useState , useEffect , useContext}from "react";
import { Link, useNavigate } from "react-router-dom";
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
import { Context } from '../store/appContext.js';


export const Navbar = () => {
	
	const { actions,store } = useContext(Context);
	const navigate = useNavigate();

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 mx-5"><img src="https://pngimg.com/d/star_wars_logo_PNG34.png" className="mx-3" style={{width: 100}}/></span>
				
			</Link>
			<div className="ml-auto mx-5 ">
			<div className="dropstart">
			<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
				Favorites
			</button>
			<ul className="dropdown-menu mx-5">
			 {store.favoriteList.map((entry,index) =>
					{return <li key={index} className="bg-light border border-secondary dropdown-item"> 
							<button onClick={() => navigate(`${store.favoriteListCategory[index]}`)} className="ms-3 btn text-center" >{entry}</button> 
							<button onClick={() => actions.removeFavorite(store.favoriteList[index])} className="ms-3 btn text-center badge rounded-pill bg-secondary xBtn" >X</button>
						</li>}
					)
				} 
				
			</ul>
			</div>
			</div>
		</nav>
	);
};
