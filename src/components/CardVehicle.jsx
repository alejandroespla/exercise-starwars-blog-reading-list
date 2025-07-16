import useGlobalReducer from "../hooks/useGlobalReducer";

const CardVehicles = ({ uid, name, model, manufacturer, passengers, max_atmosphering_speed }) => {
  const { store, dispatch } = useGlobalReducer();

  const isFav = store.favorites.some(fav => fav.uid === uid && fav.type === "vehicle");

  const handleFavorite = () => {
    dispatch({
      type: "toggle_favorite",
      payload: { uid, name, type: "vehicle" }
    });
  };

  return (
    <div className="card" style={{ minWidth: "18rem" }}>
      <img
        src="https://plus.unsplash.com/premium_photo-1668800128890-bc8d2bf9af7e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="card-img-top"
        alt="Vehicle"
      />
      <div className="card-body">
        <h4 className="card-title mb-2 text-primary text-break">{name}</h4>
        <p className="card-text"><strong>Model: </strong>{model}</p>
        <p className="card-text"><strong>Manufacturer: </strong>{manufacturer}</p>
        <p className="card-text"><strong>Passengers: </strong>{passengers}</p>
        <p className="card-text"><strong>Speed: </strong>{max_atmosphering_speed}</p>
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

export default CardVehicles;