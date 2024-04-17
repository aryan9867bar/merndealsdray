const express = require('express');
const router = express.Router();
const Employee = require('../model/Employee');

// Create Employee
router.post('/', async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).send(employee);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all Employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.send(employees);
  } catch (error) {
    res.status(500).send(error);
  }
});

//search employee
router.get("/:search", async(req, res) => {
  console.log(req.params.search);
  try {
      const employee = await Employee.find( {"firstname": req.params.search} )
      if (!employee) {
          return res.status(404).send("Employee not found!");
      }
      res.json(employee);
  } catch (error) {
      console.error(error);
      res.status(500).send(`Error updating the employee`);
  }
})

// Update Employee
router.put('/:id', async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!employee) {
      return res.status(404).send('Employee not found!');
    }
    res.send(employee);
  } catch (error) {
    res.status(400).send(error);
  }
});

// get Employee by id
router.get("/:id", async(req, res) => {
  console.log(req.params.id);
  try {
      const employee = await Employee.findById(req.params.id);
      if (!employee) {
          return res.status(404).send("Employee not found!");
      }
      res.json(employee);
  } catch (error) {
      console.error(error);
      res.status(500).send(`Error updating the employee:`)
  }
})

// Delete Employee
router.delete('/:id', async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).send("Employee not found!");
    }
    res.send("Employee deleted!");
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;