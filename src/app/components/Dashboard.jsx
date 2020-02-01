/**
 * The dashboard is a simple React component that contains several lists of tasks,
 * one for each group that belongs to the user.
 */

import { connect } from 'react-redux';
import React from 'react';
import { ConnectedNavigation } from './Navigation'
import { EmployeeCardDetails } from './EmployeeCard';

const Dashboard = ({employees})=>(
    <React.Fragment>
        <ConnectedNavigation/>
        <div className="row">
            {employees.map(employee=>(
                <EmployeeCardDetails key={employee._id} {...employee} className="col"/>
            ))}
        </div>
    </React.Fragment>
);

const mapStateToProps = ({groups, employees})=>({groups, employees});

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
