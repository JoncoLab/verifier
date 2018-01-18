import React, {Component} from 'react';
import {I18n} from 'react-i18next';
import classSet from "react-classset";
import * as $ from 'jquery';

class PopUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            popUp: this.props.popUp,
            orderList: [],
            orderFields: []
        };
    }

    componentDidMount() {
        let token = document.cookie.replace("token=", ""),
            herokuAppUrl = "https://cors-anywhere.herokuapp.com/",
            apiUrl = "http://185.4.75.58:8181/verifier/api/v1/order/" + this.props.orderId,
            settings = {
                async: true,
                crossDomain: true,
                method: "GET",
                url: herokuAppUrl + apiUrl,
                headers: {
                    "Token": token
                }
            };

        $.ajax(settings).done((response) => {
            this.setState({
                orderList: response.data,
                orderFields: response.data.orderFields
            });
        });
    }

    render() {
        const detailsToggle = classSet({
            'verification-details': true,
            'pop-up-active': this.props.popUp
        });
        console.log(this.state.orderList);
        return (
            <I18n>
                {
                    (t) => (
                        <section className={detailsToggle}>
                            <div className="details-box">
                                <h2 className="details-name">{this.props.orderName}</h2>
                                <span className="details-state">{this.props.status}</span>
                                <p className="details-desc">{this.props.orderComment}</p>
                                <div className="details-user-info">
                                    <div className="user-photo">
                                        <img src={this.props.imgSrc} alt="User photo"/>
                                        <span className="details-city"><span>☻</span> {this.props.verifAddr}</span>
                                    </div>
                                    <div className="user-info" onClick={() => {this.setState({popUp: !this.state.popUp})}}>
                                        <span>{this.state.orderFields.fieldName}</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                }
            </I18n>
        )
    }
}

export default PopUp