import React from 'react';

class Pin extends React.Component {
	render() {
		/* document.addEventListener('DOMContentLoaded', function() {
			var elems = document.querySelectorAll('.modal');
			var instances = M.Modal.init(elems, options);
		}); */

		const PinModal = (
			<div id={this.props.id} className="modal">
				<div className="modal-content">
					<div className="card">
						<div className="card-image">
							<img
								src={
									this.props.card.imageUrl ? (
										this.props.card.imageUrl
									) : (
										'https://cadencestorage.blob.core.windows.net/mondial/PartImages/SmallImages/No_Image.jpg'
									)
								}
								alt=""
							/>
						</div>
					</div>
					<p>{this.props.card.text}</p>
					<div class="modal-footer">
						<a href="#!" class="modal-close waves-effect waves-green btn-flat">
							Agree
						</a>
					</div>
				</div>
			</div>
		);

		return (
			<div className="col s6 m4 xl3">
				<div className="card">
					<div className="card-image">
						<img
							src={
								this.props.card.imageUrl ? (
									this.props.card.imageUrl
								) : (
									'https://cadencestorage.blob.core.windows.net/mondial/PartImages/SmallImages/No_Image.jpg'
								)
							}
							alt=""
						/>
						<a
							href={'#' + this.props.id}
							className="btn-floating halfway-fab waves-effect waves-light amber accent-2 modal-trigger"
						>
							<i class="material-icons">add</i>
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Pin;
