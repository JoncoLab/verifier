import React, {Component} from 'react';
import {I18n} from 'react-i18next';
import classSet from "react-classset";
import * as $ from 'jquery';
import {apiHost} from "../../App";

class PopUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            popUp: this.props.popUp,
            orderList: []
        };

        this.getValueArr = this.getValueArr.bind(this);
        this.handleApproval = this.handleApproval.bind(this);
    }
    componentWillMount() {
        let token = document.cookie.replace("token=", ""),
            apiUrl = apiHost + "verifier/api/v1/order/" + this.props.orderId,
            settings = {
                async: true,
                crossDomain: true,
                method: "GET",
                url: apiUrl,
                headers: {
                    "Token": token
                }
            };

        $.ajax(settings).done((response) => {
            this.setState({
                orderList: response.data
            });
        });
    }
    getValueArr() {
        let fieldsArray = this.state.orderList.orderFields;

        if (fieldsArray !== 'undefined') {
            $.map(fieldsArray, function(type) {
                return type.fieldName
            })
        }
    }
    handleApproval() {
        let id = this.props.orderId,
            apiUrl = "verifier/api/v1/order/approval",
            data = JSON.stringify({
                orderId: id
            }),
            token = document.cookie.replace("token=", ""),
            settings = {
                url: apiHost + apiUrl,
                method: "post",
                async: true,
                processData: false,
                crossDomain: true,
                data: data,
                headers: {
                    "Content-Type": "application/json",
                    "Token": token
                }
            };

        $.ajax(settings)
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        const detailsToggle = classSet({
            'verification-details': true,
            'pop-up-active': this.props.popUp
        });
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
                                    </div>
                                    <div className="user-info" onClick={() => {this.setState({popUp: !this.state.popUp})}}>
                                        {
                                            $.map(this.state.orderList.orderFields, (type, key) => {
                                                return (
                                                    <div key={key}>
                                                        <span>{type.fieldName + ": "}</span>
                                                        <span>{type.fieldDescription}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                        <span className="details-city"><span>☻</span> {this.props.verifAddr}</span>
                                        <button
                                            className={"approval-button"}
                                            onClick={this.handleApproval}
                                        >
                                            {
                                                t("templates.approvalButton")
                                            }
                                        </button>
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

export default PopUp;