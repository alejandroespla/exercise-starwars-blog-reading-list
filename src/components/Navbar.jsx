import { Link } from "react-router-dom";
import Logo from "../assets/img/Logo.png";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<a class="navbar-brand" href="#">
						<img src={Logo} alt="Bootstrap" width="100
						"  />
					</a>
				</Link>
				<div class="dropdown">
					
					<button className="btn btn-primary dropdown-toggle ml-auto" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
						Favorites <span class="badge text-bg-secondary">4</span>
					</button>
					
					<ul class="dropdown-menu">
						<li><a className="dropdown-item" href="#">Action</a></li>
						<li><a className="dropdown-item" href="#">Another action</a></li>
						<li><a className="dropdown-item" href="#">Something else here</a></li>
					</ul>
				</div>
				
			</div>
		</nav>
	);
};
