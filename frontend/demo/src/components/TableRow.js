import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

class TableRow extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.delete('http://127.0.0.1:5000/user/' + this.props.obj.id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <tr>
                <td>
                    <Link to={"/view/" + this.props.obj.id} className="fa-pencil">{this.props.obj.username}</Link>
                </td>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.email}
                </td>
                <td>
                    {this.props.obj.devices}
                </td>
                <td>
                    {this.props.obj.organization}
                </td>

                <td>
                    <Link to={"/edit/" + this.props.obj.id} className="fa-pencil">Edit</Link>
                </td>
                <td>
                    <i className="fa" onClick={this.delete} >Delete</i>
                </td>
            </tr>
        );
    }
}

export default TableRow;