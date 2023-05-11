import {serviceFood} from "../services/serviceFood.js";

const getAllFoods = (req, res) => {
    res.json(serviceFood.getAllFoods())
}

const addFood = (req, res) => {
    const body = req.body;
    serviceFood.addFood(body);
    res.send();
}

export const middlewareFood = {
    getAllFoods,
    addFood
}