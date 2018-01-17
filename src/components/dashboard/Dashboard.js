import React, {Component} from 'react';
import {I18n} from 'react-i18next';
import Order from "../stateLess/Order";
import {setRenderFilter, RenderFilters} from "../../store/actions";
import {connect} from 'react-redux';
import * as $ from "jquery";

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: []
        }
    }
    componentDidMount() {
        let token = document.cookie.replace("token=", ""),
            herokuAppUrl = "https://cors-anywhere.herokuapp.com/",
            apiUrl = "http://185.4.75.58:8181/verifier/api/v1/order/customer/list/0/200",
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
                orders:response.data
            });
        });
    }
    popUp() {
        // popUp function to display order
    }
    render() {
        return (
            <I18n>
                {
                    (t) => (
                        <main>
                            <section className="create-task-container">
                                <button className="new-task"
                                        onClick={
                                            () => {
                                                window.location.pathname = "/constructor";
                                            }
                                        }
                                >
                                    {t("main.newTaskBtn")}
                                </button>
                                <div className="main-container">
                                    {
                                        this.state.orders.map((order) => (
                                            <Order
                                                orderName={order.orderName}
                                                status={order.status}
                                                orderComment={order.orderComment}
                                                verifAddr={order.verifAddr}
                                                orderId={order.orderId}
                                                orderRate={order.orderRate}
                                                orderRating={order.orderRating}
                                                orderCreatedAt={order.orderCreatedAt}
                                                key={order.orderId}
                                            />
                                        ))
                                    }
                                </div>
                            </section>
                        </main>
                    )
                }
            </I18n>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        renderAppFilter: state.renderAppReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fromDashToCont: () => {
            dispatch(setRenderFilter(RenderFilters.RENDER_CONSTRUCTOR))
        }
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)