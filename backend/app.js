import router from "./routes/transactions.js"; //routing file
import express from "express";
import cors from "cors";
import db from "./db/db.js";


//MIDDLEWARES
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());

//BEGIN ROUTING
app.use(`/api/v1`, router);

const server = () =>{
    db();

    app.listen(PORT, ()=>{
        console.log(`CURRENTLY LISTENING TO THE E6 Module: ${PORT}`);
    })
}

server();