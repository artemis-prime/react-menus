var React = require('react');

let Menu = (props) => (
	<div className={"menu " + props.className} id={props.id}>
		<ul className="menu-items">
			{props.children}
		</ul>
	</div>
);

module.exports = Menu;
