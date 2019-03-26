// index.js

// use prod or dev credentials
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}

// include AZLyrics module
let azlyrics = require('azlyrics');
let freeze = azlyrics.getLyrics('Bladee', "7-Eleven").then((freeze) => {
         console.log(freeze);
    });;
