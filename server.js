const express = require("express");
const app = express();


require("./bin/connect");
require("./bin/middlewares")(app)
require("./bin/routes")(app);

app.listen(4000, ()=>{
  console.log('servidor levantado')
})