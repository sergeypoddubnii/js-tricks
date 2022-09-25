import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () => {
	return (
		<aside className="main-sidebar sidebar-dark-primary elevation-4">
			<div className="sidebar">
				<nav className="mt-2">
					<ul className="nav nav-pills nav-sidebar flex-column">
						<li className="nav-item">
							<Link className='nav-link' to={''}>
								<p>React patterns</p>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</aside>
	);
};

export default Menu;
