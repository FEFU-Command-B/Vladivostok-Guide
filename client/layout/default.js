import React, {Component} from "react";
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Head from "../components/head";
import '../static/scss/styles.scss'

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Head />

            <div>
                <CssBaseline/>
                <AppBar position="relative">
                <Toolbar>
                        Vladik Traveler
                </Toolbar>
            </AppBar>
                {this.props.children}
                {/*<footer>*/}
                {/*    <Typography variant="h6" align="center" gutterBottom>*/}
                {/*        Пися*/}
                {/*    </Typography>*/}
                {/*    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">*/}
                {/*        Something here to give the footer a purpose!*/}
                {/*    </Typography>*/}
                {/*</footer>*/}
            </div>
            </React.Fragment>
        );
    }
}

export default Layout