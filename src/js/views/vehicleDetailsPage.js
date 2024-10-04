import PropTypes from "prop-types";
import React, { useState, useEffect, useContext } from "react";
import { useParams, useLocation} from "react-router-dom";
import "../../styles/demo.css";
import { Context } from '../store/appContext.js';



export const VehicleDetailsPage = () => {
    let {nameId} = useParams();
	var img_link = "https://starwars-visualguide.com/assets/img/";
	const { actions,store } = useContext(Context);
	const vehicle = store.vehicleBank.find((e)=>e.name === nameId);
	const index =  store.vehicleBank.indexOf(vehicle);
    return(
        <div className="d-flex justify-content-center" style={{maxWidth:"70%", marginLeft:"15%"}}>
         
			{ <div className="mx-5 container-fluid text-center" >
				<div className=" d-flex justify-content-between">
					<img id="indivImage" src={img_link + "vehicles/" +(index + 1)+ ".jpg"} />
					<div id="indivInfo ">
						{<h2 className="text-center" style={{fontSize:"5rem"}}>{vehicle.name}</h2> }
						<p className="text-center mx-5 fs-3">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

					</div>
				</div>	
				<div className=" mt-4 text-danger text-center row row-col-6" style={{maxWidth:"70%", marginLeft:"15%"}}>
					<div className="col">
						<p className="fs-3">Name</p>
						<p>{vehicle.name}</p>
					</div>
					<div className="col">
						<p className="fs-3">Model</p>
						<p>{vehicle.model}</p>
					</div>
					<div className="col">
						<p className="fs-3">Manufacturer</p>
						<p>{vehicle.manufacturer}</p>
					</div>
					<div className="col">
						<p className="fs-3 ">Cost</p>
						<p>{vehicle.cost_in_credits}</p>
					</div>
					<div className="col">
						<p className="fs-3 ">Length</p>
						<p>{vehicle.length}</p>
					</div>
					<div className="col">
						<p className="fs-3 ">Passengers</p>
						<p>{vehicle.passengers}</p>
					</div>
					
				</div>
			</div> 
			 }

            
            
        </div>
    );
}