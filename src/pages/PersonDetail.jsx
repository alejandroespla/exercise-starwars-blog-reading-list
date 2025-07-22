import { useParams } from "react-router-dom";

const PersonDetail = () => {
  const { uid } = useParams();

  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <div style={{ width: "50%" }}>
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
          alt="character"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div style={{ width: "50%", padding: "2rem" }}>
        <h1 className="mb-3">Character Details (ID: {uid})</h1>
        <p>Aquí irían los detalles de la persona que elegiste.</p>
        {/* Puedes traer info real desde tu store o hacer fetch aquí */}
      </div>
    </div>
  );
};

export default PersonDetail;