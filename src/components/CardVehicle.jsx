const CardVehicle = ({ uid, name, model, cargo_capacity, passengers,vehicle_class}) => {

    return (
        <div className="card" style={{ minWidth: "18rem" }}>
            <img src="https://plus.unsplash.com/premium_photo-1668800128890-bc8d2bf9af7e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title mb-2 text-primary">{name}</h4>
                <p className="card-text"><strong>Model: </strong>{model}</p>
                <p className="card-text"><strong>Capacity: </strong>{cargo_capacity}</p>
                <p className="card-text"><strong>Passengers: </strong>{passengers}</p>
                <p className="card-text"><strong>Class: </strong>{vehicle_class}</p>
                <a href="#" className="btn btn-outline-primary">Know more!</a>
            </div>
        </div>
    )
}

export default CardVehicle