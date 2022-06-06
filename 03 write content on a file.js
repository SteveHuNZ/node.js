const fs = require('fs')
fs.writeFile('./files/3.txt', 'ok,william', function(err) {
    if (err) {
        return console.log('write files failed' + err.message);
    }
    console.log('files wrote successfully');
})