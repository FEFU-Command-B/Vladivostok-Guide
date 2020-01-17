import React, {Component} from 'react'
import Layout from '../layout/default'
import Card from '../components/card'
import Button from '@material-ui/core/Button';
import Link from 'next/link'
import Answers from '../components/answers'
import QuestionCard from '../components/questionCard'

export default class Home extends Component {
    formRef = React.createRef();
    constructor(props) {
        super(props);
        this.state = {
            isLast : false
        };
        this.LastQuestionChange = this.LastQuestionChange.bind(this);
    }
   LastQuestionChange (value) {
        this.setState({isLast : value})
    }
    render() {
        return (
            <Layout>
                <div className="container">
                    <div className="quiz">
                     <QuestionCard ref="quiz" propsName={this.LastQuestionChange}/>
                    </div>
                    <div className="left__container">
                        <div className="boy">
                            <img src="../static/images/Vladik.png"/>
                        </div>
                    </div>
                    <div className="right-button">
                        {
                            //this.formRef.state.isLast ?
                            //false ?
                            this.state.isLast ?
                            <Button href="/questions" variant="contained" color="primary">
                                Go to Your Personal Route!
                            </Button>
                            : null
                        }
                    </div>
                </div>
            </Layout>
        );
    }

}