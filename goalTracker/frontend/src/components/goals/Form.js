import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addGoal } from '../../actions/goals'

export class Form extends Component {
    state = {
        name: '',
    };

    static propTypes = {
        addGoal: PropTypes.func.isRequired
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        const { name } = this.state;
        const goal = { name };
        this.props.addGoal(goal);
        this.setState({ name: '' })
    };

    render() {
        const { name } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Make New Goal</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">

                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            onChange={this.onChange}
                            value={name}
                        />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Add Goal!
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { addGoal })(Form);
