import React from 'react';

const citySelect = (props) => {
	const style = {
		display: "inline-block",
		width: "100px",
		borderRadius: "5px",
		height: "25px",
		backgroundColor: "antiquewhite",
		fontFamily: "inherit"
	};
	return (
		  <div>
			  <select value={props.value} onSubmit={props.onsubmit} style={style}>
				  <option value="">{props.value}</option>
				  <option value="">{props.value}</option>
				  <option value="">{props.value}</option>
				  <option value="">{props.value}</option>
			  </select>
		  </div>
	);
};

export default citySelect;