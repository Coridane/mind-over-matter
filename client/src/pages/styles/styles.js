/**
 * Home Layout
 * This will be the main Layout. (Implemented on the Home page).
 */

import React from "react";
import"./styles.css";


export default function DefaultLayout({ children }) {
	return (
		<div className="main_layout">
			<NavMenu />
			{children}
			<Footer />
		</div>
	);
}
