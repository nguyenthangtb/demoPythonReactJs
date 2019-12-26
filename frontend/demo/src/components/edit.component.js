import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangePageCount = this.onChangePageCount.bind(this);
        this.onChangeExcerpt = this.onChangeExcerpt.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

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

    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }
    onChangeDescription(e) {
        this.setState({
            Description: e.target.value
        })
    }
    onChangePageCount(e) {
        this.setState({
            PageCount: e.target.value
        })
    }
    onChangeExcerpt(e) {
        this.setState({
            Excerpt: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            Title: this.state.Title,
            Description: this.state.Description,
            PageCount: this.state.PageCount,
            Excerpt: this.state.Excerpt
        };
        axios.post('http://localhost:4000/persons/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/index');
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3 align="center">Update User Info</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.Title}
                            onChange={this.onChangeTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Company Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Age: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.PageCount}
                            onChange={this.onChangePageCount}
                        />
                    </div>
                    <div className="form-group">
                        <label>Age: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Excerpt}
                            onChange={this.onChangeExcerpt}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit"
                            value="Update Person Info"
                            className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}