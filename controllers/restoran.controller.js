const db = require("../models");
const Restoran = db.restorani;


// kreiraj i sacuvaj novi restoran
exports.create = (req, res) => {

    // validacija
    if (!req.body) {
        res.status(400).send({
            message: "Sadrzaj ne moze biti prazan!"
        });
        return;
    }

    // Kreiraj restoran
    const restoran = new Restoran({
        naziv: req.body.naziv,
        opis: req.body.opis,
        grad: req.body.grad,
        mjesto: req.body.mjesto,
        lokacija: req.body.lokacija,
        telefon: req.body.telefon,
        muzika: req.body.muzika,
        crveno_meso: req.body.crveno_meso,
        janjetina: req.body.janjetina,
        piletina: req.body.piletina,
    });

    // Sacuvaj restoran u bazu
    restoran.save(restoran)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

// prikazi sve restorane (potencijalno po nekom uslovu, tipa trazi restorane po nazivu)
exports.findAll = (req, res) => {
    const title = req.query.title;
   // var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  
    Restoran.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };


  // Prikazi jedan restoran, pretraga po ID. Ukoliko hocemo otvorit detalje restorana
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Restoran.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Nije pronadjen restoran sa id= " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Greska prilikom prikazivanja restorana" + id });
      });
  };



  // Edituj restoran
  exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Restoran mora imati podatke da bi se izmijenio!"
      });
    }
  
    const id = req.params.id;
  
    Restoran.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Ne moze izmijeniti restoran sa id=${id}. Mozda ne postoji taj restoran!`
          });
        } else res.send({ message: "Restoran uspjesno izmijenjen" });
      })
      .catch(err => {
        res.status(500).send({
          message: "Greska prilikom izmjene restorana sa id=" + id
        });
      });
  };

  // Izbrisi restoran
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Restoran.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Ne moze se izbrisati restoran sa id=${id}. Mozda nema tog restorana!`
          });
        } else {
          res.send({
            message: "Restoran uspjesno obrisan!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Nije moguce izbrisati restoran sa id=" + id
        });
      });
  };