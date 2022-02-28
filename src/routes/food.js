'use strict';

const express = require('express');
const { Food } = require('../models/index');
const router = express.Router();

router.get('/food', getAll);
router.get('/food/:id', getOne);
router.post('/food', addOne);
router.put('/food/:id', updateOne);
router.delete('/food/:id', deleteOne);

async function getAll(req, res) {
    let food = await Food.findAll();
    res.json(food);
}

async function getOne(req, res) {
    let food = await Food.findOne({ where: { id: parseInt(req.params.id) } })
    res.json(food);
}

async function updateOne(req, res) {

    let food = Food.update(req.body, { where: { id: parseInt(req.params.id) } })
    res.json(food);
}
async function addOne(req, res) {
    let food = await Food.create(req.body);
    res.json(food);
}

async function deleteOne(req, res){
    let food = await Food.destroy({where:{id : parseInt(req.params.id)}});
    res.json(food);
}

module.exports = router;