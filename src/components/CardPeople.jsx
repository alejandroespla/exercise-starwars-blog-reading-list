const CardPeople = ({ uid, birth_year, eye_color, gender, hair_color, height, mass, name, skin_color }) => {

    return (
        <div className="card" style={{ minWidth: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title mb-2 text-primary">{name}</h4>
                <p className="card-text"><strong>Birth Year: </strong>{birth_year}</p>
                <p className="card-text"><strong>Eye Color: </strong>{eye_color}</p>
                <p className="card-text"><strong>Gender: </strong>{gender}</p>
                <p className="card-text"><strong>Hair Color: </strong>{hair_color}</p>
                <p className="card-text"><strong>Height: </strong>{height}</p>
                <p className="card-text"><strong>Mass: </strong>{mass}</p>
                <p className="card-text"><strong>Skin Color: </strong>{skin_color}</p>
                <a href="#" className="btn btn-outline-primary">Know more!</a>
            </div>
        </div>
    )
}

export default CardPeople


