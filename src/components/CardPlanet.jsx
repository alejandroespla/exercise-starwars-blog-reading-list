import useGlobalReducer from "../hooks/useGlobalReducer";
import Planets from "../assets/img/planets.png";
import { Link } from 'react-router-dom';

const CardPlanets = ({ uid, name, climate, diameter, gravity, population, terrain }) => {
  const { store, dispatch } = useGlobalReducer();

  const isFav = store.favorites.some(fav => fav.uid === uid && fav.type === "planet");

  const handleFavorite = () => {
    dispatch({
      type: "toggle_favorite",
      payload: { uid, name, type: "planet" }
    });
  };

  return (
    <div className="card" style={{ minWidth: "18rem" }}>
      <img
        src= {Planets}
        className="card-img-top"
        alt="Planet"
      />
      <div className="card-body">
        <h4 className="card-title mb-2 text-primary text-break">{name}</h4>
        <p className="card-text"><strong>Climate: </strong>{climate}</p>
        <p className="card-text"><strong>Diameter: </strong>{diameter}</p>
        <p className="card-text"><strong>Gravity: </strong>{gravity}</p>
        <p className="card-text"><strong>Population: </strong>{population}</p>
        <p className="card-text"><strong>Terrain: </strong>{terrain}</p>
        <div className="d-flex justify-content-between">
          <Link to={`/detail/planet/${uid}`}>
          <a href="#" className="btn btn-outline-primary">Know more!</a>
          </Link>
          <a
            onClick={handleFavorite}
            href="#"
            className={`btn ${isFav ? 'btn-outline-danger' : 'btn-outline-danger'}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill={isFav ? 'red' : 'none'}
              stroke={isFav ? 'none' : 'red'}
              strokeWidth={isFav ? '0' : '1.5'}
              className={`bi ${isFav ? 'bi-heart-fill' : 'bi-heart'}`}
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardPlanets;