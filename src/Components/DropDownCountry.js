import React from 'react';

const countrySelect = (props) => {
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
			  <select value={props.value} onChange={props.onchange} style={style}>
				  <option value={props.value}>{props.label1}</option>
				  <option value={props.value}>{props.label2}</option>
				  <option value={props.value}>{props.label3}</option>
				  <option value={props.value}>{props.label4}</option>
			  </select>
		  </div>
	);
};

export default countrySelect;