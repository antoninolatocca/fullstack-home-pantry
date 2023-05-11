import {FOOD_LIST} from "../mocks/data.js";

const getAllFoods = () => {
    return FOOD_LIST;
}

const addFood = (food) => {
    FOOD_LIST.push(food);
}

export const serviceFood = {
    getAllFoods,
    addFood
}