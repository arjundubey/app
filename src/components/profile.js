import React from "react";


class CalcButton extends React.Component {

	setButtonValue = () => {

		let value = this.props.label;

		if(value === 'C') {
			//reset calc
			this.props.resetCalc();
			return;
		}

		if(value === '=') {
			//reset calc
			this.props.calculateResult();
			return;
		}

		if(typeof this.props.value !== "undefined")
			value = this.props.value;

		this.props.updateString(this.props.label,value);
	}

	render() {

		let label = this.props.label;
		

		return (
			<button onClick={this.setButtonValue} className={this.props.tempClass} data-func="reset">{label}</button>
		);

	}

}

export default CalcButton;

