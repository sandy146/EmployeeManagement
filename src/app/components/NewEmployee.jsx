import React from 'react';
import * as mutations from '../store/mutations';
import { connect } from 'react-redux';
import { ConnectedNavigation } from './Navigation'

const NewEmployee = ({requestCreateNewEmployee,authenticated})=>{
    return (
        <React.Fragment>
        <ConnectedNavigation/>
        <div className="card p-3 col-12">
        <h2>
            Employee Details
        </h2>

        <form onSubmit={requestCreateNewEmployee}>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6">
                    <label className="input-field">
                        <span>Name</span>
                        <input type="text" placeholder="name" name="name" defaultValue="" required className="form-control"/>
                    </label>
                    <label className="input-field">
                        <span>Department</span>
                        <input type="text" placeholder="department" name="department" defaultValue="" required className="form-control mt-2"/>
                    </label>
                    <label className="input-field">
                        <span>Designation</span>
                        <input type="text" placeholder="designation" name="designation" defaultValue="" required className="form-control"/>
                    </label>
                    <label className="input-field">
                        <span>Date of joining</span>
                        <input type="text" placeholder="dateofjoining" name="dateofjoining" defaultValue="" required className="form-control mt-2"/>
                    </label>
                    <label className="input-field">
                        <span>Mobile</span>
                        <input type="text" placeholder="mobile" name="mobile" defaultValue="" required className="form-control"/>
                    </label>
                    <label className="input-field">
                        <span>Email</span>
                        <input type="text" placeholder="email" name="email" defaultValue="" required className="form-control mt-2"/>
                    </label>
                    <label className="input-field">
                        <span>Address</span>
                        <input type="text" placeholder="address" name="address" defaultValue="" required className="form-control"/>
                    </label>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6">
                    <p> <strong>Employee Working report(24 hours format)</strong></p>
                    <label className="input-field">
                        <span><strong>Monday </strong></span><span>Check In</span>                       
                        <input type="number" placeholder="Check In" name="moncheckin" defaultValue="" required className="form-control"/>
                    </label>
                    <label className="input-field">
                        <span><strong>Monday </strong></span><span>Check Out</span>
                        <input type="number" placeholder="Check Out" name="moncheckout" defaultValue="" required className="form-control mt-2"/>
                    </label>
                    <label className="input-field">
                        <span><strong>Tuesday </strong></span><span>Check In</span>
                        <input type="number" placeholder="Check In" name="tuecheckin" defaultValue="" required className="form-control"/>
                    </label>
                    <label className="input-field">
                        <span><strong>Tuesday </strong></span><span>Check Out</span>
                        <input type="number" placeholder="Check Out" name="tuecheckout" defaultValue="" required className="form-control mt-2"/>
                    </label>
                    <label className="input-field">
                        <span><strong>Wednesday </strong></span><span>Check In</span>
                        <input type="number" placeholder="Check In" name="wedcheckin" defaultValue="" required className="form-control"/>
                    </label>
                    <label className="input-field">
                        <span><strong>Wednesday </strong></span><span>Check Out</span>
                        <input type="number" placeholder="Check Out" name="wedcheckout" defaultValue="" required className="form-control mt-2"/>
                    </label>
                    <label className="input-field">
                        <span><strong>Thursday </strong></span><span>Check In</span>
                        <input type="number" placeholder="Check In" name="thucheckin" defaultValue="" required className="form-control"/>
                    </label>
                    <label className="input-field">
                        <span><strong>Thursday </strong></span><span>Check Out</span>
                        <input type="number" placeholder="Check Out" name="thucheckout" defaultValue="" required className="form-control"/>
                    </label>
                    <label className="input-field">
                        <span><strong>Friday </strong></span><span>Check In</span>
                        <input type="number" placeholder="Check In" name="fricheckin" defaultValue="" required className="form-control"/>
                    </label>
                    <label className="input-field">
                        <span><strong>Friday </strong></span><span>Check Out</span>
                        <input type="number" placeholder="Check Out" name="fricheckout" defaultValue="" required className="form-control"/>
                    </label>
                </div>
            </div>    
            {authenticated == mutations.NEW_EMPLOYEE_CREATED ? <p>Employee created successfully</p> : null}
            {authenticated == mutations.USERNAME_RESERVED ? <p>Employee already exists</p> : null}
            <button type="submit" className="form-control mt-2 btn btn-primary">SAVE</button>
        </form>

    </div>
    </React.Fragment>
    )
};

const mapStateToProps = state=>({
    authenticated:state.session.authenticated
});

const mapDispatchToProps = (dispatch)=>({
    requestCreateNewEmployee(e){
        e.preventDefault();
        let name = e.target[`name`].value;
        let department = e.target[`department`].value;
        let designation = e.target[`designation`].value;
        let dateofjoining = e.target[`dateofjoining`].value;
        let mobile = e.target[`mobile`].value;
        let email = e.target[`email`].value;
        let address = e.target[`address`].value;
        let timeReport = [
            {
                day: 'Monday',
                checkin: e.target[`moncheckin`].value,
                checkout: e.target[`moncheckout`].value
            },
            {
                day: 'Tuesday',
                checkin: e.target[`tuecheckin`].value,
                checkout: e.target[`tuecheckout`].value
            },
            {
                day: 'Wednesday',
                checkin: e.target[`wedcheckin`].value,
                checkout: e.target[`wedcheckout`].value
            },
            {
                day: 'Thursday',
                checkin: e.target[`thucheckin`].value,
                checkout: e.target[`thucheckout`].value
            },
            {
                day: 'Friday',
                checkin: e.target[`fricheckin`].value,
                checkout: e.target[`fricheckout`].value
            }
        ]
        dispatch(mutations.requestCreateNewEmployee(name, department, designation, dateofjoining, mobile, email, address, timeReport));
    }
})

export const ConnectedNewEmployee = connect(mapStateToProps, mapDispatchToProps)(NewEmployee);