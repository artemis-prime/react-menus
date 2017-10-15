let isRightSwipe = (ev) => {
			// From experimentation, this is more reliable that ev.direction == Hammer.DIRECTION_RIGHT
	return  (ev.deltaX > 0 && ev.deltaX > Math.abs(ev.deltaY));
};

let isLeftSwipe = (ev) => {
			// From experimentation, this is more reliable that ev.direction == Hammer.DIRECTION_RIGHT
	return  (ev.deltaX < 0 && Math.abs(ev.deltaX) > Math.abs(ev.deltaY));
};

module.exports = {
	isRightSwipe: isRightSwipe
	,isLeftSwipe: isLeftSwipe
};
