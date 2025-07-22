import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Planets from "../assets/img/planets.png";

const PlanetDetail = () => {
  const { uid } = useParams();

  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/planets/${uid}`)
      .then(res => {
        if (!res.ok) throw new Error("Error fetching planet");
        return res.json();
      })
      .then(data => {
        setPlanet(data.result);
      });
  }, [uid]);

  if (!planet) return null;

  const { properties } = planet;

  return (
    <div className="container d-flex py-5" style={{ height: "100vh" }}>
      <div style={{ width: "60%" }}>
        <img
          src={Planets}
          alt={properties.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", paddingRight:"24px" }}
        />
      </div>
      <div className="m-3" style={{ width: "40%", paddingLeft:"24px" }}>
        <h1 className="mb-3">{properties.name}</h1>
        <p><strong>Climate:</strong> {properties.climate}</p>
        <p><strong>Diameter:</strong> {properties.diameter}</p>
        <p><strong>Gravity:</strong> {properties.gravity}</p>
        <p><strong>Orbital Period:</strong> {properties.orbital_period}</p>
        <p><strong>Population:</strong> {properties.population}</p>
        <p><strong>Rotation Period:</strong> {properties.rotation_period}</p>
        <p><strong>Surface Water:</strong> {properties.surface_water}</p>
        <p><strong>Terrain:</strong> {properties.terrain}</p>
      </div>
    </div>
  );
};

export default PlanetDetail;