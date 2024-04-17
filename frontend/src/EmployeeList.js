import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchEmployees() {
      try {
        const response = await axios.get('http://localhost:3001/api/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    }

    fetchEmployees();
  }, [searchTerm]);


  const handleEdit = (id) => {
    navigate(`/employees/edit/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/employees/${id}`);
      setEmployees(employees.filter(employee => employee._id !== id));
      console.log('Employee deleted successfully');
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/employees?search=${searchTerm}`);
      setEmployees(response.data);
    } catch (error) {
      console.error('Error searching employees:', error);
    }
    console.log('Performing search for:', searchTerm);
  };

  return (
    <div className="container">
      <h2 className="my-4">Employee List</h2>
      <div className="row">
        <div className="col">
          <input style = {{justifyContent: 'center'}}
            type="text"
            className="form-control"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary" onClick={handleSearch}>Search</button>
        </div>
      </div>  
      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Unique Id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Designation</th>
            <th>Gender</th>
            <th>Course</th>
            <th>Create Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee._id}>
              <td>{employee._id}</td>
              <td><img src={employee.image} alt="" width="50" /></td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.mobileNo}</td>
              <td>{employee.designation}</td>
              <td>{employee.gender}</td>
              <td>{employee.course.join(', ')}</td>
              <td>{new Date(employee.createDate).toLocaleDateString()}</td>
              <td>
                <button className="btn btn-sm btn-info mr-1" onClick={() => handleEdit(employee._id)}>Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(employee._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
