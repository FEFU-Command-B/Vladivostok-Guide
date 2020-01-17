import React, {Component} from 'react'
import Layout from '../layout/default'
import Card from '../components/card'
import Button from '@material-ui/core/Button';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			anny: 'ne smotrit'
		}
	}

	render() {
		return (
			<Layout>
				<span>Тут будет вопросы</span>
			</Layout>
		);
	}

}
