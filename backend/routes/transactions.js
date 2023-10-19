import { Router } from 'express';
import { addIncome, getIncome, deleteIncome } from '../controllers/income.js';
import { addExpense, getExpense, deleteExpense } from '../controllers/expense.js';

const router = Router();

router.post('/addincome', addIncome);
router.get('/getincome', getIncome);
router.delete('/deleteincome/:id', deleteIncome);

router.post('/addExpense', addExpense);
router.get('/getExpense', getExpense);
router.delete('/deleteExpense/:id', deleteExpense);

export default router;
