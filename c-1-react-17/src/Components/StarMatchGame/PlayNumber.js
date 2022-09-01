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
        console.log(this.props.number);
    }

    onClickHandler = () => this.props.onClick(this.props.number, this.props.status);

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