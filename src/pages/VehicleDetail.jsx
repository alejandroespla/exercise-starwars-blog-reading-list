import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Vehicles from "../assets/img/vehicles.png"

const VehicleDetail = () => {
  const { uid } = useParams();

  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/vehicles/${uid}`)
      .then(res => {
        if (!res.ok) throw new Error("Error fetching vehicle");
        return res.json();
      })
      .then(data => {
        setVehicle(data.result);
      });
  }, [uid]);

  if (!vehicle) return null;

  const { properties } = vehicle;

  return (
    <div className="container d-flex py-5" style={{ height: "100vh" }}>
      <div style={{ width: "60%" }}>
        <img
          src={Vehicles}
          alt={properties.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", paddingRight:"24px" }}
        />
      </div>
      <div className="m-3" style={{ width: "40%", paddingLeft:"24px" }}>
        <h1 className="mb-3">{properties.name}</h1>
        <p><strong>Model:</strong> {properties.model}</p>
        <p><strong>Vehicle Class:</strong> {properties.vehicle_class}</p>
        <p><strong>Manufacturer:</strong> {properties.manufacturer}</p>
        <p><strong>Cost in Credits:</strong> {properties.cost_in_credits}</p>
        <p><strong>Length:</strong> {properties.length}</p>
        <p><strong>Crew:</strong> {properties.crew}</p>
        <p><strong>Passengers:</strong> {properties.passengers}</p>
        <p><strong>Max Atmosphering Speed:</strong> {properties.max_atmosphering_speed}</p>
      </div>
    </div>
  );
};

export default VehicleDetail;