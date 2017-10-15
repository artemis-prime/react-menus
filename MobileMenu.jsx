const React 	= require('react');
const Hammer 	= require('react-hammerjs');

const u 		= require('./swipe-helper');
const Menu		= require("./Menu.jsx");


//require	('./MobileMenuFunction.scss');

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
			<Hammer onSwipe={this.swiped.bind(this)}>
				<Menu className={className} id="mobile-menu">
					{this.props.children}
				</Menu>
			</Hammer>
		);
	}
}

module.exports = MobileMenu;
