import React from "react";
import "./Spec.css";

export default class Spec extends React.Component {
    render() {
        const props = this.props;

        return (
            <div className="image-container">
                <img className="special" src={props.image} alt="" />
                <div className="text-overlay">
                    {props.children}
                </div>
            </div>
        );
    }
}