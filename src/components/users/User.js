import React, { useEffect, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User =({ user, loading, getUser, getUserRepos, repos, match }) => {

    useEffect (() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        // eslint-disable-next-line
    }, []);

        const {
            name,
            avatar_url,
            location,
            bio,
            company,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = user;

        if(loading) return <Spinner />;

    return( <Fragment>
            <div className="row">
                <Link to='/' className='btn btn-block btn-default'>
                    Back to search
                </Link>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <div className="panel text-center" style={{'box-shadow':'0px'}}>
                        <div className="panel-body">
                            <img src={avatar_url} className="img-circle" alt="" style={{width: '150px'}}/>
                            <h1>{name}</h1>
                            <p>{location}</p>
                            <p>Hireable: {' '}
                            {hireable ? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger" />}
                            </p>
                            <a href={html_url} className="btn btn-default">Visit Github Profile</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8">
                    <div className="">
                    {bio && (<Fragment>
                        <h3>Bio</h3>
                        <p>{bio}</p>
                    </Fragment>)}
                    
                    <div className="">
                        <div>
                            {login && <Fragment>
                                <strong>Username: </strong> {login}
                                </Fragment>}
                        </div>
                        <div>
                            {login && <Fragment>
                                <strong>Company: </strong> {company}
                                </Fragment>}
                        </div>
                        <div>
                            {login && <Fragment>
                                <strong>Website: </strong> {blog}
                                </Fragment>}
                        </div>
                    </div>
                    </div>
                    <div className="">
                        <h3>Recent Repos</h3>
                        <Repos repos={repos}/>  
                    </div>
                    
                </div>
            </div>

            <div className="row text-center">
                    <div className="label label-primary">Followers: {followers}</div>
                    <div className="label label-success">Following: {following}</div>
                    <div className="label label-info">Public Repos: {public_repos}</div>
                    <div className="label label-warning">Public Gists: {public_gists}</div>
            </div>

            
        
    </Fragment>
    );
}

User.propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired
}

export default User
