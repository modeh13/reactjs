import React from "react";

const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue'
 };

export default class PlayNumber extends React.Component {
    constructor(props) {
        super(props);
    }

    onClickHandler = (evt) => {
        console.log('PlayNumber', this.props.number);
    }

    render() {
        return (
            <div className="number"
                onClick={this.onClickHandler}
                style={{backgroundColor: colors[this.props.status]}}>
                {this.props.number}
            </div>
        );
    }
}