import React from 'react';

let MenuItem = (props) => (
	<li className={"menu-item " + props.className}>
		{props.children}
	</li>
);

module.exports = MenuItem;
