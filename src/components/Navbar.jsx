import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import Logo from "../assets/img/Logo.png";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();

	const handleRemoveFavorite = (uid, type) => {
		dispatch({
			type: "remove_favorite",
			payload: { uid, type }
		});
	};

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container d-flex justify-content-between align-items-center">
				<Link to="/" className="navbar-brand">
					<img src={Logo} alt="Logo" width="100" />
				</Link>

				<div className="dropdown">
					<button
						className="btn btn-primary dropdown-toggle"
						type="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Favorites <span className="badge text-bg-secondary">{store.favorites.length}</span>
					</button>

					<ul className="dropdown-menu dropdown-menu-end">
						{store.favorites.length === 0 ? (
							<li className="dropdown-item text-muted">No favorites yet</li>
						) : (
							store.favorites.map((item, index) => (
								<li
									key={`${item.uid}-${item.type}`}
									className="d-flex justify-content-between align-items-center px-3"
								>
									<span>{item.name}</span>
									<button
										onClick={() => handleRemoveFavorite(item.uid, item.type)}
										className="btn btn-sm btn-outline-danger ms-2"
										title="Remove"
									>
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
											<path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
										</svg>
									</button>
								</li>
							))
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};