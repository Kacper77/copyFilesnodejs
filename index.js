/*var fs = require('fs');
var StatMode = require('stat-mode');

fs.stat('./cat.jpg', function(err, stats) {
    console.log(stats);
}); 

fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.appendFile('./tekst.txt', '\nA tak wyglądają po zapisie!', function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
    });
}); */

var fs = require('fs');
var colors = require('colors');

fs.readdir('.', function(err, files) {
    console.log(files);

    fs.writeFile('./nowepliki.txt', function(err) {
        if (err) throw err;
    });
    console.log("Skopiowane".blue);

});