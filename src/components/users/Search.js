import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Search = ({ setAlert }) => {

const githubContext = useContext(GithubContext);

const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            setAlert('Cannot search on nothing. Please enter some text.', 'light');
        } else {
            githubContext.searchUsers(text);
            setText('');
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <div className="form-group">
                    <input 
                    type="text"
                    className="form-control" 
                    name="text" 
                    placeholder="Search users..."
                    value={text}
                    onChange={onChange} />
                </div>
                <div className="form-group">
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </div>
            </form>
            {githubContext.users.length > 0 && (
                <div className="form-group">
                    <button 
                        className="btn btn-light btn-block" 
                        onClick={githubContext.clearUsers}
                    >
                        Clear
                    </button>
                </div>
            )}
        </div>
    )

}

Search.propTypes = {
    setAlert: PropTypes.func.isRequired
}

export default Search
