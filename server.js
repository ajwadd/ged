const express =require('express');
var cors = require('cors')

const app = express();

app.use(cors())
const db = require("./models");
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');

  // authorized headers for preflight requests
  // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();

  app.options('*', (req, res) => {
      // allowed XHR methods  
      res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
      res.send();
  });
});



app.use(express.urlencoded({ extended: true }));
app.use(express.json());




const gedDocument = require("./routes/gedDocument");
const gedUser = require("./routes/gedUser");

app.use("/api/Document", gedDocument); 
app.use("/api/Users", gedUser); 


/*const profileRoutes = require("./routes/profile-routes");
app.use("/api/profiles", profileRoutes); 

const postRoutes = require("./routes/post-routes");
app.use("/api/posts", postRoutes); */

/* ged_DOCUMENT.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(ged_DOCUMENT);
ged_DOCUMENT.belongsTo(ged_NATURE_DOCUMENT, { constraints: true, onDelete: 'CASCADE' });
ged_NATURE_DOCUMENT.hasMany(ged_DOCUMENT);
ged_DOCUMENT.belongsTo(ged_SOUS_GROUPE_DOCUMENT, { constraints: true, onDelete: 'CASCADE' });
ged_SOUS_GROUPE_DOCUMENT.hasMany(ged_DOCUMENT); */



db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
  console.log(`listening on: http://localhost:${PORT}`);
  });
});