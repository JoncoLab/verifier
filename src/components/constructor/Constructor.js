import React, { Component } from 'react';
import {RenderFilters, setRenderFilter} from "../../store/actions";
import {connect} from 'react-redux';
import FirstFormFooter from './Footer';
//import StatelessInput from './StatelessInput';
//import CustomFieldset from './CustomFieldset';

class Constructor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputVal: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            inputVal: event.target.value
        });
    }

    render() {
        return (
            <main>
                <form className="constructor" onSubmit={(e) => e.preventDefault()}>
                    <fieldset className="task-caption">
                        <h2>НАЗВАНИЕ ЗАЯВКИ</h2>
                        <button
                            onClick={() => {
                                window.location.pathname = "/dashboard"
                            }}
                        >Back to the dashboard</button>
                        <button className="task-title">? Help, pls!</button>
                        <input
                            type="text"
                            id="task-name"
                            name="task-name"
                            value={this.state.inputVal}
                            onChange={this.handleChange}
                        />
                    </fieldset>
                    <FirstFormFooter/>
                </form>
            </main>
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
        fromConstToDash: () => {
            dispatch(setRenderFilter(RenderFilters.RENDER_DASHBOARD))
        }
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(Constructor)