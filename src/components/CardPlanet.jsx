import useGlobalReducer from "../hooks/useGlobalReducer";

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
        src="https://images.unsplash.com/photo-1580422333073-afe7ebfe03f5?auto=format&fit=crop&w=1170&q=80"
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
          <a href="#" className="btn btn-outline-primary">Know more!</a>
          <a onClick={handleFavorite} href="#" className="btn btn-outline-danger">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardPlanets;