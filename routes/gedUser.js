const express = require("express");
const router = express.Router();
const cors =require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


const db = require("../models");

router.use(cors())

process.env.SECRET_KEY = 'secret'


//REGISTER
router.post('/register', (req,res) => {
  const today = new Date()
  const userData = {
    ID_OPERATEUR_CREATION: req.body.ID_OPERATEUR_CREATION,
    NOM : req.body.NOM, 
    PRENOM : req.body.PRENOM,   
    EMAIL : req.body.EMAIL,   
    PASSWORD : req.body.PASSWORD,    
    CREATED : today  
  }
    db.USER.findOne({
    where: {
      EMAIL: req.body.EMAIL
    }
  })
    .then(user => {
      if(!user){
        const hash = bcrypt.hashSync(userData.PASSWORD, 10)
        userData.PASSWORD = hash
        db.USER.create(userData)
        .then(user => {
          let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.json({ token: token })
        })
        .catch(err => {
          res.send('error: '+ err)
        })
      } else {
        res.json({ error: 'User already exists' })
      }
    }) 
        .catch(err => {
           res.send('error' + err)
    })
})

//LOGIN
router.post('/login', (req,res) => {
  db.USER.findOne({
    where :{
      EMAIL: req.body.EMAIL
    }
  })
  .then(user => {
    if (bcrypt.compareSync(req.body.PASSWORD,user.PASSWORD)) {
      let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
        expiresIn : 1440
      })
      res.json({ token : token })
    } else {
      res.send('User does not exist')
    }
  })
  .catch(err => {
    res.send('error: ' + err)
  })
})

//PROFILE
router.get('/profile',(req,res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  db.USER.findOne({
    where : {
      ID_OPERATEUR_CREATION : decoded.ID_OPERATEUR_CREATION   
     }
  })
  .then(user => {
    if (user) {
      res.json(user)
    } else {
      res.send('User does not exist')
    }
  })
  .catch(err => {
    res.send('error :' + err)
  })
}) 


module.exports = router;






