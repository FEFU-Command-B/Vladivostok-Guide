import React, {Component} from 'react'
import Layout from '../layout/default'
import Card from '../components/card'

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
                <br />
                <span className="hui">{this.state.anny}</span>
                <Card />
                <br />
            </Layout>
        )
    }

}