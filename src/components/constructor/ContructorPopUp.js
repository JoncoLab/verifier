import React, {Component} from 'react';
import classSet from 'react-classset';
import * as $ from "jquery";

class ConstructorPopUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }
    componentWillReceiveProps() {
        let localData = this.props.getOrderData();
        delete localData.orderRate;
        delete localData.verifTimeTo;
        delete localData.verifTimeFrom;
        this.setState({
            data: localData
        })
    }
    render() {
        const detailsToggle = classSet({
            'constructor-preview': true,
            'pop-up-active': this.props.constPopUp
        });
        return (
            <section className={detailsToggle}>
                <div
                    className="details-box"
                    onClick={this.props.onToggle}
                >
                    <h2 className="details-name">{this.state.data.orderName}</h2>
                    <span className="details-state">CREATED</span>
                    <p className="details-desc">{this.state.data.orderComment}</p>
                    <div className="details-user-info">
                        <div className="user-photo">
                        </div>
                        <div className="user-info">
                            {
                                $.map(this.state.data.orderFields, (type) => {
                                    return (
                                        <div>
                                            <span>{type.fieldName + ": "}</span>
                                            <span>{type.fieldDescription}</span>
                                        </div>
                                    )
                                })
                            }
                            <span className="details-city"><span>☻</span>{this.state.data.verifAddr}</span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ConstructorPopUp