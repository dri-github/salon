import React from "react";
import "./Card.css";

export default class Card extends React.Component {
    render() {
        const props = this.props;

        return (
            <div className="card">
                <span className="top">{props.top}</span>
                <img src={props.image} alt="" className="photo" />
                <p>{props.children}</p>
                {props.coasts.map((coast, i) => {
                    return <span className={"coast-" + (i + 1)}>{coast}</span>
                })}
            </div>
        );
    }
}