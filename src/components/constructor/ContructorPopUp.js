import React, {Component} from 'react';
import classSet from 'react-classset';

class ConstructorPopUp extends Component {
    constructor(props) {
        super(props);

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
                    onClick={this.props.onToogle}
                >
                    <h2 className="details-name"> asdfasdf</h2>
                    <span className="details-state"> asdfasdf</span>
                    <p className="details-desc"> asdfasdf</p>
                    <div className="details-user-info">
                        <div className="user-photo">
                        </div>
                        <div className="user-info">

                            <span className="details-city"><span>☻</span>  asdfasdf</span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ConstructorPopUp