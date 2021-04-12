import React, { Fragment } from 'react'
import Goals from './Goals'
import Form from './Form'
import { Redirect } from 'react-router-dom';
import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';



class Dashboard extends Component {
    static propTypes = {
        notAuthenticated: PropTypes.bool.isRequired,
    };

    render() {
        if (this.props.notAuthenticated) {
            return <Redirect to="/login" />
        }
        return (
            <div>
                <Fragment>
                    <Form />
                    <Goals />
                </Fragment>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    notAuthenticated: !state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Dashboard);