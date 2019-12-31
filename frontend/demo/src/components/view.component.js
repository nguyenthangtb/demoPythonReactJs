import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            username: '',
            name: '',
            Description: '',
            email: '',
            password: '',
            passcode: '',
            devices: '',
            organization: '',
        }
    }

    componentDidMount() {
        this.onUserDetail();
    }

    onUserDetail(){
        axios.get('http://127.0.0.1:5000/user/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    username: response.data.username,
                    name: response.data.name,
                    description: response.data.description,
                    email: response.data.email,
                    password: response.data.password,
                    passcode: response.data.passcode,
                    devices: response.data.devices,
                    organization: response.data.organization
                });


            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                <h3>User Info</h3>

                <nav className="navbar navbar-light bg-light pull-right" style={{ marginBottom: 10 }}>
                    <input type="button"
                        value="Go Back"
                        className="btn btn-secondary btn-cancel" />
                    <a href={"/edit/" + this.state.id} className="btn btn-primary">Edit</a>
                </nav>

                <table className="table table-bordered table-striped bm-table-detail">
                    <tbody>
                        <tr>
                            <td className="bm-td-half"><label className="bm-word-break-label">ID</label></td>
                            <td>{this.state.username}</td>
                        </tr>
                        <tr>
                            <td><label className="bm-word-break-label">Name</label></td>
                            <td>{this.state.name}</td>
                        </tr>
                        <tr>
                            <td><label className="bm-word-break-label">Description</label></td>
                            <td>{this.state.description}</td>
                        </tr>
                        <tr>
                            <td><label className="bm-word-break-label">Email Address</label></td>
                            <td>{this.state.email}</td>
                        </tr>
                        <tr>
                            <td><label className="bm-word-break-label">Password</label></td>
                            <td>********</td>
                        </tr>
                        <tr>
                            <td><label className="bm-word-break-label">Passcode</label></td>
                            <td>********</td>
                        </tr>
                        <tr>
                            <td><label className="bm-word-break-label">No. of Device(s)</label></td>
                            <td>{this.state.devices}</td>
                        </tr>
                        <tr>
                            <td><label className="bm-word-break-label">No. of Organization<span className="bm-label-s-lower">(s)</span></label></td>
                            <td>
                                {this.state.organization} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}