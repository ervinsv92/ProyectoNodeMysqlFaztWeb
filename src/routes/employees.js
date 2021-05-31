const express = require('express');
const router = express.Router();
const mysqlConnection = require("../database");

router.get('/', (req, res)=>{
    mysqlConnection.query('select * from employees', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
});

router.get('/:id', (req, res)=>{
    const  {id} = req.params;
    mysqlConnection.query('select * from employees where id = ?',[id], (err, rows, fields)=>{
        if(!err){
            res.json(rows[0]);
        }else{
            console.log(err);
        }
    })
});

router.post('/', (req, res)=>{
    const  {id, name, salary} = req.body;
    const query = `
        CALL employeeAddOrEdit(?, ?, ?)
    `;
    mysqlConnection.query(query,[id, name, salary], (err, rows, fields)=>{
        if(!err){
            res.json(rows[0]);
        }else{
            console.log(err);
        }
    })
});

router.put('/:id', (req, res)=>{
    const  {name, salary} = req.body;
    const  {id} = req.params;
    const query = `
        CALL employeeAddOrEdit(?, ?, ?)
    `;
    mysqlConnection.query(query,[id, name, salary], (err, rows, fields)=>{
        if(!err){
            res.json({status:"Empleado actualizado"});
        }else{
            console.log(err);
        }
    })
});

router.delete('/:id', (req, res)=>{
    const  {id} = req.params;
    mysqlConnection.query('delete from employees where id = ?',[id], (err, rows, fields)=>{
        if(!err){
            res.json({status:"Uusario eliminado"});
        }else{
            console.log(err);
        }
    })
});

module.exports = router;