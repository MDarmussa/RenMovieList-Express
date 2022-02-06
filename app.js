
const express = require('express')
const es6Renderer = require('express-es6-template-engine')
const app = express()
const port = 3000
const db = require('./module/db')
// console.log(db)

const indexRouter = require('./routes/index');
const showsRouter = require('./routes/shows')

// View engine setup
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

// Routes
app.use('/', indexRouter);
app.use('/shows', showsRouter);
// app.use('/', showsData);


//End Routes

app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`)
})
