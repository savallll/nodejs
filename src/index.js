const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const path = require('path');
const route = require('./routers/index');
const db = require('./config/db/index');
const methodOverride = require('method-override')


//template engine
app.engine('hbs',hbs.engine({
    extname: '.hbs',
    helpers:{
        sum:(a,b)=>{return a+b }
    }
}));
app.set('view engine','hbs');
app.set('views', path.join(__dirname,'resources','views'));

//post method
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

//method override
app.use(methodOverride('_method'))

route(app)

// connect(db);
db.connect();

app.listen(3000);