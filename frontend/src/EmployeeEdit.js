import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EmployeeEdit = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [designation, setDesignation] = useState('');
  const [gender, setGender] = useState('');
  const [course, setCourse] = useState([]);
  const [img, setImg] = useState(null);

  useEffect(() => {
    async function fetchEmployee() {
      try {
        const response = await axios.get(`http://localhost:3001/api/employees/${id}`);
        setEmployee(response.data);
        setName(response.data.name || '');
        setEmail(response.data.email || '');
        setMobileNo(response.data.mobileNo || '');
        setDesignation(response.data.designation || '');
        setGender(response.data.gender || '');
        setCourse(response.data.course || []);
      } catch (error) {
        console.error('Error fetching employee:', error);
      }
    }

    fetchEmployee();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Update employee data on the server
    const updatedEmployee = { name, email, mobileNo, designation, gender, course, img };
    try {
      const response = await axios.put(`http://localhost:3001/api/employees/${id}`, updatedEmployee);
      setEmployee(response.data);
      console.log('Employee updated successfully:', response.data);
      // Redirect to employee list or show success message
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  return (
    <div className="container">
      <h2>Edit Employee</h2>
      {employee && (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Mobile No:</label>
            <input type="text" className="form-control" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Designation:</label>
            <select className="form-control" value={designation} onChange={(e) => setDesignation(e.target.value)}>
              <option value="">Select</option>
              <option value="HR">HR</option>
              <option value="Manager">Manager</option>
              <option value="Sales">Sales</option>
            </select>
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <div>
              <label className="mr-3">
                <input type="radio" value="M" checked={gender === 'M'} onChange={() => setGender('M')} /> Male
              </label>
              <label>
                <input type="radio" value="F" checked={gender === 'F'} onChange={() => setGender('F')} /> Female
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>Course:</label>
            <div>
              <label className="mr-3">
                <input type="checkbox" value="MCA" checked={course.includes('MCA')} onChange={() => setCourse([...course, 'MCA'])} /> MCA
              </label>
              <label className="mr-3">
                <input type="checkbox" value="BCA" checked={course.includes('BCA')} onChange={() => setCourse([...course, 'BCA'])} /> BCA
              </label>
              <label>
                <input type="checkbox" value="BSC" checked={course.includes('BSC')} onChange={() => setCourse([...course, 'BSC'])} /> BSC
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>Image:</label>
            <input type="file" className="form-control-file" onChange={(e) => setImg(e.target.files[0])} />
          </div>
          <button type="submit" className="btn btn-primary">Update</button>
        </form>
      )}
    </div>
  );
};

export default EmployeeEdit;
