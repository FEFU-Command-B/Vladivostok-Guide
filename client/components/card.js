import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SimpleModal from "./infoWindow";
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
});

export default class ColumnCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        };
    }
    handleToggleModal() {
        this.setState({ showModal: !this.state.showModal });
    }
    render() {
        const { showModal } = this.state;
        return (
            <Card className="route__card">
                {showModal &&
                <SimpleModal onCloseRequest={() => this.handleToggleModal()}>
                    <img src="../static/images/123456.jpg" alt="Nature" />
                </SimpleModal>}
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={this.props.image}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <div className="time">
                            <Typography gutterBottom variant="h5" component="h2">
                                {this.props.name}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                                {this.props.time}
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {this.props.description}
                            </Typography>
                        </div>
                        <div>
                            <Chip label="Hui" variant="outlined" />
                        </div>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <div onClick={() => this.handleToggleModal()}>
                        <Button size="small" color="primary">
                            More
                        </Button>
                    </div>
                </CardActions>
            </Card>
        );
    }
}