import React from 'react';
import * as mutations from '../store/mutations';
import { connect } from 'react-redux';
import { ConnectedNavigation } from './Navigation'

const NewEmployee = ({requestCreateNewEmployee,authenticated})=>{
    return (
        <React.Fragment>
        <ConnectedNavigation/>
        <div className="card p-3 col-6">
        <h2>
            Employee Details
        </h2>

        <form onSubmit={requestCreateNewEmployee}>
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
            {authenticated == mutations.NEW_EMPLOYEE_CREATED ? <p>Employee created success fully</p> : null}
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
        dispatch(mutations.requestCreateNewEmployee(name, department, designation, dateofjoining, mobile, email, address));
    }
})

export const ConnectedNewEmployee = connect(mapStateToProps, mapDispatchToProps)(NewEmployee);