import React from 'react';
import Home from './components/Home';
import FloatingButton from './components/FloatingButton';
import './App.css';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			pins: [],
			searchValue: ''
		};
	}

	componentDidMount() {
		fetch('https://api.magicthegathering.io/v1/cards')
			.then((res) => res.json())
			.then((data) => this.setState({ pins: data.cards }));
	}

	handleChange = (e) => {
		this.setState({ searchValue: e.target.value });
	};

	includesText = (text, baseText) => {
		// Valido que ambos parámetros sean string
		if (typeof text === 'string' && typeof baseText === 'string') {
			// Verifico si el primer parámetro se encuentra dentro del segundo
			let textUpperCase = text.toUpperCase();
			let baseTextUpperCase = baseText.toUpperCase();
			if (baseTextUpperCase.indexOf(textUpperCase) !== -1) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	};
	render() {
		// setTimeout(console.log(this.state.pins), 2000);

		return (
			<div>
				<div className="navbar-fixed">
					<nav className="amber darken-3">
						<div className="nav-wrapper container">
							<a href="/" className="brand-logo">
								Pinteresting
							</a>
							<ul className="right">
								<li>
									<form className="browser-default right">
										<input
											id="search-input"
											onChange={this.handleChange}
											placeholder="Search tags"
											type="text"
											className="browser-default search-field"
											autoComplete="off"
											aria-label="Search box"
										/>
										<label for="search-input" className="active">
											<i className="material-icons search-icon">search</i>
										</label>
										<i className="material-icons search-close-icon">cancel</i>
									</form>
								</li>
							</ul>
						</div>
					</nav>
				</div>
				<div>
					<FloatingButton />
				</div>
				<div>
					{this.state.pins !== [] ? <Home pins={this.state.pins} /> : <h1>Loading...</h1>}
				</div>
			</div>
		);
	}
}
