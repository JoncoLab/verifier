import React, {Component} from "react";
// Constructor 1st form

const firstFrom = () => {
    <I18n ns="translations">
        {
            (t) => (
                <main>
                    <section className="constructor-box">
                        <section className="top">
                            <h2 className="caption">{t()}</h2>
                            <button className="back-to-dash-button"
                                    onClick={() => {
                                        if(this.props.renderAppFilter === 'RENDER_CONSTRUCTOR') this.props.fromConstToDash()
                                    }}
                            >TAKE ME TO THE DASHBOARD!</button>
                        </section>
                        <section className="constructor-custom">
                            <form id="add-field-form">
                                <h3>{t()}</h3>
                                <label>
                                    {t()}
                                    <input type="radio" name="type" value="text"/>
                                    <input type="radio" name="type" value="photo"/>
                                    <input type="radio" name="type" value="video"/>
                                </label>
                                <label htmlFor="add-field-submit">{t()}</label>
                                <input type="submit" id="add-field-submit"/>
                            </form>
                            <form id="custom-fields">
                                <Field type="caption"/>
                                <Field type="photo"/>
                                <Field type="text"/>
                                <Field type="video"/>
                            </form>
                        </section>
                        <h2 className="required-caption">{t()}</h2>
                        <section className="constructor-required">
                            <input type="checkbox" id="ver"/>
                            <label htmlFor="ver">{t()}</label>
                            <div className="name-compose">
                                <input type="text"/>
                                <input type="text"/>
                                <input type="text"/>
                            </div>
                            <label className="date-compose">
                                {t()}
                                <input type="date"/>
                                {t()}
                                <input type="time"/>
                                {t()}
                                <input type="time"/>
                            </label>
                            <label className="address">
                                {t()}
                                <input type="text"/>
                            </label>
                            <label className="bet">
                                {t()}
                                <input type="range"/>
                            </label>
                            <textarea/>
                            <button className="preview-button">{t()}</button>
                            <button className="save-button">{t()}</button>
                            <label htmlFor="required-submit">{t()}</label>
                            <input type="submit" id="required-submit" name="required-submit"/>
                        </section>
                    </section>
                </main>
            )
        }
    </I18n>
};

// Constructor custom form

class Field extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: props.type
        };

        this.index = props.index;
        this.caption = props.caption;
        this.helpText = props.helpText;
        this.switcherText = props.switcherText;
        this.deleteText = props.deleteText;
    }
    render() {
        return (
            <div className="custom-field">
                <div className="top">
                    <h3>{this.caption}</h3>
                    <p className="help">{this.helpText}</p>
                </div>
                {
                    this.state.type === "caption" ?
                        <input type="text" name={"field-" + this.index} id={"field-" + this.index}/> :
                        (
                            <div className="cont">
                                <div className="type-switcher">
                                    <label>
                                        {this.switcherText}
                                        <input type="radio" name="type" value="text"/>
                                        <input type="radio" name="type" value="photo"/>
                                        <input type="radio" name="type" value="video"/>
                                    </label>
                                </div>
                                <button className="delete">{this.deleteText}</button>
                                <input type="text" name={"field-" + this.index} id={"field-" + this.index}/>
                                <input type="text" name={"description-" + this.index} id={"description-" + this.index}/>
                            </div>
                        )
                }
            </div>
        )
    }
}

// New input switch

const getInputType = (dataType) => {
    let inputType;
    switch(dataType) {
        case 'INPUT_TYPE_TEXT':
            inputType = (
                <div className="text-fields">
                    <input
                        id="text-name"
                        name="Input name"
                        value={name}
                        placeholder="Наименование поля"/>
                    <input
                        id="text-text"
                        name="Input textription"
                        value={text}
                        placeholder="Описание"/>
                </div>
            );
            break;
        case 'INPUT_TYPE_IMAGE':
            inputType = (
                <div className="image-fields">
                    <input
                        id="image-name"
                        name="Input name"
                        value={name}
                        placeholder="Наименование поля"/>
                    <select id="images-amount" value="Files">
                        <option name="1" value={1}>1</option>
                        <option name="2" value={2}>2</option>
                        <option name="3" value={3}>3</option>
                        <option name="4" value={4}>4</option>
                        <option name="5" value={5}>5</option>
                        <option name="6" value={6}>6</option>
                        <option name="7" value={7}>7</option>
                        <option name="8" value={8}>8</option>
                        <option name="9" value={9}>9</option>
                    </select>
                    <input
                        id="text-text"
                        name="Input textription"
                        value={text}
                        placeholder="Описание"/>
                </div>
            );
            break;
        case 'INPUT_TYPE_VIDEO':
            inputType = (
                <div className="video-fields">
                    <input
                        id="video-name"
                        name="Input name"
                        value={name}
                        placeholder="Наименование поля"/>
                    <input
                        id="video-text"
                        name="Input textription"
                        value={text}
                        placeholder="Описание"/>
                </div>
            );
            break;
        default:
            inputType = (
                <div className="text-fields">
                    <input
                        id="text-name"
                        name="Input name"
                        value={name}
                        placeholder="Наименование поля"/>
                    <input
                        id="text-text"
                        name="Input textription"
                        value={text}
                        placeholder="Описание"/>
                </div>
            );
            break;
    }
    return inputType;
};
