
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

import CardPeople from "../components/CardPeople.jsx"
import CardPlanet from "../components/CardPlanet.jsx"
import CardVehicle from "../components/CardVehicle.jsx"

import { useEffect } from "react";
import { getPeople } from "../service/fetchApi.js";
import { getPlanets } from "../service/fetchApi.js";
import { getVehicles } from "../service/fetchApi.js"


export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		getPeople().then(data => dispatch({ type: 'get_people', payload: data }))
		getPlanets().then(data => dispatch({ type: 'get_planets', payload: data }))
		getVehicles().then(data => dispatch({ type: 'get_vehicles', payload: data }))
	}, [])

	console.log("este es mi store", store.people)
	return (
		<div className="container my-5">
			<h3 style={{ color: "red" }}>Characters</h3>
			<div className="my-4">
				<div className="d-flex overflow-auto gap-3 pb-3" style={{ whiteSpace: "nowrap" }}>
					{store.people.map((item) => (
						<CardPeople
							key={item.uid}
							name={item.properties.name}
							birth_year={item.properties.birth_year}
							eye_color={item.properties.eye_color}
							gender={item.properties.gender}
							hair_color={item.properties.hair_color}
							height={item.properties.height}
							mass={item.properties.mass}
							skin_color={item.properties.skin_color}
						/>
					))}
				</div>

				<h3 className="my-4" style={{ color: "red" }}>Planets</h3>
				<div className="my-4">
					<div className="d-flex overflow-auto gap-3 pb-3" style={{ whiteSpace: "nowrap" }}>
						{store.planets.map((item) => (
							<CardPlanet
								key={item.uid}
								name={item.properties.name}
								terrain={item.properties.terrain}
								population={item.properties.population}
							/>
						))}
					</div>
				</div>

				<h3 className="my-4" style={{ color: "red" }}>Vehicles</h3>
				<div className="my-4">
					<div className="d-flex overflow-auto gap-3 pb-3" style={{ whiteSpace: "nowrap" }}>
						{store.vehicles.map((item) => (
							<CardVehicle
								key={item.uid}
								name={item.properties.name}
								model={item.properties.model}
								cargo_capacity={item.properties.cargo_capacity}
								passengers={item.properties.passengers}
								vehicle_class={item.properties.vehicle_class}

							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}; 