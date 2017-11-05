const React 	= require('react');
const u 		= require('./swipe-helper');
const Menu		= require("./Menu.jsx");
//const Hammer	= require('react-hammerjs');

require	('./MobileMenuFunction.scss');

class MobileMenu extends React.Component {

	constructor(props) {
		super(props);
	}

 	swiped(ev) {
		if (u.isRightSwipe(ev)) {
			this.props.closeMenu();
		}
	}

	render() {
		let className = (this.props.className) ? "mobile " + this.props.className : "mobile";

		return(
			<Menu className={className} id="mobile-menu">
				{this.props.children}
			</Menu>
		);
	}
}

/*
<Hammer onSwipe={this.swiped.bind(this)}>
</Hammer>
*/

module.exports = MobileMenu;
