import React from 'react';
import Pin from './Pin';

class Home extends React.Component {
	render() {
		const Pins = this.props.pins.map((pin) => {
			return <Pin card={pin} />;
		});
		return <div className="row container">{Pins}</div>;
	}
}

export default Home;
