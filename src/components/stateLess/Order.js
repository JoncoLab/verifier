import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PopUp from "../dashboard/popUp";

class Order extends Component {
    constructor(props) {
        super(props);

        this.state = {
            popUp: false
        };
    }
    render() {
        return (
            <section
                className="verification-type"
                onClick={() => {
                    this.setState({
                        popUp: !this.state.popUp
                    })}
                }
            >
                <h2 className="verification-name">{this.props.orderName}</h2>
                <span className="verification-state">{this.props.status}</span>
                <p className="verification-desc">{this.props.orderComment}</p>
                <span className="verification-city"><span>☻</span> {this.props.verifAddr}</span>
                <PopUp
                    popUp={this.state.popUp}
                    userData={this.props.userData}
                    orderName={this.props.orderName}
                    orderComment={this.props.orderComment}
                    status={this.props.status}
                    verifAddr={this.props.verifAddr}
                    orderId={this.props.orderId}
                />
            </section>
        )
    }
}

Order.propTypes = {
    orderName: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    orderComment: PropTypes.string.isRequired,
    verifAddr: PropTypes.string.isRequired,
    orderId: PropTypes.number.isRequired,
    orderRate: PropTypes.number.isRequired,
    orderRating: PropTypes.number.isRequired,
    orderCreatedAt: PropTypes.number.isRequired
};

export default Order;