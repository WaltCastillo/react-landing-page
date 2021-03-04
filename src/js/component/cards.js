import React from "react";
import PropTypes from "prop-types";

//create header
export function Cards(props) {
	return (
		<div className="col">
			<div className="card">
				<img
					src={props.card.image}
					className="card-img-top"
					alt={props.card.alt}
				/>
				<div className="card-body">
					<h5 className="card-title">{props.card.title}</h5>
					<p className="card-text">{props.card.description}</p>
					<a href={props.card.url} className="btn btn-primary">
						{props.card.button}
					</a>
				</div>
			</div>
		</div>
	);
}

Cards.propTypes = {
	card: {
		image: PropTypes.string,
		alt: PropTypes.string,
		title: PropTypes.string,
		description: PropTypes.string,
		url: PropTypes.string,
		button: PropTypes.string
	}
};
