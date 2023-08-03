import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Student() {
  
  const [data] = useState([
    {
      name: "Sumit",
      age: 21,
      Course: "MERN",
      Batch: "October",
      Change: <Link>Edit</Link>,
    },
    {
      name: "Nitin",
      age: 24,
      Course: "MERN",
      Batch: "November",
      Change: <Link>Edit</Link>,
    },
    {
      name: "Akansha",
      age: 19,
      Course: "MERN",
      Batch: "September",
      Change: <Link>Edit</Link>,
    },
    {
      name: "Keshav",
      age: 23,
      Course: "MERN",
      Batch: "September",
      Change: <Link>Edit</Link>,
    },
    {
      name: "Keshav",
      age: 24,
      Course: "MERN",
      Batch: "October",
      Change: <Link>Edit</Link>,
    },
    {
      name: "Karan",
      age: 25,
      Course: "MERN",
      Batch: "December",
      Change: <Link>Edit</Link>,
    },
    {
      name: "Amisha",
      age: 26,
      Course: "MERN",
      Batch: "July",
      Change: <Link>Edit</Link>,
    },
    {
      name: "Shivani",
      age: 27,
      Course: "MERN",
      Batch: "November",
      Change: <Link>Edit</Link>,
    },
    {
      name: "Ankit",
      age: 28,
      Course: "MERN",
      Batch: "March",
      Change: <Link>Edit</Link>,
    },
  
  ]);

  const border={
    border: '2px solid grey',
    borderCollapse: "collapse",
  }
  return (
    <div>
      <div className="heading">
        <h1>Student Details</h1>
        <button className="button">Add New Student</button>
      </div>
      <div className="table-cont">

      <table style={border}>
        <thead>
          <tr style={border}>
            <th >name</th>
            <th >age</th>
            <th >cource</th>
            <th >Batch</th>
            <th > change</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr style={border} key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.Course}</td>
                <td>{item.Batch}</td>
                <td>{item.Change}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
          </div>
    </div>
  );
}

export default Student;
