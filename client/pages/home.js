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
                <div className="container">
                    <div className="boy">
                        <img src="../static/images/boy.png" />
                    </div>
                    <div className="message__box">
                        <section>
                            <blockquote className="speech bubble">Welcome to Vladivostok! My name is Vladik!
                                 Nice to meet you. Let me ask you some questions?</blockquote>
                        </section>
                    </div>
                    <div className="right-button">
                        <Button variant="contained" color="primary">
                            Go to questions!
                        </Button>
                    </div>
                </div>
            </Layout>
        );
    }

}