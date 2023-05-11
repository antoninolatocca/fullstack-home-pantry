import {serviceSupply} from "../services/serviceSupply.js";

const getAllSupplies = (req, res) => {
    res.json(serviceSupply.getAllSupplies())
}

const addSupply = (req, res) => {
    const body = req.body;
    serviceSupply.addSupply(body);
    res.send();
}

const updateSupply = (req, res) => {
    const id = Number(req.body.id);
    const body = req.body;
    if(serviceSupply.updateSupply(body, id)) {
        res.send();
    } else {
        res.status(400).send();
    }
}

const deleteSupply = (req, res) => {
    const id = Number(req.body.id);
    serviceSupply.deleteSupply(id);
    res.send();
}

export const middlewareSupply = {
    getAllSupplies,
    addSupply,
    updateSupply,
    deleteSupply
}