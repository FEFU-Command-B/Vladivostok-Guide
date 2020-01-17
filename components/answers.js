import React, {Component} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import fetch from 'isomorphic-unfetch'
import Button from "@material-ui/core/Button";
import Icon from '@material-ui/core/Icon';
import CardActions from "@material-ui/core/CardActions";

//import { CookiesProvider } from 'react-cookie';
function StyledRadio(props) {

	return (
		<Radio
			disableRipple
			color="default"
			{...props}
		/>
	);
}

class Answers extends Component {
	constructor(props) {

		super(props);
		this.state = {
			options: "",
			question: "",
			value: -1,
			isButtonDisabled: true,
			isLast: false,
			isLoaded: false
		};
		this.GetData = this.GetData.bind(this);
		this.UpdateData = this.UpdateData.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	async GetData() {
		const responce = await fetch('https://vladikproj.azurewebsites.net/question', {
			credentials: 'include'
		});
		const json = await responce.json();
		this.setState({
			options: json.options,
			question: json.question, value: -1, isButtonDisabled: true,
			isLoaded: true
		});
		const resp1 = await fetch('https://vladikproj.azurewebsites.net/cookieTest/set/mm', {
			credentials: 'include'
		});
		const json1 = await resp1.json();
		console.log(json1);
		const resp2 = await fetch('https://vladikproj.azurewebsites.net/cookieTest/get/mm', {
			credentials: 'include'
		});
		const json2 = await resp2.json();
		console.log(json2);
	}

	async UpdateData(event) {
		//setCookie('quiz', {});
		if (this.state.isLast) {
			window.location.href = '/plan';
			return;
		}
		fetch('https://vladikproj.azurewebsites.net/question/' + this.state.value)
			.then(res => res.json())
			.then(res => {
				if (res.question === null) {
					this.setState({isButtonDisabled: false, isLast: true});
					this.props.passVal(true);
					return;
				}
				this.setState({
					options: res.options,
					question: res.question, value: -1, isButtonDisabled: true
				})
			});
	}

	handleChange(event) {
		if (this.state.isLast) {
			return;
		}
		this.setState({value: event.target.value, isButtonDisabled: false});
	}

	componentDidMount() {
		this.GetData();
	}


	render() {
		if (!this.state.isLoaded) {
			return (<div></div>);
		}
		return (
			<FormControl component="fieldset" value={this.state.value} onChange={this.handleChange}
			             disabled={this.state.isLast}>
				<FormLabel className="question">{this.state.question}</FormLabel>
				<RadioGroup defaultValue="" className="variants" aria-label="options" name="customized-radios">
					{Object.values(this.state.options).map(option =>
						<FormControlLabel value={option} control={<StyledRadio/>} label={option}/>
					)}
				</RadioGroup>
				<div className="right-button__answer">
					<Button size="small" color="primary" onClick={this.UpdateData}
					        disabled={this.state.isButtonDisabled}>
						{this.state.isLast ? 'Поехали' : 'Готово'}
					</Button>
				</div>
			</FormControl>);
	}
}

export default Answers
