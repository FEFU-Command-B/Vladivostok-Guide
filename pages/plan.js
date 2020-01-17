import React, {Component} from 'react'
import Layout from '../layout/default'
import ColumnCard from '../components/card'
import fetch from 'isomorphic-unfetch'

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {isLoaded: false};

	}

	async componentDidMount() {
		const response = await fetch('https://vladikproj.azurewebsites.net/route', {
			credentials: 'include'
		});
		const json = await response.json();
		this.setState({route: json.route, isLoaded: true});
	}

	render() {
		if (!this.state.isLoaded) {
			return (<div></div>);
		}
		return (
			<Layout>
				<div className="second__boy">
					<img src="../static/images/Vladik.png"/>
				</div>
				<div className="plan__container">
					<div className="plan__columns">
						{
							Object.values(this.state.route).map((route =>
									<div className="plan__columns--item">
										<ColumnCard
											description={route.description}
											location={route.location}
											name={route.name}
											time={route.time}
											image={'https://vladikproj.azurewebsites.net/' + route.img}
											tags={route.tags}/>
									</div>
							))
						}
					</div>
				</div>
			</Layout>
		);
	}

}
