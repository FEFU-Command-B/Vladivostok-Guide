import React, {Component} from 'react'
import Layout from '../layout/default'
import Card from '../components/card'
import Button from '@material-ui/core/Button';
import Link from 'next/link'
import Answers from '../components/answers'
import QuestionCard from '../components/questionCard'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options : ""
        }
    }

    render() {
        return (
            <Layout>
                <div className="container">
                    <div className="quiz">
                     <QuestionCard/>
                    </div>
                    <div className="left__container">
                        <div className="boy">
                            <img src="../static/images/boy.png"/>
                        </div>
                        {/*<div className="message__box">*/}
                        {/*    <section>*/}
                        {/*        <blockquote className="speech bubble">*/}
                        {/*           <span>Welcome to Vladivostok! My name is Vladik!*/}
                        {/*               Nice to meet you. Let me ask you some questions?</span>*/}
                        {/*        </blockquote>*/}
                        {/*    </section>*/}
                        {/*</div>*/}
                    </div>
                    <div className="right-button">
                        <Link href="/questions">
                            <Button variant="contained" color="primary">
                                Go to questions!
                            </Button>
                        </Link>
                    </div>
                </div>
            </Layout>
        );
    }

}