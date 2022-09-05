import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PagesDropDownMenu from './PagesDDMenu';

function Sidebar() {
	return (
		// <!-- Sidebar -->
		<ul
			className='navbar-nav offcanvas-sm offcanvas-start bg-gradient-primary sidebar sidebar-dark accordion'
			id='accordionSidebar'
		>
			{/* <!-- Sidebar - Brand --> */}
			<Link
				className='sidebar-brand d-flex align-items-center justify-content-center'
				to='/'
			>
				<div className='sidebar-brand-icon rotate-n-15'>
					<i className='fas fa-laugh-wink' />
				</div>
				<div className='sidebar-brand-text d-inline d-inline d-sm-none d-md-inline mx-3'>
					SB Admin <sup>2</sup>
				</div>
			</Link>

			{/* <!-- Divider --> */}
			<hr className='sidebar-divider my-0' />

			{/* <!-- Nav Item - Dashboard --> */}
			<li className='nav-item active'>
				<NavLink className='nav-link' to='/'>
					<i className='fas fa-fw fa-tachometer-alt' />
					<span>Dashboard</span>
				</NavLink>
			</li>

			{/* <!-- Divider --> */}
			<hr className='sidebar-divider' />

			{/* <!-- Heading --> */}
			<div className='sidebar-heading'>Addons</div>

			{/* <!-- Nav Item - Pages Collapse Menu --> */}
			<PagesDropDownMenu />

			{/* <!-- Divider --> */}
			<hr className='sidebar-divider d-none d-md-block' />

			{/* <!-- Sidebar Toggler (Sidebar) --> */}
			<div className='text-center d-none d-md-inline'>
				<button
					type='button'
					className='rounded-circle border-0'
					id='sidebarToggle'
				/>
			</div>
		</ul>
	);
}

export default Sidebar;
