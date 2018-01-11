import React, {Component} from 'react';
import classSet from "react-classset";

export class VerificationType extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        };

        this.detailsActive = this.detailsActive.bind(this);
    }
    detailsActive() {
        this.setState({
            active: true
        })
    }

    render() {
        const verificationBox = classSet({
            'verification-type': true,
            'active': this.state.active === true
        });
        return (
            <section onClick={this.detailsActive} className={verificationBox}>
                <h2 className="verification-name">{this.props.name}</h2>
                <span className="verification-state">{this.props.active}</span>
                <p className="verification-desc">{this.props.desc}</p>
                <span className="verification-city"><span>☻</span> {this.props.city}</span>
                <section className="verification-details">
                    <h2 className="details-name">{this.props.name}</h2>
                    <span className="details-state">{this.props.active}</span>
                    <p className="details-desc">{this.props.desc}</p>
                    <span className="details-city"><span>☻</span> {this.props.city}</span>
                </section>
            </section>
        );
    }
}
