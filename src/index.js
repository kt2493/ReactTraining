import React, {Component} from 'react';
import {render} from 'react-dom';

// class Employee extends Component{
//     render(){
//         return (
//             <div>
//                 <h1>Employee Details</h1>
//                 <div>
//                     <span>Name : </span>{this.props.name}
//                 </div>
//                 <div>
//                     <span>Age : </span>{this.props.age}
//                 </div>
//                 <div>
//                     <span>Salary : </span>{this.props.salary}
//                 </div>
//                 <div>
//                     <span>Status : </span>{this.props.status ? "Working" : "Not Working"}
//                 </div>
//                 <div>
//                     <span>Address : </span>{this.props.address.city}
//                     <span>Address : </span>{this.props.address.street}
//                 </div>
//                 <div>
//                     <h3>Skills</h3>
//                     <ul>
//                         {
//                             this.props.skills.map((skill,index) => {
//                                return <li key={index}>{skill}</li>
//                             })
//                         }
//                     </ul>
//                 </div>
//             </div>
//         );
//     }
// }

// class Employee extends Component {
//     render(){
//          //destructuring props
//         const { name, age, salary, status, skills } = this.props;
//         const {street, city} = this.props.address;
//         return (
//             <div>
//                 <h1>Employee Details</h1>
//                 <div>
//                     <span>Name : </span>{name}
//                 </div>
//                 <div>
//                     <span>Age : </span>{age}
//                 </div>
//                 <div>
//                     <span>Salary : </span>{salary}
//                 </div>
//                 <div>
//                     <span>Status : </span>{status ? "Working" : "Not Working"}
//                 </div>
//                 <div>
//                     <span>Address : </span>{city}
//                     <span>Address : </span>{street}
//                 </div>
//                 <div>
//                     <h3>Skills</h3>
//                     <ul>
//                         {
//                             skills.map((skill,index) => {
//                                return <li key={index}>{skill}</li>
//                             })
//                         }
//                     </ul>
//                 </div>
//             </div>
//         );
//     }
// }


/* Functional Component ans props */
// const Employee = (props) =>  {
const Employee = ({ name, age, salary, status, skills, address}) => {
    const { street, city } = address;
    return (
            <div>
                <h1>Employee Details</h1>
                <div>
                    <span>Name : </span>{name}
                </div>
                <div>
                    <span>Age : </span>{age}
                </div>
                <div>
                    <span>Salary : </span>{salary}
                </div>
                <div>
                    <span>Status : </span>{status ? "Working" : "Not Working"}
                </div>
                <div>
                    <span>Address : </span>{city}
                    <span>Address : </span>{street}
                </div>
                <div>
                    <h3>Skills</h3>
                    <ul>
                        {
                            skills.map((skill, index) => {
                                return <li key={index}>{skill}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
    );
}
const salary =1000;
const workingStatus = true;
const address = {
    street : 'Dhanvantri',
    city : 'indore'
}
const skills = ["Java", "Javascript", "Angular JS", "React JS", "Mongo DB"];
render(<Employee 
    name="Krithika" 
    age="20" 
    salary={salary} 
    status={workingStatus}
    address = {address}
    skills = {skills}
    />,root);