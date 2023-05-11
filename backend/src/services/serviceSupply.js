import {SUPPLY_LIST} from "../mocks/data.js";

const getAllSupplies = () => {
    return SUPPLY_LIST;
}

const addSupply = (supply) => {
    SUPPLY_LIST.push(supply);
}

const updateSupply = (supply, id) => {
    let updated = false;
    const foundSupply = SUPPLY_LIST.find(supply => supply.id === id);
    if(foundSupply) {
            const index = SUPPLY_LIST.indexOf(foundSupply);
            SUPPLY_LIST[index] = supply;
            updated = true;
    }
    return updated;
}

const deleteSupply = (id) => {
    let deleted = false;
    const foundSupply = SUPPLY_LIST.find(supply => supply.id === id);
    if(foundSupply) {
            const index = SUPPLY_LIST.indexOf(foundSupply);
            SUPPLY_LIST.splice(index, 1);
            deleted = true;
    }
    return deleted;
}

export const serviceSupply = {
    getAllSupplies,
    addSupply,
    updateSupply,
    deleteSupply
}