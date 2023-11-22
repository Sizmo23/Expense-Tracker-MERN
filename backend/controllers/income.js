import Income from "../models/incomeModel.js";


export async function addIncome(req, res) {
    const { title, amount, category, description, date } = req.body;

    try {
        if (!title || !amount || !category || !description || !date) {
            return res.status(400).json({ message: 'Error Bad. Input all stuffs' });
        }
        if (amount < 0 || typeof amount !== 'number') {
            return res.status(400).json({ message: 'Amount must be a number and more than 0' });
        }

        const income = new Income({
            title,
            amount,
            category,
            description,
            date
        });

        await income.save();
        res.status(200).json({ message: 'Working In Order!' });
    } catch (error) {
        console.error('Error adding income:', error);
        res.status(500).json({ message: 'Server error' });
    }
}


export async function getIncome(req, res) {
    try {
        const incomes = await Income.find().sort({createdAt: -1})
        res.status(200).json({message: "Working", incomes})
    } catch (error) {
        console.error('Error adding income:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

export async function editIncome(req, res){
    const { title, amount, category, description, date } = req.body;
    try {
        if (!title || !amount || !category || !description || !date) {
            return res.status(400).json({ message: 'Error Bad. Input all stuffs' });
        }
        if (amount < 0 || typeof amount !== 'number') {
            return res.status(400).json({ message: 'Amount must be a number and more than 0' });
        }
        const {id} = req.params;
        const check = await Income.findByIdAndUpdate(id, req.body);
        if(!check){
            res.status(400).json({message: "Income Not Found!"});
        }
        const new_income = await Income.findById(id);
        return res.status(200).json({
            message: "Income Successfully Updated",
            data: new_income
        })
    } catch (err) {
        console.error(`Error Updating Income: ${err}`);
        res.status(500).json({ message: 'Server error' });
    }
}

export async function deleteIncome(req, res) {
    const { id } = req.params;

    try {
        const deletedIncome = await Income.findByIdAndDelete(id);

        if (!deletedIncome) {
            return res.status(404).json({ message: 'Income not found' });
        }

        res.status(200).json({ message: 'Income deleted successfully' });
    } catch (error) {
        console.error('Error deleting income:', error);
        res.status(500).json({ message: 'Server error' });
    }
}
