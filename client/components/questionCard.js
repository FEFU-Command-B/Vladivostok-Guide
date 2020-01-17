import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Answers from '../components/answers'

const useStyles = makeStyles({
    card: {
        maxWidth: 600,
    },
});

export default class QuestionCard extends Component{
    formRef =  React.createRef();
    constructor(props) {
        super(props);
        this.state = {isLast : false};
        this.PopLastValue = this.PopLastValue.bind(this);
    }
    PopLastValue (value) {
      this.props.propsName(value);
    }

    render() {
        return (
            <Card className={useStyles.card}>
                <CardContent>
                    <Answers passVal={this.PopLastValue}/>
                </CardContent>
            </Card>
        );
    }
}