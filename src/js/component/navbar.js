import React, { useState , useEffect}from "react";
import { Link } from "react-router-dom";
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>


export const Navbar = () => {
	const [favoriteCharacters, setFavoriteCharacters] = useState([]);


	function removeFavorite(index) {
		var newFavList = [];
		favoriteCharacters.forEach(e => {
			if(e !== favoriteCharacters[index])
			{newFavList =([...newFavList, e]);
				console.log(newFavList);
			}
		});
		 
		setFavoriteCharacters (newFavList);
	}
	// export to home later
	 function addFavorite(item) {
		let newFavorite = item.name;
		setFavoriteCharacters([...favoriteCharacters, [newFavorite]]);
		
	  }

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 mx-5"><img src="https://pngimg.com/d/star_wars_logo_PNG34.png" className="mx-3" style={{width: 100}}/></span>
				
			</Link>
			<div className="ml-auto mx-5 ">
			<div className="dropdown">
			<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
				Favorites
			</button>
			<ul className="dropdown-menu">
			 {favoriteCharacters.map((entry,index) =>
					{return <li key={index} className="bg-light border border-secondary"> {entry}
					<button onClick= {()=> removeFavorite(index)} className="ms-3 btn text-center badge rounded-pill bg-secondary xBtn">X</button>
					</li>}
					)
				} 
				
			</ul>
			</div>
			</div>
		</nav>
	);
};
