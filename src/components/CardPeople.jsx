import useGlobalReducer from "../hooks/useGlobalReducer";
import Card_img from "../assets/img/card-img.png"

const CardPeople = ({ uid, name, birth_year, eye_color, gender, hair_color, height, mass, skin_color }) => {

    const { store, dispatch } = useGlobalReducer();

    const isFav = store.favorites.some(fav => fav.uid === uid && fav.type === "people");

    const handleFavorite = () => {
        dispatch({
            type: "toggle_favorite",
            payload: { uid, name, type: "people" }
        });
    };

    return (
        <div className="card" style={{ minWidth: "18rem" }}>
            <img src={Card_img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title mb-2 text-primary text-break">{name}</h4>
                <p className="card-text"><strong>Birth Year: </strong>{birth_year}</p>
                <p className="card-text"><strong>Eye Color: </strong>{eye_color}</p>
                <p className="card-text"><strong>Gender: </strong>{gender}</p>
                <p className="card-text"><strong>Hair Color: </strong>{hair_color}</p>
                <p className="card-text"><strong>Height: </strong>{height}</p>
                <p className="card-text"><strong>Mass: </strong>{mass}</p>
                <p className="card-text"><strong>Skin Color: </strong>{skin_color}</p>
                <div className="d-flex justify-content-between">
                    <a href="#" className="btn btn-outline-primary">Know more!</a>
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
    )
}

export default CardPeople


