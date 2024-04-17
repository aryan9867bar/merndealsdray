const express = require("express");
const multer = require('multer');
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser')
const UsersModel = require("./model/Users");
const Employee = require('./model/Employee');

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const upload = multer({ dest: 'uploads/' });

mongoose.connect('mongodb://localhost:27017/self')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.post('/api/employees', upload.single('img'), async (req, res) => {
    try {
      const { name, email, mobileNo, designation, gender, course } = req.body;
      const img = req.file ? req.file.buffer : null;
  
      const employee = new Employee({
        name,
        email,
        mobileNo,
        designation,
        gender,
        course: course.split(','),
        img
    });
  
    await employee.save();

    res.status(201).send(employee);

    } catch (error) {
        console.error('Error creating employee:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Update an employee
app.put('/api/employees/:id', async (req, res) => {
    const employeeId = req.params.id;
    const updatedEmployeeData = req.body; 

    try {
      const employee = await Employee.findById(employeeId);
  
      if (!employee) {
        return res.status(404).json({ error: 'Employee not found' });
      }
  
      employee.name = updatedEmployeeData.name;
      employee.email = updatedEmployeeData.email;
      employee.mobileNo = updatedEmployeeData.mobileNo;
      employee.designation = updatedEmployeeData.designation;
      employee.gender = updatedEmployeeData.gender;
      employee.course = updatedEmployeeData.course;
      
      const updatedEmployee = await employee.save();
  
      res.json(updatedEmployee);
    } catch (error) {
      console.error('Error updating employee:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    UsersModel.findOne({email : email})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })
})

app.post("/register", (req, res) => {
    UsersModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

// Routes
const employeeRoutes = require('./routes/employeeRoutes');
app.use('/api/employees', employeeRoutes);

app.listen(3001, () => {
    console.log("server is running")
})