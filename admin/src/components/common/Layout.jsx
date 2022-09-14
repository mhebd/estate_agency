import React from 'react';
import Footer from './footer/Footer';
import LogoutModel from './footer/LogoutModel';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

function Layout({ children }) {
	return (
		<>
			<div id='page-top' />

			<div id='wrapper'>
				<Sidebar />

				<div id='content-wrapper' className='d-flex flex-column'>
					<div id='content'>
						<Header />

						<div className='container-fluid'>
							<div
								className=''
								style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}
							>
								{children}
							</div>
						</div>
					</div>

					<Footer />
				</div>
			</div>
			<a className='scroll-to-top rounded' href='#page-top'>
				<i className='fas fa-angle-up' />
			</a>
			<LogoutModel />
		</>
	);
}

export default Layout;
