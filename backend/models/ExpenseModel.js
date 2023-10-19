import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    amount: {
        type: Number,
        required: true,
        trim: true,
        maxLength: 12
    },
    type: {
        type: String,
        default: "Expense"
    },
    date: {
        type: Date,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true,
        maxLength: 20
    }
}, {timestamps: true})

export default mongoose.model('Expense', ExpenseSchema);