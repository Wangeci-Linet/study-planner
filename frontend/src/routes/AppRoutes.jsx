/** @format */

import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Courses from "../pages/Courses";
import CourseDetails from "../pages/CourseDetails";
import StudySessions from "../pages/StudySessions";

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
			<Route path="/courses" element={<Courses />} />
			<Route path="/courses/:id" element={<CourseDetails />} />
			<Route path="/sessions" element={<StudySessions />} />
		</Routes>
	);
}
export default AppRoutes;
