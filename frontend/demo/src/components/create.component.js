import React, { Component } from 'react';
import axios from 'axios';
import Validator from './../lib/validator';


export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeusername = this.onChangeusername.bind(this);
        this.onChangename = this.onChangename.bind(this);
        this.onChangedescription = this.onChangedescription.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangepassword = this.onChangepassword.bind(this);
        this.onChangepasscode = this.onChangepasscode.bind(this);
        this.onChangedevices = this.onChangedevices.bind(this);
        this.onChangeorganization = this.onChangeorganization.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            name: '',
            Description: '',
            email: '',
            password: '',
            passcode: '',
            devices: '',
            organization: '',
            errors: {}
        }

        const rules = [
            {
                field: 'username',
                method: 'isEmpty',
                validWhen: false,
                message: 'The user name field is required.',
            },
            {
                field: 'email',
                method: 'isEmail',
                validWhen: true,
                message: 'The email must be a valid email address.',
            },

        ];
        this.validator = new Validator(rules);
    }

    onChangeusername(e) {
        this.setState({
             username: e.target.value
            // /[e.target.username]: e.target.value
        });
    }

    onChangename(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangedescription(e) {
        this.setState({
            Description: e.target.value
        });
    }

    onChangeemail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangepassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangepasscode(e) {
        this.setState({
            passcode: e.target.value
        });
    }

    onChangedevices(e) {
        this.setState({
            devices: e.target.value
        });
    }

    onChangeorganization(e) {
        this.setState({
            organization: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({
            errors: this.validator.validate(this.state),
        });
        if (this.validator.isValid) {
            const obj = {
                username: this.state.username,
                name: this.state.name,
                Description: this.state.Description,
                email: this.state.email,
                password: this.state.password,
                passcode: this.state.passcode,
                devices: this.state.devices,
                organization: this.state.organization
            };
            axios.post('http://127.0.0.1:8000/api/users', obj)
                .then(res => console.log(res.data));

            this.props.history.push('/user');

            this.setState({
                username: '',
                name: '',
                Description: '',
                email: '',
                password: '',
                passcode: '',
                devices: '',
                organization: '',
            })
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                <h3>Add New</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>ID <span className="bm-requied">*</span>: </label>
                        <input type="text" className="form-control" placeholder="ID for User"
                            value={this.state.username}
                            onChange={this.onChangeusername}
                        />
                        {errors.username &&
                            <div className="invalid-feedback" style={{ display: 'block' }}>{errors.username}</div>}
                    </div>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text" className="form-control" placeholder="User's Name"
                            value={this.state.name} onChange={this.onChangename} />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text" className="form-control" value={this.state.Description}
                            onChange={this.onChangedescription} placeholder="Free text description" />
                    </div>
                    <div className="form-group">
                        <label>Email Address: </label>
                        <input type="text" className="form-control" value={this.state.email}
                            onChange={this.onChangeemail} placeholder="User's Email Address" />
                        {errors.email &&
                            <div className="invalid-feedback" style={{ display: 'block' }}>{errors.email}</div>}
                    </div>
                    <div className="form-group">
                        <label>PassWord: </label>
                        <input type="password" className="form-control" value={this.state.password}
                            onChange={this.onChangepassword} placeholder="Password for BizMobile Go! Personal Web" />
                    </div>
                    <div className="form-group">
                        <label>Passcode: </label>
                        <input type="password" className="form-control" value={this.state.passcode}
                            onChange={this.onChangepasscode} placeholder="Password for BizMobile Go! Personal Web" />
                    </div>
                    <div className="form-group">
                        <label>Device(s): </label>

                        <input type="text" className="form-control" placeholder="Select Devices(s)"
                            value={this.state.devices} onChange={this.onChangedevices} />
                    </div>
                    <div className="form-group">
                        <label>Organization(s): </label>
                        <input type="text" className="form-control" placeholder="Select Organization(s)"
                            value={this.state.organization} onChange={this.onChangeorganization} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Save" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}