import React from 'react';


export default class SearchBar extends React.Component {
    state = { myInput: '' };

    onInputChange = (event) => {
        this.setState({myInput: event.target.value});
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.myInput);
    }

    render() {
        return (
            <div className="ui segment search" style={{ margin: '10px' }}>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <div className="ui icon input">
                            <input className="prompt" type="text" placeholder="Search..." value={this.state.myInput} onChange={this.onInputChange} />
                            <i className="search icon"></i>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}