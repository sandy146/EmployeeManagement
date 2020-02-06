import { connect } from 'react-redux';
import React from 'react';
import Chart from "react-google-charts";
import filter from 'lodash/filter';
import { ConnectedNavigation } from './Navigation'

const EmployeeReport = ({employees, id})=>{
    const employee = filter(employees, { _id: id });
    const chartData = [['Days', 'Hours']];
    employee[0].timeReport.map((tiemItems) => {
        chartData.push([tiemItems.day, tiemItems.checkout - tiemItems.checkin])
    })
    return (
    <React.Fragment>
        <ConnectedNavigation />
        <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6">
                <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="Bar"
                    loader={<div>Loading Chart</div>}
                    data={chartData}
                    options={{
                        // Material design options
                        chart: {
                        title: 'Employee Week Performance',
                        subtitle: 'Working hours report for 1st Week Jan 2020',
                        },
                    }}
                    // For tests
                    rootProps={{ 'data-testid': '2' }}
                />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
                <h3>Working hours report</h3>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Days</th>
                        <th scope="col">Check In</th>
                        <th scope="col">Check Out</th>
                        <th scope="col">Total hours</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employee[0].timeReport.map(timeItems=>(
                            <tr>
                            <th scope="row">{timeItems.day}</th>
                            <td>{timeItems.checkin}:00 AM</td>
                            <td>{timeItems.checkout}:00 PM</td>
                            <td>{(timeItems.checkout - timeItems.checkin)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </React.Fragment>
);
}

const mapStateToProps = (state, ownProps)=>{
    let id = ownProps.match.params.id;
    return { employees: state.employees,
        id
    }
};

export const ConnectedEmployeeReport = connect(mapStateToProps)(EmployeeReport);
