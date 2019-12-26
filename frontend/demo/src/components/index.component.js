import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { persons: [] };
    }

    componentDidMount() {
        axios.get('https://fakerestapi.azurewebsites.net/api/Books')
            .then(response => {
                this.setState({ persons: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow() {
        return this.state.persons.map(function (object, i) {
            return <TableRow obj={object} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand">Users List</span>
                    <div className="form-inline">
                        <a href={'create'} className="btn btn-primary">Create</a>
                    </div>
                </nav>


                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>PageCount</th>
                            <th>PublishDate</th>
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