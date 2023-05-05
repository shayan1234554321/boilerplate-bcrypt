'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';

const bcrypt = require('bcrypt')

//START_ASYNC -do not remove notes, place code between correct pair of notes.

const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds)

const result = bcrypt.compareSync(myPlaintextPassword, hash)

console.log(hash)
console.log(result)



//END_ASYNC

//START_SYNC



//END_SYNC






























app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running at port ${process.env.PORT || 3000}`)
});
