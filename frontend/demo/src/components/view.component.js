import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Title: '',
            Description: '',
            PageCount: '',
            Excerpt: '',
        }
    }

    componentDidMount() {
        axios.get('https://fakerestapi.azurewebsites.net/api/Books/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    Title: response.data.Title,
                    Description: response.data.Description,
                    PageCount: response.data.PageCount,
                    Excerpt: response.data.Excerpt
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>User Info</h3>
                <table className="table table-bordered table-striped bm-table-detail">
                    <tbody>
                        <tr>
                            <td className="bm-td-half"><label className="bm-word-break-label">ID</label></td>
                            <td>20180726_user</td>
                        </tr>
                        <tr>
                            <td><label className="bm-word-break-label">Name</label></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><label className="bm-word-break-label">Description</label></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><label className="bm-word-break-label">Email Address</label></td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td className="bm-word-break-label">
                                <label>Azure AD Email Address</label>
                            </td>
                            <td>
                            </td>
                        </tr>

                        <tr>
                            <td><label className="bm-word-break-label">Azure AD Registration</label></td>
                            <td>Unregistered</td>
                        </tr>
                        <tr>
                            <td><label className="bm-word-break-label">EMM Registration</label></td>
                            <td>Registered</td>
                        </tr>
                        <tr>
                            <td><label className="bm-word-break-label">VPP Registration</label></td>
                            <td>Registered</td>
                        </tr>

                        <tr>
                            <td><label className="bm-word-break-label">Password</label></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><label className="bm-word-break-label">Passcode</label></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><label className="bm-word-break-label">No. of Device(s)</label></td>
                            <td>
                                0                    </td>
                        </tr>
                        <tr>
                            <td><label className="bm-word-break-label">No. of Organization<span className="bm-label-s-lower">(s)</span></label></td>
                            <td>
                                0                    </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}