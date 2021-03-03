import React from "react";

//create header
export function Cards(card) {
	return (
		<div className="col">
			<div className="card" style="width: 18rem;">
				<img src={card.image} className="card-img-top" alt={card.alt} />
				<div className="card-body">
					<h5 className="card-title">{card.title}</h5>
					<p className="card-text">{card.description}</p>
					<a href={card.url} className="btn btn-primary">
						{card.button}
					</a>
				</div>
			</div>
		</div>
	);
}
