const CardPlanet = ({ uid, name, terrain, population }) => {

    return (
        <div className="card" style={{ minWidth: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title mb-2 text-primary">{name}</h4>
                <p className="card-text"><strong>Terrain: </strong>{terrain}</p>
                <p className="card-text"><strong>Population: </strong>{population}</p>
                <a href="#" className="btn btn-outline-primary">Know more!</a>
            </div>
        </div>
    )
}

export default CardPlanet