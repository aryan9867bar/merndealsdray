import { React } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import EmployeeList from './EmployeeList';
import EmployeeForm from './EmployeeForm';
import EmployeeEdit from './EmployeeEdit';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';


function App() {
  const handleFormSubmit = (employeeData) => {
    console.log('Form submitted with data:', employeeData);
    // Add your logic to handle the form submission data
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path="/employees" exact element={<EmployeeList/>} />
        <Route path="/employees/create" element={<EmployeeForm onSubmit={handleFormSubmit}/>} />
        <Route path="/employees/edit/:id" element={<EmployeeEdit/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App