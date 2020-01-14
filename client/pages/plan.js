import React, {Component} from 'react'
import Layout from '../layout/default'
import ColumnCard from '../components/card'


export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <div className="plan__container">
                    <div className="plan__columns">
                        <div className="plan__columns--item">
                            <ColumnCard/>
                        </div>
                        <div className="plan__columns--item">
                            <ColumnCard/>
                        </div>
                        <div className="plan__columns--item">
                            <ColumnCard/>
                        </div>
                        <div className="plan__columns--item">
                            <ColumnCard/>
                        </div>
                        <div className="plan__columns--item">
                            <ColumnCard/>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }

}