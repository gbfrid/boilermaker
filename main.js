const app = require('./server');
const port = process.env.PORT || 8080;
const db = require('./server/db/database.js');


db.sync()  // sync our database
  .then(function(){
    app.listen(port, () => {
      console.log(`Now listening on port ${port}! Watch ya mouth!`)
    });
  })


