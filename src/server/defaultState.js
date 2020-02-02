import md5 from 'md5';
export const defaultState = {
    users:[{
        id:"U1",
        name:"Dev",
        passwordHash:md5("TUPLES"),
    }],    
    employees: [{
        name: 'John',
        department: 'Finance',
        designation: 'Sales executive',
        dateofjoining: '30/10/2015',
        dateofbirth: '23/01/1987',
        gender: 'Male',
        mobile: '9629336423',
        email: 'test@test.com',
        address: 'Chicago',
        timeReport: [
            {
                day: 'Monday',
                checkin: 9,
                checkout: 17
            },
            {
                day: 'Tuesday',
                checkin: 8,
                checkout: 16
            },
            {
                day: 'Wednesday',
                checkin: 9,
                checkout: 18
            },
            {
                day: 'Thursday',
                checkin: 9,
                checkout: 18
            },
            {
                day: 'Friday',
                checkin: 10,
                checkout: 18
            }
        ]
    }]
};