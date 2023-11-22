import Expense from "../models/ExpenseModel.js";

export async function addExpense(req, res) {
  const { title, amount, category, description, date } = req.body;

  const expense = Expense({
    title,
    amount,
    category,
    description,
    date,
  });

  try {
    if (!title || !amount || !category || !description || !date) {
      return res.status(400).json({ message: "Error Bad. Input all stuffs" });
    }
    if (amount < 0 || typeof amount !== "number") {
      return res
        .status(400)
        .json({ message: "Amount must be a number and more than 0" });
    }

    await expense.save();
    res.status(200).json({ message: "Working In Order!" });
  } catch (error) {
    console.error("Error adding Expense:", error);
    res.status(500).json({ message: "Server error" });
  }
}

export async function editExpense(req, res) {
  const { title, amount, category, description, date } = req.body;
  try {
    if (!title || !amount || !category || !description || !date) {
      return res.status(400).json({ message: "Error Bad. Input all stuffs" });
    }
    if (amount < 0 || typeof amount !== "number") {
      return res
        .status(400)
        .json({ message: "Amount must be a number and more than 0" });
    }
    const { id } = req.params;
    const check = await Expense.findByIdAndUpdate(id, req.body);
    if(!check)
    {
      return res.status(404).json({message:`Error! Expense Not Found!`});
    }
    const new_Expense = await Expense.findById(id);
    return res.status(200).json({
      message:"Expense Successfully Updated!",
      data: new_Expense
    })
  } catch (error) {
    console.error(`Error! ${error}`);
    return res.status(400).send({ message: error.message });
  }
}

export async function getExpense(req, res) {
  try {
    const Expenses = await Expense.find().sort({ createdAt: -1 });
    res.status(200).json({ message: "Working", Expenses });
  } catch (error) {
    console.error("Error adding Expense:", error);
    res.status(500).json({ message: "Server error" });
  }
}

export async function deleteExpense(req, res) {
  const { id } = req.params;

  try {
    const deletedExpense = await Expense.findByIdAndDelete(id);

    if (!deletedExpense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    res.status(200).json({ message: "Expense deleted successfully" });
  } catch (error) {
    console.error("Error deleting Expense:", error);
    res.status(500).json({ message: "Server error" });
  }
}
