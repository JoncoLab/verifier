import React, {Component} from 'react';
import { I18n, Trans } from 'react-i18next';
import CreateTasks from './createTask';
import {connect} from 'react-redux';
//import {openMain} from "../../store/actions";
import Profile from './profile';

class Main extends Component {

    render() {
        if (this.props.profileProps === true) {
            return (
                <I18n>
                    {
                        (t, {i18n}) => (
                            <main>
                                <CreateTasks/>
                            </main>
                        )
                    }
                </I18n>
            );
        } else if(this.props.profileProps === false) {
            return (
                <I18n>
                    {
                        (t, {i18n}) => (
                            <main>
                                <Profile/>
                            </main>
                        )
                    }
                </I18n>
            );
        } else {
            alert('PrinceShoZaNah - u r dawn');
        }
    }
}

const mapStateToProps = (state) => {
    return {
        profileProps: state.showProfile.profileState
    }
};

export default connect(mapStateToProps)(Main);