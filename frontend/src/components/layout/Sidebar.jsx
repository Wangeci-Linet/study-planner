/** @format */
import { NavLink } from "react-router-dom";

function Sidebar() {
	return (
		<aside>
			<nav>
				<NavLink to="/">Dashboard</NavLink>
				<NavLink to="/courses">Courses</NavLink>
				<NavLink to="/sessions">Study Sessions</NavLink>
			</nav>
		</aside>
	);
}
export default Sidebar;
