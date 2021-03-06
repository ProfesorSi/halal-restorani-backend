module.exports = app => {

    const restorani = require("../controllers/restoran.controller.js");

    var router = require("express").Router();

    // kreiraj novi restoran
    router.post("/", restorani.create);

    // prikazi sve restorane
    router.get("/", restorani.findAll);

    // prikazi jedan restoran, pretraga po ID
    router.get("/:id", restorani.findOne);

    // edituj restoran
    router.put("/:id", restorani.update);

    // obrisi restoran
    router.delete("/:id", restorani.delete);


    app.use('/api/restorani', router);

};