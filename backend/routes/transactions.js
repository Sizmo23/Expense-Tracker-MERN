import { Router } from 'express';
import { addIncome, getIncome, deleteIncome, editIncome } from '../controllers/income.js';
import { addExpense, getExpense, deleteExpense, editExpense } from '../controllers/expense.js';

const router = Router();

router.post('/addincome', addIncome);
router.get('/getincome', getIncome);
router.put('/editincome/:id', editIncome)
router.delete('/deleteincome/:id', deleteIncome);

router.post('/addExpense', addExpense);
router.put('/editExpense/:id', editExpense);
router.get('/getExpense', getExpense);
router.delete('/deleteExpense/:id', deleteExpense);

export default router;
