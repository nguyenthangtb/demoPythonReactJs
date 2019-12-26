import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
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
            Excerpt: ''
        }
    }

    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            Description: e.target.value
        });
    }

    onChangePageCount(e) {
        this.setState({
            PageCount: e.target.value
        });
    }

    onChangeExcerpt(e) {
        this.setState({
            Excerpt: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();

        const obj = {
            Title: this.state.Title,
            Description: this.state.Description,
            PageCount: this.state.PageCount,
            Excerpt: this.state.Excerpt,
        };
        axios.post('https://fakerestapi.azurewebsites.net/api/Books', obj)
            .then(res => console.log(res.data));

        this.setState({
            Title: '',
            Description: '',
            PageCount: '',
            Excerpt: ''
        })
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Add New Person</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>ID <span className="bm-requied">*</span>: </label>
                        <input type="text" className="form-control"
                            value={this.state.Title}
                            onChange={this.onChangeTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text" className="form-control" value={this.state.Description}
                            onChange={this.onChangeDescription} />
                    </div>
                    <div className="form-group">
                        <label>Email Address: </label>
                        <input type="text" className="form-control" value={this.state.PageCount}
                            onChange={this.onChangePageCount} />
                    </div>
                    <div className="form-group">
                        <label>PassWord: </label>
                        <input type="password" className="form-control" value={this.state.Excerpt}
                            onChange={this.onChangeExcerpt} />
                    </div>
                    <div className="form-group">
                        <label>Passcode: </label>
                        <input type="text" className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label>Device(s): </label>
                        <input type="text" className="form-control" 
                        />
                    </div>
                    <div className="form-group">
                        <label>Organization(s): </label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Save" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}