
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

import Card from "../components/Card.jsx"
import { useEffect } from "react";
import { getPeople } from "../service/fetchApi.js";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		getPeople()
			.then(data => dispatch({ type: 'get_people', payload: data }))
	}, [])
	console.log("este es mi store", store.people)
	return (
		<div className="container my-5">
			<h3>Characters</h3>
			<div>
				<div className="d-flex overflow-auto gap-3 pb-3" style={{ whiteSpace: "nowrap" }}>
					{store.people.map((item) => (
						<Card
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
			</div>
		</div>
	);
}; 