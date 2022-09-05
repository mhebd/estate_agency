import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './common/Layout';
import Agent from './pages/agent/Agent';
import Blog from './pages/blog/Blog';
import Home from './pages/home/Home';
import Property from './pages/property/Property';
import Service from './pages/service/Service';

function Router() {
	return (
		<Routes>
			<Route
				path=''
				element={
					<Layout>
						<Home />
					</Layout>
				}
			/>

			<Route
				path='service'
				element={
					<Layout>
						<Service />
					</Layout>
				}
			/>

			<Route
				path='property'
				element={
					<Layout>
						<Property />
					</Layout>
				}
			/>

			<Route
				path='blog'
				element={
					<Layout>
						<Blog />
					</Layout>
				}
			/>

			<Route
				path='agent'
				element={
					<Layout>
						<Agent />
					</Layout>
				}
			/>
		</Routes>
	);
}

export default Router;
