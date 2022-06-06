const fs = require('fs')

fs.readFile('./files/12.txt', 'utf-8', function(err, dataStr) {
    if (err) {
        return console.log('faild reading!' + err.message);
    }
    console.log('read succesefully' + dataStr);
})