/** @format */

import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

function MainLayout() {
	return (
		<>
			<Navbar />

			<div>
				<Sidebar />
			</div>

			<main>
				<Outlet />
			</main>
		</>
	);
}

export default MainLayout;
