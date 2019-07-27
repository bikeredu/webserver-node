const express = require('express')
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

//heroku

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    // let salida = {
    //     nombre: 'Eduardo',
    //     edad: 32,
    //     url: req.url
    // }
    //res.send(salida);
    //res.send('Hola Mundo')

    res.render('home', {
        nombre: 'eduardo teLLez'
    });
})

app.get('/about', (req, res) => {

    res.render('about');
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
})