const app = require('./app.js');
const port = process.env.PORT || 8080;
const db = require('./db/database.js');


db.sync()
  .then(function(){
    app.listen(port, () => {
      console.log(`Now listening on port ${port}! Watch ya mouth!`)
    });
  })

