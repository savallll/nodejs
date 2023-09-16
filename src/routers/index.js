const siteRouter = require('./site')

function Router(app){
    app.use('/',siteRouter)
}

module.exports = Router;