const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('port', process.env.PORT || 3000); // process.env.PORT si existe un puerto que tome ese, sino que use el 3000
app.set('json spaces', 2);

//middleware 
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

//routes
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));
app.use('/api/users', require('./routes/users'))



//starting the server
app.listen(app.get('port'), () => {
    console.log(`server en port ${app.get('port')}`)
})