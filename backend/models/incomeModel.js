import mongoose from "mongoose";

const incomeSchema = new mongoose.Schema({
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
        default: "Income"
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

export default mongoose.model('Income', incomeSchema);
