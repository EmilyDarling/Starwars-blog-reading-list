import PropTypes from "prop-types";
import React, { useState, useEffect, useContext } from "react";
import { useParams, useLocation} from "react-router-dom";
import "../../styles/demo.css";
import { Context } from '../store/appContext.js';



export const CharacterDetailsPage = () => {
    let {nameId} = useParams();
	var img_link = "https://starwars-visualguide.com/assets/img/";
	const { actions,store } = useContext(Context);
	const char = store.characterBank.find((e)=>e.name === nameId);
    var index =store.characterBank.indexOf(char)
    return(
        <div className="d-flex justify-content-center" style={{maxWidth:"70%", marginLeft:"15%"}}>
         
			{ <div className="mx-5 container-fluid text-center" >
				<div className=" d-flex justify-content-between">
					<img id="indivImage" src={img_link + "characters/" +(index + 1)+ ".jpg"} />
					<div id="indivInfo ">
						{<h2 className="text-center" style={{fontSize:"5rem"}}>{char.name}</h2> }
						<p className="text-center mx-5 fs-3">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

					</div>
				</div>	
				<div className=" mt-4 text-danger text-center row row-col-6" style={{maxWidth:"70%", marginLeft:"15%"}}>
					<div className="col">
						<p className="fs-3">Name</p>
						<p>{char.name}</p>
					</div>
					<div className="col">
						<p className="fs-3">Birth Year</p>
						<p>{char.birth_year}</p>
					</div>
					<div className="col">
						<p className="fs-3">Gender</p>
						<p>{char.gender}</p>
					</div>
					<div className="col">
						<p className="fs-3 ">Height</p>
						<p>{char.height}</p>
					</div>
					<div className="col">
						<p className="fs-3 ">Skin Color</p>
						<p>{char.skin_color}</p>
					</div>
					<div className="col">
						<p className="fs-3 ">Eye Color</p>
						<p>{char.eye_color}</p>
					</div>
					
				</div>
			</div> 
			 }

            
            
        </div>
    );
}