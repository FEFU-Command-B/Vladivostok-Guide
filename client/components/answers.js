import React, {Component} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import fetch from 'isomorphic-unfetch'
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
            question : ""
        };
        this.GetData = this.GetData.bind(this);
    }
     GetData() {
        //let request =  fetch('https://vladikproj.azurewebsites.net/question');
            fetch('https://vladikproj.azurewebsites.net/question')
                .then(res => res.json())
                .then(res => this.setState({options : res.options,
                question : res.question}));
    }

    componentDidMount() {
        this.GetData();
    }

    render () {
        console.log(typeof(this.state.options));
        return (<FormControl component="fieldset">
            <FormLabel component="legend">{this.state.question}</FormLabel>
            <FormLabel component="legend">Choose options suitable for you</FormLabel>
            <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
                {Object.values(this.state.options).map(option =>
                    <FormControlLabel value={option} control={<StyledRadio />} label={option} />
                )}
            </RadioGroup>
        </FormControl>);
    }
}

export default Answers
