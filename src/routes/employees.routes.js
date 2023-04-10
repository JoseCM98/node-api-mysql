import { Router } from "express";
import { getEmployees,createEmployee,updateEmployee,deleteEmployee,getEmployee } from "../controllers/employees.controller.js";
const router = Router()

router.get('/employees',getEmployees)

router.post('/employees',createEmployee)

router.patch('/employees/:id',updateEmployee)

router.delete('/employees/:id',deleteEmployee)

router.get('/employees/:id',getEmployee)

export default router