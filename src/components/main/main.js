import React, {Component} from 'react';
import CreateTasks from './createTask';
import {connect} from 'react-redux';
//import {openMain} from "../../store/actions";
import Profile from './profile';

class Main extends Component {

    render() {
        if (this.props.profileProps === true) {
            return (
                <main>
                    <CreateTasks/>
                </main>
            );
        } else if(this.props.profileProps === false) {
            return (
                <main>
                    <Profile/>
                </main>
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