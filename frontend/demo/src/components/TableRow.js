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
        axios.delete('https://fakerestapi.azurewebsites.net/api/Books/' + this.props.obj.ID)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <tr>
                <td>

                    {this.props.obj.ID}
                </td>
                <td>
                    <Link to={"/view/" + this.props.obj.ID} className="fa-pencil">{this.props.obj.Title}</Link>
                </td>
                <td>
                    {this.props.obj.Description}
                </td>
                <td>
                    {this.props.obj.PageCount}
                </td>
                <td>
                    {this.props.obj.PublishDate}
                </td>

                <td>
                    <Link to={"/edit/" + this.props.obj.ID} className="fa-pencil">Edit</Link>
                </td>
                <td>
                    <i className="fa" onClick={this.delete} >Delete</i>
                </td>
            </tr>
        );
    }
}

export default TableRow;