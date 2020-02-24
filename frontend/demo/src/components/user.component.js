import React, { Component } from 'react';
// import TableRow from './TableRow';
import { fetchUser } from '../services/UserService'
import Paginator from "paginator";
import { Link } from 'react-router-dom';

import PaginatorComponet from "./PaginatorComponent";

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: null,
            paginatedUsers: null,
            paginatorData: null,
            pages: null,
            pageSize: 4
        };
        this.setPagination = this.setPagination.bind(this);
    }
    async componentDidMount() {
        try {
            let users = await fetchUser();
            this.setState({ users });
            this.setPagination(1);
        } catch (error) {
            console.log(error);
        }
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
                        {this.state.paginatedUsers
                            ? this.state.paginatedUsers.map(user => (
                                <tr key={user.id}>
                                    <td>{user.username}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.devices}</td>
                                    <td>{user.organization}</td>
                                    <td>
                                        <Link to={"/edit/" + user.id} className="fa-pencil">Edit</Link>
                                    </td>
                                    <td>
                                        <i className="btn-delete" >Delete</i>
                                    </td>
                                </tr>
                            ))
                            : null}
                    </tbody>
                </table>
                <div className="row">
                    {this.state.paginatorData && this.state.pages ? (
                        <PaginatorComponet
                            setPagination={this.setPagination}
                            paginatorData={this.state.paginatorData}
                            pages={this.state.pages}
                        />
                    ) : null}
                </div>
            </div>
        );
    }

    setPagination(currentPage) {
        let paginator = new Paginator(this.state.pageSize, 7);
        let paginatorData = paginator.build(this.state.users.length, currentPage);
        let pages = [
            ...Array(paginatorData.last_page + 1 - paginatorData.first_page).keys()
        ].map(index => paginatorData.first_page + index);
        let paginatedUsers = this.state.users.slice(
            paginatorData.first_result,
            paginatorData.last_result + 1
        );
        this.setState({ paginatedUsers, paginatorData, pages });
    }
}