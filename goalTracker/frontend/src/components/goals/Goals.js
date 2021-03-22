import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getGoals, deleteGoal, completeGoal } from '../../actions/goals';

export class Goals extends Component {
    static propTypes = {
        goals: PropTypes.array.isRequired,
        getGoals: PropTypes.func.isRequired,
        deleteGoal: PropTypes.func.isRequired,
        completeGoal: PropTypes.func.isRequired,
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
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.goals.map((goal) => (
                            <tr key={goal.id}>
                                <td></td>
                                <td><div>
                                    <input className="form-check-input" type="checkbox" id="flexCheckChecked" checked={goal.complete} onChange={this.props.completeGoal.bind(this, goal.id, goal.name, !goal.complete)} />
                                </div></td>
                                <td>{goal.name}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><button onClick={this.props.deleteGoal.bind(this, goal.id)} className="btn btn-warning btn-sm">{' '}Delete</button></td>
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

export default connect(mapStateToProps, { getGoals, deleteGoal, completeGoal })(Goals);
