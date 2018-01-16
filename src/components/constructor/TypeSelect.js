import React, {Component} from 'react';
import {connect} from 'react-redux';
import {typesAction} from "./constStore/constActionCreators";


class TypeSelect extends Component {
    render() {
        return (
            <button
                onClick={
                    !this.props.local ?
                        () => {this.props.onClickBtn()} :
                        this.props.onClick
                }
                type="button"
                className={this.props.btnClass}>
                {this.props.text}
            </button>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClickBtn: () => {
            dispatch(typesAction(ownProps.inputType))
        }
    }
};

export default connect(null, mapDispatchToProps)(TypeSelect)