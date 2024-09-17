import React from "react";
import { Link } from "react-router-dom";
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 mx-5"><img src="https://pngimg.com/d/star_wars_logo_PNG34.png" className="mx-3" style={{width: 50}}/></span>
				
			</Link>
			<div className="ml-auto mx-5 ">
			<div className="dropdown">
			<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
				Favorites
			</button>
			<ul className="dropdown-menu">
				<li><a className="dropdown-item" href="#">Action</a></li>
				<li><a className="dropdown-item" href="#">Another action</a></li>
				<li><a className="dropdown-item" href="#">Something else here</a></li>
			</ul>
			</div>
			</div>
		</nav>
	);
};
