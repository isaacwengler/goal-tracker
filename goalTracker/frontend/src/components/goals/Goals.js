import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getGoals, deleteGoal } from '../../actions/goals';

export class Goals extends Component {
    static propTypes = {
        goals: PropTypes.array.isRequired,
        getGoals: PropTypes.func.isRequired,
        deleteGoal: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getGoals();
    }

    render() {
        return (
            <Fragment>
                <h2>Goals</h2>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th />
                            <th>Goal</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.goals.map(map => (
                            <tr key={goal.id}>
                                <td><button className="btn btn-danger btn-sm">Check</button></td>
                                <td>{goal.title}</td>
                                <td><button onClick={this.props.deleteGoal.bind(this, goal.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    goals: state.goals.goals
})

export default connect(mapStateToProps, { getGoals, deleteGoal })(Goals);
