import React, {Component} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import fetch from 'isomorphic-unfetch'
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
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
            options : "",
            question : "",
            value: -1
        };
        this.GetData = this.GetData.bind(this);
        this.UpdateData = this.UpdateData.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
     GetData() {
        //let request =  fetch('https://vladikproj.azurewebsites.net/question');
            fetch('https://vladikproj.azurewebsites.net/question')
                .then(res => res.json())
                .then(res => this.setState({options : res.options,
                question : res.question, value: -1}));
    }
    async UpdateData () {
        const res = await fetch('https://vladikproj.azurewebsites.net/question/' + this.state.value, {
           method: 'POST'
        });
        this.setState({options : res.options,
            question : res.question, value: -1});
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    componentDidMount() {
        this.GetData();
    }


    render () {
        console.log(typeof(this.state.options));
        return (<FormControl component="fieldset"    value={this.state.value} onChange={this.handleChange}>
            <FormLabel component="legend">{this.state.question}</FormLabel>
            <FormLabel component="legend">Choose options suitable for you</FormLabel>
            <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
                {Object.values(this.state.options).map(option =>
                    <FormControlLabel value={option} control={<StyledRadio />} label={option} />
                )}
            </RadioGroup>
            <div className="right-button_answer">
            {/*<Button size="small" color="primary" action={this.UpdateData()}>*/}
            <Button size="small" color="primary">
                Confirm
            </Button>
            </div>
        </FormControl>);
    }
}

export default Answers
