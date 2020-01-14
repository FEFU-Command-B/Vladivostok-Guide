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
            anny: 'ne smotrit'
        }
        this.GetData = this.GetData.bind(this);
    }
    GetData() {

    }
    render () {
        return (<FormControl component="fieldset">
            <FormLabel component="legend">Choose options suitable for you</FormLabel>
            <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
                <FormControlLabel value="" control={<StyledRadio />} label="Female" />
                <FormControlLabel value="" control={<StyledRadio />} label="Male" />
                <FormControlLabel value="" control={<StyledRadio />} label="Other" />
                <FormControlLabel
                    value="disabled"
                    disabled
                    control={<StyledRadio />}
                    label="(Disabled option)"
                />
            </RadioGroup>
        </FormControl>);
    }
};

export default Answers
