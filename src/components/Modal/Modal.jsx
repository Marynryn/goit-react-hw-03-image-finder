import React from "react";

export default class Modal extends React.Component {
    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown)
    }
    handleKeyDown = e => {
        if (e.code === "Escape") {
            this.props.Onclose()
        }
    }
    handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.Onclose();
        }
    }
    render() {
        return (
            <div className="Modal_backdrop" onClick={this.handleBackdropClick} >
                <div className="Modal_content"><img src="" alt="" /></div>
            </div>
        );
    }
}