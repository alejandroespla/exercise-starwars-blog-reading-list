import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card_img from "../assets/img/card-img.png";

const PersonDetail = () => {
  const { uid } = useParams();

  const [person, setPerson] = useState(null);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/people/${uid}`)
      .then(res => {
        if (!res.ok) throw new Error("Error fetching person");
        return res.json();
      })
      .then(data => {
        setPerson(data.result);
      })
      
  }, [uid]);

  if (!person) return null; // No renderiza nada si no hay datos

  const { properties } = person;

  return (
    <div className="container d-flex py-5" style={{ height: "100vh" }}>
      <div style={{ width: "60%" }}>
        <img
          src={Card_img}
          alt={properties.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", paddingRight:"24px" }}
        />
      </div>
      <div className="m-3" style={{ width: "40%" , paddingLeft:"24px"}}>
        <h1 className="mb-3">{properties.name}</h1>
        <p><strong>Birth Year:</strong> {properties.birth_year}</p>
        <p><strong>Eye Color:</strong> {properties.eye_color}</p>
        <p><strong>Gender:</strong> {properties.gender}</p>
        <p><strong>Hair Color:</strong> {properties.hair_color}</p>
        <p><strong>Height:</strong> {properties.height}</p>
        <p><strong>Mass:</strong> {properties.mass}</p>
        <p><strong>Skin Color:</strong> {properties.skin_color}</p>
      </div>
    </div>
  );
};

export default PersonDetail;