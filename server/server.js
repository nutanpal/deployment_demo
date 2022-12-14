const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));
//app.use(express.static(`${__dirname}/public))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(4000, () => console.log(`gliding on 4000`));

/////////
/*const express = require('express')
const path = require ('path')
//x//const cors = require('cors')
const app = express()
app.use(express.static('public'))
//x//app.use(cors())
//app.use(express.static(`${__dirname}/public`)) // gives the base dir add public to it .public is only folder static.

app.get('/api/cat', (req, res) => res.send('barb'))

app.listen(4000, 
    () => console.log(`server running on 4000`)
)
*/
