import React from 'react';
import classnames from 'classnames';

class GameForm extends React.Component {
    state = {
        title: '',
        cover: '',
        errors: {}
    }

    handleChange = (e) => {
        let errors = Object.assign({}, this.state.errors);
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        // validation
        let errors = {};
        if (this.state.title === '') errors.title = "Can't be empty";
        if (this.state.cover === '') errors.cover = "Can't be empty";
        this.setState({ errors });
    }

    render() {
        return (
            <form className="ui form" onSubmit={this.handleSubmit}>
                <h1>Add new game</h1>
                
                <div className={classnames('field', { error: !!this.state.errors.title})}>
                    <label htmlFor="title">Title</label>
                    <input id="title" name="title" value={this.state.title} onChange={this.handleChange} />
                    <span>{this.state.errors.title}</span>
                </div>

                <div className={classnames('field', { error: !!this.state.errors.cover})}>
                    <label htmlFor="cover">Cover URL</label>
                    <input id="cover" name="cover" value={this.state.cover} onChange={this.handleChange} />
                    <span>{this.state.errors.cover}</span>
                </div>

                <div className="field">
                    {this.state.cover !== '' && <img src={this.state.cover} alt="cover" className="ui small bordered image" />}
                </div>             

                <div className="field">
                    <button className="ui primary button">Save</button>
                </div>
            </form>
        );
    }
}

export default GameForm;