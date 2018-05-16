var backbone = require('backbone');
var express  = require('express');
var fs       = require('fs');

var app = express();

app.get('/', (req, res) => {
    res.send('At the root');
});
app.get('/first', (req, res) => {
    res.send('first path');
});
app.get('/second', (req, res) => {
    res.send('second path');
});
app.get('/third', (req, res) => {
    res.send('third path');
});
app.get('/movies', (req, res) => {
    let movie = fs.readFile('c:/users/sp.student/Desktop/nodes/munich/movie.js', () => {
        return;
    });
    res.send('got here');
});


app.listen(3000);