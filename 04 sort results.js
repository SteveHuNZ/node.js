const fs = require('fs')
fs.readFile('./files/成绩.txt', 'utf8', function(err, dataStr) {
    if (err) {
        return console.log('failed to read the file' + err.message);

    }
    // console.log('reading file succeeded' + dataStr);
    const arrOld = dataStr.split(' ')
        // console.log(arrOld);
    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace('=', ':'))
    })
    const newStr = arrNew.join('\r\n')
        // console.log(newStr);
    fs.writeFile('./files/result.txt', newStr, function(err) {
        if (err) {
            return console.log('failed to write' + err.message);
        }
        console.log('wrote successfully');
    })

})