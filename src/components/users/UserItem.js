import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: {login, avatar_url, html_url} }) => {

    return (
        <div className='panel panel-default text-center'>
            <div className='panel-body'>
                <img src={avatar_url} alt='' className='img-circle' style={{width: '60px'}} />
                <h3>{login}</h3>

                <div>
                    <Link to={`/user/${login}`} className='btn btn-default btn-sm'>
                        More
                    </Link>
                </div>
            </div>
        </div>
    )

};

UserItem.propTypes = {
    user: propTypes.object.isRequired
};

export default UserItem
