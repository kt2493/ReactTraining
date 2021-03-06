import React, { Component } from 'react';
import { render } from 'react-dom';
/**
 * In class pattern props are availble via this
 * In Functional pattern props are available as constructor parameter
 *  
 */


//Props and Functional Component:
//Master Component
const EmployeeMaster = props => {
    return (
        <div>
            <h1>Employee Details</h1>
            <EmployeeDetails details={props} />
        </div>
    );
}
//Details Component
const EmployeeDetails = (props) => {
    const { name, salary, status, skills } = props.details;
    const { city, street } = props.details.address;
    return (
        <div>
            <div>
                <span>Name : </span>
                {/**{ props.name }**/}
                {name}
            </div>
            <div>
                <span>Salary : </span>
                {/**{this.props.salary}    **/}
                {salary}

            </div>
            <div>
                <span>Working Status : </span>
                {/**{this.props.status ? "Working" : "Not Working"} **/}
                {status ? "Working" : "Not Working"}
            </div>
            <div>
                <span>Address : </span>
                <p>
                    {/**{this.props.address.street} **/}
                    {street}
                </p>

                <p>{city}</p>
            </div>
            <div>
                <h1>Skills</h1>
                <ul>
                    {
                        skills.map((skill, index) =>
                            (<li key={index} >{skill}</li>))
                    }
                </ul>
            </div>
        </div>
    );
}



const salary = 1000;
const workingStatus = true;
const address = {
    street: '10th street',
    city: 'Chennai'
};
const skills = [
    "Java",
    "Angular",
    "React",
    "MongoDB",
    "Restapi"
];

render(<EmployeeMaster
    status={workingStatus}
    name="Subramanian"
    salary={salary}
    address={address}
    skills={skills}
/>,
    root);