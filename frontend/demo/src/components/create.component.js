import React, { Component } from 'react';
import axios from 'axios';

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
            description: '',
            email: '',
            password: '',
            passcode: '',
            devices: '',
            organization: ''
        }
    }

    onChangeusername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangename(e){
        this.setState({
            name: e.target.value
        });
    }

    onChangedescription(e) {
        this.setState({
            description: e.target.value
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

        const obj = {
            username: this.state.username,
            name: this.state.name,
            description: this.state.description,
            email: this.state.email,
            password: this.state.password,
            passcode: this.state.passcode,
            devices: this.state.devices,
            organization: this.state.organization
        };
        axios.post('http://127.0.0.1:5000/user', obj)
            .then(res => console.log(res.data));

        this.setState({
            username: '',
            name: '',
            description: '',
            email: '',
            password: '',
            passcode: '',
            devices: '',
            organization: '',
        })
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Add New Person</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>ID <span className="bm-requied">*</span>: </label>
                        <input type="text" className="form-control" placeholder="ID for User"
                            value={this.state.username}
                            onChange={this.onChangeusername}
                        />
                    </div>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text" className="form-control" placeholder="User's Name"
                        value={this.state.name} onChange={this.onChangename}/>
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text" className="form-control" value={this.state.description}
                            onChange={this.onChangedescription}  placeholder="Free text description"/>
                    </div>
                    <div className="form-group">
                        <label>Email Address: </label>
                        <input type="text" className="form-control" value={this.state.email}
                            onChange={this.onChangeemail}  placeholder="User's Email Address"/>
                    </div>
                    <div className="form-group">
                        <label>PassWord: </label>
                        <input type="password" className="form-control" value={this.state.password}
                            onChange={this.onChangepassword} placeholder="Password for BizMobile Go! Personal Web"/>
                    </div>
                    <div className="form-group">
                        <label>Passcode: </label>
                        <input type="password" className="form-control" value={this.state.passcode}
                            onChange={this.onChangepasscode} placeholder="Password for BizMobile Go! Personal Web"/>
                    </div>
                    <div className="form-group">
                        <label>Device(s): </label>

                        <input type="text" className="form-control"  placeholder="Select Devices(s)" 
                        value={this.state.devices} onChange={this.onChangedevices} />
                    </div>
                    <div className="form-group">
                        <label>Organization(s): </label>
                        <input type="text" className="form-control"placeholder="Select Organization(s)" 
                        value={this.state.organization} onChange={this.onChangeorganization}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Save" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}