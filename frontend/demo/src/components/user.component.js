import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [] };
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:5000/user')
            .then(response => {
                this.setState({ users: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow() {
        return this.state.users.map(function (object, i) {
            return <TableRow obj={object} key={i} />;
        });
    }

    render() {
        return (
            <div className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                <nav className="navbar navbar-light bg-light">
                    <strong className="">USER LIST</strong>
                    <div className="form-inline">
                        <a href={'create'} className="btn btn-primary">Create</a>
                    </div>
                </nav>


                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Devices</th>
                            <th>Organization</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}