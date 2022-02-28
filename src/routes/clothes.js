'use strict';

const express = require('express');
const { Clothes } = require('../models/index');
const router = express.Router();

router.get('/clothes', getAll);
router.get('/clothes/:id', getOne);
router.post('/clothes', addOne);
router.put('/clothes/:id', updateOne);
router.delete('/clothes/:id', deleteOne);

async function getAll(req, res) {
    let clothes = await Clothes.findAll();
    res.json(clothes);
}

async function getOne(req, res) {
    let clothes = await Clothes.findOne({ where: { id: parseInt(req.params.id) } })
    res.json(clothes);
}

async function updateOne(req, res) {

    let clothes = Clothes.update(req.body, { where: { id: parseInt(req.params.id) } })
    res.json(clothes);
}
async function addOne(req, res) {
    let clothes = await Clothes.create(req.body);
    res.json(clothes);
}

async function deleteOne(req, res){
    let clothes = await Clothes.destroy({where:{id : parseInt(req.params.id)}});
    res.json(clothes);
}

module.exports = router;