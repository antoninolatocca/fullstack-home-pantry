import express from "express";
import cors from "cors";
import {middlewareFood} from "./middleware/middlewareFood.js";
import {middlewareSupply} from "./middleware/middlewareSupply.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get('/food', middlewareFood.getAllFoods)
app.post('/food', middlewareFood.addFood)

app.get('/supply', middlewareSupply.getAllSupplies)
app.post('/supply', middlewareSupply.addSupply)
app.put('/supply/:id', middlewareSupply.updateSupply)
app.delete('/supply', middlewareSupply.deleteSupply)

app.listen(3000, () => {
	console.log('Server started');
})