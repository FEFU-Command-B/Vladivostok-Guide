import React, { Component } from 'react';

class SimpleModal extends Component {

    constructor(props) {
        super(props);

        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    // Add listeners immediately after the component is mounted.
    componentDidMount() {
        window.addEventListener('keyup', this.handleKeyUp, false);
        document.addEventListener('click', this.handleOutsideClick, false);
    }

    // Remove listeners immediately before a component is unmounted and destroyed.
    componentWillUnmount() {
        window.removeEventListener('keyup', this.handleKeyUp, false);
        document.removeEventListener('click', this.handleOutsideClick, false);
    }

    // Handle the key press event.
    handleKeyUp(e) {
        const { onCloseRequest } = this.props;
        const keys = {
            27: () => {
                e.preventDefault();
                onCloseRequest();
                window.removeEventListener('keyup', this.handleKeyUp, false);
            },
        };

        if (keys[e.keyCode]) { keys[e.keyCode](); }
    }

    // Handle the mouse click on browser window.
    handleOutsideClick(e) {
        const { onCloseRequest } = this.props;

        if ((this.modal) !== undefined) {
            if (!this.modal.contains(e.target)) {
                onCloseRequest();
                document.removeEventListener('click', this.handleOutsideClick, false);
            }
        }
    }

    render () {
        const {
            onCloseRequest
        } = this.props;

        return (
            <div className="modalOverlay">
                <div className="modal" ref={node => (this.modal = node)}>
                    <div className="info__content">
                        <img src="../static/images/123456.jpg"/>
                        <div>
                            <div>{this.props.name}</div>
                            <div>{this.props.time}</div>
                            <div>{this.props.description}</div>
                        </div>
                    </div>
                </div>

                <button
                    type="button"
                    className="closeButton"
                    onClick={onCloseRequest}
                />
            </div>
        );
    }
}
export default SimpleModal;