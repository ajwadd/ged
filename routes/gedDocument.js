const express = require("express");
const router = express.Router();
const db = require("../models");


router.get("/all", (req,res) => {
  db.GED_DOCUMENT.findAll({
    include: [
      {
        model: db.GED_NATURE_DOCUMENT,
        as: 'ID_NATURE_DOCUMENT'
      },
      {
        model: db.USER,
        as: 'ID_OPERATEUR_CREATION'
      }
    ]
    }).then(allDocuments => res.send(allDocuments));
});

router.post("/new", (req,res) => {
  db.GED_DOCUMENT.create({
    ID_DOCUMENT: req.body.ID_DOCUMENT,
    EXTENTION: req.body.EXTENTION,
    Upload: req.body.Upload,
    ID_NATURE_DOCUMENT: req.body.ID_NATURE_DOCUMENT,
    ID_OPERATEUR_CREATION: req.body.ID_OPERATEUR_CREATION,
    ID_SOUS_GROUPE_DOCUMENT: req.body.ID_SOUS_GROUPE_DOCUMENT,
    DATE_HEURE_AJOUT: req.body.DATE_HEURE_AJOUT,
    REF: req.body.REF


  }).then((response) => res.json(response))
  .catch((err) => res.json(err))
});

router.get('/find/:id',(req,res) =>  {
  db.GED_DOCUMENT.findAll({
    where: { ID_DOCUMENT: req.params.id },
  }).then((response) => res.json([response]));
});

// edit a todo
  router.put('/edit',(req,res) => {
  db.GED_DOCUMENT.update(
   {
    EXTENTION: req.body.EXTENTION,
    Upload: req.body.Upload,
    ID_NATURE_DOCUMENT: req.body.ID_NATURE_DOCUMENT,
    ID_OPERATEUR_CREATION: req.body.ID_OPERATEUR_CREATION,
    ID_SOUS_GROUPE_DOCUMENT: req.body.ID_SOUS_GROUPE_DOCUMENT,
    DATE_HEURE_AJOUT: req.body.DATE_HEURE_AJOUT,
    REF: req.body.REF
   },
   {
    where: { ID_DOCUMENT : req.body.ID_DOCUMENT }
   }).then((response) => res.json([response]));
});




// delete todo
router.delete('/delete/:id', (req,res) => {
   db.GED_DOCUMENT.destroy({
     where: {
      ID_DOCUMENT: req.params.id
     }
   }).then(() =>res.send("success"));
})



module.exports = router;