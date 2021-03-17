import React, { Component } from 'react'

export class Form extends Component {
    state = {
        name: '',
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        console.log("submit");
    }

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

export default Form
