import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class search extends Component {

    state = {
        text: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('Cannot search on nothing. Please enter some text.', 'light');
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({text: ''});
        }
    }

    render() {
        const { showClear, clearUsers } = this.props;
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control" 
                        name="text" 
                        placeholder="Search users..."
                        value={this.state.text}
                        onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Search" className="btn btn-dark btn-block" />
                    </div>
                </form>
                {showClear && (
                    <div className="form-group">
                        <button 
                            className="btn btn-light btn-block" 
                            onClick={clearUsers}
                        >
                            Clear
                        </button>
                    </div>
                )}
            </div>
        )
    }
}

export default search
